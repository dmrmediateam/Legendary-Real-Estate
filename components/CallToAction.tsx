import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-black">
      {/* TODO: Replace with actual background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/mr2.webp)'
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-[#890100]/5"></div>
      </div>

      {/* Decorative Borders */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#890100]/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#890100]/30 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center text-white">
        <div className="w-24 h-px bg-[#890100] mx-auto mb-12"></div>
        
        <h2 className="scroll-animate text-4xl sm:text-5xl lg:text-6xl font-serif font-normal mb-8 text-white tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
          Ready to Find Your Dream Home?
        </h2>
        
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-px bg-[#890100]"></div>
          <span className="text-[#890100] font-serif text-2xl">•</span>
          <div className="w-12 h-px bg-[#890100]"></div>
        </div>
        
        <p className="scroll-animate text-sm sm:text-base mb-16 max-w-3xl mx-auto leading-relaxed font-serif text-white/80" style={{ letterSpacing: '0.02em' }}>
          Let Legendary Real Estate Services guide you through Lake Geneva's premier real estate market with expertise, dedication, and personalized service
        </p>

        {/* CTA Buttons */}
        <div className="scroll-animate flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Link 
            href="/listings" 
            className="inline-block border border-[#890100] bg-[#890100] text-white hover:bg-transparent hover:text-[#890100] px-8 py-3 font-serif text-xs tracking-[0.2em] uppercase transition-all duration-500"
          >
            View Listings
          </Link>
          <Link 
            href="/contact" 
            className="inline-block border border-white text-white hover:bg-white hover:text-black px-8 py-3 font-serif text-xs tracking-[0.2em] uppercase transition-all duration-500"
          >
            Contact Us
          </Link>
        </div>
        
        <div className="w-24 h-px bg-[#890100] mx-auto"></div>
      </div>
    </section>
  );
};

export default CallToAction;

