'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const MeetAgent = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const imageInView = useInView(imageRef, { once: true, amount: 0.3 });
  const textInView = useInView(textRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} className="py-32 bg-white" id="team">
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
            Fewer Hands.<br />Higher Standards.<br />Fiercely Committed.
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-[#890100]"></div>
            <span className="text-[#890100] font-serif text-2xl">•</span>
            <div className="w-12 h-px bg-[#890100]"></div>
          </div>
          <p className="text-sm text-black/70 max-w-3xl mx-auto font-serif" style={{ letterSpacing: '0.02em' }}>
            At Legendary, we strive to be the Ritz-Carlton of real estate — relentlessly pursuing new ways to deliver a level of personalized, anticipatory service that elevates every experience for our clients and agents alike.
          </p>
          <div className="w-24 h-px bg-[#890100] mx-auto mt-12"></div>
        </motion.div>

        {/* Agent Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Agent Image */}
          <motion.div 
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.9, x: -50 }}
            animate={imageInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.9, x: -50 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-2 lg:order-1 relative overflow-hidden shadow-lg group"
          >
            {/* Red Accent Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#890100]/5 to-transparent z-10 pointer-events-none"></div>
            
            <img 
              src="/images/def38a13-de35-4224-a8f5-300b226cbf14-e1734646855779 (3).png" 
              alt="Legendary Real Estate Services Team" 
              className="w-full h-auto aspect-square object-cover object-center scale-[1.05] transition-transform duration-700 group-hover:scale-[1.1]"
            />
          </motion.div>

          {/* Agent Info */}
          <motion.div 
            ref={textRef}
            initial={{ opacity: 0, x: 50 }}
            animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
              className="text-3xl font-serif font-normal text-black mb-6 tracking-[0.05em]"
              style={{ letterSpacing: '0.05em' }}
            >
              Legendary Real Estate Services
            </motion.h3>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-px bg-[#890100]"></div>
              <span className="text-[#890100] font-serif text-sm tracking-[0.2em] uppercase">Your Lake Geneva WI Real Estate Team</span>
              <div className="w-12 h-px bg-[#890100]"></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
              className="text-black/70 leading-relaxed space-y-6 mb-10 text-sm font-serif"
              style={{ letterSpacing: '0.02em' }}
            >
              <p>
                We take deep pride in the integrity and quality of our work. Our clients benefit from upscale service, clear communication, flawless execution, and an experience that feels seamless from start to finish.
              </p>
              <p>
                By offering comprehensive, high-touch real estate services to buyers, sellers, and investors across the Geneva Lakes area, we help you make confident, well-informed decisions about one of the most important investments of your life.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
            >
              <Link 
                href="/about" 
                className="text-black/70 hover:text-[#890100] transition-colors duration-300 border-b border-[#890100] pb-1 text-xs font-serif tracking-[0.2em] uppercase inline-block"
              >
                Learn More About Our Team
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MeetAgent;

