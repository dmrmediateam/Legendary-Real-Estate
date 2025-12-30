import Link from 'next/link';
import CommunityProperties from '@/components/CommunityProperties';

export const metadata = {
  title: 'Homes for Sale in Delavan, WI | Legendary Real Estate Services',
  description: 'Browse lakefront homes and real estate in Delavan, Wisconsin with Legendary Real Estate Services.',
};

export default function DelavanPage() {
  const marketStats = [
    { label: 'Median Home Price', value: '$385,000' },
    { label: 'Average Days on Market', value: '50 days' },
    { label: 'Properties Available', value: '70+' },
    { label: 'Average Price/SqFt', value: '$215' },
  ];

  const communityFeatures = [
    {
      title: 'Delavan Lake',
      description: 'Stunning 2,072-acre lake offering premier boating, fishing, swimming, and water sports in a picturesque setting.',
      icon: '🌊'
    },
    {
      title: 'Entertainment Hub',
      description: 'Home to Dancing Horses Theatre, Lake Lawn Resort, and numerous festivals including the popular Delavan Fall Fest.',
      icon: '🎪'
    },
    {
      title: 'Historic Legacy',
      description: 'Rich circus history with P.T. Barnum connections, preserved in the Delavan Historical Society and historic architecture.',
      icon: '🎭'
    },
    {
      title: 'Year-Round Activities',
      description: 'Parks, beaches, golf courses, shopping districts, and winter activities make Delavan a four-season destination.',
      icon: '⛳'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="w-24 h-px bg-[#890100] mx-auto mb-12"></div>
          <h1 className="scroll-animate text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-black mb-6 text-center tracking-[0.05em]">
            Delavan, Wisconsin
            <span className="block text-2xl sm:text-3xl text-[#890100] mt-4 tracking-[0.02em]">Lakefront Living & Historic Charm</span>
          </h1>
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-12 h-px bg-[#890100]"></div>
            <span className="text-[#890100] font-serif text-2xl">•</span>
            <div className="w-12 h-px bg-[#890100]"></div>
          </div>
          <div className="scroll-animate max-w-4xl mx-auto">
            <p className="text-sm text-black/70 leading-relaxed mb-6 font-serif text-center" style={{ letterSpacing: '0.02em' }}>
              Delavan, Wisconsin is a vibrant lakeside community renowned for its beautiful Delavan Lake, rich circus heritage, and year-round entertainment. This charming city offers an ideal blend of lakefront luxury, historic character, and modern amenities, making it a sought-after destination for both residents and visitors.
            </p>
            <p className="text-sm text-black/70 leading-relaxed mb-6 font-serif text-center" style={{ letterSpacing: '0.02em' }}>
              From stunning lakefront estates to cozy homes near the historic downtown, Delavan's real estate market caters to diverse lifestyles. Enjoy water activities on Delavan Lake, attend performances at the Dancing Horses Theatre, explore local history, or relax at the renowned Lake Lawn Resort. With excellent schools and a strong sense of community, Delavan is an exceptional place to call home.
            </p>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-white mb-12 text-center tracking-[0.05em]">
            Delavan Market Overview
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {marketStats.map((stat, index) => (
              <div key={index} className="text-center scroll-animate">
                <div className="text-3xl font-serif text-[#890100] mb-2">{stat.value}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/70 font-serif">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="w-24 h-px bg-[#890100] mx-auto mb-12"></div>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-black mb-16 text-center tracking-[0.05em]">
            Why Delavan?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {communityFeatures.map((feature, index) => (
              <div key={index} className="scroll-animate">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-serif text-black mb-3 tracking-[0.02em]">{feature.title}</h3>
                <p className="text-sm text-black/70 leading-relaxed font-serif" style={{ letterSpacing: '0.02em' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="w-24 h-px bg-[#890100] mx-auto mb-12"></div>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-black mb-4 text-center tracking-[0.05em]">
            Delavan Homes for Sale
          </h2>
          <p className="text-sm text-black/70 mb-12 text-center max-w-2xl mx-auto font-serif" style={{ letterSpacing: '0.02em' }}>
            Discover lakefront estates and historic homes in Delavan, Wisconsin.
          </p>
          <CommunityProperties cityId={6} cityName="Delavan" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="w-24 h-px bg-[#890100] mx-auto mb-12"></div>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-white mb-8 tracking-[0.05em]">
            Ready to Find Your Delavan Home?
          </h2>
          <p className="text-sm text-white/70 mb-12 font-serif" style={{ letterSpacing: '0.02em' }}>
            Let our local experts guide you through the Delavan real estate market.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#890100] text-white px-12 py-4 hover:bg-[#a30100] transition-all duration-300 text-xs font-serif tracking-[0.2em] uppercase"
          >
            Contact Us Today
          </Link>
          <div className="w-24 h-px bg-[#890100] mx-auto mt-12"></div>
        </div>
      </section>
    </div>
  );
}
