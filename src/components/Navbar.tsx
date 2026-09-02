import React from 'react';
import { Globe, Lock, Printer, Sparkles, Share2, BookOpen, Key } from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  isUnlocked: boolean;
  onToggleUnlocked: () => void;
  onOpenPricing: () => void;
  onOpenShare: () => void;
  onOpenSyllabus: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  isUnlocked,
  onToggleUnlocked,
  onOpenPricing,
  onOpenShare,
  onOpenSyllabus
}) => {
  return (
    <nav className="main-nav-bar no-print">
      <div className="brand-badge-box" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className="brand-icon-circ">
          📄
        </div>
        <div>
          <div className="brand-title">
            {lang === 'ka' ? 'Junior Worksheets Vault' : 'Junior Worksheets Vault'}
          </div>
          <div className="brand-sub">
            {lang === 'ka' ? '1-4 კლასის ინგლისურის მასალები' : 'Grades 1-4 Printable English'}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
        {/* Full Syllabus / Content Index Button */}
        <button 
          className="btn-tactile outline"
          onClick={onOpenSyllabus}
          style={{ padding: '8px 12px', fontSize: '0.82rem', borderColor: '#10B981', color: '#15803D', background: '#F0FDF4' }}
        >
          <BookOpen size={15} />
          <span>{lang === 'ka' ? '📦 რა შედის? (სილაბუსი)' : '📦 Full Syllabus'}</span>
        </button>

        {/* Share Button */}
        <button 
          className="btn-tactile outline"
          onClick={onOpenShare}
          title={lang === 'ka' ? 'გაუზიარე მშობლების ჯგუფში' : 'Share to Group'}
          style={{ padding: '8px 12px', fontSize: '0.82rem' }}
        >
          <Share2 size={15} color="#3A86FF" />
          <span>{lang === 'ka' ? 'გაზიარება 📲' : 'Share'}</span>
        </button>

        {/* Language Toggle */}
        <button 
          className="btn-tactile outline"
          onClick={onToggleLang}
          style={{ padding: '8px 12px', fontSize: '0.82rem' }}
        >
          <Globe size={15} />
          <span>{lang === 'ka' ? '🇬🇪 KA' : '🇬🇧 EN'}</span>
        </button>

        {/* Admin / Teacher Instant Unlock Toggle */}
        <button
          className="btn-tactile outline"
          onClick={onToggleUnlocked}
          title="Toggle Teacher Preview Mode (Unlock all sheets)"
          style={{ padding: '8px 12px', fontSize: '0.82rem', background: isUnlocked ? '#DCFCE7' : '#FFF', color: isUnlocked ? '#15803D' : '#64748B' }}
        >
          <Key size={15} />
          <span>{isUnlocked ? (lang === 'ka' ? 'მასწავლებლის რეჟიმი: ღიაა ⭐' : 'Admin: Unlocked ⭐') : (lang === 'ka' ? 'სრული გადახედვა 🔑' : 'Admin Preview 🔑')}</span>
        </button>

        {/* Pricing Button */}
        {!isUnlocked && (
          <button 
            className="btn-tactile gold"
            onClick={onOpenPricing}
            style={{ padding: '8px 16px', fontSize: '0.85rem' }}
          >
            <Lock size={15} />
            <span>{lang === 'ka' ? 'შეძენა 9.90 ₾ 🔓' : 'Get All 9.90 GEL 🔓'}</span>
          </button>
        )}
      </div>
    </nav>
  );
};
