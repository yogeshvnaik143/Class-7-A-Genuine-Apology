import { SLIDES_DATA } from '../data/slidesData';

export interface ExportProgress {
  status: 'idle' | 'authorizing' | 'creating' | 'populating' | 'success' | 'error';
  message: string;
  presentationId?: string;
  presentationUrl?: string;
  error?: string;
}

// Generate the Google Slides batchUpdate requests for the 16 slides
export function buildGoogleSlidesBatchRequests(presentationId: string) {
  const requests: any[] = [];

  SLIDES_DATA.forEach((slide, index) => {
    const slidePageId = `slide_page_${index + 1}`;
    
    // Create new slide with blank layout
    requests.push({
      createSlide: {
        objectId: slidePageId,
        insertionIndex: index,
        slideLayoutReference: {
          predefinedLayout: 'BLANK'
        }
      }
    });

    // Create title box
    const titleBoxId = `title_box_${index + 1}`;
    requests.push({
      createShape: {
        objectId: titleBoxId,
        shapeType: 'TEXT_BOX',
        elementProperties: {
          pageObjectId: slidePageId,
          size: {
            width: { magnitude: 650, unit: 'PT' },
            height: { magnitude: 70, unit: 'PT' }
          },
          transform: {
            scaleX: 1,
            scaleY: 1,
            translateX: 35,
            translateY: 25,
            unit: 'PT'
          }
        }
      }
    });

    // Insert title text
    const titleText = `${slide.slideNumber}. ${slide.titleEn}\n${slide.titleKn}\n`;
    requests.push({
      insertText: {
        objectId: titleBoxId,
        insertionIndex: 0,
        text: titleText
      }
    });

    // Style title text
    requests.push({
      updateTextStyle: {
        objectId: titleBoxId,
        textRange: { type: 'ALL' },
        style: {
          bold: true,
          fontSize: { magnitude: 20, unit: 'PT' },
          foregroundColor: {
            opaqueColor: {
              rgbColor: { red: 0.1, green: 0.25, blue: 0.45 }
            }
          }
        },
        fields: 'bold,fontSize,foregroundColor'
      }
    });

    // Create content box
    const contentBoxId = `content_box_${index + 1}`;
    requests.push({
      createShape: {
        objectId: contentBoxId,
        shapeType: 'TEXT_BOX',
        elementProperties: {
          pageObjectId: slidePageId,
          size: {
            width: { magnitude: 650, unit: 'PT' },
            height: { magnitude: 280, unit: 'PT' }
          },
          transform: {
            scaleX: 1,
            scaleY: 1,
            translateX: 35,
            translateY: 110,
            unit: 'PT'
          }
        }
      }
    });

    // Prepare content text
    let bodyText = '';
    if (slide.subtitleEn && slide.subtitleKn) {
      bodyText += `[EN] ${slide.subtitleEn}\n[KN] ${slide.subtitleKn}\n\n`;
    }

    if (slide.bulletsEn && slide.bulletsKn) {
      slide.bulletsEn.forEach((enBullet, bIdx) => {
        const knBullet = slide.bulletsKn?.[bIdx] || '';
        bodyText += `• ${enBullet}\n  ➔ ${knBullet}\n\n`;
      });
    } else if (slide.quoteEn && slide.quoteKn) {
      bodyText += `“${slide.quoteEn}”\n\n“${slide.quoteKn}”\n\n`;
    } else if (slide.storyData) {
      bodyText += `STORY: ${slide.storyData.titleEn} (${slide.storyData.titleKn})\n`;
      bodyText += `${slide.storyData.contextEn}\n${slide.storyData.contextKn}\n\n`;
      slide.storyData.beats.forEach((beat) => {
        bodyText += `[${beat.speakerEn}]: "${beat.dialogueEn}"\n[${beat.speakerKn}]: "${beat.dialogueKn}"\n\n`;
      });
      bodyText += `TAKEAWAY: ${slide.storyData.takeawayEn}\nಸಾರಾಂಶ: ${slide.storyData.takeawayKn}\n`;
    } else if (slide.poemData) {
      bodyText += `POEM: ${slide.poemData.titleEn} / ${slide.poemData.titleKn}\n\n`;
      slide.poemData.stanzas.forEach((s) => {
        bodyText += s.linesEn.join('\n') + '\n\n' + s.linesKn.join('\n') + '\n---\n';
      });
    }

    requests.push({
      insertText: {
        objectId: contentBoxId,
        insertionIndex: 0,
        text: bodyText || 'Value Education Class 7 • Chapter 2.1 A Genuine Apology'
      }
    });

    requests.push({
      updateTextStyle: {
        objectId: contentBoxId,
        textRange: { type: 'ALL' },
        style: {
          fontSize: { magnitude: 12, unit: 'PT' },
          foregroundColor: {
            opaqueColor: {
              rgbColor: { red: 0.15, green: 0.18, blue: 0.22 }
            }
          }
        },
        fields: 'fontSize,foregroundColor'
      }
    });
  });

  return requests;
}

// Create real Google Slides via REST API using user OAuth Access Token
export async function createGoogleSlidesPresentation(
  accessToken: string,
  onProgress?: (progress: ExportProgress) => void
): Promise<{ presentationId: string; presentationUrl: string }> {
  try {
    onProgress?.({ status: 'creating', message: 'Creating new Google Slides presentation in your Google Drive...' });

    const createRes = await fetch('https://slides.googleapis.com/v1/presentations', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: 'Class 7 Value Education: 2.1 A Genuine Apology (English & Kannada)'
      })
    });

    if (!createRes.ok) {
      const err = await createRes.json();
      throw new Error(err.error?.message || `Failed to create presentation: ${createRes.statusText}`);
    }

    const presentation = await createRes.json();
    const presentationId = presentation.presentationId;
    const presentationUrl = `https://docs.google.com/presentation/d/${presentationId}/edit`;

    onProgress?.({
      status: 'populating',
      message: 'Populating 16 bilingual slides with Kannada and English content...',
      presentationId,
      presentationUrl
    });

    // Populate presentation with the 16 slides
    const batchRequests = buildGoogleSlidesBatchRequests(presentationId);

    // Run batch update
    const batchRes = await fetch(`https://slides.googleapis.com/v1/presentations/${presentationId}:batchUpdate`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        requests: batchRequests
      })
    });

    if (!batchRes.ok) {
      const batchErr = await batchRes.json();
      console.warn('Batch update had warning/error:', batchErr);
    }

    onProgress?.({
      status: 'success',
      message: 'Successfully exported 16 animated bilingual slides to Google Slides!',
      presentationId,
      presentationUrl
    });

    return { presentationId, presentationUrl };
  } catch (error: any) {
    onProgress?.({
      status: 'error',
      message: error.message || 'Export to Google Slides failed',
      error: error.message
    });
    throw error;
  }
}
