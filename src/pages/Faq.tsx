import React from 'react';
import { HelpCircle } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';
import { Accordion } from '../components/Accordion';
import { OfferSection } from '../components/OfferSection';
import { FAQ_DATA } from '../data/courseData';

export const Faq: React.FC = () => {
  return (
    <PageLayout
      pageTitle="Perguntas Frequentes — CODE//CORE"
      pageDescription="Tire todas as suas dúvidas sobre a formação prática de programação CODE//CORE."
    >
      {(openCheckout) => (
        <>
          {/* Header */}
          <section className="hero-wrapper" style={{ minHeight: 'auto', paddingBottom: 56 }}>
            <div className="container">
              <div style={{ maxWidth: 760 }}>
                <div className="badge-tag hero-stagger-1">DÚVIDAS FREQUENTES</div>
                <h1 className="title-hero hero-stagger-2" style={{ marginBottom: 20 }}>
                  Tudo o que você precisa saber <span className="text-accent">antes de começar.</span>
                </h1>
                <p className="text-secondary-muted hero-stagger-3" style={{ fontSize: 18 }}>
                  Respostas diretas e transparentes sobre metodologia, acesso, garantia e rotina de estudos.
                </p>
              </div>
            </div>
          </section>

          {/* Accordion FAQ List */}
          <section className="section-padding" aria-label="Lista de Perguntas Frequentes">
            <div className="container" style={{ maxWidth: 840 }}>
              <div className="reveal-on-scroll" style={{ marginBottom: 48 }}>
                <Accordion items={FAQ_DATA} defaultOpenIndex={null} />
              </div>

              {/* Support Card */}
              <div
                className="card-dark reveal-on-scroll"
                style={{
                  backgroundColor: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-accent)',
                  padding: '36px 32px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(47, 243, 74, 0.1)',
                    color: 'var(--accent-green)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px auto',
                  }}
                  aria-hidden="true"
                >
                  <HelpCircle size={24} />
                </div>

                <h2 className="title-card" style={{ fontSize: 22, marginBottom: 8 }}>
                  Ainda tem alguma dúvida?
                </h2>
                <p className="text-secondary-muted" style={{ maxWidth: 480, margin: '0 auto 24px auto', fontSize: 15 }}>
                  Nossa equipe de suporte está à disposição na comunidade de alunos para responder qualquer questionamento técnico ou sobre o curso.
                </p>

                <button
                  onClick={openCheckout}
                  className="btn-primary"
                  style={{ display: 'inline-flex' }}
                >
                  Garantir minha vaga agora
                </button>
              </div>
            </div>
          </section>

          {/* Offer Section */}
          <OfferSection onOpenCheckout={openCheckout} />
        </>
      )}
    </PageLayout>
  );
};
