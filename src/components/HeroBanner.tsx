import React from 'react';
import { Sparkles, Printer, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { Language } from '../types';

interface HeroBannerProps {
  lang: Language;
  onExploreFree: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  lang,
  onExploreFree
}) => {
  return (
    <div className="hero-banner-card no-print">
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(16, 185, 129, 0.15)', color: '#065F46', padding: '6px 14px', borderRadius: '20px', fontWeight: 800, fontSize: '0.85rem', marginBottom: '16px' }}>
        <Sparkles size={16} color="#10B981" />
        <span>{lang === 'ka' ? '100% უფასო და ღია სასკოლო რესურსი' : '100% Free & Open School Resource'}</span>
      </div>

      <h1 style={{ fontSize: '2.4rem', color: '#0F172A', fontWeight: 900, lineHeight: 1.2, margin: '0 0 16px 0', fontFamily: 'Fredoka, sans-serif' }}>
        {lang === 'ka'
          ? 'ინგლისურის ამოსაბეჭდი სამუშაო ფურცლები 1-4 კლასისთვის 📄'
          : 'Printable English Worksheets for Grades 1 to 4 📄'}
      </h1>

      <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '720px', margin: '0 auto 24px auto' }}>
        {lang === 'ka'
          ? 'ფონეტიკა, Have got/Has got, Can/Can\'t, წინდებულები, დროები და ტექსტის გააზრება — შექმნილია სპეციალურად დაწყებითი კლასების მოსწავლეებისთვის. გახსენით და ამობეჭდეთ ნებისმიერი ფურცელი პირდაპირ!'
          : 'Phonics, Grammar, Prepositions, Action Verbs, and ESL Reading Detective stories. Ready to print in HD PDF with Answer Keys!'}
      </p>

      {/* Main Action Button */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
        <button
          className="btn-tactile emerald"
          onClick={onExploreFree}
          style={{ padding: '14px 28px', fontSize: '1.05rem' }}
        >
          <Printer size={20} />
          <span>{lang === 'ka' ? 'სამუშაო ფურცლების დათვალიერება & ამობეჭდვა 🖨️' : 'Browse & Print Worksheets 🖨️'}</span>
        </button>
      </div>

      {/* Trust Highlights */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginTop: '24px', flexWrap: 'wrap', fontSize: '0.85rem', color: '#64748B' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <CheckCircle2 size={16} color="#10B981" />
          <span>{lang === 'ka' ? 'A4 ფორმატი ბეჭდვისთვის' : 'A4 Format Ready'}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <CheckCircle2 size={16} color="#10B981" />
          <span>{lang === 'ka' ? 'ეკონომიური B&W და ფერადი რეჟიმი' : 'Ink-Saver B&W Mode'}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <CheckCircle2 size={16} color="#10B981" />
          <span>{lang === 'ka' ? 'პასუხების გასაღები მასწავლებლებისთვის' : 'Teacher Answer Keys'}</span>
        </div>
      </div>
    </div>
  );
};
