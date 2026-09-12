import React, { useState, useEffect, useCallback, useRef } from 'react';
import { SLIDES_DATA } from './data/slidesData';
import { LanguageMode } from './types';
import { sound, SpeechNarrator } from './utils/audio';
import { Navbar } from './components/Navbar';
import { SlideRenderer } from './components/SlideRenderer';
import { SlideNav } from './components/SlideNav';
import { SlideThumbnails } from './components/SlideThumbnails';
import { ChapterSelectorModal } from './components/ChapterSelectorModal';
import { GoogleSlidesModal } from './components/GoogleSlidesModal';
import { PrintModal } from './components/PrintModal';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [langMode, setLangMode] = useState<LanguageMode>('bilingual');
  const [isAutoplay, setIsAutoplay] = useState(false);
  const [showTeacherNotes, setShowTeacherNotes] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isThumbnailsOpen, setIsThumbnailsOpen] = useState(false);
  const [isChapterSelectorOpen, setIsChapterSelectorOpen] = useState(false);
  const [isGoogleSlidesModalOpen, setIsGoogleSlidesModalOpen] = useState(false);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const currentSlide = SLIDES_DATA[currentSlideIndex];

  // Navigation callbacks
  const handlePrevSlide = useCallback(() => {
    if (currentSlideIndex > 0) {
      SpeechNarrator.stop();
      setIsSpeaking(false);
      setCurrentSlideIndex(prev => prev - 1);
    }
  }, [currentSlideIndex]);

  const handleNextSlide = useCallback(() => {
    if (currentSlideIndex < SLIDES_DATA.length - 1) {
      SpeechNarrator.stop();
      setIsSpeaking(false);
      setCurrentSlideIndex(prev => prev + 1);
    } else {
      setIsAutoplay(false);
    }
  }, [currentSlideIndex]);

  // Read aloud narration handler
  const handleNarrateSlide = useCallback(() => {
    if (isSpeaking) {
      SpeechNarrator.stop();
      setIsSpeaking(false);
      return;
    }

    const slide = SLIDES_DATA[currentSlideIndex];
    let speechText = '';

    if (langMode === 'kn') {
      speechText = `${slide.titleKn}. ${slide.subtitleKn || ''}. `;
      if (slide.bulletsKn) {
        speechText += slide.bulletsKn.join('. ');
      } else if (slide.quoteKn) {
        speechText += slide.quoteKn;
      }
      setIsSpeaking(true);
      SpeechNarrator.speak(speechText, 'kn', () => setIsSpeaking(false));
    } else {
      // English or bilingual reading
      speechText = `${slide.titleEn}. ${slide.subtitleEn || ''}. `;
      if (slide.bulletsEn) {
        speechText += slide.bulletsEn.join('. ');
      } else if (slide.quoteEn) {
        speechText += slide.quoteEn;
      }
      setIsSpeaking(true);
      SpeechNarrator.speak(speechText, 'en', () => setIsSpeaking(false));
    }
  }, [currentSlideIndex, langMode, isSpeaking]);

  // Autoplay timer
  useEffect(() => {
    let timer: any = null;
    if (isAutoplay) {
      timer = setInterval(() => {
        handleNextSlide();
      }, 8000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isAutoplay, handleNextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Avoid triggering when user is typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        sound.playPop();
        handleNextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        sound.playPop();
        handlePrevSlide();
      } else if (e.key.toLowerCase() === 'f') {
        toggleFullscreen();
      } else if (e.key.toLowerCase() === 'n') {
        handleNarrateSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNextSlide, handlePrevSlide, handleNarrateSlide]);

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full h-screen flex flex-col bg-slate-950 text-slate-100 overflow-hidden font-sans selection:bg-emerald-500 selection:text-slate-950"
    >
      {/* Top Navigation */}
      <Navbar
        currentSlideIndex={currentSlideIndex}
        totalSlides={SLIDES_DATA.length}
        currentSlide={currentSlide}
        langMode={langMode}
        setLangMode={setLangMode}
        isAutoplay={isAutoplay}
        setIsAutoplay={setIsAutoplay}
        showTeacherNotes={showTeacherNotes}
        setShowTeacherNotes={setShowTeacherNotes}
        isFullscreen={isFullscreen}
        toggleFullscreen={toggleFullscreen}
        isSpeaking={isSpeaking}
        setIsSpeaking={setIsSpeaking}
        onOpenChapterSelector={() => setIsChapterSelectorOpen(true)}
        onOpenGoogleSlidesModal={() => setIsGoogleSlidesModalOpen(true)}
        onOpenPrintModal={() => setIsPrintModalOpen(true)}
        onNarrateSlide={handleNarrateSlide}
      />

      {/* Main Slide Interactive Viewport */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        <SlideRenderer
          slide={currentSlide}
          langMode={langMode}
          showTeacherNotes={showTeacherNotes}
          totalSlides={SLIDES_DATA.length}
          onOpenGoogleSlidesModal={() => setIsGoogleSlidesModalOpen(true)}
        />
      </main>

      {/* Bottom Controls */}
      <SlideNav
        currentIndex={currentSlideIndex}
        total={SLIDES_DATA.length}
        onPrev={handlePrevSlide}
        onNext={handleNextSlide}
        onOpenThumbnails={() => setIsThumbnailsOpen(true)}
        onOpenChapterSelector={() => setIsChapterSelectorOpen(true)}
      />

      {/* Chapter & Unit Selector (Table of Contents) Modal */}
      <ChapterSelectorModal
        isOpen={isChapterSelectorOpen}
        onClose={() => setIsChapterSelectorOpen(false)}
        currentSlideIndex={currentSlideIndex}
        onSelectSlideIndex={(idx) => {
          SpeechNarrator.stop();
          setIsSpeaking(false);
          setCurrentSlideIndex(idx);
        }}
      />

      {/* Slide Thumbnails Drawer */}
      <SlideThumbnails
        isOpen={isThumbnailsOpen}
        onClose={() => setIsThumbnailsOpen(false)}
        currentIndex={currentSlideIndex}
        onSelectSlide={(idx) => {
          SpeechNarrator.stop();
          setIsSpeaking(false);
          setCurrentSlideIndex(idx);
        }}
      />

      {/* Google Slides Export Dialog */}
      <GoogleSlidesModal
        isOpen={isGoogleSlidesModalOpen}
        onClose={() => setIsGoogleSlidesModalOpen(false)}
      />

      {/* Printable Classroom Worksheets Modal */}
      <PrintModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
      />
    </div>
  );
}
