import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Code2, Database, Rocket, CheckCircle, Terminal } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';
import { OfferSection } from '../components/OfferSection';
import { METHOD_STAGES } from '../data/courseData';

export const Method: React.FC = () => {
  return (
    <PageLayout
      pageTitle="O Método — CODE//CORE"
      pageDescription="Conheça o método prático em 4 etapas: aprenda programação construindo projetos reais do zero ao portfólio."
    >
      {(openCheckout) => (
        <>
          {/* Header Hero */}
          <section className="hero-wrapper" style={{ minHeight: 'auto', paddingBottom: 56 }}>
            <div className="container">
              <div style={{ maxWidth: 760 }}>
                <div className="badge-tag hero-stagger-1">O MÉTODO</div>
                <h1 className="title-hero hero-stagger-2" style={{ marginBottom: 20 }}>
                  Aprenda programação construindo, <span className="text-accent">etapa por etapa.</span>
                </h1>
                <p className="text-secondary-muted hero-stagger-3" style={{ fontSize: 18 }}>
                  Uma metodologia linear estruturada para transformar conceitos em linhas de código e aplicações funcionais, sem pular etapas essenciais.
                </p>
              </div>
            </div>
          </section>

          {/* 4 Detailed Stages */}
          <section className="section-padding" aria-label="Detalhamento das 4 Etapas">
            <div className="container">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
                {METHOD_STAGES.map((stage) => {
                  const renderStageIcon = () => {
                    switch (stage.icon) {
                      case 'book': return <BookOpen size={22} />;
                      case 'code': return <Code2 size={22} />;
                      case 'database': return <Database size={22} />;
                      case 'rocket': return <Rocket size={22} />;
                    }
                  };

                  return (
                    <article
                      key={stage.number}
                      className="reveal-on-scroll"
                      style={{
                        backgroundColor: 'var(--bg-surface)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-lg)',
                        padding: '40px 32px',
                        display: 'grid',
                        gridTemplateColumns: '1fr',
                        gap: 36
                      }}
                    >
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 36, alignItems: 'center' }}>
                        {/* Left Info */}
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
                            <div className="method-step-number-circle" style={{ width: 44, height: 44 }}>
                              {stage.number}
                            </div>
                            <span style={{ color: 'var(--accent-green)', display: 'flex', alignItems: 'center' }}>
                              {renderStageIcon()}
                            </span>
                            <span className="badge-tag" style={{ margin: 0 }}>
                              Etapa {stage.number}
                            </span>
                          </div>

                          <h2 className="title-section" style={{ fontSize: 28, marginBottom: 8 }}>
                            {stage.title}
                          </h2>
                          <p style={{ color: 'var(--accent-green)', fontWeight: 600, fontSize: 15, marginBottom: 20 }}>
                            {stage.subtitle}
                          </p>

                          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                            <div>
                              <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-heading)', marginBottom: 6 }}>
                                O que será aprendido
                              </h3>
                              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                {stage.description}
                              </p>
                            </div>

                            <div>
                              <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-heading)', marginBottom: 6 }}>
                                Como se transforma em prática
                              </h3>
                              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                {stage.practiceDetails}
                              </p>
                            </div>

                            <div>
                              <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-heading)', marginBottom: 6 }}>
                                Resultado de aprendizagem
                              </h3>
                              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                                <CheckCircle size={16} color="var(--accent-green)" style={{ flexShrink: 0, marginTop: 3 }} />
                                <p style={{ fontSize: 14, color: 'var(--text-primary)', lineHeight: 1.5, fontWeight: 500 }}>
                                  {stage.learningOutcome}
                                </p>
                              </div>
                            </div>

                            {/* Tech Badges */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
                              {stage.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  style={{
                                    fontSize: 12,
                                    fontWeight: 600,
                                    padding: '4px 10px',
                                    borderRadius: 6,
                                    backgroundColor: 'rgba(47, 243, 74, 0.08)',
                                    border: '1px solid rgba(47, 243, 74, 0.2)',
                                    color: 'var(--accent-green)',
                                    fontFamily: 'var(--font-mono)'
                                  }}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Right Code Window Preview */}
                        {stage.codeSnippet && (
                          <div className="code-window" style={{ maxWidth: '100%' }}>
                            <div className="code-window-header">
                              <div className="code-window-dots">
                                <span className="code-dot code-dot-red" />
                                <span className="code-dot code-dot-yellow" />
                                <span className="code-dot code-dot-green" />
                              </div>
                              <span className="code-window-filename">{stage.codeSnippet.filename}</span>
                              <Terminal size={14} color="var(--accent-green)" />
                            </div>
                            <div className="code-window-body">
                              <pre><code>{stage.codeSnippet.code}</code></pre>
                            </div>
                          </div>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* Transition to /conteudo */}
              <div className="reveal-on-scroll" style={{ textAlign: 'center', marginTop: 64 }}>
                <p className="text-secondary-muted" style={{ marginBottom: 16 }}>
                  Quer ver os módulos detalhados e todos os recursos inclusos?
                </p>
                <Link to="/conteudo" className="btn-primary" style={{ display: 'inline-flex' }}>
                  Explorar o Conteúdo do Curso <ArrowRight size={18} className="btn-arrow" />
                </Link>
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
