import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Minimize2, 
  Play, 
  Pause, 
  FileText, 
  Printer, 
  BookOpen,
  MoreVertical,
  X,
  Sparkles,
  Home,
  Languages
} from 'lucide-react';
import { SlideContent, LanguageMode } from '../types';
import { sound } from '../utils/audio';

interface NavbarProps {
  currentSlideIndex: number;
  totalSlides: number;
  currentSlide?: SlideContent;
  langMode: LanguageMode;
  setLangMode: (mode: LanguageMode) => void;
  isAutoplay: boolean;
  setIsAutoplay: (val: boolean) => void;
  showTeacherNotes: boolean;
  setShowTeacherNotes: (val: boolean) => void;
  isFullscreen: boolean;
  toggleFullscreen: () => void;
  isSpeaking: boolean;
  setIsSpeaking: (val: boolean) => void;
  onOpenChapterSelector: () => void;
  onOpenGoogleSlidesModal: () => void;
  onOpenPrintModal: () => void;
  onNarrateSlide: () => void;
  onGoHome?: () => void;
  selectedUnitNumber?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentSlideIndex,
  totalSlides,
  currentSlide,
  langMode,
  setLangMode,
  isAutoplay,
  setIsAutoplay,
  showTeacherNotes,
  setShowTeacherNotes,
  isFullscreen,
  toggleFullscreen,
  isSpeaking,
  onOpenChapterSelector,
  onOpenGoogleSlidesModal,
  onOpenPrintModal,
  onNarrateSlide,
  onGoHome,
  selectedUnitNumber = 1
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const cycleLangMode = () => {
    sound.playPop();
    if (langMode === 'bilingual') setLangMode('kn');
    else if (langMode === 'kn') setLangMode('en');
    else setLangMode('bilingual');
  };

  const getLangLabel = () => {
    if (langMode === 'bilingual') return 'ದ್ವಿಭಾಷಾ';
    if (langMode === 'kn') return 'ಕನ್ನಡ';
    return 'English';
  };

  return (
    <header className="w-full bg-slate-900/95 backdrop-blur-md text-white border-b border-slate-800 px-2.5 sm:px-4 py-2 flex items-center justify-between gap-2 z-40 sticky top-0 shadow-lg relative select-none">
      
      {/* Brand & Chapter Tag with TOC trigger */}
      <div className="flex items-center gap-1.5 sm:gap-2.5 min-w-0">
        {onGoHome && (
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => { sound.playPop(); onGoHome(); }}
            className="min-h-[44px] px-2.5 sm:px-3 py-1.5 rounded-xl bg-amber-500/15 text-amber-300 hover:bg-amber-500/25 border border-amber-500/30 flex items-center gap-1.5 text-xs font-bold transition-colors shrink-0"
            title="Return to Unit Selection Home Menu (ಮುಖಪುಟ)"
          >
            <Home className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">Units</span>
            <span className="font-kannada text-[11px] hidden md:inline">ಮುಖಪುಟ</span>
          </motion.button>
        )}

        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={() => { sound.playPop(); onOpenChapterSelector(); }}
          className="min-h-[44px] min-w-[44px] w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 flex items-center justify-center text-slate-950 font-black shadow-md transition-all shrink-0"
          title="Open Full Book Table of Contents (ಪರಿವಿಡಿ)"
        >
          <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950" />
        </motion.button>

        <div className="min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 whitespace-nowrap">
              Unit {selectedUnitNumber} • ಘಟಕ {selectedUnitNumber}
            </span>
            <button
              onClick={() => { sound.playPop(); onOpenChapterSelector(); }}
              className="text-[10px] sm:text-xs text-amber-400 hover:text-amber-300 underline font-medium hidden xs:inline"
            >
              11 Units
            </button>
          </div>
          <h1 className="text-xs sm:text-sm md:text-base font-bold text-white tracking-tight flex items-center gap-1.5 truncate max-w-[150px] xs:max-w-[200px] sm:max-w-xs md:max-w-md lg:max-w-lg">
            <span className="truncate">{currentSlide?.titleEn || 'Karnataka Value Education'}</span>
            <span className="text-emerald-400 font-normal hidden sm:inline">|</span>
            <span className="text-amber-300 font-kannada font-semibold text-xs sm:text-sm truncate hidden sm:inline">
              {currentSlide?.titleKn || 'ಮೌಲ್ಯ ಶಿಕ್ಷಣ'}
            </span>
          </h1>
        </div>
      </div>

      {/* Desktop Controls (md:flex) */}
      <div className="hidden md:flex items-center gap-2">
        {/* Language Selector */}
        <div className="flex items-center bg-slate-800 p-0.5 rounded-xl border border-slate-700 text-xs">
          <button
            id="lang-btn-bilingual"
            onClick={() => { sound.playPop(); setLangMode('bilingual'); }}
            className={`min-h-[38px] px-2.5 py-1 rounded-lg font-medium transition-all ${
              langMode === 'bilingual'
                ? 'bg-emerald-600 text-white shadow-sm font-semibold'
                : 'text-slate-300 hover:text-white'
            }`}
            title="Show both English and Kannada"
          >
            Bilingual (ದ್ವಿಭಾಷಾ)
          </button>
          <button
            id="lang-btn-en"
            onClick={() => { sound.playPop(); setLangMode('en'); }}
            className={`min-h-[38px] px-2.5 py-1 rounded-lg font-medium transition-all ${
              langMode === 'en'
                ? 'bg-emerald-600 text-white shadow-sm font-semibold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            English
          </button>
          <button
            id="lang-btn-kn"
            onClick={() => { sound.playPop(); setLangMode('kn'); }}
            className={`min-h-[38px] px-2.5 py-1 rounded-lg font-medium font-kannada transition-all ${
              langMode === 'kn'
                ? 'bg-emerald-600 text-white shadow-sm font-semibold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            ಕನ್ನಡ
          </button>
        </div>

        {/* Narrate Voice Button */}
        <motion.button
          whileTap={{ scale: 0.94 }}
          id="narration-btn"
          onClick={() => { sound.playPop(); onNarrateSlide(); }}
          className={`min-h-[44px] flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
            isSpeaking
              ? 'bg-amber-500 text-slate-950 border-amber-400 animate-pulse shadow-md shadow-amber-500/20'
              : 'bg-slate-800 text-amber-300 border-slate-700 hover:bg-slate-700 hover:border-amber-400/50'
          }`}
          title={isSpeaking ? 'Stop narration' : 'Read slide aloud'}
        >
          {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          <span>{isSpeaking ? 'Speaking...' : 'Read Aloud'}</span>
        </motion.button>

        {/* Autoplay Slide Show */}
        <motion.button
          whileTap={{ scale: 0.94 }}
          id="autoplay-btn"
          onClick={() => {
            sound.playPop();
            setIsAutoplay(!isAutoplay);
          }}
          className={`min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-xl border text-xs transition-all ${
            isAutoplay
              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500'
              : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
          }`}
          title={isAutoplay ? 'Pause auto slideshow' : 'Start auto slideshow (8s per slide)'}
        >
          {isAutoplay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </motion.button>

        {/* Teacher Notes Toggle */}
        <motion.button
          whileTap={{ scale: 0.94 }}
          id="teacher-notes-btn"
          onClick={() => {
            sound.playPop();
            setShowTeacherNotes(!showTeacherNotes);
          }}
          className={`min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-xl border text-xs transition-all ${
            showTeacherNotes
              ? 'bg-blue-500/20 text-blue-300 border-blue-400'
              : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
          }`}
          title="Toggle Teacher/Facilitator Notes"
        >
          <FileText className="w-4 h-4" />
        </motion.button>

        {/* Export to Google Slides Button */}
        <motion.button
          whileTap={{ scale: 0.94 }}
          id="google-slides-export-btn"
          onClick={() => {
            sound.playPop();
            onOpenGoogleSlidesModal();
          }}
          className="min-h-[44px] flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs shadow-md hover:from-amber-400 hover:to-amber-500 transition-all"
          title="Export slides to Google Slides"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
            <path d="M7 10h10v2H7zm0-3h10v2H7zm0 6h7v2H7z"/>
          </svg>
          <span className="hidden lg:inline">Google Slides</span>
        </motion.button>

        {/* Print / Lesson Handout */}
        <motion.button
          whileTap={{ scale: 0.94 }}
          id="print-btn"
          onClick={() => {
            sound.playPop();
            onOpenPrintModal();
          }}
          className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-xl bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 hover:text-white transition-all"
          title="Print Lesson Handout & Worksheets"
        >
          <Printer className="w-4 h-4" />
        </motion.button>

        {/* Fullscreen */}
        <motion.button
          whileTap={{ scale: 0.94 }}
          id="fullscreen-btn"
          onClick={() => {
            sound.playPop();
            toggleFullscreen();
          }}
          className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-xl bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 hover:text-white transition-all"
          title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen Presentation Mode'}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </motion.button>
      </div>

      {/* Mobile Right Controls (< md) */}
      <div className="flex md:hidden items-center gap-1.5">
        {/* Quick Language Toggle Button */}
        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={cycleLangMode}
          className="min-h-[44px] px-2.5 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-bold text-amber-300 flex items-center gap-1"
          title="Toggle Language (ದ್ವಿಭಾಷಾ / ಕನ್ನಡ / English)"
        >
          <Languages className="w-3.5 h-3.5" />
          <span>{getLangLabel()}</span>
        </motion.button>

        {/* Narrate Voice Button (Mobile) */}
        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={() => { sound.playPop(); onNarrateSlide(); }}
          className={`min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-xl border text-xs ${
            isSpeaking 
              ? 'bg-amber-500 text-slate-950 border-amber-400 animate-pulse' 
              : 'bg-slate-800 text-amber-300 border-slate-700'
          }`}
          title="Read Slide Aloud"
        >
          {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </motion.button>

        {/* Mobile Hamburger / More Actions */}
        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={() => { sound.playPop(); setIsMobileMenuOpen(!isMobileMenuOpen); }}
          className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-xl bg-slate-800 text-slate-300 border border-slate-700 hover:text-white"
          title="More tools and actions"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <MoreVertical className="w-5 h-5" />}
        </motion.button>
      </div>

      {/* Responsive Mobile Drawer / Action Sheet */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-slate-900/98 backdrop-blur-xl border-b border-slate-700 p-4 shadow-2xl flex flex-col gap-3 md:hidden z-50"
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Presentation Tools & Modes
              </span>
              <span className="text-xs text-amber-400 font-mono">
                Slide {currentSlideIndex + 1} of {totalSlides}
              </span>
            </div>

            {/* Language Selection Grid */}
            <div className="space-y-1">
              <label className="text-[11px] text-slate-400 font-medium">Display Language:</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => { sound.playPop(); setLangMode('bilingual'); setIsMobileMenuOpen(false); }}
                  className={`min-h-[44px] px-2 py-2 rounded-xl text-xs font-semibold border ${
                    langMode === 'bilingual' ? 'bg-emerald-600 text-white border-emerald-500' : 'bg-slate-800 text-slate-300 border-slate-700'
                  }`}
                >
                  Bilingual (ದ್ವಿಭಾಷಾ)
                </button>
                <button
                  onClick={() => { sound.playPop(); setLangMode('en'); setIsMobileMenuOpen(false); }}
                  className={`min-h-[44px] px-2 py-2 rounded-xl text-xs font-semibold border ${
                    langMode === 'en' ? 'bg-emerald-600 text-white border-emerald-500' : 'bg-slate-800 text-slate-300 border-slate-700'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => { sound.playPop(); setLangMode('kn'); setIsMobileMenuOpen(false); }}
                  className={`min-h-[44px] px-2 py-2 rounded-xl text-xs font-semibold font-kannada border ${
                    langMode === 'kn' ? 'bg-emerald-600 text-white border-emerald-500' : 'bg-slate-800 text-slate-300 border-slate-700'
                  }`}
                >
                  ಕನ್ನಡ
                </button>
              </div>
            </div>

            {/* Quick Feature Toggles */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={() => {
                  sound.playPop();
                  setIsAutoplay(!isAutoplay);
                  setIsMobileMenuOpen(false);
                }}
                className={`min-h-[44px] flex items-center justify-center gap-2 p-2.5 rounded-xl border text-xs font-semibold ${
                  isAutoplay ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500' : 'bg-slate-800 text-slate-300 border-slate-700'
                }`}
              >
                {isAutoplay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isAutoplay ? 'Pause Auto' : 'Start Auto Play'}</span>
              </button>

              <button
                onClick={() => {
                  sound.playPop();
                  setShowTeacherNotes(!showTeacherNotes);
                  setIsMobileMenuOpen(false);
                }}
                className={`min-h-[44px] flex items-center justify-center gap-2 p-2.5 rounded-xl border text-xs font-semibold ${
                  showTeacherNotes ? 'bg-blue-500/20 text-blue-300 border-blue-400' : 'bg-slate-800 text-slate-300 border-slate-700'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Teacher Notes</span>
              </button>

              <button
                onClick={() => {
                  sound.playPop();
                  onOpenGoogleSlidesModal();
                  setIsMobileMenuOpen(false);
                }}
                className="min-h-[44px] flex items-center justify-center gap-2 p-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs shadow-md"
              >
                <Sparkles className="w-4 h-4" />
                <span>Google Slides</span>
              </button>

              <button
                onClick={() => {
                  sound.playPop();
                  onOpenPrintModal();
                  setIsMobileMenuOpen(false);
                }}
                className="min-h-[44px] flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold"
              >
                <Printer className="w-4 h-4" />
                <span>Print Handout</span>
              </button>
            </div>

            {/* Fullscreen & All Units Buttons */}
            <div className="flex items-center gap-2 pt-1 border-t border-slate-800">
              <button
                onClick={() => {
                  sound.playPop();
                  toggleFullscreen();
                  setIsMobileMenuOpen(false);
                }}
                className="min-h-[44px] flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold"
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                <span>{isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}</span>
              </button>

              <button
                onClick={() => {
                  sound.playPop();
                  onOpenChapterSelector();
                  setIsMobileMenuOpen(false);
                }}
                className="min-h-[44px] flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 text-xs font-bold"
              >
                <BookOpen className="w-4 h-4" />
                <span>11 Units (ಪರಿವಿಡಿ)</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
