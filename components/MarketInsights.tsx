import Link from 'next/link';
import { getAllBlogPosts } from '@/data/blogPosts';

const MarketInsights = async () => {
  // Fetch latest 4 blog posts from Sanity
  const allPosts = await getAllBlogPosts();
  const insights = allPosts.slice(0, 4);

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="w-24 h-px bg-[#890100] mx-auto mb-12"></div>
          <h2 className="scroll-animate text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-black mb-8 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
            Lake Geneva Real Estate Insights.<br />Curated for You.
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-[#890100]"></div>
            <span className="text-[#890100] font-serif text-2xl">•</span>
            <div className="w-12 h-px bg-[#890100]"></div>
          </div>
          <p className="scroll-animate text-sm text-black/70 max-w-3xl mx-auto font-serif" style={{ letterSpacing: '0.02em' }}>
            Informed perspectives and essential resources for navigating Lake Geneva and the Geneva Lakes area real estate landscape.
          </p>
          <div className="w-24 h-px bg-[#890100] mx-auto mt-12"></div>
        </div>

        {/* Insights Grid */}
        {insights.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {insights.map((post) => (
              <Link 
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="scroll-animate group bg-white border border-black/10 overflow-hidden hover:border-[#890100] transition-all duration-500"
              >
                <div className="relative h-48 bg-gray-light overflow-hidden">
                  <img 
                    src={post.mainImage.asset.url} 
                    alt={post.mainImage.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#890100] text-white px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-serif">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-base font-serif font-normal text-black mb-3 group-hover:text-[#890100] transition-colors duration-300 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                    {post.title}
                  </h3>
                  <p className="text-black/60 text-xs leading-relaxed mb-4 font-serif" style={{ letterSpacing: '0.02em' }}>
                    {post.description}
                  </p>
                  <div className="flex items-center text-[#890100] text-xs font-serif tracking-[0.1em] uppercase group-hover:translate-x-2 transition-transform duration-300">
                    <span className="mr-2">Read More</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-dark text-lg">
              Blog posts coming soon. Check back for market insights and real estate resources.
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="scroll-animate text-center mt-16">
          <Link 
            href="/blog" 
            className="inline-block border border-[#890100] text-[#890100] hover:bg-[#890100] hover:text-white px-8 py-3 font-serif text-xs tracking-[0.2em] uppercase transition-all duration-500"
          >
            View All Insights
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MarketInsights;

