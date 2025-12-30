import Link from 'next/link';
import CommunityProperties from '@/components/CommunityProperties';

export const metadata = {
  title: 'Homes for Sale in Burlington, WI | Legendary Real Estate Services',
  description: 'Browse homes and real estate in Burlington, Wisconsin - Chocolate City USA - with Legendary Real Estate Services.',
};

export default function BurlingtonPage() {
  const marketStats = [
    { label: 'Median Home Price', value: '$315,000' },
    { label: 'Average Days on Market', value: '42 days' },
    { label: 'Properties Available', value: '65+' },
    { label: 'Average Price/SqFt', value: '$175' },
  ];

  const communityFeatures = [
    {
      title: 'Chocolate City USA',
      description: 'Home to Nestle chocolate factory and the annual ChocolateFest, celebrating Burlington\'s sweet heritage with thousands of visitors.',
      icon: '🍫'
    },
    {
      title: 'Historic Downtown',
      description: 'Charming downtown district with local shops, restaurants, boutiques, and beautiful historic architecture along the Fox River.',
      icon: '🏘️'
    },
    {
      title: 'Quality Schools',
      description: 'Burlington Area School District offers excellent education with modern facilities and strong community support.',
      icon: '🎓'
    },
    {
      title: 'Recreation & Nature',
      description: 'Echo Park, Browns Lake, and numerous trails provide year-round outdoor activities and natural beauty.',
      icon: '🌳'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="w-24 h-px bg-[#890100] mx-auto mb-12"></div>
          <h1 className="scroll-animate text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-black mb-6 text-center tracking-[0.05em]">
            Burlington, Wisconsin
            <span className="block text-2xl sm:text-3xl text-[#890100] mt-4 tracking-[0.02em]">Chocolate City Living & Family Homes</span>
          </h1>
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-12 h-px bg-[#890100]"></div>
            <span className="text-[#890100] font-serif text-2xl">•</span>
            <div className="w-12 h-px bg-[#890100]"></div>
          </div>
          <div className="scroll-animate max-w-4xl mx-auto">
            <p className="text-sm text-black/70 leading-relaxed mb-6 font-serif text-center" style={{ letterSpacing: '0.02em' }}>
              Burlington, Wisconsin, famously known as "Chocolate City USA," is a thriving community that perfectly balances small-town charm with modern amenities. Home to the Nestle chocolate factory and the beloved annual ChocolateFest, Burlington offers residents a unique character and strong sense of community pride.
            </p>
            <p className="text-sm text-black/70 leading-relaxed mb-6 font-serif text-center" style={{ letterSpacing: '0.02em' }}>
              From historic homes in the downtown district to new construction in family-friendly neighborhoods, Burlington's real estate market caters to diverse needs. With excellent schools, parks, the scenic Fox River, and easy access to both Milwaukee and Chicago, Burlington is an ideal place to call home.
            </p>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-white mb-12 text-center tracking-[0.05em]">
            Burlington Market Overview
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
            Why Burlington?
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
            Burlington Homes for Sale
          </h2>
          <p className="text-sm text-black/70 mb-12 text-center max-w-2xl mx-auto font-serif" style={{ letterSpacing: '0.02em' }}>
            Discover family homes and historic properties in Burlington, Wisconsin.
          </p>
          <CommunityProperties cityId={4} cityName="Burlington" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="w-24 h-px bg-[#890100] mx-auto mb-12"></div>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-white mb-8 tracking-[0.05em]">
            Ready to Find Your Burlington Home?
          </h2>
          <p className="text-sm text-white/70 mb-12 font-serif" style={{ letterSpacing: '0.02em' }}>
            Let our local experts guide you through the Burlington real estate market.
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
