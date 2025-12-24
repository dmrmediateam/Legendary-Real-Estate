'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax effect - video moves slower than content
  const videoY = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section ref={sectionRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* YouTube Video Background with Parallax */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{ y: videoY }}
      >
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src="https://www.youtube.com/embed/w5PaL21Bhk0?autoplay=1&loop=1&playlist=w5PaL21Bhk0&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1&start=0"
            allow="autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-1/2 left-1/2 w-[177.77777778vh] h-[56.25vw] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 scale-[1.2] pointer-events-none"
            style={{ 
              minWidth: '100%',
              minHeight: '100%',
            }}
          />
        </div>
      </motion.div>
      
      {/* Elegant Red Overlay - Medieval luxury aesthetic */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-[1]"></div>
      <div className="absolute inset-0 bg-[#890100]/5 z-[1]"></div>

      {/* Decorative Border Elements - Medieval inspired */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#890100]/30 to-transparent z-[2]"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#890100]/30 to-transparent z-[2]"></div>
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#890100]/20 to-transparent z-[2]"></div>
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#890100]/20 to-transparent z-[2]"></div>

      {/* Content - Centered, Elegant, Sotheby's style */}
      <div className="relative z-10 text-center px-6 sm:px-12 lg:px-20 max-w-5xl mx-auto">
        {/* Elegant Divider Line Above */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          className="w-24 h-px bg-[#890100] mx-auto mb-12"
        />
        
        {/* Main Heading - Elegant Serif */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-normal text-white tracking-[0.05em] mb-6"
          style={{ letterSpacing: '0.05em' }}
        >
          Legendary
        </motion.h1>
        
        {/* Subtitle with Red Accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.7 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="w-12 h-px bg-[#890100]"></div>
          <span className="text-[#890100] font-serif text-2xl">•</span>
          <p className="text-white/80 font-serif text-sm lg:text-base tracking-[0.2em] uppercase" style={{ letterSpacing: '0.2em' }}>
            Real Estate Services
          </p>
          <span className="text-[#890100] font-serif text-2xl">•</span>
          <div className="w-12 h-px bg-[#890100]"></div>
        </motion.div>
        
        {/* Location - Elegant Typography */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.9 }}
          className="text-white/60 font-serif text-xs lg:text-sm tracking-[0.3em] uppercase mb-16"
          style={{ letterSpacing: '0.3em' }}
        >
          Lake Geneva, Wisconsin
        </motion.p>
        
        {/* Elegant Divider Line Below */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 1.1 }}
          className="w-24 h-px bg-[#890100] mx-auto"
        />
        
        {/* Scroll Indicator - Elegant */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/40 font-serif text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#890100]/60 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;