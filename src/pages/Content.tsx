import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Play,
  FolderCode,
  Download,
  Users,
  Award,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { PageLayout } from '../components/PageLayout';
import { OfferSection } from '../components/OfferSection';
import { INCLUDED_RESOURCES } from '../data/courseData';

interface CourseModule {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  topics: string[];
}

const MODULES_LIST: CourseModule[] = [
  {
    id: 'mod-1',
    number: '01',
    title: 'Fundamentos de Programação, HTML e CSS',
    subtitle: 'Base sólida para quem está começando',
    description: 'Aprenda os princípios fundamentais da lógica de computação e construa suas primeiras páginas web completas.',
    topics: [
      'Lógica de programação e algoritmos essenciais',
      'Estruturação semântica com HTML5',
      'Estilização moderna com CSS3, Flexbox e CSS Grid',
      'Responsividade para telas mobile, tablet e desktop',
      'Boas práticas de organização de arquivos e semântica web'
    ]
  },
  {
    id: 'mod-2',
    number: '02',
    title: 'Front-end com JavaScript e React',
    subtitle: 'Interatividade moderna e interfaces ricas',
    description: 'Domine a linguagem mais popular da web e construa Single Page Applications com React.',
    topics: [
      'JavaScript Moderno (ES6+, Arrow Functions, Destructuring, Promises)',
      'Manipulação do DOM e tratamento de eventos',
      'Fundamentos do React: Componentes, Props e Estado',
      'React Hooks essenciais (useState, useEffect, useMemo)',
      'Consumo de APIs REST e renderização dinâmica de dados'
    ]
  },
  {
    id: 'mod-3',
    number: '03',
    title: 'Back-end com Node.js, APIs e Banco de Dados',
    subtitle: 'Servidores, regras de negócio e persistência',
    description: 'Entenda como funciona o lado do servidor, construa APIs robustas e conecte com bancos de dados.',
    topics: [
      'Introdução ao ecossistema Node.js e gerenciadores de pacotes',
      'Arquitetura de APIs RESTful com Express',
      'Rotas, controllers, middlewares e validações de dados',
      'Modelagem e persistência com banco de dados relacional',
      'Autenticação segura, tokens JWT e proteção de rotas'
    ]
  },
  {
    id: 'mod-4',
    number: '04',
    title: 'Projetos Reais e Portfólio',
    subtitle: 'Integração de ponta a ponta e publicação',
    description: 'Junte front-end e back-end para construir aplicações completas e colocá-las no ar.',
    topics: [
      'Desenvolvimento de aplicações Full Stack completas',
      'Controle de versão profissional com Git e GitHub',
      'Documentação clara de repositórios para recrutadores',
      'Deploy e publicação de aplicações na nuvem',
      'Construção do seu portfólio prático de projetos'
    ]
  }
];

export const Content: React.FC = () => {
  const [expandedModules, setExpandedModules] = useState<{ [key: string]: boolean }>({
    'mod-1': true,
    'mod-2': true,
    'mod-3': true,
    'mod-4': true,
  });

  const toggleModule = (id: string) => {
    setExpandedModules((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <PageLayout
      pageTitle="Conteúdo do Curso — CODE//CORE"
      pageDescription="Conheça a grade completa dos módulos e todos os recursos inclusos na formação CODE//CORE."
    >
      {(openCheckout) => (
        <>
          {/* Hero Header */}
          <section className="hero-wrapper" style={{ minHeight: 'auto', paddingBottom: 56 }}>
            <div className="container">
              <div style={{ maxWidth: 760 }}>
                <div className="badge-tag hero-stagger-1">CONTEÚDO DO CURSO</div>
                <h1 className="title-hero hero-stagger-2" style={{ marginBottom: 20 }}>
                  Da primeira linha de código ao <span className="text-accent">seu portfólio.</span>
                </h1>
                <p className="text-secondary-muted hero-stagger-3" style={{ fontSize: 18 }}>
                  Uma formação estruturada em 4 módulos práticos para você aprender construindo aplicações de verdade.
                </p>
              </div>
            </div>
          </section>

          {/* Modules Breakdown */}
          <section className="section-padding" aria-label="Módulos da Formação">
            <div className="container">
              <div className="reveal-on-scroll" style={{ marginBottom: 40 }}>
                <div className="badge-tag">GRADE DE MÓDULOS</div>
                <h2 className="title-section">Módulos Práticos da Formação</h2>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {MODULES_LIST.map((mod) => {
                  const isExpanded = !!expandedModules[mod.id];

                  return (
                    <article
                      key={mod.id}
                      className="card-dark reveal-on-scroll"
                      style={{
                        padding: '24px 28px',
                        backgroundColor: 'var(--bg-surface)',
                      }}
                    >
                      <div
                        onClick={() => toggleModule(mod.id)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          cursor: 'pointer',
                          gap: 16,
                        }}
                        role="button"
                        tabIndex={0}
                        aria-expanded={isExpanded}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            toggleModule(mod.id);
                          }
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                          <div
                            className="method-step-number-circle"
                            style={{ width: 44, height: 44, flexShrink: 0 }}
                          >
                            {mod.number}
                          </div>
                          <div>
                            <h3 className="title-card" style={{ fontSize: 20 }}>
                              Módulo {mod.number}: {mod.title}
                            </h3>
                            <p style={{ fontSize: 13, color: 'var(--accent-green)', marginTop: 2 }}>
                              {mod.subtitle}
                            </p>
                          </div>
                        </div>

                        <span
                          className="faq-icon-wrapper"
                          style={{
                            backgroundColor: isExpanded ? 'var(--accent-green)' : 'rgba(47, 243, 74, 0.1)',
                            color: isExpanded ? 'var(--text-inverse)' : 'var(--accent-green)',
                          }}
                          aria-hidden="true"
                        >
                          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </span>
                      </div>

                      {isExpanded && (
                        <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid var(--border-subtle)' }}>
                          <p style={{ color: 'var(--text-secondary)', fontSize: 15, marginBottom: 18 }}>
                            {mod.description}
                          </p>

                          <h4 style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', marginBottom: 12 }}>
                            Tópicos abordados:
                          </h4>
                          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                            {mod.topics.map((t, idx) => (
                              <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--text-primary)' }}>
                                <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--accent-green)' }} />
                                <span>{t}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Included Resources */}
          <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }} aria-label="Recursos Inclusos">
            <div className="container">
              <div className="what-you-get-panel reveal-on-scroll">
                <div className="what-you-get-header">
                  <div>
                    <span className="badge-tag">O QUE VOCÊ RECEBE</span>
                    <h2 className="title-section">
                      Tudo o que está incluso na sua matrícula
                    </h2>
                  </div>
                  <div>
                    <p className="text-secondary-muted">
                      Acesso completo e suporte para garantir que você aproveite cada etapa do seu aprendizado.
                    </p>
                  </div>
                </div>

                <div className="what-you-get-grid">
                  {INCLUDED_RESOURCES.map((res) => {
                    const renderResIcon = () => {
                      switch (res.icon) {
                        case 'play': return <Play size={20} />;
                        case 'folder': return <FolderCode size={20} />;
                        case 'fileText': return <Download size={20} />;
                        case 'users': return <Users size={20} />;
                        case 'award': return <Award size={20} />;
                      }
                    };

                    return (
                      <div key={res.id} className="resource-card">
                        <div className="resource-icon-box" aria-hidden="true">
                          {renderResIcon()}
                        </div>
                        <h3 className="resource-title" style={{ marginBottom: 6 }}>{res.title}</h3>
                        <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                          {res.description}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'center' }}>
                  <Link to="/metodo" className="btn-secondary-link">
                    Conhecer a metodologia completa <ArrowRight size={16} aria-hidden="true" />
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
