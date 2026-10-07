import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Quote, CheckCircle2 } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';
import { OfferSection } from '../components/OfferSection';
import { TESTIMONIALS_DATA } from '../data/courseData';

export const Testimonials: React.FC = () => {
  return (
    <PageLayout
      pageTitle="Depoimentos — CODE//CORE"
      pageDescription="Conheça as histórias e experiências reais de alunos que aprenderam a programar com o método CODE//CORE."
    >
      {(openCheckout) => (
        <>
          {/* Header */}
          <section className="hero-wrapper" style={{ minHeight: 'auto', paddingBottom: 56 }}>
            <div className="container">
              <div style={{ maxWidth: 760 }}>
                <div className="badge-tag hero-stagger-1">DEPOIMENTOS</div>
                <h1 className="title-hero hero-stagger-2" style={{ marginBottom: 20 }}>
                  Conheça as experiências de quem <span className="text-accent">passou pelo método.</span>
                </h1>
                <p className="text-secondary-muted hero-stagger-3" style={{ fontSize: 18 }}>
                  Relatos reais de alunos que aplicaram a metodologia prática no dia a dia para construir seus próprios projetos.
                </p>
              </div>
            </div>
          </section>

          {/* Testimonials Editorial Grid */}
          <section className="section-padding" aria-label="Relatos de Alunos">
            <div className="container">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 32, maxWidth: 960, margin: '0 auto' }}>
                {TESTIMONIALS_DATA.map((item) => (
                  <article
                    key={item.id}
                    className="card-dark reveal-on-scroll"
                    style={{
                      padding: '36px 32px',
                      backgroundColor: 'var(--bg-surface)',
                      position: 'relative',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                      <div className="testimonial-stars" aria-label="Avaliação 5 estrelas">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} size={18} fill="currentColor" />
                        ))}
                      </div>
                      <Quote size={28} color="rgba(47, 243, 74, 0.25)" />
                    </div>

                    <p style={{
                      fontSize: 18,
                      color: 'var(--text-heading)',
                      lineHeight: 1.65,
                      fontStyle: 'italic',
                      marginBottom: 28
                    }}>
                      “{item.quote}”
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 14 }}>
                      <div className="testimonial-author-row">
                        <div className="testimonial-avatar" style={{ width: 48, height: 48, fontSize: 16 }}>
                          {item.avatarInitials}
                        </div>
                        <div>
                          <h2 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-heading)' }}>
                            {item.name}
                          </h2>
                          <p style={{ fontSize: 14, color: 'var(--text-muted)' }}>
                            {item.role}
                          </p>
                        </div>
                      </div>

                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--accent-green-tag)' }}>
                        <CheckCircle2 size={15} color="var(--accent-green)" />
                        <span>Aluno Verificado</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Next Steps Invitation Card */}
              <div
                className="reveal-on-scroll"
                style={{
                  maxWidth: 960,
                  margin: '64px auto 0 auto',
                  backgroundColor: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-accent)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '40px 32px',
                  textAlign: 'center',
                }}
              >
                <span className="badge-tag">SUA JORNADA</span>
                <h2 className="title-section" style={{ marginBottom: 14 }}>
                  Seu próximo projeto pode começar aqui.
                </h2>
                <p className="text-secondary-muted" style={{ maxWidth: 540, margin: '0 auto 28px auto' }}>
                  Conheça todas as etapas da metodologia ou veja a grade de conteúdos para dar seu primeiro passo.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
                  <Link to="/metodo" className="btn-primary">
                    Conhecer o método <ArrowRight size={16} className="btn-arrow" />
                  </Link>
                  <Link
                    to="/conteudo"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '0 28px',
                      height: 54,
                      borderRadius: 'var(--radius-pill)',
                      border: '1px solid var(--border-subtle)',
                      backgroundColor: 'transparent',
                      color: 'var(--text-heading)',
                      fontWeight: 700,
                      fontSize: 15,
                      textDecoration: 'none',
                      transition: 'border-color var(--transition-fast), background-color var(--transition-fast)'
                    }}
                  >
                    Ver conteúdo completo →
                  </Link>
                </div>
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
