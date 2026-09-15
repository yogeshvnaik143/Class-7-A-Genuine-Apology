import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer } from 'lucide-react';
import { sound } from '../utils/audio';

interface PrintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintModal: React.FC<PrintModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    sound.playPop();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl p-4 sm:p-6 text-slate-100 max-h-[92vh] flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3.5 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
              <Printer className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-white">Classroom Worksheet & Lesson Handout</h3>
              <p className="text-xs text-slate-400">Class 7 Value Education • Karnataka School Curriculum</p>
            </div>
          </div>
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => { sound.playPop(); onClose(); }}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Printable Preview Container */}
        <div className="flex-1 overflow-y-auto my-3 sm:my-4 p-4 sm:p-6 bg-white text-slate-900 rounded-2xl space-y-6 text-xs shadow-inner">
          <div className="text-center border-b pb-3 border-slate-200">
            <h2 className="text-sm sm:text-base font-bold text-emerald-800 uppercase">
              ಶಾಲಾ ಶಿಕ್ಷಣ ಮತ್ತು ಸಾಕ್ಷರತಾ ಇಲಾಖೆ • ಕರ್ನಾಟಕ ಸರ್ಕಾರ
            </h2>
            <h3 className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
              Class 7 Value Education: 2.1 A Genuine Apology / ೨.೧ ಪ್ರಾಮಾಣಿಕ ಕ್ಷಮೆಯಾಚನೆ
            </h3>
            <p className="text-[11px] text-slate-500 mt-0.5">Student Activity Worksheet 2026-2027 • ವಿದ್ಯಾರ್ಥಿ ಚಟುವಟಿಕಾ ಹಾಳೆ</p>
            <div className="mt-3 flex flex-wrap justify-between gap-2 text-[11px] text-slate-600 px-2 sm:px-4">
              <span>Student Name / ವಿದ್ಯಾರ್ಥಿ ಹೆಸರು: ________________________</span>
              <span>Roll No: ______</span>
              <span>Date: _________</span>
            </div>
          </div>

          {/* Section 1: Checklist Activity from Textbook */}
          <div>
            <h4 className="font-bold text-xs sm:text-sm text-indigo-900 mb-1 border-b border-indigo-100 pb-1">
              Part 1: Tick what you think is true of a genuine apology (✓) / ಕ್ಷಮೆಯಾಚನೆಯ ಬಗ್ಗೆ ನಿಮ್ಮ ಅನಿಸಿಕೆಗಳಿಗೆ ✓ ಮಾಡಿ
            </h4>
            <div className="space-y-2 mt-2">
              {[
                { en: '1. It has nice words like "sorry, I won’t do it again."', kn: '೧. "ಕ್ಷಮಿಸಿ, ನಾನು ಮತ್ತೆ ಹಾಗೆ ಮಾಡುವುದಿಲ್ಲ" ಎಂದು ಹೇಳುವುದು.' },
                { en: '2. It explains that the matter was not in their hands; the situation made them act like that.', kn: '೨. ಆ ಪರಿಸ್ಥಿತಿ ಅವರ ನಿಯಂತ್ರಣದಲ್ಲಿರಲಿಲ್ಲ. ಸಂದರ್ಭ ಅವರನ್ನು ಹಾಗೆ ವರ್ತಿಸುವಂತೆ ಮಾಡಿತು ಎಂದು ನೆಪ ಹೇಳುವುದು.' },
                { en: '3. It brings out the perspective of the person who did harm as well as the person harmed.', kn: '೩. ಕ್ಷಮೆಯಾಚಿಸುವುದು ನೋವುಂಟು ಮಾಡಿದ ಮತ್ತು ಅನುಭವಿಸಿದ ಇಬ್ಬರಿಗೂ ಪರಸ್ಪರ ದೃಷ್ಟಿಕೋನ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ನೆರವಾಗುತ್ತದೆ.' },
                { en: '4. It asks the person harmed to understand, to be empathetic and to forgive.', kn: '೪. ಕ್ಷಮೆಯಾಚಿಸುವುದು ನೋವು ಅನುಭವಿಸಿದ ವ್ಯಕ್ತಿಯ ಬಗ್ಗೆ ಸಹಾನುಭೂತಿ ತೋರಿಸಲು ಮತ್ತು ಕ್ಷಮಿಸಲು ಪ್ರೇರೇಪಿಸುತ್ತದೆ.' },
                { en: '5. It asks the person harmed to keep it secret so they don’t lose social respect.', kn: '೫. ತಾವು ಮಾಡಿದ ತಪ್ಪಿನಿಂದ ಸಮಾಜದಲ್ಲಿ ಗೌರವ ಕಳೆದುಕೊಳ್ಳುವ ಭಯದಿಂದ ರಹಸ್ಯವಾಗಿಡುವಂತೆ ಕೇಳುವುದು.' },
                { en: '6. It says the person is sorry for the harm caused and takes concrete steps to alter behaviour.', kn: '೬. ತಪ್ಪಿಗೆ ಪ್ರಾಮಾಣಿಕವಾಗಿ ಪಶ್ಚಾತ್ತಾಪಪಡುವುದು ಮತ್ತು ಮುಂದೆ ಎಚ್ಚರ ವಹಿಸುವುದಾಗಿ ಭರವಸೆ ನೀಡುವುದು.' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2 border rounded-xl border-slate-200">
                  <div className="w-4 h-4 rounded border-2 border-slate-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-800">{item.en}</p>
                    <p className="text-slate-600 font-kannada">{item.kn}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Core Reflection Cloud */}
          <div className="p-3 sm:p-4 bg-emerald-50 border-2 border-dashed border-emerald-400 rounded-2xl text-center">
            <h5 className="font-bold text-xs text-emerald-900 uppercase tracking-wider mb-1">Core Reflection Cloud / ಚಿಂತನೆಯ ಮೋಡ</h5>
            <p className="italic font-serif text-slate-800 font-medium">
              "When I apologize without excuses and change my harmful behavior, I build trust and show true accountability."
            </p>
            <p className="italic font-kannada text-emerald-800 font-semibold mt-1">
              "ನಾನು ಯಾವುದೇ ನೆಪ ಹೇಳದೆ ಕ್ಷಮೆಯಾಚಿಸಿದಾಗ ಮತ್ತು ನನ್ನ ನಡವಳಿಕೆಯನ್ನು ಬದಲಾಯಿಸಿಕೊಂಡಾಗ, ವಿಶ್ವಾಸವನ್ನು ಗಳಿಸುತ್ತೇನೆ ಮತ್ತು ನಿಜವಾದ ಹೊಣೆಗಾರಿಕೆಯನ್ನು ತೋರಿಸುತ್ತೇನೆ."
            </p>
          </div>

          {/* Section 3: Think and Do Personal Reflection */}
          <div>
            <h4 className="font-bold text-xs sm:text-sm text-indigo-900 mb-1 border-b border-indigo-100 pb-1">
              Part 2: Think and Do / ಯೋಚಿಸಿ ಮತ್ತು ಮಾಡಿ (Personal Action Journal)
            </h4>
            <p className="text-slate-700 italic mb-2 leading-relaxed">
              Think of a time you hurt someone — a friend, sibling, or family member. If you could apologize again, what would you say or do differently? Write one small action you can take today:
            </p>
            <div className="space-y-3 pt-2 text-[11px] sm:text-xs">
              <div className="border-b border-slate-300 pb-1">೧. ನಾನು ಯಾರನ್ನು ನೋಯಿಸಿದ್ದೆ (Who was hurt): _____________________________________________</div>
              <div className="border-b border-slate-300 pb-1">೨. ನಾನು ಹೇಳಿದ ನೆಪವೇನು (The excuse I gave): _____________________________________________</div>
              <div className="border-b border-slate-300 pb-1">೩. ಇಂದು ನಾನು ಸರಿಪಡಿಸಲು ಕೈಗೊಳ್ಳುವ ಕ್ರಮ (Action to make it right): ___________________________</div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2.5">
          <span className="text-xs text-slate-400">Ready to print on A4 sheet or save as PDF</span>
          <div className="flex items-center gap-2">
            <motion.button
              whileTap={{ scale: 0.94 }}
              onClick={() => { sound.playPop(); onClose(); }}
              className="min-h-[44px] px-3.5 py-1.5 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs transition-colors"
            >
              Cancel
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrint}
              className="min-h-[44px] flex items-center gap-2 px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Print Worksheet / Save PDF</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
