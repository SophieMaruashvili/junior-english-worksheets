import React from 'react';
import { Printer, Lock, Sparkles, CheckCircle, Eye } from 'lucide-react';
import { WorksheetData, Language } from '../types';
import { WorkbookArt } from './Illustrations/WorkbookArt';

interface WorksheetCatalogProps {
  worksheets: WorksheetData[];
  isUnlocked: boolean;
  onSelectWorksheet: (sheet: WorksheetData) => void;
  onOpenPricing: () => void;
  lang: Language;
}

export const WorksheetCatalog: React.FC<WorksheetCatalogProps> = ({
  worksheets,
  isUnlocked,
  onSelectWorksheet,
  onOpenPricing,
  lang
}) => {
  return (
    <div className="worksheets-catalog-grid no-print">
      {worksheets.map((sheet) => {
        const canAccess = sheet.isFree || isUnlocked;

        return (
          <div 
            key={sheet.id} 
            className="sheet-preview-card"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              if (canAccess) {
                onSelectWorksheet(sheet);
              } else {
                onOpenPricing();
              }
            }}
          >
            <div className="sheet-card-header">
              {/* Badge for Free or Premium */}
              <div className={`sheet-badge-tag ${sheet.isFree ? 'free' : 'premium'}`}>
                {sheet.isFree 
                  ? (lang === 'ka' ? 'უფასო საცდელი ⭐' : 'Free Sample ⭐') 
                  : (lang === 'ka' ? 'პრემიუმ კრებული 🔒' : 'Premium Lock 🔒')}
              </div>

              {/* Clean Educational Line-Art Vector */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '110px' }}>
                <WorkbookArt name={sheet.previewArt} size={85} />
              </div>

              {/* Difficulty Pill */}
              <div style={{ position: 'absolute', bottom: '10px', right: '12px', background: 'rgba(15, 23, 42, 0.08)', borderRadius: '6px', padding: '2px 8px', fontSize: '0.75rem', fontWeight: 600, color: '#475569' }}>
                {sheet.difficulty}
              </div>
            </div>

            <div className="sheet-card-body">
              <h3 className="sheet-card-title">
                {sheet.titleEn}
              </h3>
              <div style={{ fontSize: '0.82rem', color: '#10B981', fontWeight: 700, marginBottom: '4px' }}>
                {lang === 'ka' ? sheet.titleKa : ''}
              </div>
              <div className="sheet-card-topic">
                {sheet.topicEn}
              </div>

              <div className="sheet-card-footer">
                {canAccess ? (
                  <button
                    className="btn-tactile emerald"
                    style={{ width: '100%', padding: '10px', fontSize: '0.88rem' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectWorksheet(sheet);
                    }}
                  >
                    <Eye size={16} />
                    <span>{lang === 'ka' ? 'ფურცლის გახსნა & ამობეჭდვა 🖨️' : 'Open & Print Worksheet 🖨️'}</span>
                  </button>
                ) : (
                  <button
                    className="btn-tactile gold"
                    style={{ width: '100%', padding: '10px', fontSize: '0.88rem' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenPricing();
                    }}
                  >
                    <Lock size={16} />
                    <span>{lang === 'ka' ? 'გახსნა (9.90 ₾) 🔓' : 'Unlock (9.90 GEL) 🔓'}</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
