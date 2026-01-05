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
      image: 'https://cdn.pixabay.com/photo/2021/10/30/13/29/geneva-6754350_1280.jpg'
    },
    { 
      name: 'Fontana', 
      slug: 'fontana',
      image: 'https://cdn.pixabay.com/photo/2023/09/10/12/01/geneva-8244753_1280.jpg'
    },
    { 
      name: 'Salem', 
      slug: 'salem',
      image: 'https://cdn.pixabay.com/photo/2022/01/29/16/20/geneva-6977937_1280.jpg'
    },
    { 
      name: 'Burlington', 
      slug: 'burlington',
      image: 'https://cdn.pixabay.com/photo/2015/08/18/17/26/vermont-894582_1280.jpg'
    },
    { 
      name: 'Elkhorn', 
      slug: 'elkhorn',
      image: 'https://cdn.pixabay.com/photo/2021/11/02/11/34/lavaux-6763006_1280.jpg'
    },
    { 
      name: 'Delavan', 
      slug: 'delavan',
      image: 'https://cdn.pixabay.com/photo/2019/01/06/22/33/lake-3918137_1280.jpg'
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-black mb-8 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
            Communities We Know by Heart
          </h2>
          <div className="w-24 h-px bg-[#890100] mx-auto"></div>
        </motion.div>

        {/* Communities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
              className="relative"
              >
                <Link
                  href={`/communities/${area.slug}`}
                className="block relative h-64 md:h-80 overflow-hidden group"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${area.image})` }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500"></div>
                </div>
                
                {/* Content */}
                <div className="relative h-full flex items-center justify-center p-8">
                  <h4 className="text-2xl md:text-3xl font-serif font-normal text-white text-center">
                    Explore<br />
                    <strong>{area.name}</strong>
                    </h4>
                  </div>
                </Link>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Communities;

