import React, { useState, useEffect, useCallback, useRef } from 'react';
import { AppViewMode, LanguageMode } from './types';
import { sound, SpeechNarrator } from './utils/audio';
import { ALL_UNIT_DECKS, UNITS_METADATA } from './data/units';
import { HomePage } from './components/HomePage';
import { Navbar } from './components/Navbar';
import { SlideRenderer } from './components/SlideRenderer';
import { SlideNav } from './components/SlideNav';
import { SlideThumbnails } from './components/SlideThumbnails';
import { ChapterSelectorModal } from './components/ChapterSelectorModal';
import { GoogleSlidesModal } from './components/GoogleSlidesModal';
import { PrintModal } from './components/PrintModal';

export default function App() {
  const [viewMode, setViewMode] = useState<AppViewMode>('home');
  const [selectedUnitId, setSelectedUnitId] = useState<string>('unit-1');
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
  const [soundEnabled, setSoundEnabled] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);

  // Active unit deck and slide
  const activeDeck = ALL_UNIT_DECKS[selectedUnitId] || ALL_UNIT_DECKS['unit-1'];
  const currentSlide = activeDeck[currentSlideIndex] || activeDeck[0];
  const currentUnitMeta = UNITS_METADATA.find(u => u.id === selectedUnitId) || UNITS_METADATA[0];

  // Unit Selection Handler
  const handleSelectUnit = useCallback((unitId: string) => {
    SpeechNarrator.stop();
    setIsSpeaking(false);
    setSelectedUnitId(unitId);
    setCurrentSlideIndex(0);
    setViewMode('teach');
  }, []);

  // Return to Home Menu
  const handleGoHome = useCallback(() => {
    SpeechNarrator.stop();
    setIsSpeaking(false);
    setIsAutoplay(false);
    setViewMode('home');
  }, []);

  // Navigation callbacks
  const handlePrevSlide = useCallback(() => {
    if (currentSlideIndex > 0) {
      SpeechNarrator.stop();
      setIsSpeaking(false);
      setCurrentSlideIndex(prev => prev - 1);
    }
  }, [currentSlideIndex]);

  const handleNextSlide = useCallback(() => {
    if (currentSlideIndex < activeDeck.length - 1) {
      SpeechNarrator.stop();
      setIsSpeaking(false);
      setCurrentSlideIndex(prev => prev + 1);
    } else {
      setIsAutoplay(false);
    }
  }, [currentSlideIndex, activeDeck.length]);

  // Read aloud narration handler
  const handleNarrateSlide = useCallback(() => {
    if (isSpeaking) {
      SpeechNarrator.stop();
      setIsSpeaking(false);
      return;
    }

    const slide = activeDeck[currentSlideIndex];
    if (!slide) return;
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
  }, [activeDeck, currentSlideIndex, langMode, isSpeaking]);

  // Autoplay timer
  useEffect(() => {
    let timer: any = null;
    if (isAutoplay && viewMode === 'teach') {
      timer = setInterval(() => {
        handleNextSlide();
      }, 8000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isAutoplay, viewMode, handleNextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Avoid triggering when user is typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (viewMode === 'teach') {
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
        } else if (e.key === 'Escape') {
          handleGoHome();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, handleNextSlide, handlePrevSlide, handleNarrateSlide, handleGoHome]);

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
      className="w-full h-screen flex flex-col bg-slate-950 text-slate-100 overflow-hidden font-sans selection:bg-amber-500 selection:text-slate-950"
    >
      {viewMode === 'home' ? (
        <HomePage
          onSelectUnit={handleSelectUnit}
          langMode={langMode}
          setLangMode={setLangMode}
          soundEnabled={soundEnabled}
          setSoundEnabled={setSoundEnabled}
          onOpenGoogleSlidesModal={() => setIsGoogleSlidesModalOpen(true)}
        />
      ) : (
        <div className="w-full h-full flex flex-col overflow-hidden">
          {/* Top Navigation */}
          <Navbar
            currentSlideIndex={currentSlideIndex}
            totalSlides={activeDeck.length}
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
            onGoHome={handleGoHome}
            selectedUnitNumber={currentUnitMeta.number}
          />

          {/* 16:9 Presentation Stage Viewport */}
          <main className="flex-1 w-full h-full flex items-center justify-center p-2 sm:p-3 md:p-4 bg-slate-950 overflow-hidden relative">
            {/* Ambient subtle glow behind slide */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900/40 via-slate-950 to-slate-950 pointer-events-none" />

            {/* Strict 16:9 Presentation Frame */}
            <div className="relative w-full max-w-[1560px] aspect-[16/9] max-h-[calc(100vh-125px)] bg-slate-900/95 rounded-2xl md:rounded-3xl border border-slate-800 shadow-2xl shadow-black flex flex-col overflow-hidden ring-1 ring-white/5">
              <SlideRenderer
                slide={currentSlide}
                langMode={langMode}
                showTeacherNotes={showTeacherNotes}
                totalSlides={activeDeck.length}
                onOpenGoogleSlidesModal={() => setIsGoogleSlidesModalOpen(true)}
              />
            </div>
          </main>

          {/* Bottom Slide Navigation Bar */}
          <SlideNav
            currentIndex={currentSlideIndex}
            total={activeDeck.length}
            onPrev={handlePrevSlide}
            onNext={handleNextSlide}
            onOpenThumbnails={() => setIsThumbnailsOpen(true)}
            onOpenChapterSelector={() => setIsChapterSelectorOpen(true)}
            onGoHome={handleGoHome}
          />
        </div>
      )}

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
        onSelectUnit={handleSelectUnit}
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
        slides={activeDeck}
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
