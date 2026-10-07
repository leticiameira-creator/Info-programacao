import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { CheckoutModal } from './CheckoutModal';
import { CodeBackgroundAnimation } from './CodeBackgroundAnimation';

interface PageLayoutProps {
  children: (openCheckout: () => void) => React.ReactNode;
  pageTitle?: string;
  pageDescription?: string;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  pageTitle = 'CODE//CORE — Aprenda a programar construindo projetos de verdade',
  pageDescription = 'Formação prática para sair do zero e criar aplicações web, APIs e projetos para portfólio.'
}) => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  // Update Page Title and Meta description
  useEffect(() => {
    document.title = pageTitle;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', pageDescription);
    }
  }, [pageTitle, pageDescription]);

  // IntersectionObserver for reveal-on-scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]);

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <div className="page-wrapper" style={{ position: 'relative', minHeight: '100vh' }}>
      <CodeBackgroundAnimation />

      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>

      <Header onOpenCheckout={handleOpenCheckout} />

      <main id="main-content" style={{ position: 'relative', zIndex: 1 }}>
        {children(handleOpenCheckout)}
      </main>

      <Footer />

      <CheckoutModal isOpen={isCheckoutOpen} onClose={handleCloseCheckout} />
    </div>
  );
};
