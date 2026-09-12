import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Heart, 
  TreePine, 
  Droplets, 
  ShieldAlert, 
  Award, 
  Activity, 
  Flame, 
  BookOpen, 
  CheckCircle2, 
  RefreshCw 
} from 'lucide-react';
import { sound } from '../utils/audio';

// 1. Basavanna's Kayakave Kailasa Visual
export const BasavannaKayakaVisual: React.FC = () => {
  const [activeWork, setActiveWork] = useState(0);
  const professions = [
    { titleEn: 'Farmer (ರೈತ)', titleKn: 'ಅನ್ನದಾತ ರೈತ', descEn: 'Tills soil, feeds society with sweat and dignity.', descKn: 'ಬೆವರು ಸುರಿಸಿ ನಾಡಿಗೆ ಅನ್ನ ನೀಡುವ ಧನ್ಯತೆ.', icon: '🌾' },
    { titleEn: 'Weaver (ನೇಕಾರ)', titleKn: 'ವಸ್ತ್ರ ನೇಕಾರ', descEn: 'Weaves cotton and silk with rhythmic focus.', descKn: 'ತಾಳ್ಮೆಯಿಂದ ಸಮಾಜಕ್ಕೆ ವಸ್ತ್ರ ಒದಗಿಸುವ ಕಾಯಕ.', icon: '🧵' },
    { titleEn: 'Teacher (ಗುರು)', titleKn: 'ಜ್ಞಾನದಾತ ಶಿಕ್ಷಕ', descEn: 'Ignites minds with wisdom and truth.', descKn: 'ಮಕ್ಕಳಲ್ಲಿ ಸನ್ಮಾರ್ಗ ಮತ್ತು ಜ್ಞಾನ ಬಿತ್ತುವ ಸೇವೆ.', icon: '📚' },
    { titleEn: 'Sanitation Worker (ಪೌರಕಾರ್ಮಿಕ)', titleKn: 'ಪೌರಕಾರ್ಮಿಕ ಮಿತ್ರ', descEn: 'Keeps cities clean, the frontline guardian of health.', descKn: 'ನಗರವನ್ನು ಸ್ವಚ್ಛವಾಗಿಡುವ ಸಮಾಜದ ನಿಜವಾದ ರಕ್ಷಕ.', icon: '🧹' },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-950 border border-amber-500/30 text-xs">
      <div className="flex items-center justify-between pb-2 border-b border-amber-900/50">
        <div className="flex items-center gap-2">
          <span className="text-xl">🪔</span>
          <div>
            <h4 className="font-bold text-amber-300 text-xs sm:text-sm">“ಕಾಯಕವೇ ಕೈಲಾಸ” - Lord Basaveshwara</h4>
            <p className="text-slate-400 text-[10px]">Anubhava Mantapa 12th Century Karnataka Philosophy</p>
          </div>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono">Dignity of Labour</span>
      </div>

      {/* Interactive Profession Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-2">
        {professions.map((p, idx) => (
          <button
            key={idx}
            onClick={() => { sound.playPop(); setActiveWork(idx); }}
            className={`p-2 rounded-xl border text-left transition-all ${
              activeWork === idx
                ? 'bg-amber-950/80 border-amber-400 ring-2 ring-amber-500/40 shadow-lg'
                : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
            }`}
          >
            <span className="text-xl">{p.icon}</span>
            <p className="font-bold text-slate-200 mt-1 text-[11px] truncate">{p.titleEn}</p>
            <p className="font-kannada text-amber-300 text-[10px] truncate">{p.titleKn}</p>
          </button>
        ))}
      </div>

      {/* Active Spotlight */}
      <div className="p-3 rounded-xl bg-slate-950 border border-amber-500/30 flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-2xl shrink-0">
          {professions[activeWork].icon}
        </div>
        <div className="space-y-0.5 flex-1">
          <h5 className="font-bold text-amber-200 text-xs">{professions[activeWork].titleEn}</h5>
          <p className="text-[11px] text-slate-300">{professions[activeWork].descEn}</p>
          <p className="font-kannada text-amber-300/90 text-[11px]">{professions[activeWork].descKn}</p>
        </div>
      </div>

      <div className="p-2 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-center text-emerald-300 text-[10px]">
        "No honest work is low; no honest work is high. Honesty transforms duty into divinity."
      </div>
    </div>
  );
};

// 2. Saalumarada Thimmakka Visual (Mother of Trees)
export const ThimmakkaTreesVisual: React.FC = () => {
  const [wateredCount, setWateredCount] = useState(3);
  const totalTrees = 6;

  return (
    <div className="w-full h-full flex flex-col justify-between p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-slate-900 to-teal-950/40 border border-emerald-500/30 text-xs">
      <div className="flex items-center justify-between pb-2 border-b border-emerald-900/50">
        <div className="flex items-center gap-2">
          <TreePine className="w-5 h-5 text-emerald-400" />
          <div>
            <h4 className="font-bold text-emerald-300 text-xs sm:text-sm">Padmashri Saalumarada Thimmakka (ಸಾಲುಮರದ ತಿಮ್ಮಕ್ಕ)</h4>
            <p className="text-slate-400 text-[10px]">Planted and nurtured 385 majestic banyan trees between Hulikal and Kudur, Karnataka</p>
          </div>
        </div>
        <button
          onClick={() => {
            sound.playPop();
            setWateredCount(prev => (prev >= totalTrees ? 1 : prev + 1));
          }}
          className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] shadow transition-all active:scale-95"
        >
          <Droplets className="w-3.5 h-3.5" />
          <span>Water Banyan Tree ({wateredCount}/{totalTrees})</span>
        </button>
      </div>

      {/* Row of Banyan Trees */}
      <div className="grid grid-cols-6 gap-2 my-2">
        {Array.from({ length: totalTrees }).map((_, i) => {
          const isWatered = i < wateredCount;
          return (
            <motion.div
              key={i}
              initial={false}
              animate={{ scale: isWatered ? [1, 1.1, 1] : 0.95 }}
              className={`p-2 rounded-xl border flex flex-col items-center justify-center text-center transition-all ${
                isWatered
                  ? 'bg-emerald-950/70 border-emerald-400 shadow-md'
                  : 'bg-slate-950 border-slate-800 opacity-50'
              }`}
            >
              <span className="text-2xl">{isWatered ? '🌳' : '🌱'}</span>
              <span className="font-bold text-[9px] text-emerald-300 mt-1">Tree #{i + 1}</span>
              <span className="text-[8px] text-slate-400">{isWatered ? 'Flourishing' : 'Thirsty'}</span>
            </motion.div>
          );
        })}
      </div>

      <div className="p-2.5 rounded-xl bg-slate-950 border border-emerald-500/30 space-y-1">
        <p className="text-slate-300 text-[11px] leading-relaxed">
          Without wealth or formal schooling, Thimmakka treated trees as her own children, carrying water pots on foot for 4 kilometers every morning.
        </p>
        <p className="font-kannada text-amber-200/90 text-[11px] leading-relaxed">
          "ಮಕ್ಕಳಿಲ್ಲದ ದುಃಖವನ್ನು ಸಮಾಜಕ್ಕೆ ನೆರಳಾಗುವ ವೃಕ್ಷಗಳನ್ನಾಗಿ ಪರಿವರ್ತಿಸಿದ ಅಪ್ರತಿಮ ಪರಿಸರ ತಾಯಿ."
        </p>
      </div>
    </div>
  );
};

// 3. Sir M. Visvesvaraya Dam Visual
export const VisvesvarayaDamVisual: React.FC = () => {
  const [gateOpen, setGateOpen] = useState(true);

  return (
    <div className="w-full h-full flex flex-col justify-between p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-sky-950/40 via-slate-900 to-cyan-950/40 border border-sky-500/30 text-xs">
      <div className="flex items-center justify-between pb-2 border-b border-sky-900/50">
        <div className="flex items-center gap-2">
          <span className="text-xl">🌊</span>
          <div>
            <h4 className="font-bold text-sky-300 text-xs sm:text-sm">Sir M. Visvesvaraya & Kaveri River Basin</h4>
            <p className="text-slate-400 text-[10px]">Architect of Krishna Raja Sagara (KRS) Dam & Automated Sluice Floodgates</p>
          </div>
        </div>
        <button
          onClick={() => { sound.playPop(); setGateOpen(!gateOpen); }}
          className="px-2.5 py-1 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-bold text-[10px] shadow transition-all active:scale-95"
        >
          {gateOpen ? 'Close Sluice Gates' : 'Open Automatic Gates'}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2 items-center">
        <div className="p-3 rounded-xl bg-slate-950 border border-sky-500/30 space-y-1.5">
          <span className="font-bold text-sky-300 flex items-center gap-1 text-[11px]">
            <Droplets className="w-4 h-4 text-sky-400" /> Automatic Sluice Gates System (1903 Patent)
          </span>
          <p className="text-[11px] text-slate-300">
            Automated counter-weighted floodgates that open automatically during Kaveri flood peaks without wasting precious irrigation water.
          </p>
          <p className="font-kannada text-[10px] text-amber-200/90">
            ನೀರಿನ ಪ್ರತಿ ಹನಿಯನ್ನು ಮಂಡ್ಯ, ಮೈಸೂರು ಮತ್ತು ಬೆಂಗಳೂರಿನ ಜನರ ಕೃಷಿ ಮತ್ತು ಕುಡಿಯುವ ನೀರಿಗಾಗಿ ಸಂರಕ್ಷಿಸಿದ ಶಿಲ್ಪಿ.
          </p>
        </div>

        <div className="p-3 rounded-xl bg-slate-950 border border-cyan-500/30 space-y-1 text-center">
          <span className="text-3xl block">{gateOpen ? '💧 🌊 💧' : '🛑 🧱 🛑'}</span>
          <span className="font-bold text-cyan-300 text-xs">
            {gateOpen ? 'Status: Sustainable Kaveri Water Flow Active' : 'Status: Gates Sealed for Dry Season Reserve'}
          </span>
          <p className="text-[10px] text-slate-400">“Remember, your work may be only to sweep a railway crossing, but sweep it so clean that no other crossing in the world is swept cleaner.”</p>
        </div>
      </div>

      <div className="p-2 rounded-xl bg-slate-900 border border-sky-500/20 text-center text-sky-200 text-[10px]">
        Karnataka Heritage: Engineering combined with public welfare transforms arid lands into fertile green sanctuaries.
      </div>
    </div>
  );
};

// 4. Onake Obavva Bravery Visual
export const ObavvaBraveryVisual: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-rose-950/40 via-slate-900 to-amber-950/40 border border-rose-500/30 text-xs">
      <div className="flex items-center justify-between pb-2 border-b border-rose-900/50">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-rose-400" />
          <div>
            <h4 className="font-bold text-rose-300 text-xs sm:text-sm">Veera Vanithe Onake Obavva (ಒನಕೆ ಓಬವ್ವ)</h4>
            <p className="text-slate-400 text-[10px]">Chitradurga Fort’s Legendary Defense • Courage Beyond Fear</p>
          </div>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-mono">True Bravery</span>
      </div>

      <div className="my-2 p-3 rounded-xl bg-slate-950 border border-rose-500/30 flex items-center gap-3">
        <div className="w-14 h-14 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-2xl shrink-0">
          🪵
        </div>
        <div className="space-y-1">
          <h5 className="font-bold text-rose-200 text-xs">The Pestle of Valor (ಕಲ್ಲಿನ ಕೋಟೆಯ ಕಾವಲುಗಾರ್ತಿ)</h5>
          <p className="text-[11px] text-slate-300 leading-relaxed">
            When enemy soldiers crept through the secret rock crevice (Kindi), Obavva did not scream or panic. Armed only with her household pestle (Onake), she guarded the inlet with iron courage.
          </p>
          <p className="font-kannada text-[11px] text-amber-200/90 leading-relaxed">
            ಕೈಯಲ್ಲಿ ಆಯುಧವಿಲ್ಲದಿದ್ದರೂ, ನಾಡಿನ ರಕ್ಷಣೆಗಾಗಿ ಒನಕೆಯನ್ನೇ ಶಸ್ತ್ರವನ್ನಾಗಿಸಿಕೊಂಡ ವೀರ ಮಹಿಳೆಯ ಅಪ್ರತಿಮ ಧೈರ್ಯ.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 text-[10px]">
        <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
          🛡️ <strong className="text-white">Internal Strength:</strong> True courage is staying calm in crisis and standing firm for justice.
        </div>
        <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
          👧 <strong className="text-white">Gender Equality:</strong> Girls and women are the fortress pillars of community defense.
        </div>
      </div>
    </div>
  );
};

// 5. Traditional Karnataka Kabaddi & Desi Sports Visual
export const KabaddiArenaVisual: React.FC = () => {
  const [raidActive, setRaidActive] = useState(false);

  return (
    <div className="w-full h-full flex flex-col justify-between p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-amber-950/40 via-slate-900 to-orange-950/40 border border-amber-500/30 text-xs">
      <div className="flex items-center justify-between pb-2 border-b border-amber-900/50">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-amber-400" />
          <div>
            <h4 className="font-bold text-amber-300 text-xs sm:text-sm">Indigenous Sports: Kabaddi & Mallakhamba (ಕಬಡ್ಡಿ ಮತ್ತು ಮಲ್ಲಕಂಬ)</h4>
            <p className="text-slate-400 text-[10px]">Physical Stamina, Lung Capacity, Team Trust & Quick Decision-Making</p>
          </div>
        </div>
        <button
          onClick={() => { sound.playPop(); setRaidActive(!raidActive); }}
          className="px-2.5 py-1 rounded-lg bg-amber-600 hover:bg-amber-500 text-slate-950 font-black text-[10px] shadow transition-all active:scale-95"
        >
          {raidActive ? 'Stop Cant (ಹಿಡಿತ)' : 'Start Raid Cant: "ಕಬಡ್ಡಿ-ಕಬಡ್ಡಿ"'}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 my-2">
        <div className="p-2.5 rounded-xl bg-slate-950 border border-amber-500/30 text-center">
          <span className="text-2xl">🤼</span>
          <span className="font-bold text-amber-300 block text-[11px] mt-1">Pranayama in Motion</span>
          <p className="text-[10px] text-slate-400">Unbroken breath chant (Cant) builds tremendous lung endurance and focus.</p>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-950 border border-orange-500/30 text-center">
          <span className="text-2xl">🤝</span>
          <span className="font-bold text-orange-300 block text-[11px] mt-1">Chain Tackling</span>
          <p className="text-[10px] text-slate-400">Teammates hold hands in rhythm. Individual ego dissolves into collective victory.</p>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-950 border border-emerald-500/30 text-center">
          <span className="text-2xl">🪵</span>
          <span className="font-bold text-emerald-300 block text-[11px] mt-1">Mallakhamba Agility</span>
          <p className="text-[10px] text-slate-400">Traditional teak pole gymnastics testing core balance and spine suppleness.</p>
        </div>
      </div>

      <div className="p-2.5 rounded-xl bg-slate-900 border border-amber-500/30 flex items-center justify-between text-[11px]">
        <span className="text-amber-200">
          {raidActive ? '🏃 Raider crossing baulk line chanting unbroken "ಕಬಡ್ಡಿ-ಕಬಡ್ಡಿ"... Touch & return!' : 'Ready for the whistle: Respect opponent, play fair, accept referee decisions gracefully.'}
        </span>
      </div>
    </div>
  );
};

// 6. Mankuthimmana Kagga & Vachana Sahitya Visual
export const MankuthimmaVachanaVisual: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-purple-950/40 border border-indigo-500/30 text-xs">
      <div className="flex items-center justify-between pb-2 border-b border-indigo-900/50">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-indigo-400" />
          <div>
            <h4 className="font-bold text-indigo-300 text-xs sm:text-sm">D.V. Gundappa’s Mankuthimmana Kagga (ಮಂಕುತಿಮ್ಮನ ಕಗ್ಗ)</h4>
            <p className="text-slate-400 text-[10px]">Timeless Kannada Wisdom on Humility, Sweet Speech and Emotional Equilibrium</p>
          </div>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-mono">ಕಗ್ಗ ಸಾರ</span>
      </div>

      <div className="my-2 p-3.5 rounded-xl bg-slate-950 border border-indigo-500/30 space-y-2">
        <p className="font-kannada text-amber-300 text-sm md:text-base font-bold text-center leading-relaxed tracking-wide">
          “ಹುಲ್ಲಾಗು ಬೆಟ್ಟದಡಿ, ಮನೆಗೆ ಮಲ್ಲಿಗೆಯಾಗು |<br />
          ಕಲ್ಲಾಗು ಕಷ್ಟಗಳ ಮಳೆಯ ವಿಧಿ ಸುರಿಯೆ ||<br />
          ಬೆಲ್ಲ-ಸಕ್ಕರೆಯಾಗು ದೀನ-ದುರ್ಬಲರಿಂಗೆ |<br />
          ಎಲ್ಲರೊಳೊಂದಾಗು ಮಂಕುತಿಮ್ಮ ||”
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-800 text-[10px] text-center">
          <div className="p-1.5 rounded bg-slate-900 border border-slate-800">
            <span className="font-bold text-emerald-300 block">Grass under hill</span>
            <span className="text-slate-400">Gentle humility</span>
          </div>
          <div className="p-1.5 rounded bg-slate-900 border border-slate-800">
            <span className="font-bold text-amber-300 block">Jasmine at home</span>
            <span className="text-slate-400">Fragrant love</span>
          </div>
          <div className="p-1.5 rounded bg-slate-900 border border-slate-800">
            <span className="font-bold text-cyan-300 block">Stone against storms</span>
            <span className="text-slate-400">Steadfast courage</span>
          </div>
          <div className="p-1.5 rounded bg-slate-900 border border-slate-800">
            <span className="font-bold text-pink-300 block">Sugar to the needy</span>
            <span className="text-slate-400">Sweet compassion</span>
          </div>
        </div>
      </div>

      <div className="p-2 rounded-xl bg-slate-900 border border-indigo-500/20 text-center text-indigo-200 text-[10px]">
        "Be unified with all humanity, keeping personal ego small and universal sympathy boundless."
      </div>
    </div>
  );
};
