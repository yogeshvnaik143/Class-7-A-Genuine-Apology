import React from 'react';
import { 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Minimize2, 
  Play, 
  Pause, 
  FileText, 
  Globe, 
  Printer, 
  ExternalLink,
  Presentation
} from 'lucide-react';
import { LanguageMode } from '../types';
import { sound, SpeechNarrator } from '../utils/audio';

interface NavbarProps {
  currentSlideIndex: number;
  totalSlides: number;
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
  onOpenGoogleSlidesModal: () => void;
  onOpenPrintModal: () => void;
  onNarrateSlide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentSlideIndex,
  totalSlides,
  langMode,
  setLangMode,
  isAutoplay,
  setIsAutoplay,
  showTeacherNotes,
  setShowTeacherNotes,
  isFullscreen,
  toggleFullscreen,
  isSpeaking,
  onOpenGoogleSlidesModal,
  onOpenPrintModal,
  onNarrateSlide
}) => {
  return (
    <header className="w-full bg-slate-900/95 backdrop-blur-md text-white border-b border-slate-800 px-4 py-2.5 flex items-center justify-between gap-2 z-40 sticky top-0 shadow-lg">
      {/* Brand & Chapter Tag */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 font-black shadow-md">
          <Presentation className="w-5 h-5 text-slate-900" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Class 7 • ಮೌಲ್ಯ ಶಿಕ್ಷಣ
            </span>
            <span className="hidden sm:inline-block text-xs text-slate-400">
              Chapter 2.1
            </span>
          </div>
          <h1 className="text-sm md:text-base font-bold text-white tracking-tight flex items-center gap-1.5">
            <span>A Genuine Apology</span>
            <span className="text-emerald-400 font-normal">|</span>
            <span className="text-amber-300 font-kannada font-semibold text-sm">ಪ್ರಾಮಾಣಿಕ ಕ್ಷಮೆಯಾಚನೆ</span>
          </h1>
        </div>
      </div>

      {/* Center Controls: Language & Audio */}
      <div className="flex items-center gap-1.5 md:gap-2">
        {/* Language Selector */}
        <div className="flex items-center bg-slate-800 p-0.5 rounded-lg border border-slate-700 text-xs">
          <button
            id="lang-btn-bilingual"
            onClick={() => { sound.playPop(); setLangMode('bilingual'); }}
            className={`px-2.5 py-1 rounded-md font-medium transition-all ${
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
            className={`px-2.5 py-1 rounded-md font-medium transition-all ${
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
            className={`px-2.5 py-1 rounded-md font-medium font-kannada transition-all ${
              langMode === 'kn'
                ? 'bg-emerald-600 text-white shadow-sm font-semibold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            ಕನ್ನಡ
          </button>
        </div>

        {/* Narrate Voice Button */}
        <button
          id="narration-btn"
          onClick={() => { sound.playPop(); onNarrateSlide(); }}
          className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
            isSpeaking
              ? 'bg-amber-500 text-slate-950 border-amber-400 animate-pulse'
              : 'bg-slate-800 text-amber-300 border-slate-700 hover:bg-slate-700 hover:border-amber-400/50'
          }`}
          title={isSpeaking ? 'Stop narration' : 'Read slide aloud'}
        >
          {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          <span className="hidden lg:inline">{isSpeaking ? 'Speaking...' : 'Read Aloud'}</span>
        </button>

        {/* Autoplay Slide Show */}
        <button
          id="autoplay-btn"
          onClick={() => {
            sound.playPop();
            setIsAutoplay(!isAutoplay);
          }}
          className={`p-1.5 rounded-lg border text-xs transition-all ${
            isAutoplay
              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500'
              : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
          }`}
          title={isAutoplay ? 'Pause auto slideshow' : 'Start auto slideshow (8s per slide)'}
        >
          {isAutoplay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>

        {/* Teacher Notes Toggle */}
        <button
          id="teacher-notes-btn"
          onClick={() => {
            sound.playPop();
            setShowTeacherNotes(!showTeacherNotes);
          }}
          className={`p-1.5 rounded-lg border text-xs transition-all ${
            showTeacherNotes
              ? 'bg-blue-500/20 text-blue-300 border-blue-400'
              : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
          }`}
          title="Toggle Teacher/Facilitator Notes"
        >
          <FileText className="w-4 h-4" />
        </button>
      </div>

      {/* Right Side: Google Slides Export, Print & Fullscreen */}
      <div className="flex items-center gap-1.5">
        {/* Export to Google Slides Button */}
        <button
          id="google-slides-export-btn"
          onClick={() => {
            sound.playPop();
            onOpenGoogleSlidesModal();
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs shadow-md hover:from-amber-400 hover:to-amber-500 transition-all active:scale-95"
          title="Export 16 slides to Google Slides presentation"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
            <path d="M7 10h10v2H7zm0-3h10v2H7zm0 6h7v2H7z"/>
          </svg>
          <span className="hidden sm:inline">Google Slides</span>
        </button>

        {/* Print / Lesson Handout */}
        <button
          id="print-btn"
          onClick={() => {
            sound.playPop();
            onOpenPrintModal();
          }}
          className="p-1.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 hover:text-white transition-all"
          title="Print Lesson Handout & Worksheets"
        >
          <Printer className="w-4 h-4" />
        </button>

        {/* Fullscreen */}
        <button
          id="fullscreen-btn"
          onClick={() => {
            sound.playPop();
            toggleFullscreen();
          }}
          className="p-1.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 hover:text-white transition-all"
          title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen Presentation Mode'}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>
    </header>
  );
};
