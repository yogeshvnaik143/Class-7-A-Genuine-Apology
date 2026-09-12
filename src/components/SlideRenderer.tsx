import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  HelpCircle, 
  Quote, 
  BookOpen, 
  Smile, 
  Frown, 
  HeartHandshake, 
  Award, 
  ShieldCheck, 
  AlertTriangle,
  Lightbulb,
  Droplets,
  Flower2,
  RefreshCw,
  Send,
  MessageCircleQuestion,
  ChevronRight
} from 'lucide-react';
import { SlideContent, LanguageMode } from '../types';
import { sound } from '../utils/audio';
import { 
  CoverIllustration, 
  MistakeIllustration, 
  PillarsIllustration, 
  StarsFormulaIllustration, 
  PoemIllustration, 
  ReflectionCloudIllustration, 
  GardenIllustration 
} from './VectorIllustrations';
import {
  ClassroomWallsVisual,
  WorkersPrideVisual,
  StepsGrowthVisual,
  TaraFireVisual,
  SadnessCircleVisual,
  TapManWaterVisual,
  VotingBoothVisual,
  ConsumerRightsVisual,
  PersonalSafetyVisual,
  HealthTriangleVisual,
  NationalEmblemVisual,
  PositiveTalkVisual,
  CompassionPuppyVisual,
  RainbowGenderVisual,
  GreenDiwaliVisual
} from './TextbookIllustrations';
import {
  BasavannaKayakaVisual,
  ThimmakkaTreesVisual,
  VisvesvarayaDamVisual,
  ObavvaBraveryVisual,
  KabaddiArenaVisual,
  MankuthimmaVachanaVisual
} from './KarnatakaHeritageVisuals';

interface SlideRendererProps {
  slide: SlideContent;
  langMode: LanguageMode;
  showTeacherNotes: boolean;
  totalSlides?: number;
  onOpenGoogleSlidesModal: () => void;
}

export const SlideRenderer: React.FC<SlideRendererProps> = ({
  slide,
  langMode,
  showTeacherNotes,
  totalSlides,
  onOpenGoogleSlidesModal
}) => {
  // Interactive state for quiz slide
  const [selectedQuizAnswers, setSelectedQuizAnswers] = useState<Record<string, boolean>>({});
  const [showQuizExplanations, setShowQuizExplanations] = useState<Record<string, boolean>>({});

  // Interactive state for story beats
  const [activeStoryBeat, setActiveStoryBeat] = useState(0);

  // Interactive state for Excuse Buster
  const [bustedExcuses, setBustedExcuses] = useState<Record<number, boolean>>({});

  // Interactive state for RolePlay
  const [activeRolePlayIndex, setActiveRolePlayIndex] = useState(0);
  const [rolePlayChoice, setRolePlayChoice] = useState<'both' | 'bad' | 'good'>('both');

  // Interactive state for Garden
  const [waterDrops, setWaterDrops] = useState(3);
  const [bloomedFlowers, setBloomedFlowers] = useState<string[]>(['Honesty', 'ಸಹಾನುಭೂತಿ']);

  // Interactive state for Think and Do Journal
  const [journalHurtPerson, setJournalHurtPerson] = useState('');
  const [journalAction, setJournalAction] = useState('');
  const [journalSaved, setJournalSaved] = useState(false);

  // Handle Quiz click
  const handleQuizSelect = (id: string, userChoice: boolean, correctChoice: boolean) => {
    sound.playPop();
    setSelectedQuizAnswers(prev => ({ ...prev, [id]: userChoice }));
    setShowQuizExplanations(prev => ({ ...prev, [id]: true }));

    if (userChoice === correctChoice) {
      sound.playCorrect();
      confetti({
        particleCount: 25,
        spread: 60,
        origin: { y: 0.8 }
      });
    }
  };

  // Handle excuse bust
  const handleBustExcuse = (idx: number) => {
    sound.playChime();
    setBustedExcuses(prev => ({ ...prev, [idx]: !prev[idx] }));
    confetti({
      particleCount: 15,
      spread: 40,
      origin: { y: 0.7 }
    });
  };

  // Water the garden
  const handleWaterGarden = () => {
    sound.playBloom();
    setWaterDrops(prev => prev + 1);
    const flowers = ['Courage / ಧೈರ್ಯ', 'Patience / ತಾಳ್ಮೆ', 'Deep Friendship / ಗಾಢ ಸ್ನೇಹ', 'Forgiveness / ಕ್ಷಮೆ'];
    const nextFlower = flowers[waterDrops % flowers.length];
    if (!bloomedFlowers.includes(nextFlower)) {
      setBloomedFlowers(prev => [...prev, nextFlower]);
    }
    confetti({
      particleCount: 30,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="w-full h-full flex-1 flex flex-col justify-between overflow-y-auto px-4 py-4 md:px-8 md:py-6 bg-slate-950 text-slate-100">
      {/* Slide Header / Category & Title */}
      <motion.div
        key={`header-${slide.id}`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-3"
      >
        <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
          <span className="text-[11px] md:text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30">
            {langMode === 'kn' ? slide.categoryKn : slide.categoryEn}
          </span>
          <span className="text-xs text-slate-400 font-mono">
            Slide {slide.slideNumber} of {totalSlides || 16}
          </span>
        </div>

        {/* Dual Title */}
        <div className="space-y-0.5">
          {(langMode === 'bilingual' || langMode === 'en') && (
            <h2 className="text-xl md:text-3xl font-extrabold text-white tracking-tight">
              {slide.titleEn}
            </h2>
          )}
          {(langMode === 'bilingual' || langMode === 'kn') && (
            <h3 className="text-lg md:text-2xl font-bold font-kannada text-amber-300 leading-snug">
              {slide.titleKn}
            </h3>
          )}
        </div>

        {/* Subtitle if available */}
        {slide.subtitleEn && (
          <div className="mt-1.5 text-xs md:text-sm text-slate-300 italic border-l-2 border-emerald-500 pl-3 py-0.5 bg-slate-900/40 rounded-r-lg">
            {(langMode === 'bilingual' || langMode === 'en') && (
              <p className="font-medium text-slate-200">{slide.subtitleEn}</p>
            )}
            {(langMode === 'bilingual' || langMode === 'kn') && (
              <p className="font-kannada text-amber-200/90 mt-0.5">{slide.subtitleKn}</p>
            )}
          </div>
        )}
      </motion.div>

      {/* Main Slide Interactive Body */}
      <div className="flex-1 flex flex-col justify-center my-2">
        <AnimatePresence mode="wait">
          {/* SLIDE 1: COVER */}
          {slide.visualType === 'cover' && (
            <motion.div
              key="cover-layout"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
            >
              <div className="lg:col-span-6 space-y-4">
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>ಕರ್ನಾಟಕ ಶಾಲಾ ಶಿಕ್ಷಣ ಮತ್ತು ಸಾಕ್ಷರತಾ ಇಲಾಖೆ</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                    Welcome to the animated presentation for Class 7 Value Education Chapter 2.1. Explore the transformative power of sincere apologies through real classroom stories, interactive activities, and poems.
                  </p>
                  <p className="text-xs md:text-sm text-amber-200 font-kannada leading-relaxed">
                    ೭ನೇ ತರಗತಿಯ ಮೌಲ್ಯ ಶಿಕ್ಷಣ ಚಟುವಟಿಕಾ ಪುಸ್ತಕದ ಆಧಾರಿತ ದ್ವಿಭಾಷಾ ಪ್ರಸ್ತುತಿ. ತಪ್ಪುಗಳನ್ನು ಮುಚ್ಚಿಡದೆ ಒಪ್ಪಿಕೊಂಡು, ವಿಶ್ವಾಸವನ್ನು ಪುನಃ ನಿರ್ಮಿಸುವ ಸನ್ಮಾರ್ಗ.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  {slide.bulletsEn?.map((bullet, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        {(langMode === 'bilingual' || langMode === 'en') && (
                          <p className="font-semibold text-slate-200">{bullet}</p>
                        )}
                        {(langMode === 'bilingual' || langMode === 'kn') && (
                          <p className="font-kannada text-slate-400 text-[11px] mt-0.5">{slide.bulletsKn?.[idx]}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6 h-full flex items-center justify-center">
                <CoverIllustration />
              </div>
            </motion.div>
          )}

          {/* SLIDE 2: CONCEPT (HUMAN MISTAKES) */}
          {slide.visualType === 'concept' && (
            <motion.div
              key="concept-layout"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
            >
              <div className="lg:col-span-6 space-y-3">
                <div className="space-y-2">
                  {slide.bulletsEn?.map((bullet, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3 hover:border-emerald-500/50 transition-colors">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold text-xs">
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        {(langMode === 'bilingual' || langMode === 'en') && (
                          <p className="text-xs md:text-sm font-semibold text-slate-200">{bullet}</p>
                        )}
                        {(langMode === 'bilingual' || langMode === 'kn') && (
                          <p className="text-xs font-kannada text-amber-200/90 mt-1">{slide.bulletsKn?.[idx]}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {slide.quoteEn && (
                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 flex items-start gap-2.5">
                    <Quote className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      {(langMode === 'bilingual' || langMode === 'en') && (
                        <p className="text-xs text-amber-100 font-medium italic">"{slide.quoteEn}"</p>
                      )}
                      {(langMode === 'bilingual' || langMode === 'kn') && (
                        <p className="text-xs text-amber-300 font-kannada mt-1">"{slide.quoteKn}"</p>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="lg:col-span-6">
                <MistakeIllustration />
              </div>
            </motion.div>
          )}

          {/* SLIDE 3: PILLARS */}
          {slide.visualType === 'pillars' && (
            <motion.div
              key="pillars-layout"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              <PillarsIllustration />
              {slide.quoteEn && (
                <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-center max-w-2xl mx-auto shadow-md">
                  {(langMode === 'bilingual' || langMode === 'en') && (
                    <p className="text-sm font-bold text-emerald-300">"{slide.quoteEn}"</p>
                  )}
                  {(langMode === 'bilingual' || langMode === 'kn') && (
                    <p className="text-sm font-kannada text-amber-200 mt-1 font-semibold">"{slide.quoteKn}"</p>
                  )}
                </div>
              )}
            </motion.div>
          )}

          {/* SLIDE 4: COMPARE (FAKE VS GENUINE) */}
          {slide.visualType === 'compare' && (
            <motion.div
              key="compare-layout"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {/* Fake Column */}
              <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-800/40 space-y-3">
                <div className="flex items-center gap-2 pb-2 border-b border-rose-800/40">
                  <XCircle className="w-5 h-5 text-rose-400" />
                  <h4 className="font-bold text-rose-300 text-sm md:text-base">
                    Fake / Excuse Apology (ನಕಲಿ ಕ್ಷಮೆ)
                  </h4>
                </div>
                <div className="space-y-2.5">
                  {[
                    { en: '"I am sorry IF you felt bad."', kn: '"ನಿನಗೆ ಬೇಜಾರಾಗಿದ್ದರೆ ಸಾರಿ."', whyEn: 'Blames their sensitivity instead of your own mistake.', whyKn: 'ತನ್ನ ತಪ್ಪೊಪ್ಪದೆ ಅವರ ಮೇಲೆಯೇ ದೋಷ ಹೊರಿಸುವುದು.' },
                    { en: '"Sorry, but you also provoked me!"', kn: '"ಸಾರಿ, ಆದ್ರೆ ನೀನೇ ಮೊದಲು ಶುರು ಮಾಡಿದ್ದು!"', whyEn: 'Counters with defense; no true ownership.', whyKn: 'ನೆಪಗಳ ಬೆನ್ನಿಗೆ ನಿಂತು ಸಮರ್ಥಿಸಿಕೊಳ್ಳುವುದು.' },
                    { en: '"Okay okay sorry! Are you happy now?"', kn: '"ಸರಿ ಆಯ್ತು ಬಿಡು, ಸಾರಿ ಹೇಳಿದ್ನಲ್ಲ?"', whyEn: 'Disrespectful, rushed, and insincere.', whyKn: 'ಅಸಡ್ಡೆ ಹಾಗೂ ಕೃತಕತೆಯ ಸಂಕೇತ.' }
                  ].map((item, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-slate-900/80 border border-rose-900/50">
                      <p className="text-xs font-bold text-rose-200">{item.en}</p>
                      <p className="text-xs font-kannada text-rose-300/80">{item.kn}</p>
                      <span className="inline-block text-[10px] text-slate-400 mt-1 bg-rose-950/50 px-2 py-0.5 rounded">
                        ⚠️ {item.whyEn}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Genuine Column */}
              <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-800/40 space-y-3">
                <div className="flex items-center gap-2 pb-2 border-b border-emerald-800/40">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <h4 className="font-bold text-emerald-300 text-sm md:text-base">
                    Genuine STARS Apology (ಪ್ರಾಮಾಣಿಕ ಕ್ಷಮೆ)
                  </h4>
                </div>
                <div className="space-y-2.5">
                  {[
                    { en: '"I am sorry for my harsh words. I was wrong."', kn: '"ನಾನು ಆಡಿದ ಕಟು ಮಾತುಗಳಿಗೆ ಕ್ಷಮಿಸಿ. ನಾನು ಹಾಗೆ ಮಾತನಾಡಬಾರದಿತ್ತು."', whyEn: 'Admits exactly what was done with zero excuses.', whyKn: 'ಮಾಡಿದ ತಪ್ಪನ್ನು ನೇರವಾಗಿ ಒಪ್ಪಿಕೊಳ್ಳುವುದು.' },
                    { en: '"Regardless of what happened, I should have kept my calm."', kn: '"ಪರಿಸ್ಥಿತಿ ಏನೇ ಇರಲಿ, ನಾನು ನನ್ನ ತಾಳ್ಮೆ ಕಳೆದುಕೊಳ್ಳಬಾರದಿತ್ತು."', whyEn: 'Owns 100% of personal reaction.', whyKn: 'ತನ್ನ ವರ್ತನೆಗೆ ತಾನೇ ಪೂರ್ಣ ಜವಾಬ್ದಾರಿ ವಹಿಸುವುದು.' },
                    { en: '"I see I hurt you deeply. What can I do to fix this?"', kn: '"ನಿನ್ನ ಕೋಪ ನ್ಯಾಯಯುತವಾಗಿದೆ. ಇದನ್ನು ಸರಿಪಡಿಸಲು ನಾನೇನು ಮಾಡಬೇಕು?"', whyEn: 'Focuses on healing and repairing trust.', whyKn: 'ನೋವನ್ನು ಶಮನಗೊಳಿಸಿ ಸರಿಪಡಿಸಲು ಯತ್ನಿಸುವುದು.' }
                  ].map((item, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-slate-900/80 border border-emerald-900/50">
                      <p className="text-xs font-bold text-emerald-200">{item.en}</p>
                      <p className="text-xs font-kannada text-emerald-300/90">{item.kn}</p>
                      <span className="inline-block text-[10px] text-emerald-400/90 mt-1 bg-emerald-950/50 px-2 py-0.5 rounded">
                        ✨ {item.whyEn}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* SLIDE 5: STARS FORMULA */}
          {slide.visualType === 'formula' && (
            <motion.div
              key="formula-layout"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-4"
            >
              <StarsFormulaIllustration />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 text-xs">
                {slide.bulletsEn?.map((bullet, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-900 border border-indigo-500/30 flex flex-col justify-between">
                    <div>
                      {(langMode === 'bilingual' || langMode === 'en') && (
                        <p className="font-bold text-indigo-300">{bullet}</p>
                      )}
                      {(langMode === 'bilingual' || langMode === 'kn') && (
                        <p className="font-kannada text-slate-300 text-[11px] mt-1">{slide.bulletsKn?.[idx]}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* SLIDE 6 & 9: STORIES */}
          {(slide.visualType === 'story1' || slide.visualType === 'story2') && slide.storyData && (
            <motion.div
              key={`story-${slide.id}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-3"
            >
              {/* Context Banner */}
              <div className="p-3 rounded-xl bg-slate-900 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <h4 className="font-bold text-xs md:text-sm text-white">{slide.storyData.titleEn}</h4>
                    <p className="text-xs font-kannada text-amber-300">{slide.storyData.titleKn}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {slide.storyData.characters.map((c, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {c.nameEn} ({c.nameKn})
                    </span>
                  ))}
                </div>
              </div>

              {/* Story Context */}
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
                {(langMode === 'bilingual' || langMode === 'en') && (
                  <p className="text-slate-300 italic">{slide.storyData.contextEn}</p>
                )}
                {(langMode === 'bilingual' || langMode === 'kn') && (
                  <p className="text-amber-200 font-kannada italic mt-1">{slide.storyData.contextKn}</p>
                )}
              </div>

              {/* Story Beats Interactive Selector */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {slide.storyData.beats.map((beat, bIdx) => (
                  <button
                    key={bIdx}
                    onClick={() => { sound.playPop(); setActiveStoryBeat(bIdx); }}
                    className={`p-2 rounded-lg border text-left text-xs transition-all ${
                      activeStoryBeat === bIdx
                        ? 'bg-amber-950/60 border-amber-400 text-amber-200 font-bold shadow-md'
                        : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span className="text-[10px] uppercase font-bold text-amber-400 block">Part {bIdx + 1}</span>
                    <span className="line-clamp-1">{beat.speakerEn}</span>
                  </button>
                ))}
              </div>

              {/* Active Beat Spotlight Dialogue */}
              {slide.storyData.beats[activeStoryBeat] && (
                <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-amber-500/40 shadow-xl space-y-2 relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-slate-700/60 pb-2">
                    <span className="font-bold text-amber-300 text-xs flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      {slide.storyData.beats[activeStoryBeat].speakerEn} / {slide.storyData.beats[activeStoryBeat].speakerKn}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      Beat {activeStoryBeat + 1} of {slide.storyData.beats.length}
                    </span>
                  </div>

                  <blockquote className="text-sm md:text-base font-medium text-white italic pl-2 border-l-2 border-amber-400 my-2">
                    "{(langMode === 'bilingual' || langMode === 'en') && slide.storyData.beats[activeStoryBeat].dialogueEn}"
                  </blockquote>
                  {(langMode === 'bilingual' || langMode === 'kn') && (
                    <p className="text-xs md:text-sm font-kannada text-amber-200 pl-2">
                      "{slide.storyData.beats[activeStoryBeat].dialogueKn}"
                    </p>
                  )}

                  {slide.storyData.beats[activeStoryBeat].actionEn && (
                    <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                      <span className="font-semibold text-slate-300">Action:</span> {slide.storyData.beats[activeStoryBeat].actionEn}
                      <span className="font-kannada block text-slate-400 mt-0.5">{slide.storyData.beats[activeStoryBeat].actionKn}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Moral takeaway */}
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 flex items-center gap-3">
                <HeartHandshake className="w-6 h-6 text-emerald-400 shrink-0" />
                <div className="text-xs">
                  {(langMode === 'bilingual' || langMode === 'en') && (
                    <p className="font-bold text-emerald-200">Moral: {slide.storyData.takeawayEn}</p>
                  )}
                  {(langMode === 'bilingual' || langMode === 'kn') && (
                    <p className="font-kannada text-emerald-300 mt-0.5">ನೀತಿ: {slide.storyData.takeawayKn}</p>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* SLIDE 7: POEM */}
          {slide.visualType === 'poem' && slide.poemData && (
            <motion.div
              key="poem-layout"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center"
            >
              <div className="lg:col-span-8 space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {slide.poemData.stanzas.map((stanza, sIdx) => (
                    <div key={sIdx} className="p-3 rounded-xl bg-slate-900/90 border border-amber-500/30 space-y-2 shadow-sm">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded-full block text-center">
                        Stanza {sIdx + 1} • {stanza.themeKn}
                      </span>
                      
                      {(langMode === 'bilingual' || langMode === 'en') && (
                        <div className="space-y-1 text-xs text-slate-200 italic font-serif">
                          {stanza.linesEn.map((l, li) => (
                            <p key={li}>{l}</p>
                          ))}
                        </div>
                      )}

                      {(langMode === 'bilingual' || langMode === 'kn') && (
                        <div className="space-y-1 text-xs text-amber-200 font-kannada pt-2 border-t border-slate-800">
                          {stanza.linesKn.map((l, li) => (
                            <p key={li}>{l}</p>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-center text-slate-300">
                  <p>{slide.poemData.reflectionEn}</p>
                  <p className="font-kannada text-amber-300 mt-0.5">{slide.poemData.reflectionKn}</p>
                </div>
              </div>

              <div className="lg:col-span-4">
                <PoemIllustration />
              </div>
            </motion.div>
          )}

          {/* SLIDE 8: TEXTBOOK QUIZ CHECKLIST (PAGE 10 & 11) */}
          {slide.visualType === 'quiz' && slide.quizData && (
            <motion.div
              key="quiz-layout"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between bg-slate-900/90 px-3 py-2 rounded-xl border border-slate-800 text-xs">
                <span className="text-slate-300 font-medium">
                  Tick which statements describe a GENUINE apology (ಸರಿಯಾದ ಹೇಳಿಕೆಗಳಿಗೆ ✓ ಕ್ಲಿಕ್ ಮಾಡಿ):
                </span>
                <span className="font-bold text-emerald-400">
                  Answered: {Object.keys(selectedQuizAnswers).length} / {slide.quizData.length}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 max-h-[380px] overflow-y-auto pr-1">
                {slide.quizData.map((q) => {
                  const hasAnswered = selectedQuizAnswers[q.id] !== undefined;
                  const isUserTrue = selectedQuizAnswers[q.id] === true;
                  const isCorrect = isUserTrue === q.isGenuine;

                  return (
                    <div
                      key={q.id}
                      className={`p-3 rounded-xl border transition-all ${
                        hasAnswered
                          ? isCorrect
                            ? 'bg-emerald-950/40 border-emerald-500/60'
                            : 'bg-rose-950/40 border-rose-500/60'
                          : 'bg-slate-900/90 border-slate-800 hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 space-y-1">
                          {(langMode === 'bilingual' || langMode === 'en') && (
                            <p className="text-xs font-semibold text-slate-200">{q.statementEn}</p>
                          )}
                          {(langMode === 'bilingual' || langMode === 'kn') && (
                            <p className="text-xs font-kannada text-amber-200/90">{q.statementKn}</p>
                          )}
                        </div>

                        {/* Choice Buttons */}
                        <div className="flex gap-1 shrink-0">
                          <button
                            onClick={() => handleQuizSelect(q.id, true, q.isGenuine)}
                            className={`px-2 py-1 rounded text-xs font-bold transition-all ${
                              selectedQuizAnswers[q.id] === true
                                ? 'bg-emerald-600 text-white shadow'
                                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                            }`}
                            title="Tick as True"
                          >
                            ✓ True
                          </button>
                          <button
                            onClick={() => handleQuizSelect(q.id, false, q.isGenuine)}
                            className={`px-2 py-1 rounded text-xs font-bold transition-all ${
                              selectedQuizAnswers[q.id] === false
                                ? 'bg-rose-600 text-white shadow'
                                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                            }`}
                            title="Tick as False"
                          >
                            ✗ False
                          </button>
                        </div>
                      </div>

                      {/* Explanation Reveal */}
                      {showQuizExplanations[q.id] && (
                        <div className={`mt-2 pt-2 border-t text-[11px] ${
                          isCorrect ? 'border-emerald-800 text-emerald-300' : 'border-rose-800 text-rose-300'
                        }`}>
                          <p className="font-medium">
                            {isCorrect ? '✅ Spot on!' : '💡 Textbook Insight:'} {q.explanationEn}
                          </p>
                          <p className="font-kannada text-amber-200/90 mt-0.5">
                            {q.explanationKn}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* SLIDE 10: EXCUSES BUSTER */}
          {slide.visualType === 'excuses' && (
            <motion.div
              key="excuses-layout"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-3"
            >
              <div className="bg-amber-950/40 border border-amber-500/30 p-2.5 rounded-xl text-xs text-amber-200 flex items-center justify-between">
                <span>💥 Click any excuse to break it into genuine courage:</span>
                <span className="font-bold text-amber-400">
                  Busted: {Object.values(bustedExcuses).filter(Boolean).length} / 5
                </span>
              </div>

              <div className="space-y-2">
                {[
                  { excuseEn: '"It was not my fault!"', excuseKn: '"ನನ್ನ ತಪ್ಪಲ್ಲ!"', solutionEn: '"I contributed to this problem, and I will fix it."', solutionKn: '"ಈ ಸಮಸ್ಯೆಯಲ್ಲಿ ನನ್ನ ಪಾಲೂ ಇದೆ, ನಾನೇ ಸರಿಪಡಿಸುವೆ."' },
                  { excuseEn: '"I was only joking!"', excuseKn: '"ನಾನು ತಮಾಷೆ ಮಾಡಿದೆ ಅಷ್ಟೇ!"', solutionEn: '"My joke hurt your feelings. Hurting someone is not funny."', solutionKn: '"ನನ್ನ ತಮಾಷೆ ನಿನ್ನ ಮನಸ್ಸಿಗೆ ನೋವು ತಂದಿದೆ. ನೋಯಿಸುವುದು ತಮಾಷೆಯಲ್ಲ."' },
                  { excuseEn: '"You are making a big deal out of nothing!"', excuseKn: '"ನೀನೇ ಸುಮ್ನೆ ದೊಡ್ಡದು ಮಾಡ್ತಿದ್ದೀಯ!"', solutionEn: '"I see this matters deeply to you, and I respect that."', solutionKn: '"ಇದು ನಿನಗೆ ಎಷ್ಟು ನೋವು ತಂದಿದೆ ಎಂದು ಅರ್ಥವಾಗುತ್ತಿದೆ."' },
                  { excuseEn: '"Everyone else was doing it too!"', excuseKn: '"ಎಲ್ಲರೂ ಹಾಗೇ ಮಾಡ್ತಿದ್ರು!"', solutionEn: '"Peer pressure is no excuse. I own my choices."', solutionKn: '"ಬೇರೆಯವರು ಮಾಡಿದರು ಎಂಬುದು ನೆಪವಲ್ಲ. ನನ್ನ ನಡತೆಗೆ ನಾನೇ ಹೊಣೆ."' },
                  { excuseEn: '"I said sorry already, stop nagging!"', excuseKn: '"ಸಾರಿ ಹೇಳಿದ್ನಲ್ಲ, ಇನ್ನು ಯಾಕೆ ಕಾಡ್ತೀಯ?"', solutionEn: '"Rebuilding trust takes time. I will show you through actions."', solutionKn: '"ವಿಶ್ವಾಸ ಮರಳಿ ಗಳಿಸಲು ಸಮಯ ಬೇಕು. ನನ್ನ ನಡತೆಯಿಂದ ತೋರಿಸುವೆ."' }
                ].map((item, idx) => {
                  const isBusted = bustedExcuses[idx];
                  return (
                    <button
                      key={idx}
                      onClick={() => handleBustExcuse(idx)}
                      className={`w-full p-3 rounded-xl text-left border transition-all flex items-center justify-between gap-3 ${
                        isBusted
                          ? 'bg-emerald-950/60 border-emerald-400 shadow-md'
                          : 'bg-slate-900 border-slate-700 hover:border-amber-400'
                      }`}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-rose-400 line-through">
                            {item.excuseEn}
                          </span>
                          <span className="text-xs font-kannada text-rose-300/80">
                            ({item.excuseKn})
                          </span>
                        </div>
                        {isBusted && (
                          <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-1.5 pt-1.5 border-t border-emerald-800"
                          >
                            <p className="text-xs font-bold text-emerald-300">
                              ➔ Transform: {item.solutionEn}
                            </p>
                            <p className="text-xs font-kannada text-amber-200 mt-0.5">
                              ➔ ನೈಜ ಮಾತು: {item.solutionKn}
                            </p>
                          </motion.div>
                        )}
                      </div>
                      <div className={`px-2.5 py-1 rounded-lg text-xs font-bold shrink-0 ${
                        isBusted ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-amber-400'
                      }`}>
                        {isBusted ? 'Busted! ✨' : 'Click to Bust 🔨'}
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* SLIDE 11: PERSPECTIVE TAKING */}
          {slide.visualType === 'perspective' && (
            <motion.div
              key="perspective-layout"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/40 space-y-3">
                <div className="flex items-center gap-2 pb-2 border-b border-indigo-700/50">
                  <ShieldCheck className="w-5 h-5 text-indigo-400" />
                  <h4 className="font-bold text-indigo-200 text-sm md:text-base">
                    The Person Giving the Apology (ಕ್ಷಮೆ ಕೇಳುವವರು)
                  </h4>
                </div>
                <div className="space-y-2 text-xs">
                  {[
                    { en: 'Relieves the inner poison of guilt and secret anxiety', kn: 'ಅಪರಾಧ ಪ್ರಜ್ಞೆ ಮತ್ತು ಆತಂಕದ ಭಾರದಿಂದ ಮುಕ್ತಿ' },
                    { en: 'Builds authentic self-respect and moral courage', kn: 'ನೈತಿಕ ಧೈರ್ಯ ಮತ್ತು ನಿಜವಾದ ಆತ್ಮಗೌರವ ವೃದ್ಧಿ' },
                    { en: 'Breaks the dangerous habit of lying and hiding mistakes', kn: 'ಸುಳ್ಳು ಹೇಳಿ ಮುಚ್ಚಿಡುವ ದುರಭ್ಯಾಸದಿಂದ ಬಿಡುಗಡೆ' }
                  ].map((pt, i) => (
                    <div key={i} className="p-2 rounded-xl bg-slate-900/70 border border-indigo-900/50">
                      <p className="font-semibold text-slate-200">{pt.en}</p>
                      <p className="text-indigo-300 font-kannada text-[11px] mt-0.5">{pt.kn}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-teal-950/40 border border-teal-500/40 space-y-3">
                <div className="flex items-center gap-2 pb-2 border-b border-teal-700/50">
                  <HeartHandshake className="w-5 h-5 text-teal-400" />
                  <h4 className="font-bold text-teal-200 text-sm md:text-base">
                    The Person Receiving the Apology (ಸ್ವೀಕರಿಸುವವರು)
                  </h4>
                </div>
                <div className="space-y-2 text-xs">
                  {[
                    { en: 'Feels validated, respected, and emotionally safe again', kn: 'ತಮ್ಮ ನೋವಿಗೆ ಬೆಲೆ ಸಿಕ್ಕು ಭದ್ರತೆಯ ಭಾವನೆ' },
                    { en: 'Removes the dread of repeated disrespect or betrayal', kn: 'ಮತ್ತೆ ನೋವಾಗುವುದಿಲ್ಲ ಎಂಬ ಭರವಸೆ' },
                    { en: 'Dissolves lingering bitterness so friendship can resume', kn: 'ಸಿಟ್ಟು ಕರಗಿ ಸ್ನೇಹದ ಹಾದಿ ಸುಗಮ' }
                  ].map((pt, i) => (
                    <div key={i} className="p-2 rounded-xl bg-slate-900/70 border border-teal-900/50">
                      <p className="font-semibold text-slate-200">{pt.en}</p>
                      <p className="text-teal-300 font-kannada text-[11px] mt-0.5">{pt.kn}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* SLIDE 12: REFLECTION CLOUD (TEXTBOOK PAGE 10 & 11) */}
          {slide.visualType === 'reflection_cloud' && (
            <motion.div
              key="reflection-cloud-layout"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-4"
            >
              <div className="relative p-6 md:p-8 rounded-3xl bg-gradient-to-br from-sky-950 via-slate-900 to-indigo-950 border-2 border-dashed border-sky-400 shadow-2xl text-center overflow-hidden">
                <div className="absolute top-3 right-3 text-2xl">✨</div>
                <div className="absolute bottom-3 left-3 text-2xl">🌟</div>

                <span className="inline-block px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold uppercase tracking-wider mb-3">
                  Textbook Golden Thought • ಚಿಂತನೆಯ ಬಲೂನ್
                </span>

                <blockquote className="text-base md:text-xl font-bold text-white font-serif max-w-2xl mx-auto leading-relaxed">
                  "When I apologize without excuses and change my harmful behavior, I build trust and show true accountability."
                </blockquote>

                <p className="text-sm md:text-lg font-bold font-kannada text-amber-300 max-w-2xl mx-auto mt-3 leading-relaxed">
                  "ನಾನು ಯಾವುದೇ ನೆಪ ಹೇಳದೆ ಕ್ಷಮೆಯಾಚಿಸಿದಾಗ ಮತ್ತು ನನ್ನ ನಡವಳಿಕೆಯನ್ನು ಬದಲಾಯಿಸಿಕೊಂಡಾಗ, ವಿಶ್ವಾಸವನ್ನು ಗಳಿಸುತ್ತೇನೆ ಮತ್ತು ನಿಜವಾದ ಹೊಣೆಗಾರಿಕೆಯನ್ನು ತೋರಿಸುತ್ತೇನೆ."
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  {slide.bulletsEn?.map((bullet, idx) => (
                    <span key={idx} className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-200 border border-slate-700">
                      {bullet}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-44">
                <ReflectionCloudIllustration />
              </div>
            </motion.div>
          )}

          {/* SLIDE 13: THINK AND DO (STUDENT ACTION JOURNAL) */}
          {slide.visualType === 'think_and_do' && (
            <motion.div
              key="think-and-do-layout"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 md:p-6 rounded-2xl bg-slate-900 border border-indigo-500/30 space-y-4 shadow-xl"
            >
              <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm md:text-base text-white">Your Personal Action Journal (ಯೋಚಿಸಿ ಮತ್ತು ಮಾಡಿ)</h4>
                  <p className="text-xs text-slate-400">Write your commitment to someone you might have hurt</p>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Workbook Page 10 & 11
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    1. Who did you hurt? (ಸ್ನೇಹಿತರು / ಒಡಹುಟ್ಟಿದವರು / ಪೋಷಕರು):
                  </label>
                  <input
                    type="text"
                    value={journalHurtPerson}
                    onChange={(e) => setJournalHurtPerson(e.target.value)}
                    placeholder="e.g., My sister Kavya, My friend Sameer..."
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    2. One small action you will take today to make it right (ಸರಿಪಡಿಸಲು ಕೈಗೊಳ್ಳುವ ಒಂದು ಕ್ರಮ):
                  </label>
                  <textarea
                    rows={2}
                    value={journalAction}
                    onChange={(e) => setJournalAction(e.target.value)}
                    placeholder="e.g., I will return the borrowed book with a polite handwritten note, and apologize without bringing up excuses..."
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-slate-400">Your journal entry stays safe on your device.</span>
                  <button
                    onClick={() => {
                      sound.playCorrect();
                      setJournalSaved(true);
                      confetti({ particleCount: 30, spread: 60 });
                    }}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all active:scale-95"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Save My Action Pledge</span>
                  </button>
                </div>

                {journalSaved && (
                  <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-emerald-200 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Wonderful! You have taken the first step toward true courage and accountability.</span>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* SLIDE 14: ROLEPLAY SCENARIOS */}
          {slide.visualType === 'roleplay' && slide.roleplayData && (
            <motion.div
              key="roleplay-layout"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-3"
            >
              {/* Scenario Selector Tabs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {slide.roleplayData.map((sc, i) => (
                  <button
                    key={sc.id}
                    onClick={() => { sound.playPop(); setActiveRolePlayIndex(i); }}
                    className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                      activeRolePlayIndex === i
                        ? 'bg-amber-950/60 border-amber-400 text-amber-200 font-bold shadow'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span className="text-[10px] text-amber-400 font-mono block">Scenario {i + 1}</span>
                    <span className="line-clamp-1">{sc.titleEn}</span>
                  </button>
                ))}
              </div>

              {/* Active Scenario Card */}
              {slide.roleplayData[activeRolePlayIndex] && (
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">The Situation / ಸನ್ನಿವೇಶ:</span>
                    <p className="text-xs md:text-sm font-semibold text-white mt-0.5">
                      {slide.roleplayData[activeRolePlayIndex].situationEn}
                    </p>
                    <p className="text-xs font-kannada text-amber-200 mt-1">
                      {slide.roleplayData[activeRolePlayIndex].situationKn}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    {/* Bad Response */}
                    <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-800/50 space-y-1.5">
                      <div className="flex items-center gap-1.5 text-rose-400 font-bold">
                        <XCircle className="w-4 h-4" />
                        <span>Immature Defensive Reaction</span>
                      </div>
                      <blockquote className="text-rose-200 font-medium italic">
                        "{slide.roleplayData[activeRolePlayIndex].badResponseEn}"
                      </blockquote>
                      <p className="font-kannada text-rose-300 text-[11px]">
                        "{slide.roleplayData[activeRolePlayIndex].badResponseKn}"
                      </p>
                      <p className="text-[10px] text-slate-400 border-t border-rose-900/60 pt-1 mt-1">
                        Why Bad: {slide.roleplayData[activeRolePlayIndex].badWhyEn}
                      </p>
                    </div>

                    {/* Good Response */}
                    <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/50 space-y-1.5">
                      <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Sincere STARS Apology</span>
                      </div>
                      <blockquote className="text-emerald-200 font-medium italic">
                        "{slide.roleplayData[activeRolePlayIndex].goodResponseEn}"
                      </blockquote>
                      <p className="font-kannada text-emerald-300 text-[11px]">
                        "{slide.roleplayData[activeRolePlayIndex].goodResponseKn}"
                      </p>
                      <p className="text-[10px] text-emerald-400/90 border-t border-emerald-900/60 pt-1 mt-1">
                        Why Good: {slide.roleplayData[activeRolePlayIndex].goodWhyEn}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SLIDE 15: THE APOLOGY GARDEN */}
          {slide.visualType === 'garden' && (
            <motion.div
              key="garden-layout"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center"
            >
              <div className="lg:col-span-6 space-y-3">
                <div className="p-4 rounded-2xl bg-slate-900 border border-emerald-500/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-emerald-300 flex items-center gap-2">
                      <Flower2 className="w-4 h-4 text-emerald-400" />
                      <span>Grow the Friendship Garden</span>
                    </h4>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
                      {bloomedFlowers.length} Flowers Bloomed
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Just as seeds need water, human relationships need sincere apologies to bloom again after mistakes.
                  </p>
                  <p className="text-xs font-kannada text-amber-200">
                    ಪ್ರತಿಯೊಂದು ಪ್ರಾಮಾಣಿಕ ಕ್ಷಮೆಯೂ ಸ್ನೇಹದ ಗಿಡಕ್ಕೆ ನೀರೆರೆದು ಅರಳಿಸಿದಂತೆ.
                  </p>
                  <button
                    onClick={handleWaterGarden}
                    className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-xs shadow-md transition-all active:scale-95"
                  >
                    <Droplets className="w-4 h-4" />
                    <span>Water with Sincere Action (+ Bloom Flower)</span>
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {bloomedFlowers.map((fl, idx) => (
                    <span key={idx} className="text-xs px-2.5 py-1 rounded-full bg-slate-900 text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5 shadow">
                      <span>🌸</span>
                      <span>{fl}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6">
                <GardenIllustration />
              </div>
            </motion.div>
          )}

          {/* SLIDE 16: SUMMARY & EXPORT */}
          {slide.visualType === 'summary' && (
            <motion.div
              key="summary-layout"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-amber-500/40 shadow-2xl space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2 border-b border-slate-700/60 pb-3">
                  <div className="flex items-center gap-2">
                    <Award className="w-6 h-6 text-amber-400" />
                    <div>
                      <h4 className="font-bold text-base text-white">Lesson Completed! (ಅಧ್ಯಾಯ ಸಂಪೂರ್ಣ)</h4>
                      <p className="text-xs text-slate-400">Karnataka Class 7 Value Education Chapter 2.1</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      sound.playPop();
                      onOpenGoogleSlidesModal();
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-lg transition-all active:scale-95"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                      <path d="M7 10h10v2H7zm0-3h10v2H7zm0 6h7v2H7z"/>
                    </svg>
                    <span>Export to Google Slides Presentation</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                  {slide.bulletsEn?.map((bullet, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-200">{bullet}</p>
                        <p className="font-kannada text-amber-200/90 text-[11px] mt-0.5">{slide.bulletsKn?.[idx]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* UNIT 1: CLASSROOM WALLS & KINDNESS JAR */}
          {slide.visualType === 'classroom_walls' && (
            <motion.div key="walls-layout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full">
              <ClassroomWallsVisual />
            </motion.div>
          )}

          {/* UNIT 1: DIGNITY OF LABOUR */}
          {slide.visualType === 'dignity_of_labour' && (
            <motion.div key="labour-layout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full">
              <WorkersPrideVisual />
            </motion.div>
          )}

          {/* UNIT 1: STEPS OF GROWTH */}
          {slide.visualType === 'steps_growth' && (
            <motion.div key="growth-layout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full">
              <StepsGrowthVisual />
            </motion.div>
          )}

          {/* UNIT 1: TARA'S FIRE */}
          {slide.visualType === 'tara_fire' && (
            <motion.div key="tara-layout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full">
              <TaraFireVisual />
            </motion.div>
          )}

          {/* UNIT 3: SADNESS CIRCLE */}
          {slide.visualType === 'sadness_circle' && (
            <motion.div key="sadness-layout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full">
              <SadnessCircleVisual />
            </motion.div>
          )}

          {/* UNIT 3: POSITIVE SELF-TALK */}
          {slide.visualType === 'positive_talk' && (
            <motion.div key="pos-talk-layout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full">
              <PositiveTalkVisual />
            </motion.div>
          )}

          {/* UNIT 4: COMPASSION PUPPY */}
          {slide.visualType === 'compassion_puppy' && (
            <motion.div key="puppy-layout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full">
              <CompassionPuppyVisual />
            </motion.div>
          )}

          {/* UNIT 5: RAINBOW GENDER */}
          {slide.visualType === 'rainbow_gender' && (
            <motion.div key="rainbow-layout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full">
              <RainbowGenderVisual />
            </motion.div>
          )}

          {/* UNIT 7: TAP MAN WATER */}
          {slide.visualType === 'tapman_water' && (
            <motion.div key="tapman-layout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full">
              <TapManWaterVisual />
            </motion.div>
          )}

          {/* UNIT 8: GREEN DIWALI */}
          {slide.visualType === 'green_diwali' && (
            <motion.div key="diwali-layout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full">
              <GreenDiwaliVisual />
            </motion.div>
          )}

          {/* UNIT 9: VOTING BOOTH */}
          {slide.visualType === 'voting_booth' && (
            <motion.div key="vote-layout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full">
              <VotingBoothVisual />
            </motion.div>
          )}

          {/* UNIT 9: CONSUMER RIGHTS */}
          {slide.visualType === 'consumer_rights' && (
            <motion.div key="consumer-layout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full">
              <ConsumerRightsVisual />
            </motion.div>
          )}

          {/* UNIT 10: PERSONAL SAFETY & NO-GO-TELL */}
          {slide.visualType === 'personal_safety_rules' && (
            <motion.div key="safety-layout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full">
              <PersonalSafetyVisual />
            </motion.div>
          )}

          {/* UNIT 11: HEALTH TRIANGLE */}
          {slide.visualType === 'health_triangle' && (
            <motion.div key="health-layout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full">
              <HealthTriangleVisual />
            </motion.div>
          )}

          {/* UNIT 11: NATIONAL EMBLEM */}
          {slide.visualType === 'national_emblem' && (
            <motion.div key="emblem-layout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full">
              <NationalEmblemVisual />
            </motion.div>
          )}

          {/* KARNATAKA HERITAGE VISUALS */}
          {slide.visualType === 'basavanna_kayaka' && (
            <motion.div key="kayaka-layout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full">
              <BasavannaKayakaVisual />
            </motion.div>
          )}

          {slide.visualType === 'thimmakka_trees' && (
            <motion.div key="thimmakka-layout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full">
              <ThimmakkaTreesVisual />
            </motion.div>
          )}

          {slide.visualType === 'visvesvaraya_dam' && (
            <motion.div key="krs-dam-layout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full">
              <VisvesvarayaDamVisual />
            </motion.div>
          )}

          {slide.visualType === 'obavva_bravery' && (
            <motion.div key="obavva-layout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full">
              <ObavvaBraveryVisual />
            </motion.div>
          )}

          {slide.visualType === 'kabaddi_arena' && (
            <motion.div key="kabaddi-layout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full">
              <KabaddiArenaVisual />
            </motion.div>
          )}

          {slide.visualType === 'mankuthimma_vachana' && (
            <motion.div key="mankuthimma-layout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full">
              <MankuthimmaVachanaVisual />
            </motion.div>
          )}

          {slide.visualType === 'panchayat_election' && (
            <motion.div key="panchayat-layout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full">
              <VotingBoothVisual />
            </motion.div>
          )}

          {slide.visualType === 'consumer_check' && (
            <motion.div key="consumer-check-layout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full">
              <ConsumerRightsVisual />
            </motion.div>
          )}

          {slide.visualType === 'body_safety' && (
            <motion.div key="body-safety-layout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full">
              <PersonalSafetyVisual />
            </motion.div>
          )}

          {/* FALLBACK/GENERAL BULLETS LAYOUT FOR ALL OTHER VISUAL TYPES */}
          {![
            'cover', 'concept', 'pillars', 'compare', 'formula', 'story1', 'poem', 'quiz',
            'story2', 'excuses', 'perspective', 'reflection_cloud', 'think_and_do', 'roleplay',
            'garden', 'summary', 'classroom_walls', 'dignity_of_labour', 'steps_growth',
            'tara_fire', 'sadness_circle', 'positive_talk', 'compassion_puppy', 'rainbow_gender',
            'tapman_water', 'green_diwali', 'voting_booth', 'consumer_rights', 'personal_safety_rules',
            'health_triangle', 'national_emblem',
            'basavanna_kayaka', 'thimmakka_trees', 'visvesvaraya_dam', 'obavva_bravery',
            'kabaddi_arena', 'mankuthimma_vachana', 'panchayat_election', 'consumer_check', 'body_safety'
          ].includes(slide.visualType) && (
            <motion.div
              key={`general-${slide.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center"
            >
              <div className="lg:col-span-7 space-y-2.5">
                {slide.bulletsEn?.map((bullet, idx) => (
                  <div 
                    key={idx} 
                    className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 transition-all flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      {(langMode === 'bilingual' || langMode === 'en') && (
                        <p className="text-xs md:text-sm font-semibold text-slate-200 leading-snug">{bullet}</p>
                      )}
                      {(langMode === 'bilingual' || langMode === 'kn') && (
                        <p className="text-xs font-kannada text-amber-200/95 mt-1 leading-snug">{slide.bulletsKn?.[idx]}</p>
                      )}
                    </div>
                  </div>
                ))}

                {slide.quoteEn && (
                  <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-600/5 to-transparent border border-amber-500/30 flex items-start gap-2.5">
                    <Quote className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      {(langMode === 'bilingual' || langMode === 'en') && (
                        <p className="text-xs text-amber-100 font-medium italic">"{slide.quoteEn}"</p>
                      )}
                      {(langMode === 'bilingual' || langMode === 'kn') && (
                        <p className="text-xs text-amber-300 font-kannada mt-1">"{slide.quoteKn}"</p>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="lg:col-span-5 h-full flex flex-col justify-center">
                <div className="p-5 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 shadow-xl flex flex-col items-center text-center space-y-3">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-3xl shadow-inner">
                    ✨
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">{slide.titleEn}</h4>
                    <p className="font-kannada text-xs text-amber-300 mt-1">{slide.titleKn}</p>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                    {slide.subtitleEn || 'Interactive Value Education & Physical Wellbeing Activity Module'}
                  </p>
                  <div className="pt-2 border-t border-slate-800 w-full flex items-center justify-center gap-2">
                    <span className="text-[11px] px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 font-mono">
                      {slide.categoryEn.split('•')[0]}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Teacher / Facilitator Note Drawer at Bottom (Toggled from Navbar) */}
      {showTeacherNotes && slide.teacherNoteEn && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-3 p-3 rounded-xl bg-blue-950/60 border border-blue-500/40 text-xs space-y-1 select-text"
        >
          <div className="flex items-center gap-1.5 font-bold text-blue-300">
            <Lightbulb className="w-4 h-4 text-amber-400" />
            <span>Teacher's Facilitation Guide (ಶಿಕ್ಷಕರ ಬೋಧನಾ ಮಾರ್ಗದರ್ಶಿ):</span>
          </div>
          <p className="text-slate-200 pl-5">{slide.teacherNoteEn}</p>
          <p className="text-amber-200/90 font-kannada pl-5">{slide.teacherNoteKn}</p>
        </motion.div>
      )}
    </div>
  );
};
