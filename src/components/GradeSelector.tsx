import React from 'react';
import { GradeLevel, SubjectCategory, Language } from '../types';
import { Sparkles, BookOpen, Layers, Type, Compass } from 'lucide-react';

interface GradeSelectorProps {
  selectedGrade: GradeLevel;
  onSelectGrade: (grade: GradeLevel) => void;
  selectedCategory: SubjectCategory;
  onSelectCategory: (category: SubjectCategory) => void;
  lang: Language;
}

export const GradeSelector: React.FC<GradeSelectorProps> = ({
  selectedGrade,
  onSelectGrade,
  selectedCategory,
  onSelectCategory,
  lang
}) => {
  const grades: { level: GradeLevel; titleEn: string; titleKa: string; subtitleEn: string; subtitleKa: string; icon: string }[] = [
    { level: 1, titleEn: 'Grade 1', titleKa: '1-ლი კლასი', subtitleEn: 'Alphabet, CVC, Seasons & Colors', subtitleKa: 'ანბანი A-Z, CVC, სეზონები', icon: '🔤' },
    { level: 2, titleEn: 'Grade 2', titleKa: 'მე-2 კლასი', subtitleEn: 'Have got, Can/Can\'t, Magic E', subtitleKa: 'Have got, Can/Can\'t, Magic E', icon: '🚀' },
    { level: 3, titleEn: 'Grade 3', titleKa: 'მე-3 კლასი', subtitleEn: 'Grammar, Present Tenses, Reading', subtitleKa: 'მეტყველების ნაწილები, დროები', icon: '🦁' },
    { level: 4, titleEn: 'Grade 4', titleKa: 'მე-4 კლასი', subtitleEn: 'Past Simple, Comparatives, Wh-', subtitleKa: 'წარსული დრო, შედარების ხარისხი', icon: '🏆' }
  ];

  const categories: { id: SubjectCategory; nameEn: string; nameKa: string }[] = [
    { id: 'all', nameEn: 'All Worksheets 📚', nameKa: 'ყველა მასალა 📚' },
    { id: 'alphabet', nameEn: 'Alphabet A-Z (26 Sheets) 🔤', nameKa: 'ანბანი A-Z (26 ფურცელი) 🔤' },
    { id: 'phonics', nameEn: 'Phonics & CVC 🔊', nameKa: 'ფონეტიკა & CVC 🔊' },
    { id: 'grammar', nameEn: 'Grammar & Tenses 🧩', nameKa: 'გრამატიკა & დროები 🧩' },
    { id: 'vocabulary', nameEn: 'Vocabulary & Words 🌟', nameKa: 'ლექსიკა & თემები 🌟' },
    { id: 'reading', nameEn: 'Reading Comprehension 📖', nameKa: 'ტექსტის გააზრება 📖' }
  ];

  return (
    <div className="grade-selector-container no-print">
      {/* Grade Level Cards */}
      <div className="grades-grid-row">
        {grades.map((g) => {
          const isActive = selectedGrade === g.level;

          return (
            <div
              key={g.level}
              className={`grade-tab-card ${isActive ? 'active' : ''}`}
              onClick={() => onSelectGrade(g.level)}
            >
              <div className="grade-icon-avatar">{g.icon}</div>
              <div className="grade-card-title">
                {lang === 'ka' ? g.titleKa : g.titleEn}
              </div>
              <div className="grade-card-sub">
                {lang === 'ka' ? g.subtitleKa : g.subtitleEn}
              </div>
            </div>
          );
        })}
      </div>

      {/* Category Filter Pills */}
      <div className="category-filter-pills-row">
        {categories.map((c) => {
          const isActive = selectedCategory === c.id;

          return (
            <button
              key={c.id}
              className={`cat-pill-btn ${isActive ? 'active' : ''}`}
              onClick={() => onSelectCategory(c.id)}
            >
              <span>{lang === 'ka' ? c.nameKa : c.nameEn}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
