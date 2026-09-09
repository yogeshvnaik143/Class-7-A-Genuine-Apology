import React from 'react';
import { motion } from 'motion/react';

// Cover Illustration reflecting the real Karnataka Textbook cover elements
export const CoverIllustration: React.FC = () => (
  <div className="relative w-full h-full min-h-[320px] flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 p-6 shadow-2xl border border-emerald-500/30">
    {/* Background decorative circles & radial glow */}
    <div className="absolute -top-12 -right-12 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl" />
    <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl" />

    <svg viewBox="0 0 500 400" className="w-full h-full max-h-[360px] drop-shadow-2xl select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="rainbowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="20%" stopColor="#f97316" />
          <stop offset="40%" stopColor="#eab308" />
          <stop offset="60%" stopColor="#22c55e" />
          <stop offset="80%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="sunGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>

      {/* Sun & Rays */}
      <motion.circle 
        cx="250" 
        cy="150" 
        r="60" 
        fill="url(#sunGrad)" 
        animate={{ scale: [1, 1.06, 1], opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Textbook Rainbow Arches */}
      <path d="M 60,320 A 190,190 0 0,1 440,320" fill="none" stroke="url(#rainbowGrad)" strokeWidth="16" strokeLinecap="round" opacity="0.85" />
      <path d="M 90,320 A 160,160 0 0,1 410,320" fill="none" stroke="url(#rainbowGrad)" strokeWidth="12" strokeLinecap="round" opacity="0.6" />

      {/* Lush Green Hills */}
      <path d="M 30,360 Q 150,260 270,360 T 470,360 L 470,400 L 30,400 Z" fill="#15803d" opacity="0.7" />
      <path d="M 0,380 Q 180,290 350,380 T 500,380 L 500,400 L 0,400 Z" fill="#166534" />

      {/* Sustainable Tree (Left - Textbook Environmental Responsibility) */}
      <g transform="translate(60, 200)">
        <rect x="26" y="70" width="16" height="50" fill="#78350f" rx="3" />
        <motion.circle cx="34" cy="50" r="32" fill="#22c55e" animate={{ scale: [1, 1.04, 1] }} transition={{ duration: 3, repeat: Infinity }} />
        <circle cx="18" cy="40" r="24" fill="#16a34a" />
        <circle cx="50" cy="40" r="24" fill="#15803d" />
        <text x="34" y="140" fill="#86efac" fontSize="9" fontWeight="bold" textAnchor="middle">Sustainability</text>
      </g>

      {/* Meditating Yoga Student (Center Left - Mental Wellbeing) */}
      <g transform="translate(150, 240)">
        <motion.ellipse cx="30" cy="55" rx="35" ry="12" fill="#fbbf24" opacity="0.4" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity }} />
        {/* Person Sitting Lotus */}
        <circle cx="30" cy="18" r="10" fill="#fcd34d" />
        <path d="M 22,28 C 22,24 38,24 38,28 L 42,48 L 18,48 Z" fill="#38bdf8" />
        <path d="M 12,46 Q 30,62 48,46" fill="none" stroke="#0284c7" strokeWidth="6" strokeLinecap="round" />
        <text x="30" y="76" fill="#bae6fd" fontSize="9" fontWeight="bold" textAnchor="middle">ಧ್ಯಾನ & ಸ್ವಾಸ್ಥ್ಯ</text>
      </g>

      {/* Two Students High-Five / Friendship (Center - Textbook Honesty & Commitment) */}
      <g transform="translate(250, 220)">
        <motion.g animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          {/* Friend 1 */}
          <circle cx="20" cy="20" r="11" fill="#fbcfe8" />
          <path d="M 12,32 L 28,32 L 25,65 L 15,65 Z" fill="#ec4899" />
          <line x1="28" y1="38" x2="45" y2="28" stroke="#fbcfe8" strokeWidth="4" strokeLinecap="round" />
          {/* Friend 2 */}
          <circle cx="65" cy="20" r="11" fill="#fed7aa" />
          <path d="M 57,32 L 73,32 L 70,65 L 60,65 Z" fill="#f97316" />
          <line x1="57" y1="38" x2="45" y2="28" stroke="#fed7aa" strokeWidth="4" strokeLinecap="round" />
          {/* Spark of Connection */}
          <motion.circle cx="45" cy="28" r="5" fill="#fef08a" animate={{ scale: [1, 1.8, 1], opacity: [0.7, 1, 0.7] }} transition={{ duration: 1.5, repeat: Infinity }} />
          <text x="43" y="85" fill="#fed7aa" fontSize="9" fontWeight="bold" textAnchor="middle">ಸ್ನೇಹ & ಬದ್ಧತೆ</text>
        </motion.g>
      </g>

      {/* Basketball Player (Right - Sports & Physical Education) */}
      <g transform="translate(370, 205)">
        <motion.circle cx="16" cy="18" r="10" fill="#fed7aa" />
        <path d="M 8,30 L 24,30 L 22,60 L 10,60 Z" fill="#6366f1" />
        {/* Basketball ball floating */}
        <motion.circle 
          cx="38" 
          cy="10" 
          r="10" 
          fill="#ea580c" 
          stroke="#c2410c" 
          strokeWidth="1.5"
          animate={{ y: [0, -10, 0] }} 
          transition={{ duration: 1.8, repeat: Infinity }}
        />
        <line x1="20" y1="34" x2="35" y2="18" stroke="#fed7aa" strokeWidth="4" strokeLinecap="round" />
        <text x="25" y="85" fill="#c7d2fe" fontSize="9" fontWeight="bold" textAnchor="middle">Sports & Team</text>
      </g>

      {/* Karnataka Emblem Badge Overlay */}
      <g transform="translate(25, 25)">
        <rect x="0" y="0" width="145" height="38" rx="8" fill="#ffffff" fillOpacity="0.12" stroke="#fcd34d" strokeWidth="1.5" />
        <circle cx="18" cy="19" r="10" fill="#f59e0b" />
        <text x="18" y="23" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">ಕ</text>
        <text x="35" y="16" fill="#fef08a" fontSize="10" fontWeight="bold">DSEL KARNATAKA</text>
        <text x="35" y="29" fill="#e2e8f0" fontSize="8">ಮೌಲ್ಯ ಶಿಕ್ಷಣ • ತರಗತಿ ೭</text>
      </g>
    </svg>
  </div>
);

// Slide 2: The Broken Vase / Mistake Illustration
export const MistakeIllustration: React.FC = () => (
  <div className="relative w-full h-full min-h-[300px] flex items-center justify-center rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 p-4 overflow-hidden">
    <svg viewBox="0 0 420 320" className="w-full h-full max-h-[300px]" xmlns="http://www.w3.org/2000/svg">
      {/* Floor / Desk */}
      <rect x="20" y="250" width="380" height="8" rx="4" fill="#d97706" />

      {/* Spilled Color / Water Splash */}
      <path d="M 120,250 C 140,240 180,260 210,248 C 240,255 270,242 290,252 L 290,256 L 120,256 Z" fill="#38bdf8" opacity="0.75" />

      {/* Tipped Over Flower Vase */}
      <g transform="translate(180, 220) rotate(55)">
        <path d="M 0,0 L 25,-10 L 45,35 L -10,35 Z" fill="#f43f5e" rx="4" />
        <circle cx="15" cy="10" r="8" fill="#fda4af" />
        {/* Fallen Flower */}
        <circle cx="-15" cy="15" r="10" fill="#fbbf24" />
        <circle cx="-15" cy="15" r="4" fill="#b45309" />
      </g>

      {/* Student 1 (Who made mistake - startled hands on cheeks) */}
      <g transform="translate(70, 100)">
        <motion.g animate={{ y: [0, -4, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <circle cx="45" cy="40" r="24" fill="#fed7aa" />
          <circle cx="37" cy="36" r="3" fill="#334155" />
          <circle cx="53" cy="36" r="3" fill="#334155" />
          <ellipse cx="45" cy="48" rx="6" ry="8" fill="#e11d48" /> {/* "Oh no" mouth */}
          {/* Hands on cheeks */}
          <circle cx="20" cy="44" r="8" fill="#fed7aa" />
          <circle cx="70" cy="44" r="8" fill="#fed7aa" />
          <path d="M 25,68 C 25,60 65,60 65,68 L 70,140 L 20,140 Z" fill="#3b82f6" />
          {/* Animated Question / Oops Mark */}
          <motion.text 
            x="45" 
            y="-5" 
            fontSize="26" 
            fontWeight="bold" 
            fill="#f97316" 
            textAnchor="middle"
            animate={{ scale: [1, 1.3, 1], rotate: [-10, 10, -10] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Oops!
          </motion.text>
        </motion.g>
      </g>

      {/* Student 2 (Hurt friend - surprised) */}
      <g transform="translate(280, 110)">
        <circle cx="35" cy="35" r="22" fill="#fbcfe8" />
        <circle cx="28" cy="32" r="3" fill="#334155" />
        <circle cx="42" cy="32" r="3" fill="#334155" />
        <path d="M 28,45 Q 35,41 42,45" fill="none" stroke="#334155" strokeWidth="2.5" />
        <path d="M 18,60 C 18,54 52,54 52,60 L 56,130 L 14,130 Z" fill="#10b981" />
      </g>

      {/* Gentle Floating Lightbulb: "Mistakes are lessons" */}
      <g transform="translate(200, 40)">
        <motion.g animate={{ y: [0, -6, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>
          <circle cx="20" cy="20" r="16" fill="#fef08a" stroke="#eab308" strokeWidth="2" />
          <path d="M 15,36 L 25,36 L 23,41 L 17,41 Z" fill="#94a3b8" />
          <text x="20" y="24" fontSize="14" fill="#854d0e" fontWeight="bold" textAnchor="middle">💡</text>
        </motion.g>
      </g>
    </svg>
  </div>
);

// Slide 3: 4 Pillars of a Genuine Apology
export const PillarsIllustration: React.FC = () => (
  <div className="w-full h-full flex flex-col justify-center gap-3 p-4 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl border border-indigo-200">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {[
        { step: '1', titleEn: 'Admit', titleKn: 'ತಪ್ಪೊಪ್ಪಿಗೆ', descEn: 'Name what happened with honesty', descKn: 'ಯಾವುದೇ ನೆಪವಿಲ್ಲದೆ ಸತ್ಯ ಒಪ್ಪಿಕೊಳ್ಳಿ', color: 'from-blue-500 to-indigo-600', icon: '🔍' },
        { step: '2', titleEn: 'Empathize', titleKn: 'ಸಹಾನುಭೂತಿ', descEn: 'Feel and understand their pain', descKn: 'ಇನ್ನೊಬ್ಬರ ನೋವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ', color: 'from-amber-500 to-orange-600', icon: '❤️' },
        { step: '3', titleEn: 'Repair', titleKn: 'ಸರಿಪಡಿಸುವುದು', descEn: 'Take concrete action to fix damage', descKn: 'ಹಾನಿಯನ್ನು ಸರಿಪಡಿಸಲು ಕ್ರಮ ಕೈಗೊಳ್ಳಿ', color: 'from-emerald-500 to-teal-600', icon: '🛠️' },
        { step: '4', titleEn: 'Change', titleKn: 'ಬದಲಾಗುವುದು', descEn: 'Never repeat the harmful action', descKn: 'ಮುಂದೆ ಈ ತಪ್ಪು ಮರುಕಳಿಸದಂತೆ ನಡತೆ', color: 'from-purple-500 to-pink-600', icon: '🌟' }
      ].map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.15 }}
          className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 flex flex-col items-center text-center hover:shadow-md transition-shadow relative overflow-hidden group"
        >
          <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${item.color} text-white flex items-center justify-center text-xl mb-2 shadow-md group-hover:scale-110 transition-transform`}>
            {item.icon}
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full mb-1">
            Pillar {item.step}
          </span>
          <h4 className="font-bold text-slate-900 text-sm">{item.titleEn}</h4>
          <h5 className="text-xs font-medium text-emerald-700 mb-2 font-kannada">{item.titleKn}</h5>
          <p className="text-xs text-slate-600 mb-1">{item.descEn}</p>
          <p className="text-xs text-slate-500 font-kannada">{item.descKn}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

// Slide 5: S.T.A.R.S. Animated Constellation
export const StarsFormulaIllustration: React.FC = () => (
  <div className="w-full h-full min-h-[300px] flex items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 p-4 border border-indigo-500/30 overflow-hidden relative">
    <svg viewBox="0 0 500 240" className="w-full h-full max-h-[250px]" xmlns="http://www.w3.org/2000/svg">
      {/* Constellation Lines */}
      <motion.path
        d="M 50,140 L 145,70 L 250,150 L 355,60 L 450,130"
        fill="none"
        stroke="#818cf8"
        strokeWidth="3"
        strokeDasharray="6 6"
        animate={{ strokeDashoffset: [0, -40] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      {[
        { letter: 'S', wordEn: 'Say Sorry', wordKn: 'ಕ್ಷಮಿಸಿ', cx: 50, cy: 140, color: '#38bdf8' },
        { letter: 'T', wordEn: 'Take Blame', wordKn: 'ಹೊಣೆ ಹೊರಿ', cx: 145, cy: 70, color: '#f59e0b' },
        { letter: 'A', wordEn: 'Acknowledge', wordKn: 'ಅರ್ಥಮಾಡಿ', cx: 250, cy: 150, color: '#ec4899' },
        { letter: 'R', wordEn: 'Repair', wordKn: 'ಸರಿಪಡಿಸಿ', cx: 355, cy: 60, color: '#10b981' },
        { letter: 'S', wordEn: 'Stop Habit', wordKn: 'ಬದಲಾಗಿ', cx: 450, cy: 130, color: '#a855f7' }
      ].map((star, i) => (
        <g key={i} transform={`translate(${star.cx}, ${star.cy})`}>
          <motion.circle
            r="26"
            fill={star.color}
            opacity="0.2"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
          />
          <circle r="18" fill={star.color} />
          <text y="6" fill="#ffffff" fontSize="16" fontWeight="bold" textAnchor="middle">{star.letter}</text>
          
          <text y="34" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">{star.wordEn}</text>
          <text y="48" fill="#fed7aa" fontSize="10" textAnchor="middle">{star.wordKn}</text>
        </g>
      ))}
    </svg>
  </div>
);

// Slide 7: Poem Book & Healed Mirror
export const PoemIllustration: React.FC = () => (
  <div className="w-full h-full min-h-[300px] flex items-center justify-center rounded-2xl bg-gradient-to-br from-amber-900/10 via-rose-900/10 to-amber-100/40 p-4 border border-amber-300/40">
    <svg viewBox="0 0 400 280" className="w-full h-full max-h-[260px]" xmlns="http://www.w3.org/2000/svg">
      {/* Golden Open Book */}
      <g transform="translate(50, 60)">
        {/* Left Page */}
        <path d="M 20,20 C 70,10 120,25 150,30 L 150,170 C 120,165 70,150 20,160 Z" fill="#fffbeb" stroke="#d97706" strokeWidth="2" />
        {/* Right Page */}
        <path d="M 280,20 C 230,10 180,25 150,30 L 150,170 C 180,165 230,150 280,160 Z" fill="#fffbeb" stroke="#d97706" strokeWidth="2" />
        {/* Spine */}
        <line x1="150" y1="30" x2="150" y2="170" stroke="#b45309" strokeWidth="3" />
        
        {/* English Script Lines on Left Page */}
        <line x1="45" y1="55" x2="125" y2="55" stroke="#92400e" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <line x1="45" y1="75" x2="135" y2="75" stroke="#92400e" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <line x1="45" y1="95" x2="115" y2="95" stroke="#92400e" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <line x1="45" y1="115" x2="130" y2="115" stroke="#92400e" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <text x="85" y="145" fontSize="10" fill="#b45309" fontWeight="bold" textAnchor="middle">ENGLISH POEM</text>

        {/* Kannada Script Lines on Right Page */}
        <line x1="175" y1="55" x2="255" y2="55" stroke="#047857" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <line x1="175" y1="75" x2="265" y2="75" stroke="#047857" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <line x1="175" y1="95" x2="245" y2="95" stroke="#047857" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <line x1="175" y1="115" x2="260" y2="115" stroke="#047857" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <text x="215" y="145" fontSize="10" fill="#065f46" fontWeight="bold" textAnchor="middle">ಕನ್ನಡ ಕವನ</text>
      </g>

      {/* Floating Golden Musical/Poetic Notes */}
      <motion.text x="80" y="50" fontSize="24" fill="#eab308" animate={{ y: [0, -8, 0], opacity: [0.6, 1, 0.6] }} transition={{ duration: 2.2, repeat: Infinity }}>🎵</motion.text>
      <motion.text x="320" y="45" fontSize="24" fill="#eab308" animate={{ y: [0, -10, 0], opacity: [0.6, 1, 0.6] }} transition={{ duration: 2.8, repeat: Infinity }}>✨</motion.text>
      <motion.text x="200" y="40" fontSize="22" fill="#ec4899" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>🌸</motion.text>
    </svg>
  </div>
);

// Slide 12: Textbook Reflection Cloud with Golden Aura
export const ReflectionCloudIllustration: React.FC = () => (
  <div className="w-full h-full min-h-[300px] flex items-center justify-center rounded-2xl bg-gradient-to-br from-sky-50 via-teal-50 to-blue-100 p-6 border border-sky-300 shadow-inner relative overflow-hidden">
    {/* Animated Sunbeam Backdrop */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(254,240,138,0.35),transparent_70%)] pointer-events-none" />

    <svg viewBox="0 0 500 280" className="w-full h-full max-h-[280px]" xmlns="http://www.w3.org/2000/svg">
      {/* Cloud Shape directly mirroring textbook page 10 & 11 */}
      <motion.path
        d="M 120,160 
           A 35,35 0 0,1 150,105 
           A 55,55 0 0,1 250,75 
           A 55,55 0 0,1 350,95 
           A 45,45 0 0,1 400,150 
           A 40,40 0 0,1 380,210 
           A 40,40 0 0,1 300,230 
           A 45,45 0 0,1 190,225 
           A 40,40 0 0,1 120,160 Z"
        fill="#ffffff"
        stroke="#0284c7"
        strokeWidth="3.5"
        strokeDasharray="4 2"
        filter="drop-shadow(0 10px 15px rgba(2,132,199,0.15))"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Cloud Callout Circles */}
      <circle cx="95" cy="215" r="10" fill="#ffffff" stroke="#0284c7" strokeWidth="2.5" />
      <circle cx="78" cy="235" r="6" fill="#ffffff" stroke="#0284c7" strokeWidth="2" />

      {/* Student Contemplating (Just like in textbook illustration) */}
      <g transform="translate(30, 210)">
        <circle cx="20" cy="20" r="15" fill="#fed7aa" />
        <path d="M 8,36 C 8,30 32,30 32,36 L 36,65 L 4,65 Z" fill="#0284c7" />
        {/* Hand on chin thinking */}
        <circle cx="28" cy="26" r="4" fill="#fed7aa" />
        <circle cx="16" cy="18" r="2" fill="#0f172a" />
      </g>

      {/* Golden Badge of Truth */}
      <g transform="translate(230, 110)">
        <circle cx="20" cy="20" r="20" fill="#fef08a" stroke="#eab308" strokeWidth="2" />
        <text x="20" y="27" fontSize="22" textAnchor="middle">✨</text>
      </g>

      {/* Sparkles around cloud */}
      <motion.text x="110" y="80" fontSize="18" fill="#0284c7" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }}>✦</motion.text>
      <motion.text x="390" y="85" fontSize="22" fill="#eab308" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2.5, repeat: Infinity }}>★</motion.text>
      <motion.text x="370" y="235" fontSize="20" fill="#059669" animate={{ opacity: [0.3, 0.9, 0.3] }} transition={{ duration: 1.8, repeat: Infinity }}>✦</motion.text>
    </svg>
  </div>
);

// Slide 15: The Blooming Apology Garden
export const GardenIllustration: React.FC = () => (
  <div className="w-full h-full min-h-[300px] flex items-center justify-center rounded-2xl bg-gradient-to-b from-sky-200 via-emerald-100 to-green-300 p-4 border border-emerald-400 overflow-hidden relative shadow-inner">
    <svg viewBox="0 0 460 260" className="w-full h-full max-h-[250px]" xmlns="http://www.w3.org/2000/svg">
      {/* Sun */}
      <motion.circle 
        cx="400" 
        cy="40" 
        r="28" 
        fill="#facc15" 
        animate={{ scale: [1, 1.1, 1] }} 
        transition={{ duration: 3, repeat: Infinity }} 
      />
      {/* Cloud */}
      <path d="M 50,50 A 15,15 0 0,1 75,40 A 25,25 0 0,1 115,40 A 15,15 0 0,1 135,50 Z" fill="#ffffff" opacity="0.8" />

      {/* Rich Soil */}
      <path d="M 0,210 Q 120,200 230,210 T 460,205 L 460,260 L 0,260 Z" fill="#78350f" />
      <path d="M 0,200 Q 150,190 280,200 T 460,195 L 460,210 L 0,210 Z" fill="#15803d" />

      {/* Flower 1: Honesty (Sunflower) */}
      <g transform="translate(80, 110)">
        <line x1="20" y1="90" x2="20" y2="40" stroke="#16a34a" strokeWidth="4" />
        <ellipse cx="10" cy="70" rx="8" ry="4" fill="#22c55e" transform="rotate(-30, 10, 70)" />
        <motion.g animate={{ rotate: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity }}>
          <circle cx="20" cy="35" r="14" fill="#eab308" />
          <circle cx="20" cy="35" r="7" fill="#78350f" />
        </motion.g>
        <text x="20" y="105" fontSize="10" fontWeight="bold" fill="#fef08a" textAnchor="middle">Honesty</text>
      </g>

      {/* Flower 2: Empathy (Rose) */}
      <g transform="translate(180, 95)">
        <line x1="20" y1="105" x2="20" y2="35" stroke="#16a34a" strokeWidth="4" />
        <ellipse cx="28" cy="75" rx="8" ry="4" fill="#22c55e" transform="rotate(30, 28, 75)" />
        <motion.circle 
          cx="20" 
          cy="30" 
          r="16" 
          fill="#f43f5e" 
          animate={{ scale: [1, 1.15, 1] }} 
          transition={{ duration: 2.5, repeat: Infinity }} 
        />
        <circle cx="20" cy="30" r="8" fill="#be123c" />
        <text x="20" y="120" fontSize="10" fontWeight="bold" fill="#fef08a" textAnchor="middle">ಸಹಾನುಭೂತಿ</text>
      </g>

      {/* Flower 3: Rebuilt Trust (Golden Lotus) */}
      <g transform="translate(280, 105)">
        <line x1="20" y1="95" x2="20" y2="35" stroke="#16a34a" strokeWidth="4" />
        <ellipse cx="12" cy="70" rx="8" ry="4" fill="#22c55e" transform="rotate(-25, 12, 70)" />
        <motion.g animate={{ y: [0, -3, 0] }} transition={{ duration: 3, repeat: Infinity }}>
          <ellipse cx="10" cy="35" rx="10" ry="14" fill="#38bdf8" />
          <ellipse cx="30" cy="35" rx="10" ry="14" fill="#38bdf8" />
          <ellipse cx="20" cy="30" rx="12" ry="16" fill="#0284c7" />
        </motion.g>
        <text x="20" y="110" fontSize="10" fontWeight="bold" fill="#fef08a" textAnchor="middle">Rebuilt Trust</text>
      </g>

      {/* Flower 4: Courage (Purple Bloom) */}
      <g transform="translate(370, 115)">
        <line x1="20" y1="85" x2="20" y2="40" stroke="#16a34a" strokeWidth="4" />
        <motion.circle cx="20" cy="35" r="14" fill="#a855f7" animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 2.2, repeat: Infinity }} />
        <text x="20" y="100" fontSize="10" fontWeight="bold" fill="#fef08a" textAnchor="middle">ಧೈರ್ಯ</text>
      </g>

      {/* Butterfly fluttering */}
      <motion.g 
        animate={{ x: [0, 80, 160, 240, 0], y: [0, -30, -10, -40, 0] }} 
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        transform="translate(100, 70)"
      >
        <ellipse cx="0" cy="0" rx="6" ry="10" fill="#f43f5e" transform="rotate(30)" />
        <ellipse cx="10" cy="0" rx="6" ry="10" fill="#f43f5e" transform="rotate(-30, 10, 0)" />
        <circle cx="5" cy="0" r="3" fill="#1e293b" />
      </motion.g>
    </svg>
  </div>
);
