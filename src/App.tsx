import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Method } from './pages/Method';
import { Content } from './pages/Content';
import { Testimonials } from './pages/Testimonials';
import { Faq } from './pages/Faq';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/metodo" element={<Method />} />
        <Route path="/conteudo" element={<Content />} />
        <Route path="/depoimentos" element={<Testimonials />} />
        <Route path="/faq" element={<Faq />} />
        {/* Fallback wildcard to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
