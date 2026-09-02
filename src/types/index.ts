export type GradeLevel = 1 | 2 | 3 | 4;
export type SubjectCategory = 'all' | 'phonics' | 'grammar' | 'vocabulary' | 'reading' | 'writing';
export type Language = 'ka' | 'en';

export interface WorksheetData {
  id: string;
  grade: GradeLevel;
  category: 'phonics' | 'grammar' | 'vocabulary' | 'reading' | 'writing';
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
  sections: {
    headingEn: string;
    headingKa: string;
    items: any[];
  }[];
  answerKey: string[];
}

export interface PricingPlan {
  id: string;
  titleEn: string;
  titleKa: string;
  priceGel: number;
  originalPriceGel: number;
  isPopular?: boolean;
  badge?: string;
  featuresEn: string[];
  featuresKa: string[];
}
