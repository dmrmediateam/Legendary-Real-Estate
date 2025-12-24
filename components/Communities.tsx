'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Communities = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const serviceAreas = [
    { 
      name: 'Lake Geneva', 
      slug: 'lake-geneva',
      description: 'The heart of the Geneva Lakes area - premier waterfront properties, luxury estates, and charming downtown living' 
    },
    { 
      name: 'Fontana', 
      slug: 'fontana',
      description: 'Exclusive lakeside community with stunning waterfront homes and resort-style amenities' 
    },
    { 
      name: 'Salem', 
      slug: 'salem',
      description: 'Scenic community offering beautiful homes with easy access to Lake Geneva and surrounding areas' 
    },
    { 
      name: 'Burlington', 
      slug: 'burlington',
      description: 'Charming community with diverse property options from historic homes to modern developments' 
    },
    { 
      name: 'Elkhorn', 
      slug: 'elkhorn',
      description: 'Family-friendly community with excellent schools and a variety of residential options' 
    },
    { 
      name: 'Delavan', 
      slug: 'delavan',
      description: 'Historic lakeside community with beautiful properties and rich heritage' 
    },
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-24"
        >
          <div className="w-24 h-px bg-[#890100] mx-auto mb-12"></div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-black mb-8 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
            Communities We Know by Heart
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-[#890100]"></div>
            <span className="text-[#890100] font-serif text-2xl">•</span>
            <div className="w-12 h-px bg-[#890100]"></div>
          </div>
          <p className="text-sm text-black/70 max-w-3xl mx-auto font-serif" style={{ letterSpacing: '0.02em' }}>
            Explore exceptional properties across the Geneva Lakes area and surrounding communities
          </p>
          <div className="w-24 h-px bg-[#890100] mx-auto mt-12"></div>
        </motion.div>

        {/* Service Areas Content */}
        <div className="max-w-5xl mx-auto">
          {/* Service Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
              >
                <Link
                  href={`/communities/${area.slug}`}
                  className="block bg-white p-8 border border-black/10 hover:border-[#890100] transition-all duration-500 group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-0 h-px bg-[#890100] transition-all duration-500 group-hover:w-full"></div>
                  
                  <div className="relative z-10">
                    <h4 className="text-xl font-serif font-normal text-black mb-4 group-hover:text-[#890100] transition-colors duration-500 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                      {area.name}
                    </h4>
                    <p className="text-black/60 text-xs leading-relaxed font-serif mb-6" style={{ letterSpacing: '0.02em' }}>
                      {area.description}
                    </p>
                    <div className="text-[#890100] text-xs flex items-center group-hover:translate-x-2 transition-transform duration-500 font-serif tracking-[0.1em] uppercase">
                      View Properties
                      <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-500">→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.7 }}
            className="text-center"
          >
            <Link 
              href="/listings" 
              className="inline-flex items-center text-black/70 hover:text-[#890100] transition-all duration-300 border-b border-[#890100] pb-1 text-xs font-serif tracking-[0.2em] uppercase"
            >
              View Properties
              <span className="ml-2">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Communities;

