import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Play,
  ShieldCheck,
  ArrowRight,
  Code2,
  Clock,
  FileText,
  Briefcase,
  BookOpen,
  Database,
  Rocket,
  Star,
  CheckCircle2,
  FolderCode,
  Download,
  Users,
  Award
} from 'lucide-react';
import { PageLayout } from '../components/PageLayout';
import { OfferSection } from '../components/OfferSection';
import { Accordion } from '../components/Accordion';
import {
  PROBLEMS_DATA,
  METHOD_STAGES,
  INCLUDED_RESOURCES,
  TESTIMONIALS_DATA,
  FAQ_DATA
} from '../data/courseData';

export const Home: React.FC = () => {
  return (
    <PageLayout
      pageTitle="CODE//CORE — Aprenda a programar construindo projetos de verdade"
      pageDescription="Uma formação prática para sair do zero e criar aplicações web, APIs e projetos para portfólio."
    >
      {(openCheckout) => (
        <>
          {/* =========================================================================
              1. HERO SECTION (FULL-BLEED SEAMLESS BANNER)
              ========================================================================= */}
          <section className="hero-wrapper" aria-label="Apresentação Principal">
            {/* Seamless Full-Bleed Laptop Scene facing Left */}
            <div className="hero-backdrop-scene" aria-hidden="true">
              <img
                src="/images/hero-laptop.jpg"
                alt=""
                className="hero-scene-img"
                fetchPriority="high"
              />
              <div className="hero-scene-mask-left" />
              <div className="hero-scene-mask-bottom" />
              <div className="hero-scene-mask-top" />
              <div className="hero-scene-mask-right" />
            </div>

            <div className="container hero-container-relative">
              <div className="hero-grid">
                {/* Left Column: Hero Content */}
                <div className="hero-content">
                  <div className="badge-tag hero-stagger-1">
                    CURSO ONLINE • PROGRAMAÇÃO
                  </div>

                  <h1 className="title-hero hero-stagger-2" style={{ marginBottom: 20 }}>
                    Aprenda a<br />
                    <span className="text-accent">programar</span><br />
                    construindo<br />
                    projetos de verdade.
                  </h1>

                  <p className="text-secondary-muted hero-stagger-3" style={{ maxWidth: 500, marginBottom: 8 }}>
                    Uma formação prática para sair do zero e criar aplicações web, APIs e projetos para portfólio.
                  </p>

                  {/* 3 Key Benefits */}
                  <div className="hero-benefits-list hero-stagger-4">
                    <div className="hero-benefit-item">
                      <span className="hero-benefit-icon" aria-hidden="true">
                        <GraduationCap size={18} />
                      </span>
                      <span>Acesso imediato</span>
                    </div>

                    <div className="hero-benefit-item">
                      <span className="hero-benefit-icon" aria-hidden="true">
                        <Play size={16} />
                      </span>
                      <span>100% online</span>
                    </div>

                    <div className="hero-benefit-item">
                      <span className="hero-benefit-icon" aria-hidden="true">
                        <ShieldCheck size={18} />
                      </span>
                      <span>Garantia de 7 dias</span>
                    </div>
                  </div>

                  {/* Hero CTA Button */}
                  <div className="hero-stagger-5">
                    <button
                      onClick={openCheckout}
                      className="btn-primary"
                      aria-label="Começar a programar agora"
                    >
                      COMEÇAR A PROGRAMAR <ArrowRight size={18} className="btn-arrow" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                {/* Empty column placeholder on desktop to maintain grid balance */}
                <div className="hero-grid-spacer" aria-hidden="true" />
              </div>
            </div>

            {/* True Corner Floating Status Badge */}
            <div className="hero-floating-status floating-card" aria-label="Status: Projeto rodando">
              <CheckCircle2 size={18} color="#2ff34a" className="pulse-circle" />
              <span className="hero-floating-title">
                Projeto rodando
              </span>
            </div>
          </section>

          {/* =========================================================================
              2. PROBLEMAS QUE VOCÊ PODE RESOLVER
              ========================================================================= */}
          <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }} aria-label="Problemas que você pode resolver">
            <div className="container">
              <div className="problems-header reveal-on-scroll">
                <span className="badge-tag">PROBLEMAS QUE VOCÊ PODE RESOLVER</span>
                <h2 className="title-section">
                  Você se identifica com alguma dessas situações?
                </h2>
              </div>

              <div className="problems-grid">
                {PROBLEMS_DATA.map((problem) => {
                  const renderIcon = () => {
                    switch (problem.icon) {
                      case 'code': return <Code2 size={24} strokeWidth={2} />;
                      case 'clock': return <Clock size={24} strokeWidth={2} />;
                      case 'file': return <FileText size={24} strokeWidth={2} />;
                      case 'briefcase': return <Briefcase size={24} strokeWidth={2} />;
                    }
                  };

                  return (
                    <article key={problem.id} className="card-dark problem-card reveal-on-scroll">
                      <div className="problem-icon-wrapper" aria-hidden="true">
                        {renderIcon()}
                      </div>
                      <h3 className="problem-card-title">{problem.title}</h3>
                      <p className="problem-card-desc">{problem.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          {/* =========================================================================
              3. O MÉTODO (RESUMO DAS 4 ETAPAS)
              ========================================================================= */}
          <section className="section-padding" aria-label="Resumo do Método">
            <div className="container">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 20 }}>
                <div className="method-header-row reveal-on-scroll" style={{ maxWidth: 640 }}>
                  <span className="badge-tag">O MÉTODO</span>
                  <h2 className="title-section">
                    Um passo a passo simples<br />
                    e prático em <span className="text-accent">4 etapas.</span>
                  </h2>
                  <p className="text-secondary-muted">
                    Do zero ao projeto completo, com acompanhamento e projetos reais para o seu portfólio.
                  </p>
                </div>

                {/* Hand-drawn style curve annotation in green */}
                <div className="reveal-on-scroll" style={{ marginTop: 10 }}>
                  <div className="method-annotation-box">
                    <span>Aprenda fazendo projetos reais</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Timeline Steps */}
              <div className="method-timeline-container reveal-on-scroll">
                <div className="method-timeline-track" aria-hidden="true" />
                <div className="method-steps-grid">
                  {METHOD_STAGES.map((stage) => {
                    const renderStageIcon = () => {
                      switch (stage.icon) {
                        case 'book': return <BookOpen size={18} />;
                        case 'code': return <Code2 size={18} />;
                        case 'database': return <Database size={18} />;
                        case 'rocket': return <Rocket size={18} />;
                      }
                    };

                    return (
                      <div key={stage.number} className="method-step-card">
                        <div className="method-step-top-row">
                          <div className="method-step-number-circle" aria-label={`Etapa ${stage.number}`}>
                            {stage.number}
                          </div>
                          <span style={{ color: 'var(--accent-green)' }} aria-hidden="true">
                            {renderStageIcon()}
                          </span>
                        </div>
                        <h3 className="method-step-title" style={{ marginBottom: 8 }}>
                          {stage.number}. {stage.title}
                        </h3>
                        <p className="method-step-desc">
                          {stage.subtitle}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Method Page Link */}
              <div className="reveal-on-scroll" style={{ marginTop: 32 }}>
                <Link to="/metodo" className="btn-secondary-link">
                  Conhecer o método completo <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>

          {/* =========================================================================
              4. O QUE VOCÊ RECEBE (PAINEL LARGO)
              ========================================================================= */}
          <section className="section-padding" style={{ paddingTop: 0 }} aria-label="O Que Você Recebe">
            <div className="container">
              <div className="what-you-get-panel reveal-on-scroll">
                <div className="what-you-get-header">
                  <div>
                    <span className="badge-tag">O QUE VOCÊ RECEBE</span>
                    <h2 className="title-section">
                      Uma formação completa<br />
                      com foco na prática.
                    </h2>
                  </div>
                  <div>
                    <p className="text-secondary-muted">
                      Tudo o que você precisa para aprender, praticar e se destacar no mercado de tecnologia.
                    </p>
                  </div>
                </div>

                <div className="what-you-get-grid">
                  {INCLUDED_RESOURCES.map((resource) => {
                    const renderResIcon = () => {
                      switch (resource.icon) {
                        case 'play': return <Play size={20} />;
                        case 'folder': return <FolderCode size={20} />;
                        case 'fileText': return <Download size={20} />;
                        case 'users': return <Users size={20} />;
                        case 'award': return <Award size={20} />;
                      }
                    };

                    return (
                      <div key={resource.id} className="resource-card">
                        <div className="resource-icon-box" aria-hidden="true">
                          {renderResIcon()}
                        </div>
                        <h3 className="resource-title">{resource.title}</h3>
                      </div>
                    );
                  })}
                </div>

                <div>
                  <Link to="/conteudo" className="btn-secondary-link">
                    Explorar o conteúdo do curso <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================================
              5. DEPOIMENTOS
              ========================================================================= */}
          <section className="section-padding" aria-label="Depoimentos de Alunos">
            <div className="container">
              <div className="testimonials-header reveal-on-scroll" style={{ maxWidth: 600 }}>
                <span className="badge-tag">DEPOIMENTOS</span>
                <h2 className="title-section">
                  Histórias reais de quem já passou pelo método.
                </h2>
              </div>

              <div className="testimonials-grid">
                {TESTIMONIALS_DATA.map((t) => (
                  <article key={t.id} className="card-dark testimonial-card reveal-on-scroll">
                    <div>
                      <div className="testimonial-stars" aria-label={`Avaliação de 5 estrelas`}>
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" />
                        ))}
                      </div>
                      <p className="testimonial-quote">“{t.quote}”</p>
                    </div>

                    <div className="testimonial-author-row">
                      <div className="testimonial-avatar" aria-hidden="true">
                        {t.avatarInitials}
                      </div>
                      <div>
                        <h3 className="testimonial-author-name">{t.name}</h3>
                        <p className="testimonial-author-role">{t.role}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="reveal-on-scroll">
                <Link to="/depoimentos" className="btn-secondary-link">
                  Ver todos os depoimentos <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>

          {/* =========================================================================
              6. OFERTA PRINCIPAL COMPARTILHADA
              ========================================================================= */}
          <OfferSection onOpenCheckout={openCheckout} />

          {/* =========================================================================
              7. FAQ (PERGUNTAS FREQUENTES)
              ========================================================================= */}
          <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }} aria-label="Dúvidas Frequentes">
            <div className="container" style={{ maxWidth: 840 }}>
              <div className="reveal-on-scroll" style={{ textAlign: 'center', marginBottom: 44 }}>
                <span className="badge-tag">DÚVIDAS FREQUENTES</span>
                <h2 className="title-section">
                  Perguntas frequentes
                </h2>
              </div>

              <div className="reveal-on-scroll">
                <Accordion items={FAQ_DATA} defaultOpenIndex={0} />
              </div>

              <div className="reveal-on-scroll" style={{ textAlign: 'center', marginTop: 36 }}>
                <Link to="/faq" className="btn-secondary-link">
                  Ver todas as dúvidas <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>
        </>
      )}
    </PageLayout>
  );
};
