import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { GradeSelector } from './components/GradeSelector';
import { WorksheetCatalog } from './components/WorksheetCatalog';
import { WorksheetViewerModal } from './components/WorksheetViewerModal';
import { ShareModal } from './components/ShareModal';
import { SyllabusModal } from './components/SyllabusModal';
import { allWorksheetsUltimate } from './data/worksheetsCurriculum';
import { GradeLevel, SubjectCategory, Language, WorksheetData } from './types';

export const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ka');
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel>(1);
  const [selectedCategory, setSelectedCategory] = useState<SubjectCategory>('all');
  const [selectedWorksheet, setSelectedWorksheet] = useState<WorksheetData | null>(null);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'ka' ? 'en' : 'ka'));
  };

  const filteredWorksheets = allWorksheetsUltimate.filter((w) => {
    if (selectedCategory === 'alphabet') {
      return w.category === 'alphabet';
    }
    const matchesGrade = w.grade === selectedGrade;
    const matchesCategory = selectedCategory === 'all' || w.category === selectedCategory;
    return matchesGrade && matchesCategory;
  });

  return (
    <div className="app-wrapper">
      {/* Top Navbar */}
      <Navbar
        lang={lang}
        onToggleLang={handleToggleLang}
        onOpenShare={() => setIsShareModalOpen(true)}
        onOpenSyllabus={() => setIsSyllabusOpen(true)}
      />

      {/* Hero Promotion Banner */}
      <HeroBanner
        lang={lang}
        onExploreFree={() => {
          setSelectedGrade(1);
          setSelectedCategory('all');
          window.scrollTo({ top: 380, behavior: 'smooth' });
        }}
      />

      {/* 4 Grade Level Cards & Topic Filter Pills */}
      <GradeSelector
        selectedGrade={selectedGrade}
        onSelectGrade={(grade) => {
          setSelectedGrade(grade);
          if (selectedCategory === 'alphabet' && grade !== 1) {
            setSelectedCategory('all');
          }
        }}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        lang={lang}
      />

      {/* Worksheets Grid */}
      <WorksheetCatalog
        worksheets={filteredWorksheets}
        onSelectWorksheet={(sheet) => setSelectedWorksheet(sheet)}
        lang={lang}
      />

      {/* Footer */}
      <footer className="footer-bar no-print" style={{ marginTop: '60px', textAlign: 'center', color: '#94A3B8', fontSize: '0.88rem' }}>
        <p>
          📄 <strong>Junior Worksheets Vault</strong> • {lang === 'ka' ? '1-4 კლასის ინგლისური ენის სრული სასკოლო რესურსი' : 'Complete Grades 1-4 English Printable Collection'}
        </p>
      </footer>

      {/* Printable Sheet Viewer Modal */}
      {selectedWorksheet && (
        <WorksheetViewerModal
          sheet={selectedWorksheet}
          onClose={() => setSelectedWorksheet(null)}
          lang={lang}
        />
      )}

      {/* Share Modal */}
      {isShareModalOpen && (
        <ShareModal
          onClose={() => setIsShareModalOpen(false)}
          lang={lang}
        />
      )}

      {/* Syllabus Modal */}
      {isSyllabusOpen && (
        <SyllabusModal
          onClose={() => setIsSyllabusOpen(false)}
          lang={lang}
        />
      )}
    </div>
  );
};

export default App;
