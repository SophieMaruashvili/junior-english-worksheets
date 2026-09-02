import React, { useState } from 'react';
import { X, Printer, Eye, EyeOff, Palette, Sparkles, CheckCircle2 } from 'lucide-react';
import { WorksheetData, Language } from '../types';
import { WorkbookArt } from './Illustrations/WorkbookArt';

interface WorksheetViewerModalProps {
  sheet: WorksheetData;
  onClose: () => void;
  lang: Language;
}

export const WorksheetViewerModal: React.FC<WorksheetViewerModalProps> = ({
  sheet,
  onClose,
  lang
}) => {
  const [showAnswers, setShowAnswers] = useState(false);
  const [isInkSaver, setIsInkSaver] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content-card" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '920px', width: '95%', padding: '28px' }}
      >
        {/* Top Modal Controls (Hidden during printing) */}
        <div className="no-print" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #E2E8F0', paddingBottom: '16px', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', color: '#0F172A', margin: 0, fontWeight: 800 }}>
              {sheet.titleEn}
            </h3>
            <span style={{ fontSize: '0.82rem', color: '#10B981', fontWeight: 700 }}>
              Grade {sheet.grade} • {sheet.category.toUpperCase()} • {lang === 'ka' ? sheet.titleKa : ''}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {/* Color vs B&W Ink Saver Toggle */}
            <button
              className="btn-tactile outline"
              onClick={() => setIsInkSaver(!isInkSaver)}
              style={{ padding: '8px 14px', fontSize: '0.85rem' }}
              title="Toggle Ink-Saver Black & White"
            >
              <Palette size={16} />
              <span>{isInkSaver ? '🎨 Full Color' : '🖨️ Ink-Saver (B&W)'}</span>
            </button>

            {/* Answer Key Toggle */}
            <button
              className="btn-tactile outline"
              onClick={() => setShowAnswers(!showAnswers)}
              style={{ padding: '8px 14px', fontSize: '0.85rem' }}
            >
              {showAnswers ? <EyeOff size={16} /> : <Eye size={16} />}
              <span>{showAnswers ? (lang === 'ka' ? 'პასუხების დამალვა' : 'Hide Answer Key') : (lang === 'ka' ? 'პასუხების ნახვა' : 'Show Answer Key')}</span>
            </button>

            {/* Print Button */}
            <button
              className="btn-tactile emerald"
              onClick={handlePrint}
              style={{ padding: '8px 18px', fontSize: '0.9rem' }}
            >
              <Printer size={16} />
              <span>{lang === 'ka' ? 'ამობეჭდე PDF 🖨️' : 'Print PDF 🖨️'}</span>
            </button>

            {/* Close Button */}
            <button
              className="btn-tactile outline"
              onClick={onClose}
              style={{ padding: '8px', borderRadius: '10px' }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Real Printable A4 Stage (100% Pure English International Standard) */}
        <div 
          className="a4-printable-stage"
          style={{
            background: '#FFFFFF',
            border: isInkSaver ? '2px solid #000' : '3px solid #CBD5E1',
            borderRadius: '20px',
            padding: '40px',
            color: '#000'
          }}
        >
          {/* Header Row: Title, Line-Art Coloring Vector, Student Info Box */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '3px solid #0F172A', paddingBottom: '16px', marginBottom: '20px', gap: '16px' }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <WorkbookArt name={sheet.previewArt} size={50} outlineOnly={isInkSaver} />
                <div>
                  <h1 style={{ fontSize: '1.6rem', color: '#0F172A', margin: 0, fontWeight: 900, fontFamily: 'Fredoka, sans-serif', letterSpacing: '-0.5px' }}>
                    {sheet.titleEn}
                  </h1>
                  <div style={{ color: '#475569', fontSize: '0.88rem', fontWeight: 700, marginTop: '2px' }}>
                    Grade {sheet.grade} • English Activity Sheet • Topic: {sheet.topicEn}
                  </div>
                </div>
              </div>
            </div>

            {/* Student Name & Date Lined Box */}
            <div style={{ border: '2px solid #0F172A', borderRadius: '10px', padding: '8px 14px', minWidth: '220px', background: isInkSaver ? '#FFF' : '#F8FAFC', fontSize: '0.82rem', textAlign: 'left' }}>
              <div><strong>Name:</strong> ______________________</div>
              <div style={{ marginTop: '6px' }}><strong>Date:</strong> ______________________</div>
              <div style={{ marginTop: '6px' }}><strong>Score:</strong> [ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; / 10 ] ⭐</div>
            </div>
          </div>

          {/* Instructions Box (English Immersion) */}
          <div style={{ background: isInkSaver ? '#FFF' : '#F0FDF4', border: isInkSaver ? '1px solid #000' : '2px solid #86EFAC', borderLeft: isInkSaver ? '5px solid #000' : '6px solid #16A34A', padding: '10px 16px', borderRadius: '8px', marginBottom: '22px', fontSize: '0.95rem', fontWeight: 600, color: isInkSaver ? '#000' : '#166534' }}>
            <strong>Instructions: </strong>
            {sheet.instructionsEn}
          </div>

          {/* Sections & Full Exercises */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            {sheet.sections.map((sec, sIdx) => (
              <div key={sIdx}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '12px', borderBottom: '1px dashed #CBD5E1', paddingBottom: '4px' }}>
                  {sec.headingEn}
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
                  {sec.items.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      style={{
                        border: '1.5px solid #CBD5E1',
                        borderRadius: '12px',
                        padding: '12px 14px',
                        background: isInkSaver ? '#FFF' : '#F8FAFC',
                        fontSize: '0.92rem'
                      }}
                    >
                      {item.prompt && (
                        <div>
                          <div style={{ fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>{item.prompt}</div>
                          {item.trace && (
                            <div style={{ fontSize: '1.25rem', fontFamily: 'Fredoka, sans-serif', color: '#94A3B8', letterSpacing: '4px', borderBottom: '1px dotted #94A3B8', marginTop: '4px', paddingBottom: '2px' }}>
                              {item.trace}
                            </div>
                          )}
                        </div>
                      )}

                      {item.sentence && (
                        <div>
                          <div style={{ fontWeight: 600, color: '#1E293B', marginBottom: '4px' }}>{item.sentence}</div>
                          {item.hint && <div style={{ fontSize: '0.78rem', color: '#64748B' }}>({item.hint})</div>}
                        </div>
                      )}

                      {item.short && (
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>{item.short}</span>
                          <span style={{ color: '#D97706', fontWeight: 800 }}>+ Magic E ➔</span>
                          <span style={{ fontWeight: 800, color: '#7C3AED', fontSize: '1.1rem' }}>{item.magicWord}</span>
                        </div>
                      )}

                      {item.clue && (
                        <div>
                          <div style={{ fontWeight: 700 }}>{item.clue}</div>
                          <div style={{ marginTop: '8px', borderBottom: '1.5px dotted #000', paddingBottom: '2px', color: '#64748B', fontSize: '0.85rem' }}>
                            Answer: ______________________
                          </div>
                        </div>
                      )}

                      {item.base && (
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div>
                            <div style={{ fontWeight: 800, color: '#0F172A' }}>{item.base}</div>
                            <div style={{ fontSize: '0.78rem', color: '#64748B' }}>Past: ________</div>
                          </div>
                          <div style={{ fontSize: '0.82rem', color: '#334155', maxWidth: '65%' }}>{item.sentence}</div>
                        </div>
                      )}

                      {item.passage && (
                        <div style={{ gridColumn: '1 / -1' }}>
                          <div style={{ background: '#FFFBEB', border: '1px solid #FDE68A', padding: '14px', borderRadius: '10px', fontStyle: 'italic', lineHeight: '1.6', marginBottom: '14px' }}>
                            "{item.passage}"
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {item.questions?.map((qObj: any, qIdx: number) => (
                              <div key={qIdx} style={{ fontSize: '0.88rem' }}>
                                <div style={{ fontWeight: 700 }}>{qObj.q}</div>
                                <div style={{ borderBottom: '1px dotted #CBD5E1', paddingBottom: '4px', marginTop: '4px', color: '#64748B' }}>
                                  Answer: __________________________________________________
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Teacher Answer Key Box (if toggled) */}
          {showAnswers && (
            <div style={{ marginTop: '24px', background: '#FEF3C7', border: '2px solid #FDE68A', padding: '14px 18px', borderRadius: '12px' }}>
              <div style={{ fontWeight: 800, color: '#92400E', fontSize: '0.9rem', marginBottom: '6px' }}>
                🔑 Teacher Answer Key:
              </div>
              <ul style={{ paddingLeft: '20px', fontSize: '0.85rem', color: '#78350F' }}>
                {sheet.answerKey.map((ans, aIdx) => (
                  <li key={aIdx}>{ans}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Footer of Worksheet */}
          <div style={{ marginTop: '30px', borderTop: '2px dashed #CBD5E1', paddingTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', color: '#64748B' }}>
            <div>🏆 Great Work! Practice Makes Perfect!</div>
            <div>Junior English Worksheets • Grade {sheet.grade} • Page 1 of 1</div>
          </div>
        </div>
      </div>
    </div>
  );
};
