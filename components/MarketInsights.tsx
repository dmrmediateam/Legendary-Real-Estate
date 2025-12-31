'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { BlogPost } from '@/data/blogPosts';

interface MarketInsightsProps {
  posts: BlogPost[];
}

const MarketInsights = ({ posts }: MarketInsightsProps) => {
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
          {posts.slice(0, 6).map((post, index) => {
            const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });

            return (
              <motion.div
                key={post._id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link 
                  href={`/${post.category}/${post.slug.current}`}
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
                      <span>{formattedDate}</span>
                      <span>•</span>
                      <span>No Comments</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Link
            href="/blog"
            className="inline-block border border-[#890100] text-[#890100] px-8 py-3 font-serif text-xs tracking-[0.1em] uppercase transition-all duration-300 hover:bg-[#890100] hover:text-white"
          >
            View All Insights
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketInsights;
