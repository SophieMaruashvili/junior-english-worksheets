import React, { useState } from 'react';
import { X, Copy, Check, Share2 } from 'lucide-react';
import { Language } from '../types';

interface ShareModalProps {
  onClose: () => void;
  lang: Language;
}

export const ShareModal: React.FC<ShareModalProps> = ({ onClose, lang }) => {
  const [copied, setCopied] = useState(false);

  const shareText = lang === 'ka'
    ? '📄 ძვირფასო მშობლებო და მასწავლებლებო! 1-ლიდან მე-4 კლასის ინგლისურის საუკეთესო დასაბეჭდი სავარჯიშო ფურცლები (CVC სიტყვები, Magic E, გრამატიკა, დროები). პირველი გვერდები სრულიად უფასოა! 👉 ' + window.location.href
    : '📄 Premier Printable English Worksheets for Grades 1 to 4! Free sampler sheets available now: ' + window.location.href;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-card" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Share2 size={20} color="#3A86FF" />
            <h3 style={{ fontSize: '1.3rem', color: '#0F172A', margin: 0, fontFamily: 'Fredoka, sans-serif' }}>
              {lang === 'ka' ? 'გაუზიარე მშობლების/მასწავლებლების ჯგუფში' : 'Share with Parents & Teachers'}
            </h3>
          </div>
          <button className="btn-tactile outline" onClick={onClose} style={{ padding: '8px' }}>
            <X size={18} />
          </button>
        </div>

        <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '16px' }}>
          {lang === 'ka' 
            ? 'დააკოპირეთ მზა ტექსტი და გააზიარეთ Facebook-ის, Viber-ის ან WhatsApp-ის სასკოლო ჯგუფებში:' 
            : 'Copy this ready message to share in school groups:'}
        </p>

        <div style={{ background: '#F8FAFC', border: '2px solid #E2E8F0', borderRadius: '14px', padding: '14px', fontSize: '0.9rem', color: '#334155', marginBottom: '18px', whiteSpace: 'pre-wrap' }}>
          {shareText}
        </div>

        <button 
          className={`btn-tactile ${copied ? 'emerald' : 'blue'}`}
          onClick={handleCopy}
          style={{ width: '100%', padding: '12px', fontSize: '1rem', justifyContent: 'center' }}
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
          <span>{copied ? (lang === 'ka' ? 'ტექსტი დაკოპირდა! ✅' : 'Copied to Clipboard! ✅') : (lang === 'ka' ? 'ტექსტის დაკოპირება 📋' : 'Copy Shareable Link')}</span>
        </button>
      </div>
    </div>
  );
};
