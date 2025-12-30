import Link from 'next/link';
import CommunityProperties from '@/components/CommunityProperties';

export const metadata = {
  title: 'Homes for Sale in Lake Geneva, WI | Legendary Real Estate Services',
  description: 'Browse luxury homes and waterfront estates in Lake Geneva, Wisconsin with Legendary Real Estate Services, your trusted Geneva Lakes area experts.',
};

export default function LakeGenevaPage() {
  const marketStats = [
    { label: 'Median Home Price', value: '$825,000' },
    { label: 'Average Days on Market', value: '65 days' },
    { label: 'Properties Available', value: '150+' },
    { label: 'Average Price/SqFt', value: '$385' },
  ];

  const communityFeatures = [
    {
      title: 'Stunning Waterfront',
      description: 'Premier lakefront estates and luxury condos on pristine Geneva Lake, one of Wisconsin\'s most sought-after bodies of water.',
      icon: '🏖️'
    },
    {
      title: 'Resort Town Living',
      description: 'World-class dining, boutique shopping, historic estates, and year-round entertainment in a charming downtown setting.',
      icon: '🎭'
    },
    {
      title: 'Outdoor Recreation',
      description: 'Boating, swimming, golf courses, Big Foot Beach State Park, and the famous Lake Geneva Shore Path for scenic walks.',
      icon: '⛵'
    },
    {
      title: 'Chicagoland Gateway',
      description: 'Just 90 minutes from Chicago, offering the perfect escape for weekend getaways and permanent residences alike.',
      icon: '🚗'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="w-24 h-px bg-[#890100] mx-auto mb-12"></div>
          <h1 className="scroll-animate text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-black mb-6 text-center tracking-[0.05em]">
            Lake Geneva, Wisconsin
            <span className="block text-2xl sm:text-3xl text-[#890100] mt-4 tracking-[0.02em]">Premier Lakefront & Luxury Homes for Sale</span>
          </h1>
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-12 h-px bg-[#890100]"></div>
            <span className="text-[#890100] font-serif text-2xl">•</span>
            <div className="w-12 h-px bg-[#890100]"></div>
          </div>
          <div className="scroll-animate max-w-4xl mx-auto">
            <p className="text-sm text-black/70 leading-relaxed mb-6 font-serif text-center" style={{ letterSpacing: '0.02em' }}>
              Welcome to Lake Geneva, Wisconsin's crown jewel and the heart of the Geneva Lakes area. This sophisticated resort community offers an unparalleled blend of natural beauty, historic charm, and upscale amenities. From stunning lakefront estates with private piers to elegant downtown condominiums, Lake Geneva represents the pinnacle of Wisconsin luxury living.
            </p>
            <p className="text-sm text-black/70 leading-relaxed mb-6 font-serif text-center" style={{ letterSpacing: '0.02em' }}>
              Discover pristine Geneva Lake, renowned for its crystal-clear waters and the 21-mile Shore Path offering breathtaking views of historic mansions and manicured landscapes. The vibrant downtown features world-class restaurants, boutique shopping, art galleries, and year-round festivals. Whether you're seeking a primary residence, vacation home, or investment property, Lake Geneva delivers an exceptional lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-white mb-12 text-center tracking-[0.05em]">
            Lake Geneva Market Overview
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
            Why Lake Geneva?
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
            Lake Geneva Homes for Sale
          </h2>
          <p className="text-sm text-black/70 mb-12 text-center max-w-2xl mx-auto font-serif" style={{ letterSpacing: '0.02em' }}>
            Explore exclusive listings in Lake Geneva, from lakefront estates to downtown condominiums.
          </p>
          <CommunityProperties cityId={1} cityName="Lake Geneva" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="w-24 h-px bg-[#890100] mx-auto mb-12"></div>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-white mb-8 tracking-[0.05em]">
            Ready to Find Your Lake Geneva Home?
          </h2>
          <p className="text-sm text-white/70 mb-12 font-serif" style={{ letterSpacing: '0.02em' }}>
            Let our local experts guide you through the Lake Geneva real estate market.
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
