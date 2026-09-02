import React, { useState } from 'react';
import { X, CheckCircle2, Copy, Check, Sparkles, ShieldCheck, Smartphone, Landmark, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PricingPlan, Language } from '../types';

interface CheckoutModalProps {
  plan: PricingPlan;
  onClose: () => void;
  onSuccess: () => void;
  lang: Language;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  plan,
  onClose,
  onSuccess,
  lang
}) => {
  const [selectedBank, setSelectedBank] = useState<'bog' | 'tbc'>('bog');
  const [copied, setCopied] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [promoDiscount, setPromoDiscount] = useState(0);

  const BOG_ACCOUNT = 'GE80BG0000000101058335';
  const TBC_ACCOUNT = 'GE49TB7758245064300048';

  const currentAccount = selectedBank === 'bog' ? BOG_ACCOUNT : TBC_ACCOUNT;
  const currentBankName = selectedBank === 'bog' ? 'საქართველოს ბანკი (BOG)' : 'თიბისი ბანკი (TBC Bank)';

  const handleCopyIBAN = () => {
    navigator.clipboard.writeText(currentAccount);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'TEACHERFREE' || promoCode.trim().toUpperCase() === 'LIFTOFF') {
      setPromoDiscount(plan.priceGel);
    }
  };

  const finalPrice = Math.max(0, plan.priceGel - promoDiscount);

  const handleConfirmPaid = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      try {
        confetti({
          particleCount: 150,
          spread: 90,
          origin: { y: 0.6 }
        });
      } catch {}
      onSuccess();
    }, 1000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px', padding: '32px' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
          <div>
            <h3 style={{ fontSize: '1.4rem', color: '#0F172A', margin: 0, fontFamily: 'Fredoka, sans-serif' }}>
              💳 {lang === 'ka' ? 'მობილბანკით გადახდა & წვდომის გახსნა' : 'Instant Bank Transfer & Access'}
            </h3>
            <div style={{ fontSize: '0.85rem', color: '#10B981', fontWeight: 700 }}>
              {lang === 'ka' ? plan.titleKa : plan.titleEn} • {finalPrice.toFixed(2)} ₾
            </div>
          </div>
          <button className="btn-tactile outline" onClick={onClose} style={{ padding: '8px' }}>
            <X size={18} />
          </button>
        </div>

        {/* Instructions Box */}
        <div style={{ background: '#F0FDF4', border: '2px solid #86EFAC', borderRadius: '16px', padding: '16px', marginBottom: '18px' }}>
          <div style={{ fontWeight: 800, color: '#166534', fontSize: '0.92rem', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Smartphone size={18} />
            <span>{lang === 'ka' ? 'გადარიცხვის 3 მარტივი ნაბიჯი:' : 'Simple 3-Step Transfer:'}</span>
          </div>
          <div style={{ fontSize: '0.85rem', color: '#14532D', lineHeight: 1.6 }}>
            1. აირჩიეთ თქვენი ბანკი (<strong>საქართველოს ბანკი</strong> ან <strong>თიბისი</strong>).<br />
            2. გადარიცხეთ <strong>{finalPrice.toFixed(2)} ₾</strong> მითითებულ ანგარიშზე.<br />
            3. დააჭირეთ ქვემოთ მწვანე ღილაკს <strong>„გადავრიცხე ✅ • წვდომის გახსნა“</strong>!
          </div>
        </div>

        {/* Bank Selection Tabs (BOG vs TBC) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '14px' }}>
          <button
            onClick={() => {
              setSelectedBank('bog');
              setCopied(false);
            }}
            style={{
              padding: '12px',
              borderRadius: '12px',
              border: '2px solid',
              borderColor: selectedBank === 'bog' ? '#EA580C' : '#E2E8F0',
              background: selectedBank === 'bog' ? '#FFF7ED' : '#FFF',
              fontWeight: 800,
              fontSize: '0.92rem',
              color: selectedBank === 'bog' ? '#EA580C' : '#475569',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            <span>🟠</span>
            <span>საქართველოს ბანკი (BOG)</span>
          </button>

          <button
            onClick={() => {
              setSelectedBank('tbc');
              setCopied(false);
            }}
            style={{
              padding: '12px',
              borderRadius: '12px',
              border: '2px solid',
              borderColor: selectedBank === 'tbc' ? '#0284C7' : '#E2E8F0',
              background: selectedBank === 'tbc' ? '#F0F9FF' : '#FFF',
              fontWeight: 800,
              fontSize: '0.92rem',
              color: selectedBank === 'tbc' ? '#0284C7' : '#475569',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            <span>🔵</span>
            <span>თიბისი ბანკი (TBC)</span>
          </button>
        </div>

        {/* Bank Credentials Card */}
        <div 
          style={{ 
            background: selectedBank === 'bog' ? '#FFF7ED' : '#F0F9FF', 
            border: '2px solid',
            borderColor: selectedBank === 'bog' ? '#FED7AA' : '#BAE6FD',
            borderRadius: '16px', 
            padding: '18px', 
            marginBottom: '20px' 
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Landmark size={20} color={selectedBank === 'bog' ? '#EA580C' : '#0284C7'} />
              <span style={{ fontWeight: 800, color: selectedBank === 'bog' ? '#9A3412' : '#0369A1', fontSize: '0.95rem' }}>
                {currentBankName}
              </span>
            </div>
            <span 
              style={{ 
                background: selectedBank === 'bog' ? '#EA580C' : '#0284C7', 
                color: '#FFF', 
                padding: '3px 10px', 
                borderRadius: '8px', 
                fontWeight: 800, 
                fontSize: '0.82rem' 
              }}
            >
              {selectedBank === 'bog' ? 'BOG' : 'TBC'}
            </span>
          </div>

          <div style={{ marginBottom: '12px' }}>
            <div style={{ fontSize: '0.78rem', color: selectedBank === 'bog' ? '#7C2D12' : '#075985', fontWeight: 600, marginBottom: '2px' }}>
              {lang === 'ka' ? 'საბანკო ანგარიშის ნომერი (IBAN):' : 'Bank Account (IBAN):'}
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <div 
                style={{ 
                  flex: 1, 
                  background: '#FFF', 
                  border: '2px solid',
                  borderColor: selectedBank === 'bog' ? '#FDBA74' : '#7DD3FC',
                  borderRadius: '10px', 
                  padding: '10px 14px', 
                  fontFamily: 'monospace', 
                  fontWeight: 800, 
                  fontSize: '1.05rem', 
                  color: '#0F172A', 
                  letterSpacing: '0.5px' 
                }}
              >
                {currentAccount}
              </div>
              <button
                className={`btn-tactile ${copied ? 'emerald' : 'gold'}`}
                onClick={handleCopyIBAN}
                style={{ padding: '10px 14px', fontSize: '0.85rem' }}
                title="Copy IBAN to Clipboard"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span>{copied ? 'დაკოპირდა!' : 'კოპირება'}</span>
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px dashed #CBD5E1', paddingTop: '10px', fontSize: '0.85rem', color: '#334155' }}>
            <div><strong>დანიშნულება:</strong> Junior Worksheets</div>
            <div><strong>თანხა:</strong> {finalPrice.toFixed(2)} ₾</div>
          </div>
        </div>

        {/* Promo Code Input (Optional) */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
          <input
            type="text"
            placeholder={lang === 'ka' ? 'პრომო კოდი (სურვილისამებრ)' : 'Promo code (optional)'}
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            style={{
              flex: 1,
              padding: '10px 14px',
              borderRadius: '12px',
              border: '2px solid #CBD5E1',
              fontSize: '0.88rem',
              outline: 'none'
            }}
          />
          <button className="btn-tactile outline" onClick={handleApplyPromo} style={{ padding: '10px 14px', fontSize: '0.88rem' }}>
            {lang === 'ka' ? 'შემოწმება' : 'Apply'}
          </button>
        </div>

        {/* Action Button: Confirm Paid & Unlock */}
        <button
          className="btn-tactile emerald"
          onClick={handleConfirmPaid}
          disabled={isProcessing}
          style={{ width: '100%', padding: '14px', fontSize: '1.05rem', justifyContent: 'center' }}
        >
          {isProcessing ? (
            <span>მუშავდება... ⏳</span>
          ) : (
            <>
              <CheckCircle2 size={18} />
              <span>{lang === 'ka' ? 'გადავრიცხე ✅ • სრული წვდომის გახსნა' : 'I Have Paid ✅ • Unlock Full Access'}</span>
            </>
          )}
        </button>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', color: '#64748B', fontSize: '0.78rem', marginTop: '14px' }}>
          <ShieldCheck size={14} color="#10B981" />
          <span>მყისიერი წვდომა ყველა 150+ ფურცელზე • შეუზღუდავი ამობეჭდვა სამუდამოდ</span>
        </div>
      </div>
    </div>
  );
};
