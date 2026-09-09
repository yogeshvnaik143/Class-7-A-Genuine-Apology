import React from 'react';
import { X, CheckCircle, Sparkles } from 'lucide-react';
import { SLIDES_DATA } from '../data/slidesData';
import { sound } from '../utils/audio';

interface SlideThumbnailsProps {
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
  onSelectSlide: (index: number) => void;
}

export const SlideThumbnails: React.FC<SlideThumbnailsProps> = ({
  isOpen,
  onClose,
  currentIndex,
  onSelectSlide
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex flex-col justify-end animate-in fade-in duration-200">
      <div className="w-full max-h-[85vh] bg-slate-900 border-t border-slate-700 rounded-t-3xl p-6 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>All 16 Interactive Slides</span>
              <span className="text-slate-400 font-normal text-sm font-kannada">| ಎಲ್ಲಾ ೧೬ ಸ್ಲೈಡ್‌ಗಳು</span>
            </h3>
            <p className="text-xs text-slate-400">Class 7 Value Education Chapter 2.1 A Genuine Apology (ಕ್ಷಮೆಯಾಚನೆ)</p>
          </div>
          <button
            onClick={() => { sound.playPop(); onClose(); }}
            className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Grid of Thumbnails */}
        <div className="overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 pr-2 pb-4">
          {SLIDES_DATA.map((slide, idx) => {
            const isCurrent = idx === currentIndex;
            return (
              <button
                key={slide.id}
                id={`thumb-slide-${idx + 1}`}
                onClick={() => {
                  sound.playPop();
                  onSelectSlide(idx);
                  onClose();
                }}
                className={`relative flex flex-col text-left p-2.5 rounded-xl border transition-all group ${
                  isCurrent
                    ? 'bg-emerald-950/60 border-emerald-400 ring-2 ring-emerald-500/30 shadow-lg scale-[1.02]'
                    : 'bg-slate-800/80 border-slate-700 hover:bg-slate-800 hover:border-slate-500'
                }`}
              >
                {/* Badge Number */}
                <div className="flex items-center justify-between mb-1.5">
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
