'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Jeanette Payne',
    text: 'The realtors from this company were able to quickly get my home on the market and sold fast. I also admired the professionalism of the individuals involved.',
  },
  {
    id: 2,
    name: 'Rachel DePorter',
    text: 'Chris Devincentis was absolutely wonderful to work with. He was very responsive to answer all our questions. If you are looking for a great Realtor, he is your guy!!',
  },
  {
    id: 3,
    name: 'Terry Shields Heintz',
    text: 'We had such a fantastic experience buying a home in another state all because of Chris and his team. He has so much expertise about the area, we felt confident that he would make the process a smooth one. And he came through with great results!',
  },
  {
    id: 4,
    name: 'Marsha McClary',
    text: 'Agent Chris Devincentis and team were outstanding in a recent transaction. Great communication, responsiveness and enjoyed the time savings of an efficient and automated process.',
  },
  {
    id: 5,
    name: 'I F',
    text: 'Working with Jade was a pleasure. She made the buying process easy and fun. Appreciate her patience, prompt responses and a wealth of knowledge.',
  },
  {
    id: 6,
    name: 'Chad Donahue',
    text: 'Chris Devincentis is a very seasoned real estate professional. His experience and expertise were invaluable in navigating our way through our most recent purchase. His professionalism and dedication were apparent throughout the process. He is a remarkable guy!',
  },
  {
    id: 7,
    name: 'Christi Hunter',
    text: 'Grateful to Jade and the team for their assistance and attention on our recent purchase of property. I don\'t know that we could have done it without their experience and expertise. We are grateful buyers!',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState<number>(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleTestimonials(1);
      } else if (window.innerWidth < 1024) {
        setVisibleTestimonials(2);
      } else {
        setVisibleTestimonials(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < visibleTestimonials; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section className="py-32 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="w-24 h-px bg-[#890100] mx-auto mb-12"></div>
          <h2 className="font-['PT_Serif'] text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-6 leading-tight">
            The Right Agent Helps You Navigate Life's Turning Points with Clarity and Care.
          </h2>
          <div className="w-24 h-px bg-[#890100] mx-auto mt-12"></div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className={`grid grid-cols-1 ${visibleTestimonials >= 2 ? 'md:grid-cols-2' : ''} ${visibleTestimonials >= 3 ? 'lg:grid-cols-3' : ''} gap-8`}>
            <AnimatePresence mode="wait">
              {getVisibleTestimonials().map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${currentIndex}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 border border-[#890100]/20 hover:border-[#890100] transition-all duration-300"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-[#890100]"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {testimonial.text}
                  </p>

                  {/* Name */}
                  <div className="border-t border-[#890100]/20 pt-4">
                    <p className="font-semibold text-[#1a1a1a]">{testimonial.name}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-[#890100] w-8' : 'bg-[#890100]/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
