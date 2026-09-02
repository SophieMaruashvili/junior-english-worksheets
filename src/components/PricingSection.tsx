import React from 'react';
import { Check, Sparkles, ShieldCheck, Heart, Users, HelpCircle } from 'lucide-react';
import { pricingPlans } from '../data/worksheetsCurriculum';
import { PricingPlan, Language } from '../types';

interface PricingSectionProps {
  onSelectPlan: (plan: PricingPlan) => void;
  lang: Language;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan, lang }) => {
  const faqs = [
    {
      qKa: 'როგორ მივიღებ ფურცლებზე წვდომას შეძენის შემდეგ?',
      qEn: 'How do I access worksheets after purchase?',
      aKa: 'გადახდისთანავე საიტზე მომენტალურად იხსნება ყველა 150+ ფურცელი და შეგიძლიათ ნებისმიერ დროს ჩამოტვირთოთ ან ამობეჭდოთ კომპიუტერიდან და მობილურიდან.',
      aEn: 'Access is unlocked immediately on the website for all 150+ worksheets for unlimited printing and viewing.'
    },
    {
      qKa: 'არის თუ არა ეს ერთჯერადი გადახდა თუ ყოველთვიური?',
      qEn: 'Is this a one-time payment or monthly?',
      aKa: 'ეს არის ერთჯერადი სიმბოლური გადახდა (სულ რაღაც 9.90 ₾) და წვდომა რჩება სამუდამოდ, ყოველგვარი ყოველთვიური ჩამოჭრების გარეშე!',
      aEn: 'This is a 100% one-time payment with lifetime access and zero recurring charges.'
    },
    {
      qKa: 'მოყვება თუ არა პასუხების გასაღები (Answer Keys)?',
      qEn: 'Do worksheets include Answer Keys?',
      aKa: 'დიახ! ყველა სავარჯიშო ფურცელს მოყვება პედაგოგების მიერ შედგენილი პასუხების გასაღები, რაც მშობლებს უმარტივებს ბავშვის შემოწმებას.',
      aEn: 'Yes! Every worksheet includes verified answer keys for fast parent and teacher grading.'
    }
  ];

  return (
    <div className="pricing-section no-print" style={{ marginTop: '60px', borderTop: '2px solid #E2E8F0', paddingTop: '48px' }}>
      <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#FEF3C7', color: '#B45309', padding: '6px 14px', borderRadius: '9999px', fontSize: '0.88rem', fontWeight: 800, marginBottom: '12px' }}>
          <Sparkles size={16} />
          <span>{lang === 'ka' ? 'სპეციალური ფასი მშობლებისთვის' : 'Special Parent Micro-Pricing'}</span>
        </div>
        <h2 style={{ fontSize: '2.2rem', fontFamily: 'Fredoka, sans-serif', color: '#0F172A', marginBottom: '8px' }}>
          {lang === 'ka' ? 'შეიძინეთ სრული კრებული მინიმალურ ფასად' : 'Get Full Lifetime Access at Micro-Price'}
        </h2>
        <p style={{ color: '#64748B', fontSize: '1.05rem' }}>
          {lang === 'ka' 
            ? 'სიმბოლური თანხა, რომელიც დაეხმარება თქვენს შვილს 1-4 კლასის ინგლისურის უმაღლეს დონეზე ათვისებაში!'
            : 'Affordable one-time fee unlocking 150+ printable worksheets with lifetime updates!'}
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="pricing-grid">
        {pricingPlans.map((plan) => {
          const isFeatured = plan.isPopular;

          return (
            <div 
              key={plan.id}
              className={`pricing-plan-card ${isFeatured ? 'featured' : ''}`}
            >
              {plan.badge && (
                <div className="plan-ribbon">
                  {plan.badge}
                </div>
              )}

              <h3 style={{ fontSize: '1.3rem', fontFamily: 'Fredoka, sans-serif', color: '#0F172A', margin: 0 }}>
                {lang === 'ka' ? plan.titleKa : plan.titleEn}
              </h3>

              <div className="plan-price-large">
                {plan.priceGel.toFixed(2)} ₾ 
                <span> / {lang === 'ka' ? 'ერთჯერადად' : 'One-Time'}</span>
              </div>

              <div style={{ textDecoration: 'line-through', color: '#94A3B8', fontSize: '0.9rem', marginBottom: '20px' }}>
                {lang === 'ka' ? `ძველი ფასი: ${plan.originalPriceGel.toFixed(2)} ₾` : `Regular price: ${plan.originalPriceGel.toFixed(2)} GEL`}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px', flex: 1 }}>
                {(lang === 'ka' ? plan.featuresKa : plan.featuresEn).map((feat, fIdx) => (
                  <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: '#334155' }}>
                    <div style={{ background: '#DCFCE7', borderRadius: '50%', padding: '3px', color: '#15803D', marginTop: '2px' }}>
                      <Check size={14} />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <button
                className={`btn-tactile ${isFeatured ? 'emerald' : 'blue'}`}
                onClick={() => onSelectPlan(plan)}
                style={{ width: '100%', padding: '14px', fontSize: '1rem' }}
              >
                <span>{lang === 'ka' ? `შეძენა • ${plan.priceGel.toFixed(2)} ₾ 💳` : `Get Instant Access • ${plan.priceGel.toFixed(2)} GEL`}</span>
              </button>
            </div>
          );
        })}
      </div>

      {/* Trust Badges */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap', marginTop: '48px', color: '#64748B', fontSize: '0.9rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ShieldCheck size={20} color="#10B981" />
          <span>{lang === 'ka' ? 'უსაფრთხო გადახდა' : 'Secure Instant Checkout'}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Heart size={20} color="#E11D48" />
          <span>{lang === 'ka' ? '1,400+ კმაყოფილი მშობელი' : '1,400+ Happy Families'}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Users size={20} color="#3A86FF" />
          <span>{lang === 'ka' ? 'მასწავლებლების რეკომენდაცია' : 'Teacher Endorsed'}</span>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={{ maxWidth: '800px', margin: '48px auto 0 auto', background: '#FFF', borderRadius: '20px', padding: '32px', border: '2px solid #E2E8F0' }}>
        <h3 style={{ fontSize: '1.3rem', color: '#0F172A', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <HelpCircle size={20} color="#3A86FF" />
          <span>{lang === 'ka' ? 'ხშირად დასმული კითხვები (FAQ)' : 'Frequently Asked Questions'}</span>
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, idx) => (
            <div key={idx} style={{ borderBottom: idx !== faqs.length - 1 ? '1px solid #F1F5F9' : 'none', paddingBottom: '14px' }}>
              <div style={{ fontWeight: 700, color: '#1E293B', marginBottom: '4px' }}>
                {lang === 'ka' ? faq.qKa : faq.qEn}
              </div>
              <div style={{ color: '#64748B', fontSize: '0.9rem' }}>
                {lang === 'ka' ? faq.aKa : faq.aEn}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
