import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../data/courseData';

interface AccordionProps {
  items: FaqItem[];
  defaultOpenIndex?: number | null;
}

export const Accordion: React.FC<AccordionProps> = ({ items, defaultOpenIndex = 0 }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="faq-accordion-container" role="region" aria-label="Perguntas Frequentes">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const triggerId = `faq-trigger-${item.id}`;
        const contentId = `faq-content-${item.id}`;

        return (
          <div key={item.id} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
            <h3>
              <button
                type="button"
                id={triggerId}
                aria-expanded={isOpen}
                aria-controls={contentId}
                className="faq-trigger-btn"
                onClick={() => toggleItem(index)}
              >
                <span>{item.question}</span>
                <span className="faq-icon-wrapper" aria-hidden="true">
                  {isOpen ? <Minus size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
                </span>
              </button>
            </h3>

            <div
              id={contentId}
              role="region"
              aria-labelledby={triggerId}
              hidden={!isOpen}
              className="faq-content-body"
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
