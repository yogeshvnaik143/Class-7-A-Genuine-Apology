import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  BookOpen, 
  Search, 
  ChevronRight, 
  Sparkles 
} from 'lucide-react';
import { UNITS_DATA } from '../data/chaptersData';
import { MASTER_SLIDES_DATA } from '../data/slidesData';
import { sound } from '../utils/audio';

interface ChapterSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlideIndex: number;
  onSelectSlideIndex: (index: number) => void;
  onSelectUnit?: (unitId: string) => void;
}

export const ChapterSelectorModal: React.FC<ChapterSelectorModalProps> = ({
  isOpen,
  onClose,
  currentSlideIndex,
  onSelectSlideIndex,
  onSelectUnit
}) => {
  const [selectedUnitId, setSelectedUnitId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  if (!isOpen) return null;

  const filteredUnits = UNITS_DATA.filter(unit => {
    if (selectedUnitId !== 'all' && unit.id !== selectedUnitId) return false;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const matchUnit = unit.titleEn.toLowerCase().includes(q) || unit.titleKn.includes(q);
    const matchChapter = unit.chapters.some(ch => 
      ch.titleEn.toLowerCase().includes(q) || 
      ch.titleKn.includes(q) || 
      ch.summaryEn.toLowerCase().includes(q) ||
      ch.summaryKn.includes(q)
    );
    return matchUnit || matchChapter;
  });

  const handleJumpToChapter = (chapterId: string) => {
    sound.playPop();
    const firstSlideIndex = MASTER_SLIDES_DATA.findIndex(s => s.chapterId === chapterId);
    if (firstSlideIndex !== -1) {
      onSelectSlideIndex(firstSlideIndex);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-2.5 sm:p-5">
      <motion.div 
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="w-full max-w-5xl max-h-[92vh] bg-slate-900 border border-slate-700 rounded-3xl p-4 sm:p-7 shadow-2xl flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3.5 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 font-black shadow-lg shrink-0">
              <BookOpen className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <h3 className="text-base sm:text-xl font-bold text-white flex items-center gap-2">
                <span>Textbook Table of Contents</span>
                <span className="text-amber-400 font-kannada text-sm sm:text-base hidden sm:inline">| ಪಠ್ಯಪುಸ್ತಕದ ಪರಿವಿಡಿ</span>
              </h3>
              <p className="text-xs text-slate-400">
                All 11 Units & Activities • Physical Education, Health & Value Education 2026-2027
              </p>
            </div>
          </div>
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => { sound.playPop(); onClose(); }}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Filter Toolbar: Unit Tabs & Search Input */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 py-3 border-b border-slate-800">
          {/* Unit pill filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none text-xs">
            <button
              onClick={() => { sound.playPop(); setSelectedUnitId('all'); }}
              className={`min-h-[38px] px-3 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-all ${
                selectedUnitId === 'all'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              All 11 Units
            </button>
            {UNITS_DATA.map(unit => (
              <button
                key={unit.id}
                onClick={() => { sound.playPop(); setSelectedUnitId(unit.id); }}
                className={`min-h-[38px] px-2.5 py-1.5 rounded-xl whitespace-nowrap transition-all flex items-center gap-1 text-xs ${
                  selectedUnitId === unit.id
                    ? 'bg-emerald-600 text-white font-bold shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <span>U{unit.unitNumber}:</span>
                <span className="truncate max-w-[120px]">{unit.titleEn.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full sm:w-64 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search chapters, topics, ಕಬಡ್ಡಿ..."
              className="w-full min-h-[40px] bg-slate-800 border border-slate-700 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-all"
            />
          </div>
        </div>

        {/* Units & Chapters List */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-1">
          {filteredUnits.map(unit => (
            <div 
              key={unit.id}
              className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all space-y-3"
            >
              {/* Unit Header */}
              <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-slate-800/80">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="text-xs font-black px-2 py-0.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Unit {unit.unitNumber} • ಭಾಗ {unit.unitNumber}
                  </span>
                  <h4 className="font-bold text-sm text-white">{unit.titleEn}</h4>
                  <span className="text-xs font-kannada text-amber-300 font-semibold">{unit.titleKn}</span>
                </div>
                <div className="flex items-center gap-2">
                  {onSelectUnit && (
                    <motion.button
                      whileTap={{ scale: 0.94 }}
                      onClick={() => {
                        sound.playPop();
                        onSelectUnit(unit.id);
                        onClose();
                      }}
                      className="min-h-[38px] px-3 py-1 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-bold transition-all"
                    >
                      Teach Unit (೧೮ ಸ್ಲೈಡ್‌ಗಳು) →
                    </motion.button>
                  )}
                  <span className="text-[11px] text-slate-400">
                    {unit.chapters.length} Chapter{unit.chapters.length > 1 ? 's' : ''}
                  </span>
                </div>
              </div>

              {/* Chapters Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {unit.chapters.map(ch => {
                  const firstIndex = MASTER_SLIDES_DATA.findIndex(s => s.chapterId === ch.id);
                  const isCurrent = MASTER_SLIDES_DATA[currentSlideIndex]?.chapterId === ch.id;

                  return (
                    <motion.button
                      key={ch.id}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => handleJumpToChapter(ch.id)}
                      className={`p-3 rounded-xl border text-left transition-all group flex flex-col justify-between min-h-[110px] ${
                        isCurrent
                          ? 'bg-emerald-950/60 border-emerald-400 ring-2 ring-emerald-500/30 shadow-lg'
                          : 'bg-slate-800/80 border-slate-700/80 hover:bg-slate-800 hover:border-emerald-500/50'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-mono font-bold text-amber-400 uppercase">
                            Ch {ch.chapterNumber}
                          </span>
                          {isCurrent && (
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500 text-slate-950 font-black">
                              ACTIVE
                            </span>
                          )}
                        </div>

                        <h5 className="font-bold text-xs text-white group-hover:text-emerald-300 transition-colors line-clamp-1">
                          {ch.titleEn}
                        </h5>
                        <p className="font-kannada text-[11px] text-amber-200/90 line-clamp-1 mt-0.5">
                          {ch.titleKn}
                        </p>
                        <p className="text-[10px] text-slate-400 line-clamp-2 mt-1.5 leading-relaxed">
                          {ch.summaryEn}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-2 mt-2 border-t border-slate-700/50 text-[10px] text-slate-400">
                        <span>Slide {firstIndex + 1}</span>
                        <span className="flex items-center gap-0.5 text-emerald-400 font-semibold group-hover:translate-x-0.5 transition-transform">
                          <span>Open Chapter</span>
                          <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
