import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { 
  Trophy, 
  Award, 
  Sparkles, 
  ArrowRight, 
  RotateCcw, 
  Home, 
  X, 
  Quote, 
  GraduationCap
} from 'lucide-react';
import { LanguageMode } from '../types';
import { UNIT_COMPLETION_NOTES, UnitCompletionNote } from '../data/completionNotes';
import { sound } from '../utils/audio';

interface UnitCompletionModalProps {
  isOpen: boolean;
  onClose: () => void;
  unitId: string;
  langMode: LanguageMode;
  onProceedToNextUnit?: (nextUnitId: string) => void;
  onGoHome?: () => void;
  onReviewUnit?: () => void;
}

export const UnitCompletionModal: React.FC<UnitCompletionModalProps> = ({
  isOpen,
  onClose,
  unitId,
  langMode,
  onProceedToNextUnit,
  onGoHome,
  onReviewUnit,
}) => {
  const note: UnitCompletionNote | undefined = UNIT_COMPLETION_NOTES[unitId] || UNIT_COMPLETION_NOTES['unit-1'];

  useEffect(() => {
    if (isOpen) {
      sound.playChime();
      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#f59e0b', '#10b981', '#3b82f6', '#ec4899', '#8b5cf6']
        });
      } catch {
        // Confetti fallback
      }
    }
  }, [isOpen]);

  if (!isOpen || !note) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.92, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-amber-500/40 rounded-3xl shadow-2xl shadow-amber-500/10 p-4 sm:p-7 text-slate-100 flex flex-col gap-5 my-auto"
      >
        {/* Close button with min touch target */}
        <button
          onClick={() => {
            sound.playPop();
            onClose();
          }}
          className="min-h-[44px] min-w-[44px] absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center justify-center rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          title="Close Note"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Celebration Header */}
        <div className="text-center space-y-2 pt-2 sm:pt-0">
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="inline-flex items-center justify-center p-3 rounded-2xl bg-gradient-to-tr from-amber-500/20 to-amber-400/10 border border-amber-400/40 text-amber-400 shadow-lg shadow-amber-500/10 mb-1"
          >
            <Trophy className="w-8 h-8 text-amber-400" />
          </motion.div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>ಘಟಕ {note.unitNumber} ಪೂರ್ಣಗೊಂಡಿದೆ • Unit {note.unitNumber} Completed</span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
            {langMode === 'kn' ? note.celebrationTitleKn : note.celebrationTitleEn}
          </h2>

          {langMode === 'bilingual' && (
            <p className="text-base sm:text-lg font-kannada font-bold text-amber-300">
              {note.celebrationTitleKn}
            </p>
          )}

          <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-xl mx-auto">
            {langMode === 'kn' ? note.titleKn : note.titleEn}
          </p>
        </div>

        {/* Golden Cultural Wisdom Card */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-950/30 border border-amber-500/30 relative overflow-hidden">
          <div className="absolute -top-3 -left-3 w-12 h-12 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />
          <div className="flex items-start gap-3">
            <Quote className="w-6 h-6 text-amber-400 shrink-0 mt-1 opacity-80" />
            <div className="space-y-1.5 flex-1">
              {(langMode === 'bilingual' || langMode === 'kn') && (
                <p className="font-kannada font-bold text-amber-200 text-sm sm:text-base leading-relaxed">
                  "{note.culturalQuoteKn}"
                </p>
              )}
              {(langMode === 'bilingual' || langMode === 'en') && (
                <p className="text-xs sm:text-sm text-amber-100/90 italic leading-relaxed">
                  "{note.culturalQuoteEn}"
                </p>
              )}
              <div className="flex items-center justify-between pt-1 border-t border-amber-500/20 text-[11px] sm:text-xs text-amber-300/80">
                <span className="font-semibold">— {langMode === 'kn' ? note.quoteAuthorKn : note.quoteAuthorEn}</span>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono text-[10px]">
                  {note.heritageSeal}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Teacher's Heartfelt Note */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-700/80 space-y-2.5">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs sm:text-sm">
            <GraduationCap className="w-5 h-5 text-emerald-400" />
            <span>Teacher's Heartfelt Note to 7th Standard Students • ಶಿಕ್ಷಕರ ಆತ್ಮೀಯ ಸಂದೇಶ</span>
          </div>

          {(langMode === 'bilingual' || langMode === 'kn') && (
            <p className="font-kannada text-slate-200 text-xs sm:text-sm leading-relaxed">
              {note.teacherNoteKn}
            </p>
          )}

          {(langMode === 'bilingual' || langMode === 'en') && (
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {note.teacherNoteEn}
            </p>
          )}
        </div>

        {/* Student's Golden Pledge Card */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-start gap-3">
          <Award className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="text-[11px] uppercase tracking-wider font-bold text-emerald-400">
              {langMode === 'kn' ? 'ವಿದ್ಯಾರ್ಥಿಯ ಸುವರ್ಣ ಸಂಕಲ್ಪ' : 'Student’s Golden Pledge'}
            </span>
            <p className="text-xs sm:text-sm text-emerald-100 font-medium">
              {langMode === 'kn' ? note.studentPledgeKn : note.studentPledgeEn}
            </p>
            {langMode === 'bilingual' && (
              <p className="font-kannada text-xs text-emerald-200/90 mt-0.5">
                {note.studentPledgeKn}
              </p>
            )}
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-slate-800">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            {onReviewUnit && (
              <motion.button
                whileTap={{ scale: 0.94 }}
                onClick={() => {
                  sound.playPop();
                  onReviewUnit();
                  onClose();
                }}
                className="min-h-[44px] flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Review Unit Slides</span>
              </motion.button>
            )}
            {onGoHome && (
              <motion.button
                whileTap={{ scale: 0.94 }}
                onClick={() => {
                  sound.playPop();
                  onGoHome();
                  onClose();
                }}
                className="min-h-[44px] flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
              >
                <Home className="w-4 h-4" />
                <span>All Units</span>
              </motion.button>
            )}
          </div>

          {note.nextUnitId ? (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                sound.playChime();
                if (onProceedToNextUnit && note.nextUnitId) {
                  onProceedToNextUnit(note.nextUnitId);
                }
                onClose();
              }}
              className="min-h-[44px] w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/20 transition-all"
            >
              <span>{langMode === 'kn' ? 'ಮುಂದಿನ ಘಟಕಕ್ಕೆ ತೆರಳಿ' : 'Proceed to Next Unit'}</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                sound.playChime();
                if (onGoHome) onGoHome();
                onClose();
              }}
              className="min-h-[44px] w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/20 transition-all"
            >
              <span>{langMode === 'kn' ? 'ಎಲ್ಲಾ ೧೧ ಘಟಕಗಳು ಸಂಪೂರ್ಣ!' : 'All 11 Units Completed!'}</span>
              <Trophy className="w-4 h-4" />
            </motion.button>
          )}
        </div>

      </motion.div>
    </div>
  );
};
