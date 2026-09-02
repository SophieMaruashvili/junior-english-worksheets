export type GradeLevel = 1 | 2 | 3 | 4;

export type SubjectCategory = 'all' | 'alphabet' | 'phonics' | 'grammar' | 'vocabulary' | 'reading';

export type Language = 'ka' | 'en';

export interface WorksheetSection {
  headingEn: string;
  headingKa: string;
  items: any[];
}

export interface WorksheetData {
  id: string;
  grade: GradeLevel;
  category: SubjectCategory;
  isFree: boolean;
  titleEn: string;
  titleKa: string;
  topicEn: string;
  topicKa: string;
  difficulty: 'Easy' | 'Medium' | 'Challenge';
  instructionsEn: string;
  instructionsKa: string;
  icon: string;
  previewArt: string;
  letter?: string;
  sections: WorksheetSection[];
  answerKey: string[];
}
