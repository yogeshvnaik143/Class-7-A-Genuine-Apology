export type LanguageMode = 'bilingual' | 'en' | 'kn';
export type AppViewMode = 'home' | 'teach';

export interface QuizOption {
  id: string;
  statementEn: string;
  statementKn: string;
  isGenuine: boolean;
  explanationEn: string;
  explanationKn: string;
}

export interface StoryBeat {
  speakerEn: string;
  speakerKn: string;
  dialogueEn: string;
  dialogueKn: string;
  actionEn?: string;
  actionKn?: string;
  emotion?: 'sad' | 'thoughtful' | 'happy' | 'apologetic' | 'determined';
}

export interface StoryData {
  titleEn: string;
  titleKn: string;
  subtitleEn: string;
  subtitleKn: string;
  characters: { nameEn: string; nameKn: string; roleEn: string; roleKn: string }[];
  contextEn: string;
  contextKn: string;
  beats: StoryBeat[];
  takeawayEn: string;
  takeawayKn: string;
}

export interface PoemStanza {
  linesEn: string[];
  linesKn: string[];
  themeEn: string;
  themeKn: string;
}

export interface PoemData {
  titleEn: string;
  titleKn: string;
  authorEn: string;
  authorKn: string;
  stanzas: PoemStanza[];
  reflectionEn: string;
  reflectionKn: string;
}

export interface RolePlayScenario {
  id: string;
  titleEn: string;
  titleKn: string;
  situationEn: string;
  situationKn: string;
  badResponseEn: string;
  badResponseKn: string;
  badWhyEn: string;
  badWhyKn: string;
  goodResponseEn: string;
  goodResponseKn: string;
  goodWhyEn: string;
  goodWhyKn: string;
}

export interface ChapterInfo {
  id: string;
  chapterNumber: string;
  titleEn: string;
  titleKn: string;
  unitId: string;
  unitTitleEn: string;
  unitTitleKn: string;
  pageRange: string;
  subValueEn: string;
  subValueKn: string;
  summaryEn: string;
  summaryKn: string;
  slideIds: string[];
}

export interface UnitOverview {
  id: string;
  number: number;
  titleEn: string;
  titleKn: string;
  subtitleEn: string;
  subtitleKn: string;
  theme: string;
  iconName: string;
  slideCount: number;
  heritageTagEn: string;
  heritageTagKn: string;
  descriptionEn: string;
  descriptionKn: string;
}

export interface UnitInfo {
  id: string;
  unitNumber: number;
  titleEn: string;
  titleKn: string;
  color: string;
  accentColor: string;
  iconName: string;
  chapters: ChapterInfo[];
}

export interface SlideContent {
  id: string;
  chapterId: string;
  unitId?: string;
  slideNumber: number;
  categoryEn: string;
  categoryKn: string;
  titleEn: string;
  titleKn: string;
  subtitleEn?: string;
  subtitleKn?: string;
  visualType: 
    | 'cover'
    | 'concept'
    | 'pillars'
    | 'compare'
    | 'formula'
    | 'story1'
    | 'poem'
    | 'quiz'
    | 'story2'
    | 'excuses'
    | 'perspective'
    | 'reflection_cloud'
    | 'think_and_do'
    | 'roleplay'
    | 'garden'
    | 'summary'
    | 'classroom_walls'
    | 'workers_pride'
    | 'dignity_of_labour'
    | 'steps_growth'
    | 'tara_fire'
    | 'sadness_circle'
    | 'positive_talk'
    | 'friendship_interview'
    | 'listening_chair'
    | 'compassion_puppy'
    | 'inclusive_school'
    | 'rainbow_gender'
    | 'domestic_equality'
    | 'ashtavakra'
    | 'girls_azadi'
    | 'puberty_care'
    | 'tapman_water'
    | 'water_drop'
    | 'green_diwali'
    | 'voting_booth'
    | 'panchayat_election'
    | 'consumer_rights'
    | 'consumer_check'
    | 'digital_boundaries'
    | 'personal_safety_rules'
    | 'body_safety'
    | 'sports_values'
    | 'yoga_mudras'
    | 'health_triangle'
    | 'national_emblem'
    | 'basavanna_kayaka'
    | 'obavva_bravery'
    | 'thimmakka_trees'
    | 'visvesvaraya_dam'
    | 'kabaddi_arena'
    | 'mankuthimma_vachana';
  bulletsEn?: string[];
  bulletsKn?: string[];
  quoteEn?: string;
  quoteKn?: string;
  storyData?: StoryData;
  poemData?: PoemData;
  quizData?: QuizOption[];
  roleplayData?: RolePlayScenario[];
  reflectionPromptEn?: string;
  reflectionPromptKn?: string;
  teacherNoteEn?: string;
  teacherNoteKn?: string;
}
