import React, { useState } from 'react';
import { X, CheckCircle2, Lock, Copy, Check, Sparkles, ShieldCheck, Smartphone, Landmark, CreditCard, ExternalLink } from 'lucide-react';
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
  const [selectedMethod, setSelectedMethod] = useState<'card' | 'bank_transfer'>('card');
  const [selectedBank, setSelectedBank] = useState<'bog' | 'tbc'>('bog');
  const [copied, setCopied] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [promoDiscount, setPromoDiscount] = useState(0);

  const GUMROAD_CHECKOUT_URL = 'https://juniorworksheets.gumroad.com/l/worksheets';
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

  const handleOpenGumroad = () => {
    window.open(GUMROAD_CHECKOUT_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '620px', padding: '32px' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
          <div>
            <h3 style={{ fontSize: '1.4rem', color: '#0F172A', margin: 0, fontFamily: 'Fredoka, sans-serif' }}>
              💳 {lang === 'ka' ? 'შეძენა & სრული წვდომის გახსნა' : 'Checkout & Instant Access'}
            </h3>
            <div style={{ fontSize: '0.85rem', color: '#10B981', fontWeight: 700 }}>
              {lang === 'ka' ? plan.titleKa : plan.titleEn} • 9.90 ₾ ($3.50)
            </div>
          </div>
          <button className="btn-tactile outline" onClick={onClose} style={{ padding: '8px' }}>
            <X size={18} />
          </button>
        </div>

        {/* Payment Method Selector (Card / Apple Pay vs Bank Transfer) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '18px' }}>
          <button
            onClick={() => setSelectedMethod('card')}
            style={{
              padding: '12px',
              borderRadius: '14px',
              border: '2px solid',
              borderColor: selectedMethod === 'card' ? '#10B981' : '#E2E8F0',
              background: selectedMethod === 'card' ? '#F0FDF4' : '#FFF',
              fontWeight: 800,
              fontSize: '0.92rem',
              color: selectedMethod === 'card' ? '#15803D' : '#475569',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            <CreditCard size={18} color={selectedMethod === 'card' ? '#10B981' : '#64748B'} />
            <span>ბარათი / Apple Pay 🍏</span>
          </button>

          <button
            onClick={() => setSelectedMethod('bank_transfer')}
            style={{
              padding: '12px',
              borderRadius: '14px',
              border: '2px solid',
              borderColor: selectedMethod === 'bank_transfer' ? '#3A86FF' : '#E2E8F0',
              background: selectedMethod === 'bank_transfer' ? '#EFF6FF' : '#FFF',
              fontWeight: 800,
              fontSize: '0.92rem',
              color: selectedMethod === 'bank_transfer' ? '#1D4ED8' : '#475569',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            <Landmark size={18} color={selectedMethod === 'bank_transfer' ? '#3A86FF' : '#64748B'} />
            <span>მობილბანკი (BOG / TBC)</span>
          </button>
        </div>

        {/* OPTION 1: 100% Anonymous Online Card / Apple Pay Checkout via Gumroad */}
        {selectedMethod === 'card' ? (
          <div style={{ background: '#F8FAFC', border: '2px solid #E2E8F0', borderRadius: '16px', padding: '20px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Sparkles size={20} color="#10B981" />
              <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '1.05rem' }}>
                ონლაინ გადახდა ბარათით ან Apple Pay-ით
              </div>
            </div>
            <div style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.6, marginBottom: '16px' }}>
              გადაიხადეთ უსაფრთხოდ ნებისმიერი საბანკო ბარათით (Visa / MasterCard / AmEx) ან <strong>Apple Pay</strong>-ით.
            </div>

            <button
              className="btn-tactile emerald"
              onClick={handleOpenGumroad}
              style={{ width: '100%', padding: '14px', fontSize: '1.05rem', justifyContent: 'center' }}
            >
              <CreditCard size={18} />
              <span>გადახდა ბარათით / Apple Pay • $3.50 (9.90 ₾)</span>
              <ExternalLink size={16} />
            </button>

            <div style={{ textAlign: 'center', marginTop: '12px' }}>
              <button 
                onClick={handleConfirmPaid} 
                style={{ background: 'none', border: 'none', color: '#10B981', fontWeight: 700, fontSize: '0.82rem', cursor: 'pointer', textDecoration: 'underline' }}
              >
                უკვე გადაიხადეთ? დააჭირეთ აქ წვდომის გასააქტიურებლად ✨
              </button>
            </div>
          </div>
        ) : (
          /* OPTION 2: Direct Local Bank Transfer */
          <div>
            {/* Bank Selection Tabs (BOG vs TBC) */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
              <button
                onClick={() => {
                  setSelectedBank('bog');
                  setCopied(false);
                }}
                style={{
                  padding: '10px',
                  borderRadius: '10px',
                  border: '2px solid',
                  borderColor: selectedBank === 'bog' ? '#EA580C' : '#E2E8F0',
                  background: selectedBank === 'bog' ? '#FFF7ED' : '#FFF',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  color: selectedBank === 'bog' ? '#EA580C' : '#475569',
                  cursor: 'pointer'
                }}
              >
                🟠 BOG (საქართველოს ბანკი)
              </button>

              <button
                onClick={() => {
                  setSelectedBank('tbc');
                  setCopied(false);
                }}
                style={{
                  padding: '10px',
                  borderRadius: '10px',
                  border: '2px solid',
                  borderColor: selectedBank === 'tbc' ? '#0284C7' : '#E2E8F0',
                  background: selectedBank === 'tbc' ? '#F0F9FF' : '#FFF',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  color: selectedBank === 'tbc' ? '#0284C7' : '#475569',
                  cursor: 'pointer'
                }}
              >
                🔵 TBC (თიბისი ბანკი)
              </button>
            </div>

            {/* Bank Credentials Card */}
            <div 
              style={{ 
                background: selectedBank === 'bog' ? '#FFF7ED' : '#F0F9FF', 
                border: '2px solid',
                borderColor: selectedBank === 'bog' ? '#FED7AA' : '#BAE6FD',
                borderRadius: '16px', 
                padding: '16px', 
                marginBottom: '18px' 
              }}
            >
              <div style={{ marginBottom: '10px' }}>
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
                      padding: '8px 12px', 
                      fontFamily: 'monospace', 
                      fontWeight: 800, 
                      fontSize: '1rem', 
                      color: '#0F172A' 
                    }}
                  >
                    {currentAccount}
                  </div>
                  <button
                    className={`btn-tactile ${copied ? 'emerald' : 'gold'}`}
                    onClick={handleCopyIBAN}
                    style={{ padding: '8px 12px', fontSize: '0.82rem' }}
                  >
                    {copied ? <Check size={15} /> : <Copy size={15} />}
                    <span>{copied ? 'დაკოპირდა!' : 'კოპირება'}</span>
                  </button>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px dashed #CBD5E1', paddingTop: '8px', fontSize: '0.82rem', color: '#334155' }}>
                <div><strong>დანიშნულება:</strong> Junior Worksheets</div>
                <div><strong>თანხა:</strong> {finalPrice.toFixed(2)} ₾</div>
              </div>
            </div>

            {/* Confirm Paid Button */}
            <button
              className="btn-tactile emerald"
              onClick={handleConfirmPaid}
              disabled={isProcessing}
              style={{ width: '100%', padding: '12px', fontSize: '1rem', justifyContent: 'center', marginBottom: '12px' }}
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
          </div>
        )}

        {/* Promo Code Input */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
          <input
            type="text"
            placeholder={lang === 'ka' ? 'პრომო კოდი (სურვილისამებრ)' : 'Promo code (optional)'}
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            style={{
              flex: 1,
              padding: '8px 12px',
              borderRadius: '10px',
              border: '2px solid #CBD5E1',
              fontSize: '0.85rem',
              outline: 'none'
            }}
          />
          <button className="btn-tactile outline" onClick={handleApplyPromo} style={{ padding: '8px 12px', fontSize: '0.82rem' }}>
            {lang === 'ka' ? 'შემოწმება' : 'Apply'}
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', color: '#64748B', fontSize: '0.78rem' }}>
          <ShieldCheck size={14} color="#10B981" />
          <span>მყისიერი წვდომა ყველა 150+ ფურცელზე • შეუზღუდავი ამობეჭდვა სამუდამოდ</span>
        </div>
      </div>
    </div>
  );
};
