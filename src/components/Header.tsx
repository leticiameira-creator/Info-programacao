import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/courseData';

interface HeaderProps {
  onOpenCheckout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCheckout }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleEscape);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleEscape);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Início', path: '/' },
    { label: 'O Método', path: '/metodo' },
    { label: 'Conteúdo', path: '/conteudo' },
    { label: 'Depoimentos', path: '/depoimentos' },
    { label: 'FAQ', path: '/faq' },
  ];

  return (
    <header className="header-nav">
      <div className="container header-inner">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo" aria-label="CODE//CORE Página Inicial">
          <span className="brand-icon" aria-hidden="true">&lt;/&gt;</span>
          <span className="brand-text">{SITE_CONFIG.brandName}</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Navegação Principal" className="nav-links-desktop">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-link-item ${isActive ? 'active' : ''}`
              }
              end={item.path === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA Action */}
        <div className="header-actions-desktop">
          <button
            onClick={onOpenCheckout}
            className="btn-primary nav-cta-btn"
            aria-label="Abrir matrícula e começar agora"
          >
            Começar agora <ArrowRight size={16} className="btn-arrow" aria-hidden="true" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="hamburger-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Backdrop & Drawer */}
      <div
        className={`mobile-nav-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu Mobile"
      >
        <div className="mobile-nav-header">
          <Link to="/" className="brand-logo" onClick={() => setMobileMenuOpen(false)}>
            <span className="brand-icon" aria-hidden="true">&lt;/&gt;</span>
            <span className="brand-text">{SITE_CONFIG.brandName}</span>
          </Link>
          <button
            className="modal-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Fechar menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav aria-label="Links Mobile" className="mobile-nav-links">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `mobile-nav-link ${isActive ? 'active' : ''}`
              }
              end={item.path === '/'}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div style={{ marginTop: 'auto', paddingTop: 20 }}>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCheckout();
            }}
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Começar agora <ArrowRight size={16} className="btn-arrow" />
          </button>
        </div>
      </aside>
    </header>
  );
};
