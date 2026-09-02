import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { GradeSelector } from './components/GradeSelector';
import { WorksheetCatalog } from './components/WorksheetCatalog';
import { WorksheetViewerModal } from './components/WorksheetViewerModal';
import { PricingSection } from './components/PricingSection';
import { CheckoutModal } from './components/CheckoutModal';
import { ShareModal } from './components/ShareModal';
import { SyllabusModal } from './components/SyllabusModal';
import { allWorksheets, pricingPlans } from './data/worksheetsCurriculum';
import { GradeLevel, SubjectCategory, Language, WorksheetData, PricingPlan } from './types';

export const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ka');
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel>(1);
  const [selectedCategory, setSelectedCategory] = useState<SubjectCategory>('all');
  const [selectedWorksheet, setSelectedWorksheet] = useState<WorksheetData | null>(null);
  const [selectedPlanForCheckout, setSelectedPlanForCheckout] = useState<PricingPlan | null>(null);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState<boolean>(() => {
    return localStorage.getItem('junior_vault_unlocked') === 'true';
  });

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'ka' ? 'en' : 'ka'));
  };

  const handleToggleUnlocked = () => {
    const nextState = !isUnlocked;
    setIsUnlocked(nextState);
    localStorage.setItem('junior_vault_unlocked', String(nextState));
  };

  const handleUnlockSuccess = () => {
    setIsUnlocked(true);
    localStorage.setItem('junior_vault_unlocked', 'true');
    setSelectedPlanForCheckout(null);
  };

  // Directly open checkout window with BOG/TBC bank account details
  const handleOpenCheckoutDirectly = (plan?: PricingPlan) => {
    setSelectedPlanForCheckout(plan || pricingPlans[1]); // Default to popular 9.90 GEL Mega Bundle
  };

  const filteredWorksheets = allWorksheets.filter((w) => {
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
        isUnlocked={isUnlocked}
        onToggleUnlocked={handleToggleUnlocked}
        onOpenPricing={() => handleOpenCheckoutDirectly(pricingPlans[1])}
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
        onOpenPricing={() => handleOpenCheckoutDirectly(pricingPlans[1])}
      />

      {/* Grade Selector & Topic Pills */}
      <GradeSelector
        selectedGrade={selectedGrade}
        onSelectGrade={setSelectedGrade}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        lang={lang}
      />

      {/* Worksheets Grid */}
      <WorksheetCatalog
        worksheets={filteredWorksheets}
        isUnlocked={isUnlocked}
        onSelectWorksheet={(sheet) => {
          if (sheet.isFree || isUnlocked) {
            setSelectedWorksheet(sheet);
          } else {
            handleOpenCheckoutDirectly(pricingPlans[1]);
          }
        }}
        onOpenPricing={() => handleOpenCheckoutDirectly(pricingPlans[1])}
        lang={lang}
      />

      {/* Pricing Section */}
      <div id="pricing-anchor">
        <PricingSection
          onSelectPlan={(plan) => handleOpenCheckoutDirectly(plan)}
          lang={lang}
        />
      </div>

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

      {/* Checkout Modal (BOG & TBC Bank Accounts) */}
      {selectedPlanForCheckout && (
        <CheckoutModal
          plan={selectedPlanForCheckout}
          onClose={() => setSelectedPlanForCheckout(null)}
          onSuccess={handleUnlockSuccess}
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
