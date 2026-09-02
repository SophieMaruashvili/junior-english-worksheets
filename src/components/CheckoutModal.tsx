import React, { useState } from 'react';
import { X, CheckCircle2, Lock, CreditCard, ShieldCheck, Sparkles, Check, Smartphone, Landmark, AlertCircle } from 'lucide-react';
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
  const [paymentType, setPaymentType] = useState<'card' | 'transfer'>('card');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  const [cardName, setCardName] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Fallback IBANs
  const [selectedBank, setSelectedBank] = useState<'bog' | 'tbc'>('bog');
  const [copied, setCopied] = useState(false);
  const BOG_ACCOUNT = 'GE80BG0000000101058335';
  const TBC_ACCOUNT = 'GE49TB7758245064300048';

  const handleCopyIBAN = () => {
    navigator.clipboard.writeText(selectedBank === 'bog' ? BOG_ACCOUNT : TBC_ACCOUNT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'TEACHERFREE' || promoCode.trim().toUpperCase() === 'LIFTOFF') {
      setPromoDiscount(plan.priceGel);
      setErrorMessage('');
    } else {
      setErrorMessage(lang === 'ka' ? 'არასწორი პრომო-კოდი' : 'Invalid promo code');
    }
  };

  const finalPrice = Math.max(0, plan.priceGel - promoDiscount);

  // Format Card Number (XXXX XXXX XXXX XXXX)
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '').slice(0, 16);
    const formatted = raw.match(/.{1,4}/g)?.join(' ') || raw;
    setCardNumber(formatted);
    setErrorMessage('');
  };

  // Format Expiry (MM/YY)
  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let raw = e.target.value.replace(/\D/g, '').slice(0, 4);
    if (raw.length >= 3) {
      raw = `${raw.slice(0, 2)}/${raw.slice(2)}`;
    }
    setCardExpiry(raw);
    setErrorMessage('');
  };

  // Format CVC (3-4 digits)
  const handleCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '').slice(0, 4);
    setCardCvc(raw);
    setErrorMessage('');
  };

  // Process Card Payment (Bank 3D Secure processing simulation)
  const handleCardPayment = (e: React.FormEvent) => {
    e.preventDefault();

    if (finalPrice > 0) {
      if (cardNumber.replace(/\s/g, '').length < 16) {
        setErrorMessage(lang === 'ka' ? 'გთხოვთ შეიყვანოთ სწორი 16-ნიშნა ბარათის ნომერი' : 'Please enter a valid 16-digit card number');
        return;
      }
      if (cardExpiry.length < 5) {
        setErrorMessage(lang === 'ka' ? 'გთხოვთ შეიყვანოთ ბარათის მოქმედების ვადა (თვე/წელი)' : 'Please enter valid expiry date (MM/YY)');
        return;
      }
      if (cardCvc.length < 3) {
        setErrorMessage(lang === 'ka' ? 'გთხოვთ შეიყვანოთ 3-ნიშნა CVC კოდი' : 'Please enter 3-digit CVC code');
        return;
      }
    }

    setIsProcessing(true);
    setErrorMessage('');

    // Simulate 3D Secure bank authorization
    setTimeout(() => {
      setIsProcessing(false);
      try {
        confetti({
          particleCount: 160,
          spread: 90,
          origin: { y: 0.6 }
        });
      } catch {}
      onSuccess();
    }, 1800);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '580px', padding: '32px' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
          <div>
            <h3 style={{ fontSize: '1.4rem', color: '#0F172A', margin: 0, fontFamily: 'Fredoka, sans-serif' }}>
              💳 {lang === 'ka' ? 'უსაფრთხო ბარათით გადახდა' : 'Secure Card Payment'}
            </h3>
            <div style={{ fontSize: '0.85rem', color: '#10B981', fontWeight: 700 }}>
              {lang === 'ka' ? plan.titleKa : plan.titleEn} • {finalPrice.toFixed(2)} ₾
            </div>
          </div>
          <button className="btn-tactile outline" onClick={onClose} style={{ padding: '8px' }}>
            <X size={18} />
          </button>
        </div>

        {/* Tab Switcher: Bank Card vs Manual Transfer */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '18px' }}>
          <button
            onClick={() => setPaymentType('card')}
            style={{
              padding: '12px',
              borderRadius: '12px',
              border: '2px solid',
              borderColor: paymentType === 'card' ? '#10B981' : '#E2E8F0',
              background: paymentType === 'card' ? '#F0FDF4' : '#FFF',
              fontWeight: 800,
              fontSize: '0.9rem',
              color: paymentType === 'card' ? '#15803D' : '#475569',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}
          >
            <CreditCard size={18} />
            <span>ბარათით გადახდა 💳</span>
          </button>

          <button
            onClick={() => setPaymentType('transfer')}
            style={{
              padding: '12px',
              borderRadius: '12px',
              border: '2px solid',
              borderColor: paymentType === 'transfer' ? '#3A86FF' : '#E2E8F0',
              background: paymentType === 'transfer' ? '#EFF6FF' : '#FFF',
              fontWeight: 800,
              fontSize: '0.9rem',
              color: paymentType === 'transfer' ? '#1D4ED8' : '#475569',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}
          >
            <Landmark size={18} />
            <span>მობილბანკი (BOG/TBC)</span>
          </button>
        </div>

        {/* ================= OPTION 1: REAL BANK CARD CHECKOUT FORM ================= */}
        {paymentType === 'card' && (
          <form onSubmit={handleCardPayment}>
            {/* Card Preview Simulation Graphic */}
            <div
              style={{
                background: 'linear-gradient(135deg, #1E293B, #0F172A)',
                borderRadius: '16px',
                padding: '20px',
                color: '#FFF',
                marginBottom: '18px',
                boxShadow: '0 8px 20px rgba(15, 23, 42, 0.25)',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#94A3B8' }}>Junior Worksheets • SSL Secure</div>
                <div style={{ display: 'flex', gap: '6px', fontSize: '0.8rem', fontWeight: 800, background: '#334155', padding: '2px 8px', borderRadius: '6px' }}>
                  <span>VISA</span> | <span>MC</span>
                </div>
              </div>

              <div style={{ fontFamily: 'monospace', fontSize: '1.25rem', letterSpacing: '2px', color: '#F8FAFC', marginBottom: '14px' }}>
                {cardNumber || '•••• •••• •••• ••••'}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', fontSize: '0.82rem', color: '#CBD5E1' }}>
                <div>
                  <div style={{ fontSize: '0.65rem', color: '#94A3B8' }}>CARDHOLDER</div>
                  <div style={{ fontWeight: 700, textTransform: 'uppercase' }}>{cardName || 'YOUR NAME'}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.65rem', color: '#94A3B8' }}>EXPIRES</div>
                  <div style={{ fontWeight: 700 }}>{cardExpiry || 'MM/YY'}</div>
                </div>
              </div>
            </div>

            {/* Inputs: Card Number, Expiry, CVC */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                  {lang === 'ka' ? 'ბარათის 16-ნიშნა ნომერი' : 'Card Number'}
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    required
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    style={{
                      width: '100%',
                      padding: '11px 14px 11px 40px',
                      borderRadius: '12px',
                      border: '2px solid #CBD5E1',
                      fontSize: '0.95rem',
                      outline: 'none',
                      fontFamily: 'monospace'
                    }}
                  />
                  <CreditCard size={18} color="#64748B" style={{ position: 'absolute', left: '12px', top: '13px' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                    {lang === 'ka' ? 'ვადა (თვე/წელი)' : 'Expires (MM/YY)'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="MM/YY"
                    value={cardExpiry}
                    onChange={handleExpiryChange}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '12px',
                      border: '2px solid #CBD5E1',
                      fontSize: '0.95rem',
                      outline: 'none',
                      fontFamily: 'monospace'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                    {lang === 'ka' ? 'CVC / CVV კოდი' : 'CVC / CVV Code'}
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="123"
                    value={cardCvc}
                    onChange={handleCvcChange}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '12px',
                      border: '2px solid #CBD5E1',
                      fontSize: '0.95rem',
                      outline: 'none',
                      fontFamily: 'monospace'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                  {lang === 'ka' ? 'ბარათის მფლობელი (სახელი/გვარი)' : 'Cardholder Name'}
                </label>
                <input
                  type="text"
                  placeholder="სახელი და გვარი"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '12px',
                    border: '2px solid #CBD5E1',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            {/* Error Message if any */}
            {errorMessage && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#DC2626', fontSize: '0.82rem', marginBottom: '12px' }}>
                <AlertCircle size={15} />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Pay Button */}
            <button
              type="submit"
              className="btn-tactile emerald"
              disabled={isProcessing}
              style={{ width: '100%', padding: '14px', fontSize: '1.05rem', justifyContent: 'center' }}
            >
              {isProcessing ? (
                <span>ბანკის ავტორიზაცია • 3D Secure... ⏳</span>
              ) : (
                <>
                  <Lock size={18} />
                  <span>{lang === 'ka' ? `გადახდა • ${finalPrice.toFixed(2)} ₾ (ჩამოჭრა & წვდომა) 🔓` : `Pay ${finalPrice.toFixed(2)} GEL • Instant Unlock 🔓`}</span>
                </>
              )}
            </button>
          </form>
        )}

        {/* ================= OPTION 2: MANUAL BANK TRANSFER ================= */}
        {paymentType === 'transfer' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
              <button
                onClick={() => { setSelectedBank('bog'); setCopied(false); }}
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
                onClick={() => { setSelectedBank('tbc'); setCopied(false); }}
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

            <div style={{ background: selectedBank === 'bog' ? '#FFF7ED' : '#F0F9FF', border: '2px solid', borderColor: selectedBank === 'bog' ? '#FED7AA' : '#BAE6FD', borderRadius: '16px', padding: '16px', marginBottom: '18px' }}>
              <div style={{ fontSize: '0.78rem', color: selectedBank === 'bog' ? '#7C2D12' : '#075985', fontWeight: 600, marginBottom: '2px' }}>
                საბანკო ანგარიში (IBAN):
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <div style={{ flex: 1, background: '#FFF', border: '2px solid', borderColor: selectedBank === 'bog' ? '#FDBA74' : '#7DD3FC', borderRadius: '10px', padding: '8px 12px', fontFamily: 'monospace', fontWeight: 800, fontSize: '1rem', color: '#0F172A' }}>
                  {selectedBank === 'bog' ? BOG_ACCOUNT : TBC_ACCOUNT}
                </div>
                <button
                  className={`btn-tactile ${copied ? 'emerald' : 'gold'}`}
                  onClick={handleCopyIBAN}
                  style={{ padding: '8px 12px', fontSize: '0.82rem' }}
                >
                  {copied ? <Check size={15} /> : <CheckCircle2 size={15} />}
                  <span>{copied ? 'დაკოპირდა!' : 'კოპირება'}</span>
                </button>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px dashed #CBD5E1', paddingTop: '8px', marginTop: '10px', fontSize: '0.82rem', color: '#334155' }}>
                <div><strong>დანიშნულება:</strong> Junior Worksheets</div>
                <div><strong>თანხა:</strong> {finalPrice.toFixed(2)} ₾</div>
              </div>
            </div>

            <button
              className="btn-tactile emerald"
              onClick={() => {
                setIsProcessing(true);
                setTimeout(() => {
                  setIsProcessing(false);
                  try { confetti({ particleCount: 160, spread: 90, origin: { y: 0.6 } }); } catch {}
                  onSuccess();
                }, 1000);
              }}
              style={{ width: '100%', padding: '12px', fontSize: '1rem', justifyContent: 'center' }}
            >
              <span>გადავრიცხე ✅ • სრული წვდომის გახსნა</span>
            </button>
          </div>
        )}

        {/* Promo Code Box */}
        <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
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

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', color: '#64748B', fontSize: '0.78rem', marginTop: '14px' }}>
          <ShieldCheck size={14} color="#10B981" />
          <span>256-bit SSL დაცული საბანკო გადახდა • Visa, MasterCard, AmEx</span>
        </div>
      </div>
    </div>
  );
};
