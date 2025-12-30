import Link from 'next/link';
import CommunityProperties from '@/components/CommunityProperties';

export const metadata = {
  title: 'Homes for Sale in Salem, WI | Legendary Real Estate Services',
  description: 'Browse rural homes and lake properties in Salem, Wisconsin with Legendary Real Estate Services.',
};

export default function SalemPage() {
  const marketStats = [
    { label: 'Median Home Price', value: '$425,000' },
    { label: 'Average Days on Market', value: '48 days' },
    { label: 'Properties Available', value: '30+' },
    { label: 'Average Price/SqFt', value: '$210' },
  ];

  const communityFeatures = [
    {
      title: 'Lakes District',
      description: 'Access to multiple lakes including George, Hooker, and Camp Lakes, perfect for fishing, boating, and water recreation.',
      icon: '🎣'
    },
    {
      title: 'Rural Character',
      description: 'Peaceful countryside living with rolling farmland, open spaces, and a strong agricultural heritage.',
      icon: '🌾'
    },
    {
      title: 'Strategic Location',
      description: 'Convenient access to I-94 corridor while maintaining a quiet rural atmosphere, ideal for commuters.',
      icon: '🛣️'
    },
    {
      title: 'Outdoor Recreation',
      description: 'Richard Bong State Recreation Area nearby offers trails, camping, and year-round outdoor activities.',
      icon: '🏕️'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="w-24 h-px bg-[#890100] mx-auto mb-12"></div>
          <h1 className="scroll-animate text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-black mb-6 text-center tracking-[0.05em]">
            Salem, Wisconsin
            <span className="block text-2xl sm:text-3xl text-[#890100] mt-4 tracking-[0.02em]">Rural Homes & Lake Properties</span>
          </h1>
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-12 h-px bg-[#890100]"></div>
            <span className="text-[#890100] font-serif text-2xl">•</span>
            <div className="w-12 h-px bg-[#890100]"></div>
          </div>
          <div className="scroll-animate max-w-4xl mx-auto">
            <p className="text-sm text-black/70 leading-relaxed mb-6 font-serif text-center" style={{ letterSpacing: '0.02em' }}>
              Salem, Wisconsin offers the perfect blend of rural tranquility and convenient access to urban amenities. This charming Kenosha County community is characterized by scenic lakes, rolling farmland, and a welcoming small-town atmosphere. Salem attracts those seeking spacious properties, lake living, and a peaceful escape from city life.
            </p>
            <p className="text-sm text-black/70 leading-relaxed mb-6 font-serif text-center" style={{ letterSpacing: '0.02em' }}>
              Whether you're looking for a lakefront retreat, a hobby farm, or a comfortable family home with acreage, Salem delivers diverse real estate opportunities. The town's proximity to I-94 provides easy access to Milwaukee and Chicago, while maintaining the rural character that makes it special.
            </p>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-white mb-12 text-center tracking-[0.05em]">
            Salem Market Overview
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
            Why Salem?
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
            Salem Homes for Sale
          </h2>
          <p className="text-sm text-black/70 mb-12 text-center max-w-2xl mx-auto font-serif" style={{ letterSpacing: '0.02em' }}>
            Explore rural homes and lake properties in Salem, Wisconsin.
          </p>
          <CommunityProperties cityId={3} cityName="Salem" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="w-24 h-px bg-[#890100] mx-auto mb-12"></div>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-white mb-8 tracking-[0.05em]">
            Ready to Find Your Salem Home?
          </h2>
          <p className="text-sm text-white/70 mb-12 font-serif" style={{ letterSpacing: '0.02em' }}>
            Let our local experts guide you through the Salem real estate market.
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
