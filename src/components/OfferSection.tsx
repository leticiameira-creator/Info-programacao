import React from 'react';
import { Check, ShieldCheck, CreditCard, Lock } from 'lucide-react';
import { COURSE_OFFER } from '../data/courseData';

interface OfferSectionProps {
  onOpenCheckout: () => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section className="section-padding" aria-label="Oferta e Matrícula">
      <div className="container">
        <div className="offer-panel-container reveal-on-scroll">
          <div className="offer-grid-3-col">
            {/* Area 1: Pricing */}
            <div className="offer-zone-price">
              <span className="badge-tag badge-tag-glow" style={{ marginBottom: 8 }}>
                {COURSE_OFFER.badge}
              </span>
              <span className="offer-price-prefix">{COURSE_OFFER.pricePrefix}</span>
              <span className="offer-price-regular">{COURSE_OFFER.regularPrice}</span>
              <div className="offer-price-current">{COURSE_OFFER.currentPrice}</div>
            </div>

            {/* Area 2: Feature Checklist */}
            <div className="offer-zone-features">
              <ul className="offer-features-list">
                {COURSE_OFFER.features.map((feature, idx) => (
                  <li key={idx} className="offer-feature-item">
                    <Check size={18} className="offer-check-icon" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Area 3: CTA & Trust Badges */}
            <div className="offer-zone-cta">
              <button
                onClick={onOpenCheckout}
                className="btn-primary"
                style={{ width: '100%', padding: '0 28px' }}
                aria-label="Quero entrar agora na formação"
              >
                {COURSE_OFFER.ctaText}
              </button>

              <div className="offer-trust-badges">
                <span className="offer-trust-badge">
                  <Lock size={14} color="#2ff34a" /> Compra segura
                </span>
                <span className="offer-trust-badge">
                  <CreditCard size={14} color="#2ff34a" /> Cartão, Pix e boleto
                </span>
                <span className="offer-trust-badge">
                  <ShieldCheck size={14} color="#2ff34a" /> Garantia de 7 dias
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
