'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  className?: string;
}

export function FAQSection({ 
  title = 'Frequently Asked Questions',
  subtitle,
  faqs,
  className 
}: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const toggleAll = () => {
    if (openItems.size === faqs.length) {
      setOpenItems(new Set());
    } else {
      setOpenItems(new Set(faqs.map((_, i) => i)));
    }
  };

  return (
    <section className={cn('py-16 md:py-24', className)} aria-labelledby="faq-title">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 id="faq-title" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Expand/Collapse All Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={toggleAll}
            className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
            aria-label={openItems.size === faqs.length ? 'Collapse all questions' : 'Expand all questions'}
          >
            {openItems.size === faqs.length ? 'Collapse All' : 'Expand All'}
          </button>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4" role="region" aria-label="Frequently asked questions">
          {faqs.map((faq, index) => {
            const isOpen = openItems.has(index);
            
            return (
              <div
                key={index}
                className={cn(
                  'bg-white rounded-lg border transition-all duration-200',
                  isOpen ? 'border-primary-200 shadow-md' : 'border-neutral-200 hover:border-neutral-300'
                )}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className={cn(
                    'w-full px-6 py-5 text-left flex items-start gap-4 transition-colors',
                    'hover:bg-neutral-50 focus:bg-neutral-50',
                    'focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-inset'
                  )}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  {/* Icon */}
                  <span 
                    className={cn(
                      'flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors mt-0.5',
                      isOpen ? 'bg-primary-600 text-white' : 'bg-neutral-200 text-neutral-600'
                    )}
                    aria-hidden="true"
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                  
                  {/* Question */}
                  <span className={cn(
                    'flex-1 font-medium pr-4',
                    isOpen ? 'text-neutral-900' : 'text-neutral-700'
                  )}>
                    {faq.question}
                  </span>
                </button>
                
                {/* Answer */}
                <div
                  id={`faq-answer-${index}`}
                  className={cn(
                    'overflow-hidden transition-all duration-300 ease-in-out',
                    isOpen ? 'max-h-96' : 'max-h-0'
                  )}
                >
                  <div className="px-6 pb-5 pt-0 pl-16">
                    <p className="text-neutral-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Search Hint */}
        <div className="mt-8 text-center">
          <p className="text-sm text-neutral-500">
            Can't find what you're looking for?{' '}
            <a href="/contact" className="font-medium text-primary-600 hover:text-primary-700 underline">
              Contact our team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}