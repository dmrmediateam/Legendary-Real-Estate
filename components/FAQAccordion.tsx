'use client';

import { useState } from 'react';

interface FAQItem {
  question?: string
  answer?: string
}

interface FAQAccordionProps {
  faqs: FAQItem[]
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-serif font-normal text-black mb-6 tracking-[0.05em]">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-black/10 bg-white overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors duration-300"
            >
              <span className="text-base font-serif font-normal text-black pr-4" style={{ letterSpacing: '0.02em' }}>
                {faq.question}
              </span>
              <svg
                className={`w-5 h-5 text-[#890100] transition-transform duration-300 flex-shrink-0 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="p-4 pt-0 text-sm text-black/70 leading-relaxed font-serif" style={{ letterSpacing: '0.02em' }}>
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

