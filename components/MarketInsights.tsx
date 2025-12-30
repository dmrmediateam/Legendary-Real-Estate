'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const insights = [
  {
    id: 1,
    title: '2025 Lake Geneva Real Estate: A Year of Plot Twists, Price Psychology, and Wait, Did We Have a Bidding War in November?!',
    date: 'December 15, 2025',
    comments: 'No Comments',
    category: 'UNCATEGORIZED',
    slug: '2025-lake-geneva-real-estate',
  },
  {
    id: 2,
    title: 'Lake Geneva Real Estate Trends Shaping the 2026 Market for Homeowners',
    date: 'December 12, 2025',
    comments: 'No Comments',
    category: 'GUIDE',
    slug: 'lake-geneva-real-estate-trends-2026',
  },
  {
    id: 3,
    title: 'Exploring Lake Geneva Waterfront Wonders 2026',
    date: 'December 3, 2025',
    comments: 'No Comments',
    category: 'UNCATEGORIZED',
    slug: 'exploring-lake-geneva-waterfront-wonders-2026',
  },
  {
    id: 4,
    title: 'Lake Geneva Best Family Neighborhoods in 2026: Where to Raise Kids on the Lake',
    date: 'November 24, 2025',
    comments: 'No Comments',
    category: 'AREAS',
    slug: 'lake-geneva-best-family-neighborhoods-2026',
  },
  {
    id: 5,
    title: 'Parade of Trees and Winter Actives in Lake Geneva 2025',
    date: 'November 24, 2025',
    comments: 'No Comments',
    category: 'GUIDE',
    slug: 'parade-of-trees-winter-actives-lake-geneva-2025',
  },
  {
    id: 6,
    title: 'Q4 2025 Lake Geneva Real Estate Market Update',
    date: 'November 14, 2025',
    comments: 'No Comments',
    category: 'UNCATEGORIZED',
    slug: 'q4-2025-lake-geneva-real-estate-market-update',
  },
];

const MarketInsights = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="py-32 bg-white">
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
            Lake Geneva Real Estate Insights. Curated for You.
          </h2>
          <div className="w-24 h-px bg-[#890100] mx-auto mt-12"></div>
        </motion.div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {insights.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link 
                href={`/blog/${post.slug}`}
                className="group block bg-white border border-[#890100]/20 hover:border-[#890100] transition-all duration-300 h-full"
              >
                <div className="p-8">
                  {/* Category Badge */}
                  <div className="inline-block bg-[#890100] text-white px-3 py-1 text-xs uppercase tracking-wider mb-4">
                    {post.category}
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-['PT_Serif'] text-xl text-[#1a1a1a] mb-4 group-hover:text-[#890100] transition-colors duration-300 line-clamp-3">
                    {post.title}
                  </h3>
                  
                  {/* Read More Link */}
                  <div className="flex items-center text-[#890100] text-sm font-medium group-hover:translate-x-2 transition-transform duration-300 mb-4">
                    <span className="mr-2">READ MORE</span>
                    <span>»</span>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-3 text-sm text-gray-600 pt-4 border-t border-[#890100]/20">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.comments}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketInsights;
