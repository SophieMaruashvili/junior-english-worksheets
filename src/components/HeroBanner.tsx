import React from 'react';
import { Download, Sparkles, Printer, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { Language } from '../types';

interface HeroBannerProps {
  lang: Language;
  onExploreFree: () => void;
  onOpenPricing: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  lang,
  onExploreFree,
  onOpenPricing
}) => {
  return (
    <div className="hero-promo-card no-print">
      <div>
        <div className="hero-badge-row">
          <div className="hero-badge-pill">
            <Sparkles size={14} />
            <span>{lang === 'ka' ? '1-ლიდან მე-4 კლასის ჩათვლით' : 'For Grades 1, 2, 3 & 4'}</span>
          </div>
          <div className="hero-badge-pill" style={{ color: '#86EFAC' }}>
            <CheckCircle2 size={14} />
            <span>{lang === 'ka' ? 'უფასო საცდელი გვერდები' : 'Free Sampler Included'}</span>
          </div>
        </div>

        <h1>
          {lang === 'ka' 
            ? 'ინგლისურის საუკეთესო დასაბეჭდი სავარჯიშოები დაწყებითი კლასებისთვის' 
            : 'Premier Printable English Worksheets for Junior Superstars'}
        </h1>

        <p>
          {lang === 'ka'
            ? 'ყველა აუცილებელი მასალა 1-ლიდან მე-4 კლასამდე: ფონეტიკა, CVC სიტყვები, Magic E, გრამატიკა, დროები და ტექსტის გააზრება. ამობეჭდეთ სახლში 1 დაჭერით!'
            : 'Master phonics, CVC words, Magic E, grammar, tenses, and reading comprehension. Ready to print in HD with 1 click!'}
        </p>

        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <button 
            className="btn-tactile emerald"
            onClick={onExploreFree}
            style={{ padding: '12px 24px', fontSize: '1rem' }}
          >
            <Printer size={18} />
            <span>{lang === 'ka' ? 'უფასო გვერდების ნახვა 📄' : 'Browse Free Sheets 📄'}</span>
          </button>

          <button 
            className="btn-tactile gold"
            onClick={onOpenPricing}
            style={{ padding: '12px 24px', fontSize: '1rem' }}
          >
            <Sparkles size={18} />
            <span>{lang === 'ka' ? 'ყველა 150+ ფურცელი (9.90 ₾) 🔥' : 'Unlock All 150+ Sheets (9.90 ₾) 🔥'}</span>
          </button>
        </div>
      </div>

      {/* Right Graphic Badge Column */}
      <div style={{ background: 'rgba(255, 255, 255, 0.06)', border: '2px solid rgba(255, 255, 255, 0.15)', borderRadius: '20px', padding: '24px', textAlign: 'center' }}>
        <div style={{ fontSize: '3.2rem', marginBottom: '8px' }}>📚✨</div>
        <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FEF08A', fontFamily: 'Fredoka, sans-serif' }}>
          {lang === 'ka' ? '150+ პრემიუმ სავარჯიშო' : '150+ Premium Worksheets'}
        </div>
        <div style={{ fontSize: '0.85rem', color: '#94A3B8', marginTop: '6px' }}>
          {lang === 'ka' ? 'პედაგოგების მიერ შედგენილი სრული სასკოლო პროგრამა' : 'Complete school curriculum crafted by expert teachers'}
        </div>
        
        <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-around', fontSize: '0.82rem', color: '#CBD5E1' }}>
          <div>✔️ PDF Ready</div>
          <div>✔️ Ink-Saver</div>
          <div>✔️ Answer Key</div>
        </div>
      </div>
    </div>
  );
};
