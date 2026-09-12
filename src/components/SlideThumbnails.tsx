import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, Filter } from 'lucide-react';
import { SLIDES_DATA } from '../data/slidesData';
import { SlideContent } from '../types';
import { sound } from '../utils/audio';

interface SlideThumbnailsProps {
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
  onSelectSlide: (index: number) => void;
  slides?: SlideContent[];
}

export const SlideThumbnails: React.FC<SlideThumbnailsProps> = ({
  isOpen,
  onClose,
  currentIndex,
  onSelectSlide,
  slides
}) => {
  const activeSlides = slides && slides.length > 0 ? slides : SLIDES_DATA;
  const [unitFilter, setUnitFilter] = useState<string>('all');

  if (!isOpen) return null;

  const getSlideUnitId = (slide: SlideContent): string => {
    if (slide.unitId) return slide.unitId;
    const match = slide.chapterId?.match(/^ch(\d+)/);
    return match ? `unit-${match[1]}` : 'unit-2';
  };

  // Extract unique units
  const units: string[] = Array.from(new Set(activeSlides.map(s => getSlideUnitId(s)))).filter((id): id is string => Boolean(id));

  const filteredSlidesWithIndex = activeSlides.map((slide, originalIndex) => ({
    slide,
    originalIndex
  })).filter(({ slide }) => {
    if (unitFilter === 'all') return true;
    return getSlideUnitId(slide) === unitFilter;
  });

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex flex-col justify-end animate-in fade-in duration-200">
      <div className="w-full max-h-[85vh] bg-slate-900 border-t border-slate-700 rounded-t-3xl p-5 sm:p-6 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Textbook Slide Thumbnails ({activeSlides.length} Slides)</span>
              <span className="text-slate-400 font-normal text-xs sm:text-sm font-kannada">| ಎಲ್ಲಾ ಸ್ಲೈಡ್‌ಗಳು</span>
            </h3>
            <p className="text-xs text-slate-400">Class 7 Value Education & Physical Activity Book • Quick Slide Selector</p>
          </div>
          <button
            onClick={() => { sound.playPop(); onClose(); }}
            className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Unit Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-2 scrollbar-none text-xs">
          <span className="text-slate-500 text-[11px] flex items-center gap-1 pr-1 shrink-0">
            <Filter className="w-3 h-3" /> Filter:
          </span>
          <button
            onClick={() => { sound.playPop(); setUnitFilter('all'); }}
            className={`px-2.5 py-1 rounded-lg font-semibold whitespace-nowrap transition-all ${
              unitFilter === 'all'
                ? 'bg-emerald-600 text-white shadow'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            All ({activeSlides.length})
          </button>
          {units.map(uId => {
            const count = activeSlides.filter(s => getSlideUnitId(s) === uId).length;
            const unitName = uId.replace('unit-', 'Unit ');
            return (
              <button
                key={uId}
                onClick={() => { sound.playPop(); setUnitFilter(uId); }}
                className={`px-2.5 py-1 rounded-lg whitespace-nowrap transition-all text-[11px] ${
                  unitFilter === uId
                    ? 'bg-emerald-600 text-white font-bold shadow'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {unitName} ({count})
              </button>
            );
          })}
        </div>

        {/* Grid of Thumbnails */}
        <div className="overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2.5 pr-2 pb-4">
          {filteredSlidesWithIndex.map(({ slide, originalIndex }) => {
            const isCurrent = originalIndex === currentIndex;
            return (
              <button
                key={slide.id}
                id={`thumb-slide-${originalIndex + 1}`}
                onClick={() => {
                  sound.playPop();
                  onSelectSlide(originalIndex);
                  onClose();
                }}
                className={`relative flex flex-col text-left p-2.5 rounded-xl border transition-all group ${
                  isCurrent
                    ? 'bg-emerald-950/60 border-emerald-400 ring-2 ring-emerald-500/30 shadow-lg scale-[1.02]'
                    : 'bg-slate-800/80 border-slate-700 hover:bg-slate-800 hover:border-slate-500'
                }`}
              >
                {/* Badge Number */}
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-black px-1.5 py-0.5 rounded-md ${
                    isCurrent ? 'bg-emerald-500 text-slate-950' : 'bg-slate-700 text-slate-300'
                  }`}>
                    #{slide.slideNumber}
                  </span>
                  {isCurrent && <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />}
                </div>

                {/* English Title */}
                <h4 className="text-xs font-bold text-slate-200 line-clamp-1 group-hover:text-emerald-300 transition-colors">
                  {slide.titleEn}
                </h4>

                {/* Kannada Title */}
                <h5 className="text-[11px] font-kannada text-amber-300/90 line-clamp-1 mt-0.5">
                  {slide.titleKn}
                </h5>

                {/* Category tag */}
                <span className="text-[9px] text-slate-400 mt-2 truncate">
                  {slide.categoryEn.split('•')[0]}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
