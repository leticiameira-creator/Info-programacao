import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, FileText, HelpCircle } from 'lucide-react';
import { SITE_CONFIG } from '../data/courseData';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-row">
          {/* Brand & Slogan */}
          <div className="footer-brand-column">
            <Link to="/" className="brand-logo" aria-label="CODE//CORE Início">
              <span className="brand-icon" aria-hidden="true">&lt;/&gt;</span>
              <span className="brand-text">{SITE_CONFIG.brandName}</span>
            </Link>
            <p className="footer-slogan">{SITE_CONFIG.footerSlogan}</p>
          </div>

          {/* Navigation Links Columns */}
          <div className="footer-links-group">
            <div className="footer-links-col">
              <h4>Navegação</h4>
              <ul className="footer-links-list">
                <li><Link to="/" className="footer-link">Início</Link></li>
                <li><Link to="/metodo" className="footer-link">O Método</Link></li>
                <li><Link to="/conteudo" className="footer-link">Conteúdo</Link></li>
                <li><Link to="/depoimentos" className="footer-link">Depoimentos</Link></li>
                <li><Link to="/faq" className="footer-link">FAQ</Link></li>
              </ul>
            </div>

            <div className="footer-links-col">
              <h4>Legal & Suporte</h4>
              <ul className="footer-links-list">
                <li>
                  <Link to="/faq" className="footer-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    <HelpCircle size={14} /> Suporte & Dúvidas
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="footer-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    <Shield size={14} /> Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="footer-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    <FileText size={14} /> Termos de Uso
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="footer-links-col">
              <h4>Comunidade</h4>
              <div className="footer-social-row">
                {SITE_CONFIG.socialLinks.github && (
                  <a
                    href={SITE_CONFIG.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-btn"
                    aria-label="GitHub da CODE//CORE"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                )}
                {SITE_CONFIG.socialLinks.instagram && (
                  <a
                    href={SITE_CONFIG.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-btn"
                    aria-label="Instagram da CODE//CORE"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                )}
                {SITE_CONFIG.socialLinks.youtube && (
                  <a
                    href={SITE_CONFIG.socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-btn"
                    aria-label="YouTube da CODE//CORE"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"></polygon>
                    </svg>
                  </a>
                )}
                {SITE_CONFIG.socialLinks.linkedin && (
                  <a
                    href={SITE_CONFIG.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-btn"
                    aria-label="LinkedIn da CODE//CORE"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="footer-bottom-row">
          <p>© {SITE_CONFIG.copyrightYear} {SITE_CONFIG.brandName}. Todos os direitos reservados.</p>
          <p>Formação prática de programação focada em desenvolvimento real.</p>
        </div>
      </div>
    </footer>
  );
};
