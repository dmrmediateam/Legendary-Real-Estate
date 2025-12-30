'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const CompanyInfo = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const areas = [
    'Abbey Springs WI', 'Burlington WI', 'Cedar Point Park WI', 'Country Club Estates WI',
    'Delavan WI', 'East Troy WI', 'Elkhorn WI', 'Fontana WI', 'Geneva National WI',
    'Genoa City WI', 'Lake Geneva WI', 'Lyons WI', 'North Shore Estates WI',
    'Powers Lake WI', 'Powers WI', 'Salem WI', 'Silver Lake WI', 'Twin Lakes WI',
    'Walworth WI', 'Whitewater WI', 'Williams Bay WI'
  ];

  const propertyLinks = [
    'Lake Geneva WI Condos',
    'Lake Geneva WI Waterfront',
    'Lake Geneva WI Waterfront Condos',
    'Waterfront for Sale in Burlington, WI',
    'Townhomes for Sale in Burlington, WI',
    'Duplexes for Sale in Burlington, WI',
    'Condos for Sale in Burlington, WI',
    'Townhomes for Sale in Elkhorn WI',
    'Duplexes for Sale in Elkhorn WI',
    'Waterfront Properties for Sale in Elkhorn WI',
    'Condos for Sale in Elkhorn WI',
    'Condos for Sale in Geneva National, WI',
    'Townhomes for Sale in Geneva National, WI',
    'Waterfront Properties for Sale in Geneva National, WI',
    'Duplexes for Sale in Geneva National, WI',
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="w-24 h-px bg-[#890100] mx-auto mb-12"></div>
          <h2 className="font-['PT_Serif'] text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-6">
            Fewer Hands. Higher Standards. Fiercely Committed.
          </h2>
          <div className="w-24 h-px bg-[#890100] mx-auto mt-12"></div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Left Column - Company Description */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <Link
              href="/contact"
              className="inline-block px-8 py-3 border-2 border-[#890100] text-[#890100] hover:bg-[#890100] hover:text-white transition-all duration-300 text-lg font-medium mb-8"
            >
              Contact Us
            </Link>

            <p className="text-lg text-gray-700 leading-relaxed">
              At Legendary, we strive to be the Ritz-Carlton of real estate — relentlessly pursuing new ways to deliver a level of personalized, anticipatory service that elevates every experience for our clients and agents alike.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              We take deep pride in the integrity and quality of our work.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Our clients benefit from upscale service, clear communication, flawless execution, and an experience that feels seamless from start to finish.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              By offering comprehensive, high-touch real estate services to buyers, sellers, and investors across the Geneva Lakes area, we help you make confident, well-informed decisions about one of the most important investments of your life.
            </p>
          </motion.div>

          {/* Right Column - Areas */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-['PT_Serif'] text-2xl text-[#1a1a1a] mb-6">
              Explore the Areas We Proudly Represent
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {areas.map((area, index) => (
                <Link
                  key={index}
                  href={`/properties/${area.toLowerCase().replace(/ /g, '-')}`}
                  className="text-gray-700 hover:text-[#890100] transition-colors duration-300 text-sm"
                >
                  {area}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Property Type Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-[#890100]/20 pt-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {propertyLinks.map((link, index) => (
              <Link
                key={index}
                href={`/properties/${link.toLowerCase().replace(/ /g, '-').replace(/,/g, '')}`}
                className="text-gray-700 hover:text-[#890100] transition-colors duration-300 text-sm"
              >
                {link}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center space-y-4"
        >
          <div className="text-lg font-semibold text-[#1a1a1a]">
            487 W SOUTH ST<br />
            LAKE GENEVA, WI 53147
          </div>
          <div>
            <a href="tel:262-204-5534" className="text-2xl font-bold text-[#890100] hover:text-[#a00100] transition-colors duration-300">
              262-204-5534
            </a>
          </div>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Should you require assistance in navigating our website or searching for real estate, please contact our offices at 262-204-5534.
          </p>
          <p className="text-sm text-gray-500">
            Each office independently owned and operated.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyInfo;
