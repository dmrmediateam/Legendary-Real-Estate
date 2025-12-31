import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us - Legendary Real Estate Services',
  description: 'Boutique by Design. Legendary by Result. Real estate isn\'t about closing deals — it\'s about opening new chapters. We guide people through life\'s most meaningful transitions with precision, discretion, and clarity.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-white border-b border-black/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="w-16 h-px bg-[#890100] mx-auto mb-8"></div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-black mb-6 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
            About Us
          </h1>
          <p className="text-lg sm:text-xl text-black/70 font-serif max-w-3xl mx-auto leading-relaxed" style={{ letterSpacing: '0.02em' }}>
            Real estate isn't about closing deals — it's about opening new chapters.
          </p>
          <div className="w-16 h-px bg-[#890100] mx-auto mt-8"></div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://www.youtube.com/embed/YN_mKP4b3WA"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full border border-black/10"
              title="Legendary Real Estate Services - About Us"
            />
          </div>
        </div>
      </section>

      {/* Opening Statement */}
      <section className="py-20 bg-white border-b border-black/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-xl sm:text-2xl font-serif font-normal text-black leading-relaxed mb-6" style={{ letterSpacing: '0.02em' }}>
              We guide people through some of life's most meaningful transitions with precision, discretion, and clarity. Our clients don't just feel helped. They feel seen, heard, and fiercely protected.
            </p>
            <p className="text-lg text-black/70 font-serif leading-relaxed" style={{ letterSpacing: '0.02em' }}>
              All while getting the best price, having the smoothest transaction, and in the least amount of time.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <div className="w-16 h-px bg-[#890100] mb-6"></div>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-black mb-6 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
              Who We Are
            </h2>
            <p className="text-2xl sm:text-3xl font-serif font-normal text-[#890100] mb-8 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
              Boutique by Design. Legendary by Result.
            </p>
          </div>
          
          <div className="space-y-6 text-black/80 font-serif leading-relaxed" style={{ letterSpacing: '0.02em' }}>
            <p className="text-lg">
              We intentionally stay lean — Our size is our strength. We insist on excellence without compromise. Nor do we shy away from complex negotiations, emotional crossroads, or tangled financing.
            </p>
            <p className="text-lg">
              We lead with calm assertiveness, guiding our clients through what may be one of the biggest financial — and personal — decisions of their lives.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <div className="w-16 h-px bg-[#890100] mb-6"></div>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal mb-6 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
              What We Do
            </h2>
            <p className="text-2xl sm:text-3xl font-serif font-normal text-[#890100] mb-8 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
              We Don't Sell Homes. We Secure Legacies.
            </p>
          </div>
          
          <div className="space-y-6 text-white/90 font-serif leading-relaxed" style={{ letterSpacing: '0.02em' }}>
            <p className="text-lg">
              To us, every transaction is a turning point — an inheritance passed on, a fresh start, a life reimagined. We choreograph those moments with care, strategy, and soul. Because homes aren't just assets. They're anchors, fresh starts, and final chapters — and we treat them that way.
            </p>
            <p className="text-lg">
              We don't push properties, we position them. We're not in the "showing houses" business; we're in the equity protection and wealth-building business.
            </p>
          </div>
        </div>
      </section>

      {/* HOW WE OPERATE */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <div className="w-16 h-px bg-[#890100] mb-6"></div>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-black mb-6 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
              How We Operate
            </h2>
            <p className="text-2xl sm:text-3xl font-serif font-normal text-[#890100] mb-8 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
              Radical Transparency. Relentless Advocacy. White-Glove Without White Noise.
            </p>
          </div>
          
          <div className="space-y-6 text-black/80 font-serif leading-relaxed" style={{ letterSpacing: '0.02em' }}>
            <p className="text-lg">
              We're not afraid of hard conversations — we lead them. Meaning we don't tell clients what they want to hear. We tell them what they need to know — with honesty, empathy, and fierce loyalty. Because prestige isn't polite silence — it's courage with class.
            </p>
            <p className="text-lg">
              We deliver concierge-level service that's high-touch, streamlined, and purposeful. Everything you need, nothing you don't. That's how we earn trust — and keep it.
            </p>
          </div>
        </div>
      </section>

      {/* WHERE AND WHY WE SERVE */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <div className="w-16 h-px bg-[#890100] mb-6"></div>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal mb-6 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
              Where and Why We Serve
            </h2>
            <p className="text-2xl sm:text-3xl font-serif font-normal text-[#890100] mb-8 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
              Rooted in Lake Life. Not Just Lake Listings.
            </p>
          </div>
          
          <div className="space-y-6 text-white/90 font-serif leading-relaxed" style={{ letterSpacing: '0.02em' }}>
            <p className="text-lg">
              We don't just market Lake Geneva — we live it, breathe it, and protect it. This is our home, our history, and our legacy too. From neighborhood revitalization to civic leadership, we're not just selling a lifestyle — we're helping preserve what makes living in Lake Geneva so extraordinary.
            </p>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 bg-white border-t border-black/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="w-16 h-px bg-[#890100] mx-auto mb-8"></div>
          <p className="text-2xl sm:text-3xl font-serif font-normal text-black mb-6 leading-relaxed" style={{ letterSpacing: '0.05em' }}>
            This is Real Estate, Reimagined.
          </p>
          <p className="text-xl text-black/70 font-serif mb-8 leading-relaxed" style={{ letterSpacing: '0.02em' }}>
            Not louder. Not flashier. Just smarter, sharper, and more deeply human.
          </p>
          <p className="text-2xl sm:text-3xl font-serif font-normal text-[#890100] mb-12 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
            Let's make your next move… Legendary.
          </p>
          <div className="w-16 h-px bg-[#890100] mx-auto"></div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white border-t border-black/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="border border-[#890100] text-[#890100] hover:bg-[#890100] hover:text-white px-8 py-3 font-serif text-xs tracking-[0.2em] uppercase transition-all duration-300"
              style={{ letterSpacing: '0.2em' }}
            >
              Get In Touch
            </Link>
            <Link
              href="/seller-value"
              className="border border-black text-black hover:bg-black hover:text-white px-8 py-3 font-serif text-xs tracking-[0.2em] uppercase transition-all duration-300"
              style={{ letterSpacing: '0.2em' }}
            >
              What's My Home Worth?
            </Link>
            <Link
              href="/our-listings"
              className="border border-black text-black hover:bg-black hover:text-white px-8 py-3 font-serif text-xs tracking-[0.2em] uppercase transition-all duration-300"
              style={{ letterSpacing: '0.2em' }}
            >
              View Listings
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
