import React, { useEffect, useRef } from 'react';
import { X, Check, ShieldCheck, Lock, Sparkles } from 'lucide-react';
import { COURSE_OFFER } from '../data/courseData';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      modalRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="modal-backdrop"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-content-card" ref={modalRef} tabIndex={-1}>
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Fechar modal de matrícula"
        >
          <X size={20} />
        </button>

        <div className="badge-tag badge-tag-glow" style={{ marginBottom: 12 }}>
          {COURSE_OFFER.badge}
        </div>

        <h3 id="modal-title" style={{ fontSize: 24, fontWeight: 800, color: '#f5f7f6', marginBottom: 10 }}>
          Garanta seu Acesso ao CODE//CORE
        </h3>

        <p style={{ color: '#a7b0ad', fontSize: 14, marginBottom: 20 }}>
          Aprenda a programar construindo projetos de verdade com método prático do zero ao portfólio.
        </p>

        <div style={{
          backgroundColor: '#07120e',
          border: '1px solid #1b2a24',
          borderRadius: 12,
          padding: '16px 20px',
          marginBottom: 20
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
            <span style={{ fontSize: 14, color: '#77847e' }}>Valor promocional:</span>
            <span style={{ fontSize: 28, fontWeight: 900, color: '#2ff34a' }}>{COURSE_OFFER.currentPrice}</span>
          </div>
          <div style={{ fontSize: 13, color: '#77847e', textDecoration: 'line-through', textAlign: 'right' }}>
            {COURSE_OFFER.regularPrice}
          </div>
        </div>

        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
          {COURSE_OFFER.features.map((feat, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: '#e6ede9' }}>
              <Check size={16} color="#2ff34a" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        {COURSE_OFFER.checkoutUrl ? (
          <a
            href={COURSE_OFFER.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Ir para o Checkout Seguro <span className="btn-arrow">→</span>
          </a>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 20px',
              backgroundColor: 'rgba(47, 243, 74, 0.1)',
              border: '1px solid rgba(47, 243, 74, 0.3)',
              borderRadius: 30,
              color: '#2ff34a',
              fontWeight: 700,
              fontSize: 14,
              marginBottom: 14
            }}>
              <Sparkles size={16} />
              Inscrições em breve para a próxima turma
            </div>
            <p style={{ fontSize: 13, color: '#77847e' }}>
              O link oficial de pagamento será disponibilizado no início das matrículas.
            </p>
          </div>
        )}

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 16,
          marginTop: 20,
          paddingTop: 16,
          borderTop: '1px solid rgba(27, 42, 36, 0.5)',
          fontSize: 12,
          color: '#77847e'
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Lock size={13} /> Compra segura
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <ShieldCheck size={13} /> Garantia de 7 dias
          </span>
        </div>
      </div>
    </div>
  );
};
