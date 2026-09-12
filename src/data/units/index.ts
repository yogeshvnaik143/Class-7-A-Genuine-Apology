import { SlideContent, UnitOverview } from '../../types';
import { UNIT_1_SLIDES } from './unit1Deck';
import { UNIT_2_SLIDES } from './unit2Deck';
import { UNIT_3_SLIDES } from './unit3Deck';
import { UNIT_4_SLIDES } from './unit4Deck';
import { UNIT_5_SLIDES } from './unit5Deck';
import { UNIT_6_SLIDES } from './unit6Deck';
import { UNIT_7_SLIDES } from './unit7Deck';
import { UNIT_8_SLIDES } from './unit8Deck';
import { UNIT_9_SLIDES } from './unit9Deck';
import { UNIT_10_SLIDES } from './unit10Deck';
import { UNIT_11_SLIDES } from './unit11Deck';

export const ALL_UNIT_DECKS: Record<string, SlideContent[]> = {
  'unit-1': UNIT_1_SLIDES,
  'unit-2': UNIT_2_SLIDES,
  'unit-3': UNIT_3_SLIDES,
  'unit-4': UNIT_4_SLIDES,
  'unit-5': UNIT_5_SLIDES,
  'unit-6': UNIT_6_SLIDES,
  'unit-7': UNIT_7_SLIDES,
  'unit-8': UNIT_8_SLIDES,
  'unit-9': UNIT_9_SLIDES,
  'unit-10': UNIT_10_SLIDES,
  'unit-11': UNIT_11_SLIDES,
};

export const TOTAL_SLIDES_COUNT = Object.values(ALL_UNIT_DECKS).reduce((acc, curr) => acc + curr.length, 0);

export const UNITS_METADATA: UnitOverview[] = [
  {
    id: 'unit-1',
    number: 1,
    titleEn: 'Know Yourself: Self-Awareness & Values',
    titleKn: 'ನಿಮ್ಮನ್ನು ನೀವು ಅರಿಯಿರಿ: ಸ್ವಯಂ ಅರಿವು ಮತ್ತು ಮೌಲ್ಯಗಳು',
    subtitleEn: 'Who am I? Unique strengths, emotional self-reflection, and inner compass',
    subtitleKn: 'ನಾನು ಯಾರು? ವೈಯಕ್ತಿಕ ಸಾಮರ್ಥ್ಯಗಳು, ಭಾವನಾತ್ಮಕ ಸಮತೋಲನ ಮತ್ತು ಅಂತರಂಗದ ದಿಕ್ಸೂಚಿ',
    theme: 'amber',
    iconName: 'Sparkles',
    slideCount: UNIT_1_SLIDES.length,
    heritageTagEn: 'D.V.G. Mankuthimma Vachana Wisdom',
    heritageTagKn: 'ಡಿ.ವಿ.ಜಿ. ಮಂಕುತಿಮ್ಮನ ಕಗ್ಗದ ಜೀವನ ದರ್ಶನ',
    descriptionEn: 'Discover your internal strengths, cultivate emotional balance, and build unshakeable self-worth inspired by Karnataka’s philosophers.',
    descriptionKn: 'ನಿಮ್ಮ ಆಂತರಿಕ ಶಕ್ತಿಯನ್ನು ಗುರುತಿಸಿ, ಭಾವನೆಗಳನ್ನು ನಿರ್ವಹಿಸಿ ಮತ್ತು ಡಿ.ವಿ.ಜಿ. ಅವರ ಮಂಕುತಿಮ್ಮನ ಕಗ್ಗದಂತೆ ಸಮಚಿತ್ತದಿಂದ ಬಾಳುವುದನ್ನು ಕಲಿಯಿರಿ.'
  },
  {
    id: 'unit-2',
    number: 2,
    titleEn: 'Emotional Wellbeing & Mental Balance',
    titleKn: 'ಭಾವನಾತ್ಮಕ ಕ್ಷೇಮ ಮತ್ತು ಮಾನಸಿಕ ಸಮತೋಲನ',
    subtitleEn: 'Anger mastery, mindfulness, grief navigation, and emotional resilience',
    subtitleKn: 'ಕೋಪ ನಿರ್ವಹಣೆ, ಧ್ಯಾನ, ದುಃಖವನ್ನು ಸಮಾಧಾನಿಸುವ ಕಲೆ ಮತ್ತು ಮಾನಸಿಕ ಸ್ಥೈರ್ಯ',
    theme: 'blue',
    iconName: 'HeartHandshake',
    slideCount: UNIT_2_SLIDES.length,
    heritageTagEn: 'Allama Prabhu & Anubhava Mantapa',
    heritageTagKn: 'ಅಲ್ಲಮ ಪ್ರಭು ಮತ್ತು ಅನುಭವ ಮಂಟಪ',
    descriptionEn: 'Learn scientific box breathing, the Anger Pause rule, and navigating sadness with loving compassion for oneself and others.',
    descriptionKn: '೪-೪-೪ ಬಾಕ್ಸ್ ಉಸಿರಾಟ, ಕೋಪವನ್ನು ನಿಯಂತ್ರಿಸುವ ೧೦ ಸೆಕೆಂಡ್ ಸೂತ್ರ ಮತ್ತು ಅಲ್ಲಮ ಪ್ರಭುಗಳ ವೈರಾಗ್ಯ ಸಮತೋಲನವನ್ನು ಕಲಿಯಿರಿ.'
  },
  {
    id: 'unit-3',
    number: 3,
    titleEn: 'Growth Mindset & Conquering Exam Stress',
    titleKn: 'ಪ್ರಗತಿಪರ ಮನೋಭಾವ ಮತ್ತು ಪರೀಕ್ಷಾ ಒತ್ತಡ ನಿವಾರಣೆ',
    subtitleEn: 'Neuroplasticity, turning failures into stepping stones, Pomodoro technique',
    subtitleKn: 'ಮೆದುಳಿನ ಬೆಳವಣಿಗೆ, ಸೋಲನ್ನು ಗೆಲುವಾಗಿಸುವ ಶಕ್ತಿ ಮತ್ತು ಪೊಮೊಡೊರೊ ಅಧ್ಯಯನ ಸೂತ್ರ',
    theme: 'emerald',
    iconName: 'Brain',
    slideCount: UNIT_3_SLIDES.length,
    heritageTagEn: 'K. Sivan & ISRO Chandrayaan Resilience',
    heritageTagKn: 'ಡಾ. ಕೆ. ಶಿವನ್ ಮತ್ತು ಇಸ್ರೋ ಚಂದ್ರಯಾನ ಸಾಧನೆ',
    descriptionEn: 'Rewire your mindset from "I cannot" to "Yet!", master the 25-minute Pomodoro study habit, and conquer examination anxiety.',
    descriptionKn: '“ನನ್ನಿಂದಾಗದು” ಎಂಬುದನ್ನು “ಇನ್ನೂ ಕಲಿಯುತ್ತಿದ್ದೇನೆ” ಎಂದು ಬದಲಿಸಿ; ಇಸ್ರೋ ವಿಜ್ಞಾನಿಗಳಂತೆ ಸೋಲಿನಿಂದ ಪುಟಿದೆದ್ದು ಪರೀಕ್ಷೆಯನ್ನು ಆತ್ಮವಿಶ್ವಾಸದಿಂದ ಎದುರಿಸಿ.'
  },
  {
    id: 'unit-4',
    number: 4,
    titleEn: 'Healthy Relationships & True Friendship',
    titleKn: 'ಆರೋಗ್ಯಕರ ಬಾಂಧವ್ಯ ಮತ್ತು ನೈಜ ಸ್ನೇಹ',
    subtitleEn: 'Karna-Duryodhana vs Krishna-Sudama loyalty, peer pressure resistance',
    subtitleKn: 'ಕರ್ಣ-ದುರ್ಯೋಧನ vs ಕೃಷ್ಣ-ಸುಧಾಮ ಸ್ನೇಹ, ಕೆಟ್ಟ ಒತ್ತಡಗಳನ್ನು ತಿರಸ್ಕರಿಸುವ ಧೈರ್ಯ',
    theme: 'rose',
    iconName: 'Users',
    slideCount: UNIT_4_SLIDES.length,
    heritageTagEn: 'Pampa Bharata & Friendship Ethics',
    heritageTagKn: 'ಪಂಪ ಭಾರತ ಮತ್ತು ನೈಜ ಸ್ನೇಹದ ಧರ್ಮ',
    descriptionEn: 'Differentiate between uplifting friends and toxic peer pressure; master the polite but unbreakable “NO!” to harmful habits.',
    descriptionKn: 'ಕಷ್ಟದಲ್ಲಿ ನೆರವಾಗುವ ನೈಜ ಮಿತ್ರರನ್ನು ಗುರುತಿಸಿ; ಗೆಳೆಯರ ಕೆಟ್ಟ ಒತ್ತಡಗಳಿಗೆ "ಬೇಡ" ಎಂದು ಗೌರವಯುತವಾಗಿ ಹೇಳುವ ನೈತಿಕ ಸ್ಥೈರ್ಯ ಬೆಳೆಸಿಕೊಳ್ಳಿ.'
  },
  {
    id: 'unit-5',
    number: 5,
    titleEn: 'Empathetic & Courteous Communication',
    titleKn: 'ಸಹಾನುಭೂತಿ ಮತ್ತು ಸೌಜನ್ಯದ ಸಂವಹನ ಕಲೆ',
    subtitleEn: 'Active listening, non-violent communication, Basavanna’s Nudidare Muthina Haradantirabeku',
    subtitleKn: 'ಶ್ರವಣ ಶಕ್ತಿ, ಅಹಿಂಸಾತ್ಮಕ ಮಾತುಕತೆ ಮತ್ತು ಬಸವಣ್ಣನವರ ನುಡಿದರೆ ಮುತ್ತಿನ ಹಾರದಂತಿರಬೇಕು',
    theme: 'violet',
    iconName: 'MessageCircle',
    slideCount: UNIT_5_SLIDES.length,
    heritageTagEn: 'Basavanna’s Pearl Garland Vachana',
    heritageTagKn: 'ಬಸವಣ್ಣನವರ ಮುತ್ತಿನ ಹಾರದ ವಚನ',
    descriptionEn: 'Transform spoken words into sweet pearls; master deep 80/20 active listening and constructive conflict resolution.',
    descriptionKn: 'ಮಾತಿನಲ್ಲಿ ಮುತ್ತಿನಂತಹ ಮಾಧುರ್ಯ, ಶಾಂತವಾಗಿ ಆಲಿಸುವ ಕಲೆ ಮತ್ತು ವಿವಾದಗಳನ್ನು ಪ್ರೀತಿಯಿಂದ ಬಗೆಹರಿಸುವ ಬಗೆಯನ್ನು ಕಲಿಯಿರಿ.'
  },
  {
    id: 'unit-6',
    number: 6,
    titleEn: 'Moral Courage & Uncompromising Honesty',
    titleKn: 'ನೈತಿಕ ಧೈರ್ಯ ಮತ್ತು ಸತ್ಯನಿಷ್ಠೆ',
    subtitleEn: 'Satya Harishchandra, Punyakoti the sacred cow, whistleblowing integrity',
    subtitleKn: 'ಸತ್ಯ ಹರಿಶ್ಚಂದ್ರ, ಪುಣ್ಯಕೋಟಿ ಗೋವಿನ ಸತ್ಯವಾಕ್ಯ ಮತ್ತು ಅನ್ಯಾಯವನ್ನು ಎದುರಿಸುವ ಧೈರ್ಯ',
    theme: 'indigo',
    iconName: 'ShieldCheck',
    slideCount: UNIT_6_SLIDES.length,
    heritageTagEn: 'Govina Haadu (ಪುಣ್ಯಕೋಟಿ ಕಥನ)',
    heritageTagKn: 'ಗೋವಿನ ಹಾಡು (ಸತ್ಯವೇ ಭಗವಂತ)',
    descriptionEn: 'Walk the noble path of truth even when no one is watching; discover why integrity is the crown jewel of human character.',
    descriptionKn: 'ಯಾರೂ ನೋಡದಿದ್ದರೂ ಸತ್ಯವಂತರಾಗಿರಿ; ಪುಣ್ಯಕೋಟಿಯಂತೆ ಪ್ರಾಣಕ್ಕಿಂತ ಸತ್ಯವೇ ಮೇಲು ಎಂಬ ಉದಾತ್ತ ಮೌಲ್ಯವನ್ನು ಮೈಗೂಡಿಸಿಕೊಳ್ಳಿ.'
  },
  {
    id: 'unit-7',
    number: 7,
    titleEn: 'Dignity of Labor & Perseverance (ಕಾಯಕ)',
    titleKn: 'ಕಾಯಕ ಸಂಸ್ಕೃತಿ ಮತ್ತು ದೃಢ ಸಂಕಲ್ಪ',
    subtitleEn: 'Kayakave Kailasa, Sir M. Visvesvaraya, Onake Obavva’s legendary bravery',
    subtitleKn: 'ಕಾಯಕವೇ ಕೈಲಾಸ, ಸರ್ ಎಂ. ವಿಶ್ವೇಶ್ವರಯ್ಯ ಮತ್ತು ಒನಕೆ ಓಬವ್ವನ ಅಪ್ರತಿಮ ಶೌರ್ಯ',
    theme: 'teal',
    iconName: 'Wrench',
    slideCount: UNIT_7_SLIDES.length,
    heritageTagEn: 'Basavanna & Sir M. Visvesvaraya',
    heritageTagKn: 'ಬಸವಣ್ಣನವರ ಕಾಯಕ ಮತ್ತು ಸರ್ ಎಂ.ವಿ. ಕರ್ತವ್ಯನಿಷ್ಠೆ',
    descriptionEn: 'No honest work is small; honor every artisan, master the relentless pursuit of excellence, and cultivate Obavva’s courageous grit.',
    descriptionKn: 'ಯಾವ ಕಾಯಕವೂ ಕೀಳಲ್ಲ; ಸರ್ ಎಂ.ವಿ. ಅವರಂತೆ ಸಮಯಪಾಲನೆ, ಬಸವಣ್ಣನವರ ಕಾಯಕ ನಿಷ್ಠೆ ಮತ್ತು ಒನಕೆ ಓಬವ್ವನ ಸಾಹಸವನ್ನು ಕಲಿಯಿರಿ.'
  },
  {
    id: 'unit-8',
    number: 8,
    titleEn: 'Sustainable Living & Environmental Care',
    titleKn: 'ಪರಿಸರ ಸಂರಕ್ಷಣೆ: ಸುಸ್ಥಿರ ಜೀವನ ಮತ್ತು ಹಸಿರು ಕ್ರಾಂತಿ',
    subtitleEn: 'Saalumarada Thimmakka, Western Ghats rainforests, Clay Ganesha, 3 Bins waste sorting',
    subtitleKn: 'ಸಾಲುಮರದ ತಿಮ್ಮಕ್ಕ, ಸಹ್ಯಾದ್ರಿಯ ಜೀವವೈವಿಧ್ಯ, ಮಣ್ಣಿನ ಗಣೇಶ ಮತ್ತು ತ್ಯಾಜ್ಯ ವಿಂಗಡಣೆ',
    theme: 'emerald',
    iconName: 'Trees',
    slideCount: UNIT_8_SLIDES.length,
    heritageTagEn: 'Padma Shri Saalumarada Thimmakka',
    heritageTagKn: 'ಪದ್ಮಶ್ರೀ ಸಾಲುಮರದ ತಿಮ್ಮಕ್ಕ ಮತ್ತು ಅಪ್ಪಿಕೋ ಚಳವಳಿ',
    descriptionEn: 'Adopt trees as beloved children, switch to clay seed idols, and master the 6 R’s of zero-waste sustainable ecological living.',
    descriptionKn: 'ಸಾಲುಮರದ ತಿಮ್ಮಕ್ಕನಂತೆ ಮರಗಳನ್ನು ಪ್ರೀತಿಸಿ, ರಾಸಾಯನಿಕ ಬಿಟ್ಟು ಮಣ್ಣಿನ ಗಣಪತಿ ಪೂಜಿಸಿ ಮತ್ತು ಹಸಿರು-ನೀಲಿ-ಕೆಂಪು ಕಸ ವಿಂಗಡಣೆ ಕಲಿಯಿರಿ.'
  },
  {
    id: 'unit-9',
    number: 9,
    titleEn: 'Active Citizenship & Consumer Vigilance',
    titleKn: 'ಸಕ್ರಿಯ ಮತ್ತು ಜವಾಬ್ದಾರಿಯುತ ನಾಗರಿಕತೆ',
    subtitleEn: 'Gram Panchayat democracy, Jago Grahak Jago, MRP vigilance, protecting public assets',
    subtitleKn: 'ಗ್ರಾಮ ಪಂಚಾಯಿತಿ ಆಡಳಿತ, ಗ್ರಾಹಕರ ಹಕ್ಕುಗಳು, ಎಂಆರ್‌ಪಿ ಪರಿಶೀಲನೆ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಆಸ್ತಿ ರಕ್ಷಣೆ',
    theme: 'sky',
    iconName: 'Vote',
    slideCount: UNIT_9_SLIDES.length,
    heritageTagEn: 'Abdul Nazirsab & Karnataka Panchayati Raj',
    heritageTagKn: 'ಅಬ್ದುಲ್ ನಜೀರ್‌ಸಾಬ್ ಮತ್ತು ಪಂಚಾಯತ್ ರಾಜ್',
    descriptionEn: 'Practice democratic leadership in school parliaments, audit MRP and expiry dates fearlessly, and guard public heritage.',
    descriptionKn: 'ಗ್ರಾಮ ಸಭೆಯ ಮಹತ್ವ ತಿಳಿಯಿರಿ, ಅಂಗಡಿಯಲ್ಲಿ ಎಂಆರ್‌ಪಿ ಮತ್ತು ಎಕ್ಸ್‌ಪೈರಿ ದಿನಾಂಕ ಪರಿಶೀಲಿಸಿ ಬಿಲ್ ಪಡೆಯುವ ಜಾಗೃತ ಪ್ರಜೆಯಾಗಿ.'
  },
  {
    id: 'unit-10',
    number: 10,
    titleEn: 'Child Safety & Bodily Autonomy',
    titleKn: 'ಮಕ್ಕಳ ಸುರಕ್ಷತೆ ಮತ್ತು ದೇಹದ ಗಡಿಗಳ ರಕ್ಷಣೆ',
    subtitleEn: 'The Swimsuit Rule, Safe vs Unsafe Touch, NO-GO-TELL, POCSO Act, Childline 1098',
    subtitleKn: 'ಈಜುಡುಗೆಯ ನಿಯಮ, ಸುರಕ್ಷಿತ ಸ್ಪರ್ಶ, ಬೇಡ-ಓಡು-ಹೇಳು ಸೂತ್ರ, ಪೋಕ್ಸೋ ಕಾಯಿದೆ ಮತ್ತು ೧೦೯೮',
    theme: 'rose',
    iconName: 'ShieldAlert',
    slideCount: UNIT_10_SLIDES.length,
    heritageTagEn: 'POCSO Act 2012 & Childline 1098',
    heritageTagKn: 'ಪೋಕ್ಸೋ ಕಾಯಿದೆ ಮತ್ತು ಮಕ್ಕಳ ಸಹಾಯವಾಣಿ ೧೦೯೮',
    descriptionEn: 'Master personal body boundaries, the lightning-fast NO-GO-TELL protocol, and memorize the life-saving 1098 helpline.',
    descriptionKn: 'ನಿಮ್ಮ ದೇಹ ನಿಮ್ಮ ಹಕ್ಕು; ಈಜುಡುಗೆಯ ನಿಯಮವನ್ನು ತಿಳಿದು, ಅನುಮಾನಾಸ್ಪದ ಸ್ಪರ್ಶ ಕಂಡಾಗ ಧೈರ್ಯದಿಂದ "ಬೇಡ" ಎಂದು ಕೂಗಿ ರಕ್ಷಣೆ ಪಡೆಯಿರಿ.'
  },
  {
    id: 'unit-11',
    number: 11,
    titleEn: 'National Integration & Unity in Diversity',
    titleKn: 'ರಾಷ್ಟ್ರೀಯ ಭಾವೈಕ್ಯತೆ ಮತ್ತು ನಾನಾತ್ವದಲ್ಲಿ ಏಕತೆ',
    subtitleEn: 'Kuvempu’s garden of all faiths, Shishunala Sharifa & Govinda Bhatta, Constitutional Preamble',
    subtitleKn: 'ಸರ್ವ ಜನಾಂಗದ ಶಾಂತಿಯ ತೋಟ, ಶಿಶುನಾಳ ಶರೀಫ-ಗೋವಿಂದ ಭಟ್ಟರ ಸೌಹಾರ್ದತೆ, ಸಂವಿಧಾನದ ಪೀಠಿಕೆ',
    theme: 'amber',
    iconName: 'Flag',
    slideCount: UNIT_11_SLIDES.length,
    heritageTagEn: 'Kuvempu & Vishwa Manava Message',
    heritageTagKn: 'ಕುವೆಂಪು ಅವರ ವಿಶ್ವಮಾನವ ಸಂದೇಶ',
    descriptionEn: 'Celebrate India’s magnificent multicultural tapestry, embrace Shishunala Sharifa’s syncretism, and pledge to become a Vishwa Manava.',
    descriptionKn: 'ಕರ್ನಾಟಕವನ್ನು ಸರ್ವ ಜನಾಂಗದ ಶಾಂತಿಯ ತೋಟವನ್ನಾಗಿ ಕಾಪಾಡಿ; ಸಂವಿಧಾನವನ್ನು ಗೌರವಿಸಿ ವಿಶ್ವಮಾನವರಾಗಿ ಜಗತ್ತನ್ನು ಬೆಳಗಿ.'
  }
];
