export type LanguageMode = 'bilingual' | 'en' | 'kn';

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

export interface SlideContent {
  id: string;
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
    | 'summary';
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
