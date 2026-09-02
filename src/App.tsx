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
import { Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

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

  const handleOpenCheckoutDirectly = (plan?: PricingPlan) => {
    setSelectedPlanForCheckout(plan || pricingPlans[1]);
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

      {/* Persistent VIP Unlocked Banner if Paid */}
      {isUnlocked && (
        <div 
          className="no-print" 
          style={{
            background: 'linear-gradient(135deg, #10B981, #059669)',
            color: '#FFF',
            padding: '12px 20px',
            borderRadius: '16px',
            marginTop: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 8px 24px rgba(16, 185, 129, 0.25)',
            flexWrap: 'wrap',
            gap: '10px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <CheckCircle2 size={24} color="#FFF" />
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.98rem' }}>
                🎉 {lang === 'ka' ? 'თქვენი პრემიუმ წვდომა გააქტიურებულია!' : 'Premium Access is Active!'}
              </div>
              <div style={{ fontSize: '0.82rem', opacity: 0.9 }}>
                {lang === 'ka' ? 'ყველა 150+ ფურცელი (1-4 კლასი) ღიაა — დააჭირეთ ნებისმიერ ფურცელს ამოსაბეჭდად' : 'All 150+ worksheets unlocked — click any sheet to view and print'}
              </div>
            </div>
          </div>
          <button
            className="btn-tactile gold"
            onClick={() => {
              setSelectedGrade(1);
              window.scrollTo({ top: 350, behavior: 'smooth' });
            }}
            style={{ padding: '8px 16px', fontSize: '0.82rem' }}
          >
            <span>{lang === 'ka' ? 'ფურცლების კატალოგი 🖨️' : 'Worksheets Catalog 🖨️'}</span>
          </button>
        </div>
      )}

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
          setSelectedWorksheet(sheet);
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

      {/* Checkout Modal */}
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
