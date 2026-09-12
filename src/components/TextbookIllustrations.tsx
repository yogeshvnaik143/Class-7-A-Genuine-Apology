import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Smile, 
  Phone, 
  Droplets, 
  Vote, 
  Scale, 
  Flower2, 
  Award, 
  Sun,
  Moon,
  Clock,
  BookOpen
} from 'lucide-react';
import { sound } from '../utils/audio';

// 1.1 Classroom Walls & Kindness Jar
export const ClassroomWallsVisual: React.FC = () => {
  const [kindnessNotes, setKindnessNotes] = useState<string[]>([
    'Raju shared his extra eraser with Meena',
    'Kavya helped pick up fallen books in corridor',
    'Sameer complimented Sneha on her science sketch'
  ]);
  const [activeNote, setActiveNote] = useState<string | null>(null);

  const drawNote = () => {
    sound.playPop();
    const random = kindnessNotes[Math.floor(Math.random() * kindnessNotes.length)];
    setActiveNote(random);
  };

  return (
    <div className="w-full h-full min-h-[300px] flex flex-col justify-between p-4 rounded-2xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 border border-indigo-500/30 text-xs">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <div className="p-2.5 rounded-xl bg-amber-950/40 border border-amber-500/40">
          <span className="font-bold text-amber-300 block text-[11px]">📜 Values Wall</span>
          <p className="text-[10px] text-slate-300 mt-1">"Be kind always" & "Tell the truth even when scared"</p>
        </div>
        <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40">
          <span className="font-bold text-emerald-300 block text-[11px]">💪 Strengths Wall</span>
          <p className="text-[10px] text-slate-300 mt-1">Honoring each student’s unique talent and honesty</p>
        </div>
        <div className="p-2.5 rounded-xl bg-sky-950/40 border border-sky-500/40">
          <span className="font-bold text-sky-300 block text-[11px]">🙏 Gratitude Wall</span>
          <p className="text-[10px] text-slate-300 mt-1">Notes of thanks to teachers, parents, and friends</p>
        </div>
        <div className="p-2.5 rounded-xl bg-rose-950/40 border border-rose-500/40">
          <span className="font-bold text-rose-300 block text-[11px]">🪞 Affirmation Mirror</span>
          <p className="text-[10px] text-slate-300 mt-1">"I am smart, I can learn, I am capable!"</p>
        </div>
      </div>

      {/* Interactive Kindness Jar */}
      <div className="my-3 p-3 rounded-xl bg-slate-900/90 border border-indigo-500/30 flex flex-col items-center text-center">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-2xl">🏺</span>
          <h5 className="font-bold text-indigo-200">The Classroom Kindness Jar (ದಯೆಯ ಪೆಟ್ಟಿಗೆ)</h5>
        </div>
        <p className="text-slate-400 text-[11px] max-w-md">
          Opened every 15 days to celebrate acts of compassion witnessed by peers.
        </p>
        <button
          onClick={drawNote}
          className="mt-2 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-[11px] shadow transition-all active:scale-95"
        >
          Pick a Note from Kindness Jar ✨
        </button>
        {activeNote && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 p-2 rounded-lg bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 font-medium"
          >
            "{activeNote}"
          </motion.div>
        )}
      </div>
    </div>
  );
};

// 1.2 Dignity of Labour
export const WorkersPrideVisual: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[300px] grid grid-cols-1 md:grid-cols-3 gap-3 p-4 rounded-2xl bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-950 border border-amber-500/30 text-xs">
      <div className="p-3 rounded-xl bg-slate-900 border border-emerald-500/40 flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold text-emerald-400">🌳 Saalumarada Thimmakka</span>
          <p className="text-[11px] text-slate-300 mt-1">Daily wage labourer from Hulikal who planted 8,000+ trees and 385 banyans, winning Padma Shri.</p>
          <p className="font-kannada text-[10px] text-emerald-300/90 mt-1">೮,೦೦೦ಕ್ಕೂ ಹೆಚ್ಚು ಗಿಡ-ಮರಗಳನ್ನು ಮಕ್ಕಳಂತೆ ಸಲಹಿದ ವೃಕ್ಷಮಾತೆ.</p>
        </div>
        <span className="text-[10px] bg-emerald-950 px-2 py-0.5 rounded text-emerald-400 mt-2 block text-center">Environmental Warrior</span>
      </div>

      <div className="p-3 rounded-xl bg-slate-900 border border-amber-500/40 flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold text-amber-400">🧹 Muthamma</span>
          <p className="text-[11px] text-slate-300 mt-1">Dedicated pourakarmika (civic worker) who cleaned streets of Mysuru and was elected Gram Panchayat President of Gundlupet.</p>
          <p className="font-kannada text-[10px] text-amber-300/90 mt-1">ಪೌರಕಾರ್ಮಿಕ ಮಹಿಳೆಯಿಂದ ಗ್ರಾಮ ಪಂಚಾಯತ್ ಅಧ್ಯಕ್ಷೆಯಾಗಿ ಬೆಳೆದ ಸ್ಫೂರ್ತಿ.</p>
        </div>
        <span className="text-[10px] bg-amber-950 px-2 py-0.5 rounded text-amber-400 mt-2 block text-center">Panchayat President</span>
      </div>

      <div className="p-3 rounded-xl bg-slate-900 border border-sky-500/40 flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold text-sky-400">🛺 Thomas Raja</span>
          <p className="text-[11px] text-slate-300 mt-1">Auto driver who witnessed destitute elders sleeping on pavements and sheltered 750+ homeless through New Ark Mission.</p>
          <p className="font-kannada text-[10px] text-sky-300/90 mt-1">ನಿರ್ಗತಿಕರಿಗೆ ಆಶ್ರಯ ನೀಡಿ ೭೫೦ಕ್ಕೂ ಹೆಚ್ಚು ಜನರನ್ನು ರಕ್ಷಿಸಿದ ಕಾಯಕಯೋಗಿ.</p>
        </div>
        <span className="text-[10px] bg-sky-950 px-2 py-0.5 rounded text-sky-400 mt-2 block text-center">Saviour of Destitute</span>
      </div>
    </div>
  );
};

// 1.3 Steps of Growth
export const StepsGrowthVisual: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(2);

  const steps = [
    { label: 'Step 1: I won\'t do it', color: 'bg-rose-900/60 border-rose-500', kn: 'ನನ್ನಿಂದ ಸಾಧ್ಯವಿಲ್ಲ' },
    { label: 'Step 2: I can\'t do it', color: 'bg-orange-900/60 border-orange-500', kn: 'ಮಾಡಲು ಆಗುವುದಿಲ್ಲ' },
    { label: 'Step 3: I want to do it', color: 'bg-amber-900/60 border-amber-500', kn: 'ಮಾಡಲು ಬಯಸುತ್ತೇನೆ' },
    { label: 'Step 4: How do I do it?', color: 'bg-blue-900/60 border-blue-500', kn: 'ಹೇಗೆ ಮಾಡಲಿ?' },
    { label: 'Step 5: I will try to do it', color: 'bg-teal-900/60 border-teal-500', kn: 'ಪ್ರಯತ್ನಿಸುವೆ' },
    { label: 'Step 6: I CAN do it!', color: 'bg-emerald-800/80 border-emerald-400', kn: 'ನಾನು ಮಾಡಬಲ್ಲೆ!' },
    { label: 'Step 7: I DID IT! 🎉', color: 'bg-emerald-600 border-emerald-300 text-slate-950 font-bold', kn: 'ನಾನು ಮಾಡಿ ಮುಗಿಸಿದೆ!' }
  ];

  return (
    <div className="w-full h-full min-h-[300px] flex flex-col justify-between p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs">
      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
        <span className="font-bold text-amber-400">Keshav\'s Ladder of Ambition (ಕೇಶವನ ಮೆಟ್ಟಿಲುಗಳು)</span>
        <span className="text-[10px] text-slate-400">Click a step to climb</span>
      </div>

      <div className="space-y-1.5 my-3">
        {steps.map((st, i) => (
          <button
            key={i}
            onClick={() => { sound.playPop(); setCurrentStep(i); }}
            className={`w-full p-2 rounded-lg border text-left flex items-center justify-between transition-all ${
              currentStep === i ? 'ring-2 ring-amber-400 shadow-lg scale-[1.01]' : 'opacity-75 hover:opacity-100'
            } ${st.color}`}
          >
            <span className="font-medium text-[11px]">{st.label}</span>
            <span className="font-kannada text-[10px]">{st.kn}</span>
          </button>
        ))}
      </div>

      <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center text-slate-300 text-[11px]">
        "I acknowledge my weaknesses and strive relentlessly to improve. Mistakes are my teachers!"
      </div>
    </div>
  );
};

// 1.4 Little Tara's Big Fire
export const TaraFireVisual: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[300px] flex flex-col justify-between p-4 rounded-2xl bg-gradient-to-br from-amber-950/60 via-slate-900 to-rose-950/60 border border-amber-500/40 text-xs">
      <div className="flex items-center gap-3">
        <span className="text-3xl">🔥</span>
        <div>
          <h4 className="font-bold text-amber-300 text-sm">Tara’s Story Castle (ಕಥೆಗಳ ಮಾಂತ್ರಿಕ ಕೋಟೆ)</h4>
          <p className="text-slate-400 text-[11px]">"Yellow, orange, crimson, red — With her voice, Tara led!"</p>
        </div>
      </div>

      <div className="my-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
        <div className="flex items-center gap-2 text-rose-300">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>The Chill of Taunts: "She talks too much! Too loud for a girl!" (Dimmed her flame)</span>
        </div>
        <div className="flex items-center gap-2 text-emerald-300">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>The Rekindling: Reviving the closed library with children’s paper story castles!</span>
        </div>
        <p className="text-[11px] text-slate-300 italic pt-1 border-t border-slate-800">
          "That day, Tara discovered her voice had power. She did not shrink or stay quiet."
        </p>
      </div>

      <div className="p-2 rounded-lg bg-amber-500/20 text-amber-200 border border-amber-500/30 text-center text-[11px]">
        Special Gifts: Drawing, singing, jokes, thinking about life, growing plants, riddles... the list is endless!
      </div>
    </div>
  );
};

// 3.1 Sadness is a Signal
export const SadnessCircleVisual: React.FC = () => {
  const [selectedPetal, setSelectedPetal] = useState<string>('Parents / ಪೋಷಕರು');

  const petals = [
    { en: 'Parents', kn: 'ಪೋಷಕರು', role: 'Provide warm hugs and unconditional reassurance' },
    { en: 'Best Friend', kn: 'ಆಪ್ತ ಮಿತ್ರ', role: 'Listens patiently and distracts with a walk' },
    { en: 'Teacher', kn: 'ಶಿಕ್ಷಕರು', role: 'Guides through classroom worries with kindness' },
    { en: 'Grandparents', kn: 'ಅಜ್ಜ-ಅಜ್ಜಿ', role: 'Share soothing wisdom and bedtime peace' },
    { en: 'Siblings', kn: 'ಒಡಹುಟ್ಟಿದವರು', role: 'Stand as loyal protectors and playmates' }
  ];

  return (
    <div className="w-full h-full min-h-[300px] flex flex-col justify-between p-4 rounded-2xl bg-slate-900 border border-blue-500/30 text-xs">
      <div className="text-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-blue-300 text-sm">My Circle of Support (ನನ್ನ ಬೆಂಬಲ ವಲಯ)</h4>
        <p className="text-slate-400 text-[11px]">Click a petal to see how safe people help when sadness strikes</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 my-3">
        {petals.map((p, i) => (
          <button
            key={i}
            onClick={() => { sound.playPop(); setSelectedPetal(`${p.en} / ${p.kn}`); }}
            className="p-2 rounded-xl bg-blue-950/60 border border-blue-500/40 hover:border-amber-400 text-center transition-all flex flex-col items-center"
          >
            <span className="text-xl">🌸</span>
            <span className="font-bold text-blue-200 text-[11px] mt-1">{p.en}</span>
            <span className="font-kannada text-[10px] text-amber-200">{p.kn}</span>
          </button>
        ))}
      </div>

      <div className="p-3 rounded-xl bg-slate-950 border border-blue-900 text-center">
        <span className="font-bold text-emerald-400 text-xs">{selectedPetal}:</span>
        <p className="text-slate-300 text-[11px] mt-0.5">
          "When you feel sad, sadness is not a weakness — it is a message to reach out."
        </p>
      </div>
    </div>
  );
};

// 7.1 Abid Surti Tap Man
export const TapManWaterVisual: React.FC = () => {
  const [tapsFixed, setTapsFixed] = useState(10450);
  const [litresSaved, setLitresSaved] = useState(418000);

  const fixMoreTaps = () => {
    sound.playBloom();
    setTapsFixed(prev => prev + 1);
    setLitresSaved(prev => prev + 400);
  };

  return (
    <div className="w-full h-full min-h-[300px] flex flex-col justify-between p-4 rounded-2xl bg-gradient-to-br from-cyan-950 via-slate-900 to-blue-950 border border-cyan-500/40 text-xs">
      <div className="flex items-center justify-between pb-2 border-b border-cyan-900">
        <div className="flex items-center gap-2">
          <Droplets className="w-5 h-5 text-cyan-400" />
          <div>
            <h4 className="font-bold text-cyan-200 text-sm">Drop Dead Foundation • Abid Surti</h4>
            <p className="text-slate-400 text-[10px]">Fixing leaking taps every Sunday across Mumbai since 2007</p>
          </div>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-mono">
          Tap Man of Mumbai
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 my-3">
        <div className="p-3 rounded-xl bg-slate-900 border border-cyan-500/30 text-center">
          <span className="text-slate-400 text-[10px] uppercase block">Taps Repaired</span>
          <span className="text-xl font-bold text-cyan-300 font-mono">{tapsFixed.toLocaleString()}</span>
        </div>
        <div className="p-3 rounded-xl bg-slate-900 border border-emerald-500/30 text-center">
          <span className="text-slate-400 text-[10px] uppercase block">Litres of Water Conserved</span>
          <span className="text-xl font-bold text-emerald-300 font-mono">{litresSaved.toLocaleString()} L</span>
        </div>
      </div>

      <button
        onClick={fixMoreTaps}
        className="w-full py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs shadow transition-all active:scale-95 flex items-center justify-center gap-2"
      >
        <Droplets className="w-4 h-4" />
        <span>Repair Another Leaking Tap (+400 Litres Saved!)</span>
      </button>
    </div>
  );
};

// 9.1 The Village That Didn't Vote
export const VotingBoothVisual: React.FC = () => {
  const [hasVoted, setHasVoted] = useState(false);

  return (
    <div className="w-full h-full min-h-[300px] flex flex-col justify-between p-4 rounded-2xl bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 border border-indigo-500/30 text-xs">
      <div className="flex items-center gap-2 pb-2 border-b border-indigo-800">
        <Vote className="w-5 h-5 text-indigo-400" />
        <div>
          <h4 className="font-bold text-indigo-200 text-sm">Katewara Village: The Strike of 3,150 Voters</h4>
          <p className="text-slate-400 text-[10px]">December 4, 2022 — Zero votes cast, but roads still stayed broken</p>
        </div>
      </div>

      <div className="my-3 p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
        <p className="text-slate-300 text-[11px]">
          "Why vote? No one listens!" The streets were silent. But not voting didn't fix anything. It only left their democracy in silence.
        </p>
        <p className="font-kannada text-amber-200/90 text-[11px]">
          ಮತದಾನ ಕೇವಲ ಹಕ್ಕಲ್ಲ, ಅದೊಂದು ಕರ್ತವ್ಯ. ಸಮರ್ಥ ನಾಯಕರನ್ನು ಆರಿಸಿ ಪ್ರಶ್ನಿಸುವುದೇ ಪ್ರಜಾಪ್ರಭುತ್ವದ ಶಕ್ತಿ.
        </p>
      </div>

      <div className="flex items-center justify-between p-2.5 rounded-xl bg-indigo-950/60 border border-indigo-500/40">
        <span className="font-bold text-indigo-200">
          {hasVoted ? '🗳️ Vote Cast! Inked Finger of Democracy' : 'Cast Your Class Representative Vote:'}
        </span>
        <button
          onClick={() => { sound.playCorrect(); setHasVoted(true); }}
          className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] shadow active:scale-95"
        >
          {hasVoted ? 'Voted ✓' : 'Press Ballot Button 🗳️'}
        </button>
      </div>
    </div>
  );
};

// 9.2 Consumer Protection
export const ConsumerRightsVisual: React.FC = () => {
  const rights = [
    { title: '1. Right to Safety', desc: 'Protected from hazardous goods' },
    { title: '2. Right to Information', desc: 'Price, quality, expiry on labels' },
    { title: '3. Right to Choice', desc: 'Freedom to pick any brand freely' },
    { title: '4. Right to be Heard', desc: 'Right to register a fair complaint' },
    { title: '5. Right to Redressal', desc: 'Replacement, repair, or refund' }
  ];

  return (
    <div className="w-full h-full min-h-[300px] flex flex-col justify-between p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs">
      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Scale className="w-5 h-5 text-amber-400" />
          <h4 className="font-bold text-white text-sm">Ananya\'s Victory in Consumer Court</h4>
        </div>
        <span className="text-[10px] text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded">Always Keep the Bill!</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-5 gap-1.5 my-3">
        {rights.map((r, i) => (
          <div key={i} className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-center">
            <span className="font-bold text-amber-300 text-[10px] block">{r.title}</span>
            <p className="text-[9px] text-slate-400 mt-1">{r.desc}</p>
          </div>
        ))}
      </div>

      <div className="p-2.5 rounded-xl bg-slate-950 border border-amber-500/30 text-slate-300 text-[11px]">
        "A smart consumer checks the bill, knows their statutory rights, and speaks up politely when something is wrong."
      </div>
    </div>
  );
};

// 10.2 Personal Safety & Safe Touch
export const PersonalSafetyVisual: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[300px] flex flex-col justify-between p-4 rounded-2xl bg-gradient-to-br from-rose-950/50 via-slate-900 to-slate-950 border border-rose-500/40 text-xs">
      <div className="flex items-center justify-between pb-2 border-b border-rose-900">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-rose-400" />
          <div>
            <h4 className="font-bold text-white text-sm">Personal Safety Guide: My Body, My Right!</h4>
            <p className="text-slate-400 text-[10px]">ವೈಯಕ್ತಿಕ ಸುರಕ್ಷತಾ ಮಾರ್ಗದರ್ಶಿ • ೧೦೯೮ ಸಹಾಯವಾಣಿ</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-rose-600 text-white font-bold text-[10px] flex items-center gap-1">
            <Phone className="w-3 h-3" /> 1098 / 112
          </span>
        </div>
      </div>

      {/* Safe vs Unsafe Touch matrix */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2">
        <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/50 space-y-1">
          <span className="font-bold text-emerald-300 flex items-center gap-1.5 text-xs">
            <CheckCircle2 className="w-4 h-4" /> SAFE TOUCH (ಸುರಕ್ಷಿತ ಸ್ಪರ್ಶ)
          </span>
          <p className="text-[11px] text-slate-300">
            Head, shoulders, hands, friendly high-fives, hugs from parents that make you feel cared for and safe.
          </p>
        </div>

        <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/50 space-y-1">
          <span className="font-bold text-rose-300 flex items-center gap-1.5 text-xs">
            <AlertCircle className="w-4 h-4" /> UNSAFE TOUCH (ಅಸುರಕ್ಷಿತ ಸ್ಪರ್ಶ)
          </span>
          <p className="text-[11px] text-slate-300">
            Touching or looking at private parts (chest, between legs, bottom, lips), or any touch kept as a secret.
          </p>
        </div>
      </div>

      {/* The No-Go-Tell Action Box */}
      <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-[11px]">
        <span className="font-bold text-amber-300">The 3-Step Rule:</span>
        <div className="flex gap-2">
          <span className="px-2 py-1 rounded bg-rose-900 text-white font-bold">1. SAY NO! 🛑</span>
          <span className="px-2 py-1 rounded bg-amber-900 text-white font-bold">2. GO AWAY! 🏃</span>
          <span className="px-2 py-1 rounded bg-emerald-900 text-white font-bold">3. TELL AN ADULT! 🗣️</span>
        </div>
      </div>
    </div>
  );
};

// 11.2 Health Triangle Visual
export const HealthTriangleVisual: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[300px] flex flex-col justify-between p-4 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-slate-900 to-teal-950/40 border border-emerald-500/30 text-xs">
      <div className="text-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-emerald-300 text-sm">The Health Triangle (ಆರೋಗ್ಯದ ತ್ರಿಕೋನ)</h4>
        <p className="text-slate-400 text-[10px]">Exercise, Rest, and Sleep form the balanced foundation of living</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 my-3">
        <div className="p-3 rounded-xl bg-slate-900 border border-amber-500/40 text-center">
          <Sun className="w-6 h-6 text-amber-400 mx-auto mb-1" />
          <span className="font-bold text-amber-300 block text-xs">1. Exercise (ವ್ಯಾಯಾಮ)</span>
          <p className="text-[10px] text-slate-300 mt-1">Muscular stamina, agility, and NCC drill discipline</p>
        </div>

        <div className="p-3 rounded-xl bg-slate-900 border border-sky-500/40 text-center">
          <Clock className="w-6 h-6 text-sky-400 mx-auto mb-1" />
          <span className="font-bold text-sky-300 block text-xs">2. Rest (ವಿಶ್ರಾಂತಿ)</span>
          <p className="text-[10px] text-slate-300 mt-1">Mental stillness, stress reduction, and self-reflection</p>
        </div>

        <div className="p-3 rounded-xl bg-slate-900 border border-indigo-500/40 text-center">
          <Moon className="w-6 h-6 text-indigo-400 mx-auto mb-1" />
          <span className="font-bold text-indigo-300 block text-xs">3. Sleep (ನಿದ್ರೆ)</span>
          <p className="text-[10px] text-slate-300 mt-1">"ನಿದ್ದೆಗೊಮ್ಮೆ ನಿತ್ಯ ಮರಣ, ಎದ್ದ ಸಲ ನವೀನ ಜನನ" — Bendre</p>
        </div>
      </div>

      <div className="p-2.5 rounded-xl bg-slate-950 border border-emerald-500/30 text-center text-slate-300 text-[11px]">
        "Shariram Adhyam Khalu Dharma Sadhanam — A healthy body is the prime vehicle for all moral action."
      </div>
    </div>
  );
};

// 11.4 National Emblem & Sarnath Lion Capital
export const NationalEmblemVisual: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[300px] flex flex-col justify-between p-4 rounded-2xl bg-gradient-to-br from-amber-950/50 via-slate-900 to-emerald-950/50 border border-amber-500/40 text-xs">
      <div className="text-center pb-2 border-b border-amber-900">
        <h4 className="font-bold text-amber-300 text-sm">The Lion Capital of Sarnath (ರಾಷ್ಟ್ರ ಲಾಂಛನ)</h4>
        <p className="text-slate-400 text-[10px]">Adopted from Emperor Ashoka’s pillar — Our moral and constitutional compass</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-3">
        <div className="p-2 rounded-xl bg-slate-900 border border-amber-500/30 text-center">
          <span className="text-lg">🦁</span>
          <span className="font-bold text-amber-300 text-[11px] block mt-1">Courage (ಶೌರ್ಯ)</span>
          <p className="text-[9px] text-slate-400">4 lions facing four directions</p>
        </div>
        <div className="p-2 rounded-xl bg-slate-900 border border-blue-500/30 text-center">
          <span className="text-lg">☸️</span>
          <span className="font-bold text-blue-300 text-[11px] block mt-1">Dharma Chakra</span>
          <p className="text-[9px] text-slate-400">24 spokes of progress</p>
        </div>
        <div className="p-2 rounded-xl bg-slate-900 border border-emerald-500/30 text-center">
          <span className="text-lg">🐂</span>
          <span className="font-bold text-emerald-300 text-[11px] block mt-1">Bull (ಶ್ರಮ)</span>
          <p className="text-[9px] text-slate-400">Steadfast hard work</p>
        </div>
        <div className="p-2 rounded-xl bg-slate-900 border border-teal-500/30 text-center">
          <span className="text-lg">🐎</span>
          <span className="font-bold text-teal-300 text-[11px] block mt-1">Horse (ವೇಗ)</span>
          <p className="text-[9px] text-slate-400">Dynamic vital energy</p>
        </div>
      </div>

      <div className="p-3 rounded-xl bg-slate-950 border border-amber-500/40 text-center">
        <span className="font-bold text-amber-400 text-sm tracking-wider">
          “ಸತ್ಯಮೇವ ಜಯತೇ” (Satyameva Jayate)
        </span>
        <p className="text-slate-300 text-[10px] mt-1">
          Truth alone triumphs, never untruth. Live with honesty, courage, and constitutional fraternity!
        </p>
      </div>
    </div>
  );
};

// 3.2 Positive Self-Talk Visual
export const PositiveTalkVisual: React.FC = () => {
  const [activeCard, setActiveCard] = useState(0);
  const cards = [
    { name: 'Rahul', negative: 'I will never finish this science project on time!', positive: 'I will take it step by step and start with the volcano base today.', kn: 'ಹಂತ ಹಂತವಾಗಿ ಪ್ರಯತ್ನಿಸಿ ಇಂದು ಮುಗಿಸುವೆ!' },
    { name: 'Jessie', negative: 'I\'m not popular and no one wants to talk to me.', positive: 'I can offer a friendly smile and sit with someone new at lunchtime.', kn: 'ನಾನೇ ಮುಂದೆ ಹೋಗಿ ಪ್ರೀತಿಯಿಂದ ಸ್ನೇಹದ ಹಸ್ತ ಚಾಚುವೆ.' },
    { name: 'Arvika', negative: 'I made a huge mistake and ruined everything!', positive: 'Mistakes show I am learning. I can own it and repair it bravely.', kn: 'ತಪ್ಪಿನಿಂದ ಪಾಠ ಕಲಿತು ಇನ್ನಷ್ಟು ಉತ್ತಮಗೊಳ್ಳುವೆ.' },
    { name: 'Hussein', negative: 'Others are so much smarter and faster than me.', positive: 'Everyone grows at their own speed; my focus is my own improvement.', kn: 'ನನ್ನ ಬೆಳವಣಿಗೆಯೇ ನನಗೆ ಮುಖ್ಯ, ಹೋಲಿಕೆ ಬೇಡ.' }
  ];

  return (
    <div className="w-full h-full min-h-[300px] flex flex-col justify-between p-4 rounded-2xl bg-slate-900 border border-amber-500/30 text-xs">
      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
        <h4 className="font-bold text-amber-300 text-sm">Inner Voice Reframing (ಸಕಾರಾತ್ಮಕ ಆತ್ಮಾವಲೋಕನ)</h4>
        <span className="text-[10px] text-slate-400">Click a student card</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-2">
        {cards.map((c, i) => (
          <button
            key={i}
            onClick={() => { sound.playPop(); setActiveCard(i); }}
            className={`p-2 rounded-xl border text-left transition-all ${
              activeCard === i ? 'bg-amber-950/60 border-amber-400 shadow' : 'bg-slate-950 border-slate-800 opacity-70'
            }`}
          >
            <span className="font-bold text-white block">{c.name}</span>
            <span className="text-[10px] text-slate-400">Student #{i + 1}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2">
        <div className="p-3 rounded-xl bg-rose-950/30 border border-rose-800/40">
          <span className="font-bold text-rose-400 block text-[11px]">⛈️ The Negative Inner Critic:</span>
          <p className="text-slate-300 text-[11px] mt-1 italic">"{cards[activeCard].negative}"</p>
        </div>
        <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-800/40">
          <span className="font-bold text-emerald-400 block text-[11px]">☀️ Empowered Growth Mindset:</span>
          <p className="text-emerald-200 text-[11px] mt-1 font-medium">"{cards[activeCard].positive}"</p>
          <p className="font-kannada text-[10px] text-amber-300 mt-1">{cards[activeCard].kn}</p>
        </div>
      </div>
    </div>
  );
};

// 4.1 Compassion Puppy Visual
export const CompassionPuppyVisual: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[300px] flex flex-col justify-between p-4 rounded-2xl bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-950 border border-amber-500/30 text-xs">
      <div className="text-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-amber-300 text-sm">The $2.37 Puppy (ಅಂಗವಿಕಲ ನಾಯಿಮರಿಯ ಕಥೆ)</h4>
        <p className="text-slate-400 text-[10px]">"He needs someone who understands him and will love him truly."</p>
      </div>

      <div className="my-3 p-3 rounded-xl bg-slate-950 border border-amber-500/30 flex items-center gap-3">
        <span className="text-3xl">🐶</span>
        <div className="space-y-1">
          <p className="text-slate-200 text-[11px]">
            The boy rolled up his pant leg, revealing a steel orthopedic brace supporting his twisted leg.
          </p>
          <p className="font-kannada text-amber-200/90 text-[11px]">
            "ನನಗೂ ವೇಗವಾಗಿ ಓಡಲಾಗುವುದಿಲ್ಲ. ಈ ನಾಯಿಮರಿಗೆ ಯಾರೋ ಒಬ್ಬರು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವವರು ಬೇಕು."
          </p>
        </div>
      </div>

      <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center text-emerald-300 text-[11px]">
        True Empathy: Standing in someone else\'s shoes and sharing their quiet dignity with love.
      </div>
    </div>
  );
};

// 5.2 Rainbow Gender Visual
export const RainbowGenderVisual: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[300px] flex flex-col justify-between p-4 rounded-2xl bg-gradient-to-br from-purple-950/40 via-slate-900 to-pink-950/40 border border-purple-500/40 text-xs">
      <div className="text-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-purple-300 text-sm">Rainbow Girls, Rainbow Boys! (ರೇನ್‌ಬೋ ಹುಡುಗಿಯರು & ಹುಡುಗರು)</h4>
        <p className="text-slate-400 text-[10px]">Nature made us diverse; stereotypes are created by human bias</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2">
        <div className="p-3 rounded-xl bg-pink-950/40 border border-pink-500/40 space-y-1">
          <span className="font-bold text-pink-300 text-xs">🌈 Rainbow Girls:</span>
          <p className="text-slate-300 text-[11px]">Climbing trees, driving bicycles, playing cricket, coding computers, leading teams!</p>
          <p className="font-kannada text-pink-200/90 text-[10px]">ಮರವೇರುವ, ಆಟವಾಡುವ, ನಾಯಕತ್ವ ವಹಿಸುವ ಸಾಹಸಿ ಹೆಣ್ಣುಮಕ್ಕಳು.</p>
        </div>

        <div className="p-3 rounded-xl bg-sky-950/40 border border-sky-500/40 space-y-1">
          <span className="font-bold text-sky-300 text-xs">🌈 Rainbow Boys:</span>
          <p className="text-slate-300 text-[11px]">Cooking dinner, nurturing plants, crying when hurt, stitching, caring with tenderness.</p>
          <p className="font-kannada text-sky-200/90 text-[10px]">ಅಡುಗೆ ಮಾಡುವ, ಕಣ್ಣೀರು ಹಾಕುವ, ಗಿಡ ಬೆಳೆಸುವ ಪ್ರೀತಿಯ ಗಂಡುಮಕ್ಕಳು.</p>
        </div>
      </div>

      <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center text-slate-300 text-[11px]">
        "I am an original masterpiece of nature, not a factory photocopy!"
      </div>
    </div>
  );
};

// 8.1 Green Diwali Visual
export const GreenDiwaliVisual: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[300px] flex flex-col justify-between p-4 rounded-2xl bg-gradient-to-br from-amber-950/40 via-slate-900 to-emerald-950/40 border border-amber-500/30 text-xs">
      <div className="text-center pb-2 border-b border-amber-900">
        <h4 className="font-bold text-amber-300 text-sm">Dhamaka without Patakha (ಪಟಾಕಿ ಮುಕ್ತ ಹಸಿರು ದೀಪಾವಳಿ)</h4>
        <p className="text-slate-400 text-[10px]">Sharing light, sweets, and laughter without trauma or smoke</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-2">
        <div className="p-2 rounded-xl bg-slate-950 border border-amber-500/40 text-center">
          <span className="text-xl">🪔</span>
          <span className="font-bold text-amber-300 text-[11px] block mt-1">Clay Diyas</span>
          <p className="text-[9px] text-slate-400">Warm eco-friendly glow</p>
        </div>
        <div className="p-2 rounded-xl bg-slate-950 border border-pink-500/40 text-center">
          <span className="text-xl">🎨</span>
          <span className="font-bold text-pink-300 text-[11px] block mt-1">Flower Rangoli</span>
          <p className="text-[9px] text-slate-400">Natural fragrance & joy</p>
        </div>
        <div className="p-2 rounded-xl bg-slate-950 border border-emerald-500/40 text-center">
          <span className="text-xl">🍬</span>
          <span className="font-bold text-emerald-300 text-[11px] block mt-1">Sharing Sweets</span>
          <p className="text-[9px] text-slate-400">Care for the underprivileged</p>
        </div>
        <div className="p-2 rounded-xl bg-slate-950 border border-sky-500/40 text-center">
          <span className="text-xl">🐕</span>
          <span className="font-bold text-sky-300 text-[11px] block mt-1">Safe Animals</span>
          <p className="text-[9px] text-slate-400">No terrorizing explosions</p>
        </div>
      </div>

      <div className="p-2.5 rounded-xl bg-slate-950 border border-emerald-500/30 text-center text-emerald-300 text-[11px]">
        "When we choose what does not pollute or harm, we give the ultimate gift to Mother Earth."
      </div>
    </div>
  );
};

