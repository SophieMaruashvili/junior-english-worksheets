import React from 'react';
import { X, CheckCircle2, BookOpen, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { fullCurriculumSyllabus } from '../data/worksheetsCurriculum';
import { Language } from '../types';

interface SyllabusModalProps {
  onClose: () => void;
  lang: Language;
}

export const SyllabusModal: React.FC<SyllabusModalProps> = ({ onClose, lang }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '750px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '2px solid #E2E8F0', paddingBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <BookOpen size={24} color="#10B981" />
            <div>
              <h3 style={{ fontSize: '1.4rem', color: '#0F172A', margin: 0, fontFamily: 'Fredoka, sans-serif' }}>
                {lang === 'ka' ? '📦 რა შედის პრემიუმ პაკეტში? (სრული სილაბუსი)' : '📦 What is included in the Premium Pack?'}
              </h3>
              <div style={{ fontSize: '0.85rem', color: '#64748B' }}>
                {lang === 'ka' ? '150-ზე მეტი დასაბეჭდი სავარჯიშო ფურცელი 1-4 კლასისთვის' : 'Complete 150+ Worksheets Collection for Grades 1-4'}
              </div>
            </div>
          </div>
          <button className="btn-tactile outline" onClick={onClose} style={{ padding: '8px' }}>
            <X size={18} />
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {fullCurriculumSyllabus.map((s) => (
            <div key={s.grade} style={{ background: '#F8FAFC', border: '2px solid #E2E8F0', borderRadius: '16px', padding: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span style={{ background: '#10B981', color: '#FFF', padding: '4px 10px', borderRadius: '8px', fontWeight: 800, fontSize: '0.85rem' }}>
                  Grade {s.grade}
                </span>
                <h4 style={{ fontSize: '1.15rem', color: '#0F172A', margin: 0, fontWeight: 800 }}>
                  {s.titleKa}
                </h4>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '8px' }}>
                {s.topics.map((t, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem', color: '#334155' }}>
                    <CheckCircle2 size={15} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '24px', textAlign: 'center', borderTop: '2px solid #E2E8F0', paddingTop: '16px' }}>
          <div style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: '12px' }}>
            {lang === 'ka' ? 'ყველა ფურცელი მზადაა დასაბეჭდად PDF ფორმატში პასუხების გასაღებთან ერთად!' : 'All worksheets ready for HD PDF printing with full teacher answer keys!'}
          </div>
          <button className="btn-tactile emerald" onClick={onClose} style={{ padding: '10px 24px', fontSize: '0.95rem' }}>
            <span>{lang === 'ka' ? 'გასაგებია! 🚀' : 'Got it! 🚀'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
