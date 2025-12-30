'use client';

const AboutStats = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* About Section */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          {/* Elegant Divider Line */}
          <div className="w-24 h-px bg-[#890100] mx-auto mb-12"></div>
          
          <h2 className="scroll-animate text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-black mb-8 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
            Boutique by Design.<br />Legendary by Result.
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-12 h-px bg-[#890100]"></div>
            <span className="text-[#890100] font-serif text-2xl">•</span>
            <div className="w-12 h-px bg-[#890100]"></div>
          </div>
          
          <p className="scroll-animate text-sm text-black/70 leading-relaxed mt-8 font-serif" style={{ letterSpacing: '0.02em' }}>
            At Legendary Real Estate Services, real estate isn't about closing deals — it's about opening new chapters. We guide people through some of life's most meaningful transitions with precision, discretion, and clarity. Our clients don't just feel helped. They feel seen, heard, and fiercely protected. All while getting the best price, having the smoothest transaction, and in the least amount of time.
          </p>
          <p className="scroll-animate text-sm text-black/70 leading-relaxed mt-6 font-serif" style={{ letterSpacing: '0.02em' }}>
            For Sellers — We don't just list homes, we strategically position. For Buyers — We don't show homes, we secure legacies.
          </p>
          
          {/* Elegant Divider Line */}
          <div className="w-24 h-px bg-[#890100] mx-auto mt-12"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto mb-16">
          <div className="scroll-animate text-center">
            <div className="text-5xl font-serif font-normal text-[#890100] mb-4 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
              Fewer Hands
            </div>
            <div className="text-xs uppercase tracking-[0.2em] text-black/60 font-serif">
              HIGHER STANDARDS
            </div>
          </div>
          <div className="scroll-animate text-center">
            <div className="text-5xl font-serif font-normal text-[#890100] mb-4 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
              Fiercely
            </div>
            <div className="text-xs uppercase tracking-[0.2em] text-black/60 font-serif">
              COMMITTED
            </div>
          </div>
          <div className="scroll-animate text-center">
            <div className="text-5xl font-serif font-normal text-[#890100] mb-4 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
              Upscale
            </div>
            <div className="text-xs uppercase tracking-[0.2em] text-black/60 font-serif">
              SERVICE
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="scroll-animate text-center">
          <a 
            href="#team" 
            className="inline-block text-black/70 hover:text-[#890100] transition-colors duration-300 border-b border-[#890100] pb-1 text-xs font-serif tracking-[0.2em] uppercase"
          >
            Learn More About Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;

