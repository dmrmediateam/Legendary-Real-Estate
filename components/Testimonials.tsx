'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Chad Donahue',
    location: 'Lake Geneva, WI',
    text: 'Working with Jade was a pleasure. She made the buying process easy and fun. Appreciate her patience, prompt responses and a wealth of knowledge.',
  },
  {
    id: 2,
    name: 'Christi Hunter',
    location: 'Lake Geneva, WI',
    text: 'Chris Devincentis is a very seasoned real estate professional. His experience and expertise were invaluable in navigating our way through our most recent purchase. His professionalism and dedication were apparent throughout the process. He is a remarkable guy!',
  },
  {
    id: 3,
    name: 'Jeanette Payne',
    location: 'Lake Geneva, WI',
    text: 'Grateful to Jade and the team for their assistance and attention on our recent purchase of property. I don\'t know that we could have done it without their experience and expertise. We are grateful buyers!',
  },
  {
    id: 4,
    name: 'Rachel DePorter',
    location: 'Lake Geneva, WI',
    text: 'The realtors from this company were able to quickly get my home on the market and sold fast. I also admired the professionalism of the individuals involved.',
  },
  {
    id: 5,
    name: 'Terry Shields Heintz',
    location: 'Lake Geneva, WI',
    text: 'Chris Devincentis was absolutely wonderful to work with. He was very responsive to answer all our questions. If you are looking for a great Realtor, he is your guy!!',
  },
  {
    id: 6,
    name: 'Marsha McClary',
    location: 'Lake Geneva, WI',
    text: 'We had such a fantastic experience buying a home in another state all because of Chris and his team. He has so much expertise about the area, we felt confident that he would make the process a smooth one. And he came through with great results!',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-40 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Minimal Header */}
        <div className="text-center mb-32">
          <div className="w-16 h-[0.5px] bg-[#890100] mx-auto mb-16"></div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-normal text-black mb-16 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
            The Right Agent Helps You Navigate<br />Life's Turning Points
          </h2>
          <div className="w-16 h-[0.5px] bg-[#890100] mx-auto"></div>
        </div>

        {/* Ultra-Minimal Testimonial Display */}
        <div className="relative">
          {/* Testimonial Content */}
          <div className="mb-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              >
                <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-black leading-[1.4] mb-12" style={{ letterSpacing: '0.02em' }}>
                  {current.text}
                </blockquote>
              </motion.div>
            </AnimatePresence>

            {/* Client Info - Minimal */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex items-center gap-8"
              >
                <div className="w-24 h-[0.5px] bg-black/20"></div>
                <div>
                  <h4 className="text-lg font-serif font-normal text-black mb-1 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                    {current.name}
                  </h4>
                  <p className="text-xs text-black/50 font-serif tracking-[0.15em] uppercase">
                    {current.location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Minimal Navigation */}
          <div className="flex items-center justify-between pt-8 border-t border-black/10">
            <div className="text-xs font-serif text-black/40 tracking-[0.2em] uppercase">
              {String(currentIndex + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 flex items-center justify-center text-black/40 hover:text-[#890100] transition-colors duration-300 group"
                aria-label="Previous testimonial"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 flex items-center justify-center text-black/40 hover:text-[#890100] transition-colors duration-300 group"
                aria-label="Next testimonial"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
