import React from 'react';
import { GradeLevel, SubjectCategory, Language } from '../types';

interface GradeSelectorProps {
  selectedGrade: GradeLevel;
  onSelectGrade: (grade: GradeLevel) => void;
  selectedCategory: SubjectCategory;
  onSelectCategory: (cat: SubjectCategory) => void;
  lang: Language;
}

export const GradeSelector: React.FC<GradeSelectorProps> = ({
  selectedGrade,
  onSelectGrade,
  selectedCategory,
  onSelectCategory,
  lang
}) => {
  const gradesInfo = [
    {
      grade: 1 as GradeLevel,
      badge: '1-ლი კლასი',
      badgeEn: 'Grade 1',
      descKa: 'ანბანი, ფონეტიკა, CVC სიტყვები, სეზონები და ციფრები',
      descEn: 'Phonics, CVC words, Sight Words & Basics',
      icon: '🌱',
      color: '#10B981'
    },
    {
      grade: 2 as GradeLevel,
      badge: 'მე-2 კლასი',
      badgeEn: 'Grade 2',
      descKa: 'Magic E, ასოთა შეთანხმებები (ch, sh, th), საათი და მოქმედებები',
      descEn: 'Magic E, Digraphs, Telling Time & Sentences',
      icon: '🚀',
      color: '#3A86FF'
    },
    {
      grade: 3 as GradeLevel,
      badge: 'მე-3 კლასი',
      badgeEn: 'Grade 3',
      descKa: 'მეტყველების ნაწილები, Present Simple vs Continuous, კითხვა',
      descEn: 'Nouns, Verbs, Present Tenses & Stories',
      icon: '🦁',
      color: '#F59E0B'
    },
    {
      grade: 4 as GradeLevel,
      badge: 'მე-4 კლასი',
      badgeEn: 'Grade 4',
      descKa: 'Past Simple წარსული დრო, ზედსართავის ხარისხები, Wh- კითხვები',
      descEn: 'Past Simple, Comparatives, Wh- Questions & Writing',
      icon: '🏆',
      color: '#8B5CF6'
    }
  ];

  const categories: { id: SubjectCategory; labelKa: string; labelEn: string; emoji: string }[] = [
    { id: 'all', labelKa: 'ყველა თემა', labelEn: 'All Topics', emoji: '✨' },
    { id: 'phonics', labelKa: 'ფონეტიკა & კითხვა', labelEn: 'Phonics & Blends', emoji: '🔤' },
    { id: 'grammar', labelKa: 'გრამატიკა & დროები', labelEn: 'Grammar & Tenses', emoji: '📝' },
    { id: 'vocabulary', labelKa: 'ლექსიკა & თემები', labelEn: 'Vocabulary Decks', emoji: '🎨' },
    { id: 'reading', labelKa: 'ტექსტის გააზრება', labelEn: 'Reading Comprehension', emoji: '📖' }
  ];

  return (
    <div className="no-print" style={{ marginBottom: '28px' }}>
      {/* 4 Grade Big Selector Cards */}
      <div className="grade-tab-grid">
        {gradesInfo.map((g) => {
          const isActive = selectedGrade === g.grade;
          return (
            <div
              key={g.grade}
              className={`grade-card-btn ${isActive ? 'active' : ''}`}
              onClick={() => onSelectGrade(g.grade)}
            >
              <div className="grade-num-badge" style={{ color: g.color }}>
                {g.icon} {lang === 'ka' ? g.badge : g.badgeEn}
              </div>
              <div className="grade-desc-sub">
                {lang === 'ka' ? g.descKa : g.descEn}
              </div>
            </div>
          );
        })}
      </div>

      {/* Subcategory Filter Pills */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px' }}>
        {categories.map((c) => {
          const isCatActive = selectedCategory === c.id;
          return (
            <button
              key={c.id}
              onClick={() => onSelectCategory(c.id)}
              style={{
                background: isCatActive ? '#0F172A' : '#FFF',
                color: isCatActive ? '#FFF' : '#334155',
                border: '2px solid',
                borderColor: isCatActive ? '#0F172A' : '#E2E8F0',
                borderRadius: '9999px',
                padding: '8px 16px',
                fontSize: '0.85rem',
                fontWeight: 700,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease'
              }}
            >
              <span style={{ marginRight: '4px' }}>{c.emoji}</span>
              <span>{lang === 'ka' ? c.labelKa : c.labelEn}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
