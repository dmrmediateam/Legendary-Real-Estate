import Link from 'next/link';
import CommunityProperties from '@/components/CommunityProperties';

export const metadata = {
  title: 'Homes for Sale in Fontana, WI | Legendary Real Estate Services',
  description: 'Browse lakefront homes and vacation properties in Fontana-on-Geneva Lake, Wisconsin with Legendary Real Estate Services.',
};

export default function FontanaPage() {
  const marketStats = [
    { label: 'Median Home Price', value: '$695,000' },
    { label: 'Average Days on Market', value: '55 days' },
    { label: 'Properties Available', value: '45+' },
    { label: 'Average Price/SqFt', value: '$340' },
  ];

  const communityFeatures = [
    {
      title: 'Geneva Lake Beach',
      description: 'Beautiful public beach with pristine sand, swimming areas, and stunning lake views perfect for family gatherings.',
      icon: '🏖️'
    },
    {
      title: 'Abbey Resort',
      description: 'Premier resort destination featuring spa, restaurants, marina, and year-round entertainment including the famous Concerts on the Pier.',
      icon: '🏨'
    },
    {
      title: 'Water Sports Hub',
      description: 'Fontana Marina offers premier boating access, jet ski rentals, and water sports equipment for lake enthusiasts.',
      icon: '🚤'
    },
    {
      title: 'Village Charm',
      description: 'Quaint village atmosphere with local shops, restaurants, and the historic Shore Path connecting to Lake Geneva.',
      icon: '🌟'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="w-24 h-px bg-[#890100] mx-auto mb-12"></div>
          <h1 className="scroll-animate text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-black mb-6 text-center tracking-[0.05em]">
            Fontana, Wisconsin
            <span className="block text-2xl sm:text-3xl text-[#890100] mt-4 tracking-[0.02em]">Lakefront Living & Vacation Homes</span>
          </h1>
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-12 h-px bg-[#890100]"></div>
            <span className="text-[#890100] font-serif text-2xl">•</span>
            <div className="w-12 h-px bg-[#890100]"></div>
          </div>
          <div className="scroll-animate max-w-4xl mx-auto">
            <p className="text-sm text-black/70 leading-relaxed mb-6 font-serif text-center" style={{ letterSpacing: '0.02em' }}>
              Nestled on the western shore of Geneva Lake, Fontana-on-Geneva Lake offers an idyllic lakefront lifestyle combining natural beauty with resort amenities. This charming village is renowned for its sandy public beach, marina, and the iconic Abbey Resort, making it a premier destination for both full-time residents and vacation homeowners.
            </p>
            <p className="text-sm text-black/70 leading-relaxed mb-6 font-serif text-center" style={{ letterSpacing: '0.02em' }}>
              From elegant lakefront estates with private docks to cozy cottages within walking distance of the beach, Fontana offers diverse real estate opportunities. Enjoy water sports, dining at waterfront restaurants, attending outdoor concerts, and exploring the scenic Shore Path that winds along the lake's edge.
            </p>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-white mb-12 text-center tracking-[0.05em]">
            Fontana Market Overview
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
            Why Fontana?
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
            Fontana Homes for Sale
          </h2>
          <p className="text-sm text-black/70 mb-12 text-center max-w-2xl mx-auto font-serif" style={{ letterSpacing: '0.02em' }}>
            Discover lakefront estates and vacation homes in Fontana-on-Geneva Lake.
          </p>
          <CommunityProperties cityId={2} cityName="Fontana" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="w-24 h-px bg-[#890100] mx-auto mb-12"></div>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-white mb-8 tracking-[0.05em]">
            Ready to Find Your Fontana Home?
          </h2>
          <p className="text-sm text-white/70 mb-12 font-serif" style={{ letterSpacing: '0.02em' }}>
            Let our local experts guide you through the Fontana real estate market.
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
