import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  Sparkles, 
  HeartHandshake, 
  Brain, 
  Users, 
  MessageCircle, 
  ShieldCheck, 
  Wrench, 
  Trees, 
  Vote, 
  ShieldAlert, 
  Flag, 
  Search, 
  ChevronRight, 
  Award, 
  Play, 
  Layers, 
  Compass, 
  Volume2, 
  VolumeX,
  Languages
} from 'lucide-react';
import { UnitOverview, LanguageMode } from '../types';
import { UNITS_METADATA, TOTAL_SLIDES_COUNT } from '../data/units';
import { sound } from '../utils/audio';

interface HomePageProps {
  onSelectUnit: (unitId: string) => void;
  langMode: LanguageMode;
  setLangMode: (mode: LanguageMode) => void;
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  onOpenGoogleSlidesModal: () => void;
}

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Sparkles,
  HeartHandshake,
  Brain,
  Users,
  MessageCircle,
  ShieldCheck,
  Wrench,
  Trees,
  Vote,
  ShieldAlert,
  Flag
};

const THEME_STYLES: Record<string, {
  border: string;
  badgeBg: string;
  badgeText: string;
  accent: string;
  hoverBorder: string;
  glow: string;
}> = {
  amber: {
    border: 'border-amber-500/30',
    badgeBg: 'bg-amber-500/15',
    badgeText: 'text-amber-300',
    accent: 'text-amber-400',
    hoverBorder: 'hover:border-amber-400',
    glow: 'from-amber-500/10'
  },
  blue: {
    border: 'border-blue-500/30',
    badgeBg: 'bg-blue-500/15',
    badgeText: 'text-blue-300',
    accent: 'text-blue-400',
    hoverBorder: 'hover:border-blue-400',
    glow: 'from-blue-500/10'
  },
  emerald: {
    border: 'border-emerald-500/30',
    badgeBg: 'bg-emerald-500/15',
    badgeText: 'text-emerald-300',
    accent: 'text-emerald-400',
    hoverBorder: 'hover:border-emerald-400',
    glow: 'from-emerald-500/10'
  },
  rose: {
    border: 'border-rose-500/30',
    badgeBg: 'bg-rose-500/15',
    badgeText: 'text-rose-300',
    accent: 'text-rose-400',
    hoverBorder: 'hover:border-rose-400',
    glow: 'from-rose-500/10'
  },
  violet: {
    border: 'border-violet-500/30',
    badgeBg: 'bg-violet-500/15',
    badgeText: 'text-violet-300',
    accent: 'text-violet-400',
    hoverBorder: 'hover:border-violet-400',
    glow: 'from-violet-500/10'
  },
  indigo: {
    border: 'border-indigo-500/30',
    badgeBg: 'bg-indigo-500/15',
    badgeText: 'text-indigo-300',
    accent: 'text-indigo-400',
    hoverBorder: 'hover:border-indigo-400',
    glow: 'from-indigo-500/10'
  },
  teal: {
    border: 'border-teal-500/30',
    badgeBg: 'bg-teal-500/15',
    badgeText: 'text-teal-300',
    accent: 'text-teal-400',
    hoverBorder: 'hover:border-teal-400',
    glow: 'from-teal-500/10'
  },
  sky: {
    border: 'border-sky-500/30',
    badgeBg: 'bg-sky-500/15',
    badgeText: 'text-sky-300',
    accent: 'text-sky-400',
    hoverBorder: 'hover:border-sky-400',
    glow: 'from-sky-500/10'
  }
};

export const HomePage: React.FC<HomePageProps> = ({
  onSelectUnit,
  langMode,
  setLangMode,
  soundEnabled,
  setSoundEnabled,
  onOpenGoogleSlidesModal
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUnits = UNITS_METADATA.filter(unit => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      unit.titleEn.toLowerCase().includes(q) ||
      unit.titleKn.toLowerCase().includes(q) ||
      unit.subtitleEn.toLowerCase().includes(q) ||
      unit.subtitleKn.toLowerCase().includes(q) ||
      unit.heritageTagEn.toLowerCase().includes(q) ||
      unit.heritageTagKn.toLowerCase().includes(q)
    );
  });

  const handleUnitClick = (unitId: string) => {
    sound.playPop();
    onSelectUnit(unitId);
  };

  return (
    <div className="w-full min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Top Banner / Navigation */}
      <header className="sticky top-0 z-30 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 px-4 md:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          {/* Logo & Branding */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-amber-500/20">
              ೭
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-extrabold text-sm md:text-base text-white tracking-tight">
                  Karnataka Class 7 Value Education
                </h1>
                <span className="hidden sm:inline-block text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                  ೧೧ ಘಟಕಗಳು • 198 Slides
                </span>
              </div>
              <p className="font-kannada text-xs text-amber-300">
                ಕರ್ನಾಟಕ ಶಾಲಾ ಶಿಕ್ಷಣ • ಮೌಲ್ಯ ಶಿಕ್ಷಣ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆ
              </p>
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <div className="flex bg-slate-900 border border-slate-700/80 rounded-xl p-0.5 text-xs">
              <button
                onClick={() => { sound.playPop(); setLangMode('bilingual'); }}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                  langMode === 'bilingual' ? 'bg-amber-500 text-slate-950 font-bold shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                Dual / ದ್ವಿಭಾಷಾ
              </button>
              <button
                onClick={() => { sound.playPop(); setLangMode('kn'); }}
                className={`px-2 py-1 rounded-lg font-medium font-kannada transition-all ${
                  langMode === 'kn' ? 'bg-amber-500 text-slate-950 font-bold shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                ಕನ್ನಡ
              </button>
              <button
                onClick={() => { sound.playPop(); setLangMode('en'); }}
                className={`px-2 py-1 rounded-lg font-medium transition-all ${
                  langMode === 'en' ? 'bg-amber-500 text-slate-950 font-bold shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                English
              </button>
            </div>

            {/* Sound Toggle */}
            <button
              onClick={() => { sound.setEnabled(!soundEnabled); setSoundEnabled(!soundEnabled); }}
              className={`p-2 rounded-xl border transition-all ${
                soundEnabled ? 'bg-slate-900 border-slate-700 text-amber-400' : 'bg-slate-900 border-slate-800 text-slate-500'
              }`}
              title={soundEnabled ? 'Sound Enabled' : 'Sound Muted'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Google Slides Export */}
            <button
              onClick={() => { sound.playPop(); onOpenGoogleSlidesModal(); }}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-md transition-all active:scale-95"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                <path d="M7 10h10v2H7zm0-3h10v2H7zm0 6h7v2H7z"/>
              </svg>
              <span>Export Deck</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 md:px-8 pt-8 pb-6 border-b border-slate-800/60 bg-gradient-to-b from-slate-900/60 via-slate-950 to-slate-950">
        <div className="max-w-7xl mx-auto space-y-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Complete 11-Unit Karnataka Syllabus • ೧೮ ಸ್ಲೈಡ್‌ಗಳು ಪ್ರತಿ ಘಟಕಕ್ಕೆ</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Select a Unit to Begin Teaching
              </h2>
              <p className="text-base md:text-lg text-amber-300 font-kannada">
                ಬೋಧನೆಯನ್ನು ಪ್ರಾರಂಭಿಸಲು ನಿಮ್ಮ ಇಚ್ಛೆಯ ಘಟಕವನ್ನು ಆಯ್ಕೆಮಾಡಿ
              </p>
              <p className="text-xs md:text-sm text-slate-400 max-w-2xl leading-relaxed">
                Standard 16:9 widescreen presentation deck featuring 198 bilingual slides packed with Karnataka heritage, Vachanas, poems, quizzes, interactive role-plays, and moral wisdom.
              </p>
            </div>

            {/* Quick Action */}
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <button
                onClick={() => handleUnitClick('unit-1')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-xs md:text-sm shadow-xl shadow-emerald-500/20 transition-all active:scale-95"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Start from Unit 1 / ಮೊದಲ ಘಟಕದಿಂದ ಆರಂಭಿಸಿ</span>
              </button>
            </div>
          </div>

          {/* Search Bar & Stats Strip */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative w-full sm:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search unit, person (Thimmakka, Obavva, Basavanna, DVG)..."
                className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2 text-xs md:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Stats Pills */}
            <div className="flex items-center gap-2 text-xs text-slate-400 flex-wrap">
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-mono">
                <strong className="text-amber-400">11</strong> Units
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-mono">
                <strong className="text-emerald-400">{TOTAL_SLIDES_COUNT}</strong> Slides
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-mono">
                <strong className="text-blue-400">18</strong> Slides / Unit
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Units Grid */}
      <main className="flex-1 px-4 md:px-8 py-8 max-w-7xl mx-auto w-full">
        {filteredUnits.length === 0 ? (
          <div className="text-center py-16 space-y-3">
            <Compass className="w-12 h-12 text-slate-600 mx-auto" />
            <h3 className="text-base font-bold text-white">No Units Match "{searchQuery}"</h3>
            <p className="text-xs text-slate-400">Try searching for "Thimmakka", "Obavva", "Kayakave Kailasa", or "Quiz"</p>
            <button
              onClick={() => setSearchQuery('')}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white"
            >
              Clear Search Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredUnits.map((unit, index) => {
              const theme = THEME_STYLES[unit.theme] || THEME_STYLES.amber;
              const IconComponent = ICON_MAP[unit.iconName] || Sparkles;

              return (
                <motion.div
                  key={unit.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  whileHover={{ y: -4 }}
                  onClick={() => handleUnitClick(unit.id)}
                  className={`group relative rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900 to-slate-950 border ${theme.border} ${theme.hoverBorder} p-5 flex flex-col justify-between cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden`}
                >
                  {/* Subtle Background Glow */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${theme.glow} to-transparent rounded-bl-full pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity`} />

                  <div className="space-y-3 relative z-10">
                    {/* Header Strip: Unit Number Badge & Icon */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`text-[11px] font-mono font-extrabold uppercase px-2.5 py-0.5 rounded-full ${theme.badgeBg} ${theme.badgeText} border border-current/20`}>
                          Unit {unit.number} • ಘಟಕ {unit.number}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {unit.slideCount} Slides
                        </span>
                      </div>
                      <div className={`w-9 h-9 rounded-xl ${theme.badgeBg} flex items-center justify-center ${theme.accent} border border-current/20 group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Titles */}
                    <div>
                      {(langMode === 'bilingual' || langMode === 'en') && (
                        <h3 className="font-extrabold text-base md:text-lg text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                          {unit.titleEn}
                        </h3>
                      )}
                      {(langMode === 'bilingual' || langMode === 'kn') && (
                        <p className="font-kannada font-bold text-xs md:text-sm text-amber-200/90 mt-0.5 line-clamp-1">
                          {unit.titleKn}
                        </p>
                      )}
                    </div>

                    {/* Subtitle / Key topics */}
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {langMode === 'kn' ? unit.subtitleKn : unit.subtitleEn}
                    </p>

                    {/* Karnataka Heritage Tag */}
                    <div className="pt-1">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-lg bg-slate-800/80 text-amber-300 border border-amber-500/20">
                        <span>🏛️</span>
                        <span className="line-clamp-1">{langMode === 'kn' ? unit.heritageTagKn : unit.heritageTagEn}</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Footer: Launch Button */}
                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between relative z-10">
                    <span className="text-xs text-slate-400 group-hover:text-white transition-colors">
                      Enter Teaching Mode
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleUnitClick(unit.id);
                      }}
                      className={`flex items-center gap-1 text-xs font-bold ${theme.accent} group-hover:translate-x-1 transition-transform`}
                    >
                      <span>Teach</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-800/80 px-4 md:px-8 py-5 bg-slate-950 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Karnataka 7th Standard Moral & Value Education Digital Classroom</span>
          </div>
          <div className="flex items-center gap-4">
            <span>16:9 Widescreen Standard</span>
            <span>•</span>
            <span>198 Master Interactive Slides</span>
            <span>•</span>
            <span>All 11 Book Units</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
