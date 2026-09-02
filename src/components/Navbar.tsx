import React from 'react';
import { Globe, Printer, Sparkles, Share2, BookOpen } from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenShare: () => void;
  onOpenSyllabus: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
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
          style={{ padding: '8px 14px', fontSize: '0.85rem', borderColor: '#10B981', color: '#15803D', background: '#F0FDF4' }}
        >
          <BookOpen size={16} />
          <span>{lang === 'ka' ? '📦 სრული სილაბუსი' : '📦 Full Syllabus'}</span>
        </button>

        {/* Share Button */}
        <button 
          className="btn-tactile outline"
          onClick={onOpenShare}
          title={lang === 'ka' ? 'გაუზიარე მშობლების ჯგუფში' : 'Share to Group'}
          style={{ padding: '8px 14px', fontSize: '0.85rem' }}
        >
          <Share2 size={16} color="#3A86FF" />
          <span>{lang === 'ka' ? 'გაზიარება 📲' : 'Share'}</span>
        </button>

        {/* Language Toggle */}
        <button 
          className="btn-tactile outline"
          onClick={onToggleLang}
          style={{ padding: '8px 14px', fontSize: '0.85rem' }}
        >
          <Globe size={16} />
          <span>{lang === 'ka' ? '🇬🇪 KA' : '🇬🇧 EN'}</span>
        </button>
      </div>
    </nav>
  );
};
