import { SlideContent } from '../types';
import { SLIDES_UNIT_1 } from './slidesUnit1';
import { SLIDES_UNIT_2 } from './slidesUnit2';
import { SLIDES_UNIT_3_4 } from './slidesUnit3_4';
import { SLIDES_UNIT_5_6 } from './slidesUnit5_6';
import { SLIDES_UNIT_7_8_9 } from './slidesUnit7_8_9';
import { SLIDES_UNIT_10_11 } from './slidesUnit10_11';
import { UNITS_DATA, ALL_CHAPTERS } from './chaptersData';

// Master list of all slides for the entire textbook
export const MASTER_SLIDES_DATA: SlideContent[] = [
  ...SLIDES_UNIT_1,
  ...SLIDES_UNIT_2,
  ...SLIDES_UNIT_3_4,
  ...SLIDES_UNIT_5_6,
  ...SLIDES_UNIT_7_8_9,
  ...SLIDES_UNIT_10_11
];

// Re-index all slides sequentially
export const SLIDES_DATA: SlideContent[] = MASTER_SLIDES_DATA.map((slide, idx) => ({
  ...slide,
  slideNumber: idx + 1
}));

// Populate chapter slide IDs
ALL_CHAPTERS.forEach(ch => {
  ch.slideIds = SLIDES_DATA.filter(s => s.chapterId === ch.id).map(s => s.id);
});

export function getSlidesForChapter(chapterId: string): SlideContent[] {
  if (chapterId === 'all') return SLIDES_DATA;
  const filtered = SLIDES_DATA.filter(s => s.chapterId === chapterId);
  return filtered.length > 0 ? filtered : SLIDES_DATA;
}

export function getSlidesForUnit(unitId: string): SlideContent[] {
  if (unitId === 'all') return SLIDES_DATA;
  const unit = UNITS_DATA.find(u => u.id === unitId);
  if (!unit) return SLIDES_DATA;
  const chapterIds = unit.chapters.map(c => c.id);
  return SLIDES_DATA.filter(s => chapterIds.includes(s.chapterId));
}

export { UNITS_DATA, ALL_CHAPTERS };
