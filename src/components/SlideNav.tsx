import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, LayoutGrid, BookOpen, Home, Sparkles } from 'lucide-react';
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
    <footer className="w-full bg-slate-900/95 backdrop-blur-md border-t border-slate-800 px-2 sm:px-4 py-2 flex flex-col gap-1.5 z-30 select-none shrink-0">
      {/* Top animated micro progress bar */}
      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
        <motion.div 
          className="bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 h-full rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 gap-1 sm:gap-2">
        
        {/* Left Actions: Home, TOC, Thumbnails */}
        <div className="flex items-center gap-1 sm:gap-2">
          {onGoHome && (
            <motion.button
              whileTap={{ scale: 0.92 }}
              id="go-home-nav-btn"
              onClick={() => { sound.playPop(); onGoHome(); }}
              className="min-h-[44px] hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-amber-500/15 text-amber-300 border border-amber-500/30 hover:bg-amber-500/25 transition-colors font-semibold"
              title="Return to Unit Selection Menu (ಮುಖಪುಟ)"
            >
              <Home className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Units</span>
              <span className="font-kannada text-[11px]">ಮುಖಪುಟ</span>
            </motion.button>
          )}

          {onOpenChapterSelector && (
            <motion.button
              whileTap={{ scale: 0.92 }}
              id="open-toc-nav-btn"
              onClick={() => { sound.playPop(); onOpenChapterSelector(); }}
              className="min-h-[44px] hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-900/80 transition-colors font-semibold"
              title="Table of Contents (ಪರಿವಿಡಿ)"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">11 Units</span>
              <span>ಪರಿವಿಡಿ</span>
            </motion.button>
          )}

          <motion.button
            whileTap={{ scale: 0.92 }}
            id="open-thumbnails-btn"
            onClick={() => { sound.playPop(); onOpenThumbnails(); }}
            className="min-h-[44px] flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors font-medium"
            title="View all slides grid"
          >
            <LayoutGrid className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="whitespace-nowrap font-mono text-[11px] sm:text-xs">
              {currentIndex + 1} / {total}
            </span>
          </motion.button>

          <span className="hidden xl:inline text-slate-500 text-[11px]">
            [←] Prev | [→] Next
          </span>
        </div>

        {/* Center Progress Indicator (Desktop & Tablets) */}
        <div className="hidden md:flex items-center gap-1 max-w-[280px] overflow-hidden">
          {total <= 25 ? (
            Array.from({ length: total }).map((_, idx) => (
              <motion.div
                key={idx}
                animate={{
                  width: idx === currentIndex ? 20 : 4,
                  backgroundColor: idx === currentIndex ? '#34d399' : idx < currentIndex ? '#059669' : '#334155'
                }}
                transition={{ duration: 0.2 }}
                className="h-1.5 rounded-full"
              />
            ))
          ) : (
            <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
              {Math.round(progressPercent)}%
            </span>
          )}
        </div>

        {/* Right Actions: Previous, Next & Next Unit Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Previous Slide */}
          <motion.button
            whileTap={{ scale: 0.92 }}
            id="prev-slide-btn"
            disabled={currentIndex === 0}
            onClick={() => { sound.playPop(); onPrev(); }}
            className={`min-h-[44px] flex items-center gap-1 px-3 sm:px-3.5 py-1.5 rounded-xl border font-semibold transition-all ${
              currentIndex === 0
                ? 'opacity-40 cursor-not-allowed bg-slate-800/40 border-slate-800 text-slate-500'
                : 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white'
            }`}
            title="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline text-xs">Prev</span>
          </motion.button>

          {/* Next Slide */}
          <motion.button
            whileTap={{ scale: 0.92 }}
            id="next-slide-btn"
            disabled={isLastSlide}
            onClick={() => { sound.playPop(); onNext(); }}
            className={`min-h-[44px] flex items-center gap-1 px-3.5 sm:px-4 py-1.5 rounded-xl border font-semibold transition-all ${
              isLastSlide
                ? 'opacity-40 cursor-not-allowed bg-slate-800/40 border-slate-800 text-slate-500'
                : 'bg-emerald-600 border-emerald-500 text-white shadow-md hover:bg-emerald-500'
            }`}
            title="Next Slide"
          >
            <span className="text-xs">Next</span>
            <ChevronRight className="w-4 h-4" />
          </motion.button>

          {/* Unit Note Button on Last Slide */}
          {isLastSlide && onOpenCompletionNote && (
            <motion.button
              whileTap={{ scale: 0.92 }}
              id="view-unit-note-nav-btn"
              onClick={() => {
                sound.playChime();
                onOpenCompletionNote();
              }}
              className="min-h-[44px] flex items-center gap-1 px-3 py-1.5 rounded-xl bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 border border-emerald-500/50 font-bold text-xs transition-all shadow"
              title="View Beautiful Unit Note (ಶಿಕ್ಷಕರ ಸಂದೇಶ)"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Note</span>
              <span className="font-kannada text-[11px]">ಸಂದೇಶ</span>
            </motion.button>
          )}

          {/* Next Unit Button */}
          {onNextUnit && (
            <motion.button
              whileTap={{ scale: 0.92 }}
              id="next-unit-nav-btn"
              onClick={() => {
                sound.playChime();
                onNextUnit();
              }}
              className={`min-h-[44px] flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-xl border font-bold text-xs transition-all shadow-md ${
                isLastSlide
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 border-amber-400 text-slate-950 hover:from-amber-400 hover:to-amber-500 ring-2 ring-amber-400/40'
                  : 'bg-amber-500/20 border-amber-500/40 text-amber-300 hover:bg-amber-500/30'
              }`}
              title="Proceed to Next Unit (ಮುಂದಿನ ಘಟಕ)"
            >
              <span className="whitespace-nowrap">{hasNextUnit ? 'Next Unit' : 'Finish'}</span>
              <span className="font-kannada text-[11px] hidden lg:inline">
                {hasNextUnit ? 'ಮುಂದಿನ ಘಟಕ' : 'ಮುಕ್ತಾಯ'}
              </span>
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          )}
        </div>
      </div>
    </footer>
  );
};
