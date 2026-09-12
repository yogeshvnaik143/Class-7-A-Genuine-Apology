import React from 'react';
import { ChevronLeft, ChevronRight, LayoutGrid, BookOpen, Home } from 'lucide-react';
import { sound } from '../utils/audio';

interface SlideNavProps {
  currentIndex: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onOpenThumbnails: () => void;
  onOpenChapterSelector?: () => void;
  onGoHome?: () => void;
  onNextUnit?: () => void;
  onOpenCompletionNote?: () => void;
  hasNextUnit?: boolean;
}

export const SlideNav: React.FC<SlideNavProps> = ({
  currentIndex,
  total,
  onPrev,
  onNext,
  onOpenThumbnails,
  onOpenChapterSelector,
  onGoHome,
  onNextUnit,
  onOpenCompletionNote,
  hasNextUnit = true,
}) => {
  const progressPercent = ((currentIndex + 1) / total) * 100;
  const isLastSlide = currentIndex === total - 1;

  return (
    <footer className="w-full bg-slate-900/90 backdrop-blur-md border-t border-slate-800 px-3 sm:px-4 py-2 flex flex-col gap-1.5 z-30 select-none">
      {/* Top micro progress bar */}
      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
        <div 
          className="bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 h-full transition-all duration-300 rounded-full"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400">
        {/* Thumbnails & TOC triggers */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {onGoHome && (
            <button
              id="go-home-nav-btn"
              onClick={() => { sound.playPop(); onGoHome(); }}
              className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-500/15 text-amber-300 border border-amber-500/30 hover:bg-amber-500/25 transition-colors font-semibold"
              title="Return to Unit Selection Menu (ಮುಖಪುಟ)"
            >
              <Home className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Units Menu</span>
              <span>ಮುಖಪುಟ</span>
            </button>
          )}

          {onOpenChapterSelector && (
            <button
              id="open-toc-nav-btn"
              onClick={() => { sound.playPop(); onOpenChapterSelector(); }}
              className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-900/80 transition-colors font-semibold"
              title="Table of Contents (ಪರಿವಿಡಿ)"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">11 Units</span>
              <span>ಪರಿವಿಡಿ</span>
            </button>
          )}

          <button
            id="open-thumbnails-btn"
            onClick={() => { sound.playPop(); onOpenThumbnails(); }}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors font-medium"
            title="View all slides grid"
          >
            <LayoutGrid className="w-3.5 h-3.5 text-emerald-400" />
            <span>Slide {currentIndex + 1} / {total}</span>
          </button>
          <span className="hidden lg:inline text-slate-500 text-[11px]">
            [←] Prev | [→] / [Space] Next
          </span>
        </div>

        {/* Center Progress Indicator */}
        <div className="hidden sm:flex items-center gap-1 max-w-[280px] overflow-hidden">
          {total <= 25 ? (
            Array.from({ length: total }).map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all ${
                  idx === currentIndex
                    ? 'w-5 bg-emerald-400'
                    : idx < currentIndex
                    ? 'w-1 bg-emerald-600/70'
                    : 'w-1 bg-slate-700'
                }`}
              />
            ))
          ) : (
            <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
              {Math.round(progressPercent)}% Completed
            </span>
          )}
        </div>

        {/* Prev / Next & Next Unit buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            id="prev-slide-btn"
            disabled={currentIndex === 0}
            onClick={() => { sound.playPop(); onPrev(); }}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg border font-semibold transition-all ${
              currentIndex === 0
                ? 'opacity-40 cursor-not-allowed bg-slate-800/40 border-slate-800 text-slate-500'
                : 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white active:scale-95'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous</span>
          </button>

          <button
            id="next-slide-btn"
            disabled={isLastSlide}
            onClick={() => { sound.playPop(); onNext(); }}
            className={`flex items-center gap-1 px-3.5 py-1.5 rounded-lg border font-semibold transition-all ${
              isLastSlide
                ? 'opacity-40 cursor-not-allowed bg-slate-800/40 border-slate-800 text-slate-500'
                : 'bg-emerald-600 border-emerald-500 text-white shadow-md hover:bg-emerald-500 active:scale-95'
            }`}
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Unit Note Button on Last Slide */}
          {isLastSlide && onOpenCompletionNote && (
            <button
              id="view-unit-note-nav-btn"
              onClick={() => {
                sound.playChime();
                onOpenCompletionNote();
              }}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 border border-emerald-500/50 font-bold transition-all shadow"
              title="View Beautiful Unit Note (ಶಿಕ್ಷಕರ ಸಂದೇಶ)"
            >
              <span>Note</span>
              <span className="font-kannada text-[11px] hidden md:inline">ಸಂದೇಶ</span>
            </button>
          )}

          {/* Next Unit Button */}
          {onNextUnit && (
            <button
              id="next-unit-nav-btn"
              onClick={() => {
                sound.playChime();
                onNextUnit();
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-bold text-xs transition-all shadow-md active:scale-95 ${
                isLastSlide
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 border-amber-400 text-slate-950 animate-pulse hover:from-amber-400 hover:to-amber-500'
                  : 'bg-amber-500/20 border-amber-500/40 text-amber-300 hover:bg-amber-500/30'
              }`}
              title="Proceed to Next Unit (ಮುಂದಿನ ಘಟಕ)"
            >
              <span>{hasNextUnit ? 'Next Unit' : 'Finish Units'}</span>
              <span className="font-kannada text-[11px] hidden md:inline">
                {hasNextUnit ? 'ಮುಂದಿನ ಘಟಕ' : 'ಮುಕ್ತಾಯ'}
              </span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};
