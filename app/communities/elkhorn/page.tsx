import Link from 'next/link';
import CommunityProperties from '@/components/CommunityProperties';

export const metadata = {
  title: 'Homes for Sale in Elkhorn, WI | Legendary Real Estate Services',
  description: 'Browse homes and real estate in Elkhorn, Wisconsin - the County Seat of Walworth County - with Legendary Real Estate Services.',
};

export default function ElkhornPage() {
  const marketStats = [
    { label: 'Median Home Price', value: '$365,000' },
    { label: 'Average Days on Market', value: '45 days' },
    { label: 'Properties Available', value: '55+' },
    { label: 'Average Price/SqFt', value: '$195' },
  ];

  const communityFeatures = [
    {
      title: 'County Seat',
      description: 'As Walworth County\'s seat, Elkhorn offers government services, courthouse, and a central hub for regional activities.',
      icon: '🏛️'
    },
    {
      title: 'Vibrant Downtown',
      description: 'Historic downtown square features unique shops, restaurants, the Historic Webster House Museum, and year-round community events.',
      icon: '🌆'
    },
    {
      title: 'Education Excellence',
      description: 'Elkhorn Area School District provides quality education with strong academic programs and extracurricular opportunities.',
      icon: '📚'
    },
    {
      title: 'Lakes & Recreation',
      description: 'Surrounded by beautiful lakes including Lauderdale Lakes chain, offering boating, fishing, and outdoor activities.',
      icon: '⛵'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="w-24 h-px bg-[#890100] mx-auto mb-12"></div>
          <h1 className="scroll-animate text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-black mb-6 text-center tracking-[0.05em]">
            Elkhorn, Wisconsin
            <span className="block text-2xl sm:text-3xl text-[#890100] mt-4 tracking-[0.02em]">County Seat & Family-Friendly Community</span>
          </h1>
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-12 h-px bg-[#890100]"></div>
            <span className="text-[#890100] font-serif text-2xl">•</span>
            <div className="w-12 h-px bg-[#890100]"></div>
          </div>
          <div className="scroll-animate max-w-4xl mx-auto">
            <p className="text-sm text-black/70 leading-relaxed mb-6 font-serif text-center" style={{ letterSpacing: '0.02em' }}>
              Elkhorn, Wisconsin serves as the county seat of Walworth County and stands as a vibrant community blending historic charm with modern conveniences. Known for its classic downtown square, excellent schools, and proximity to numerous lakes, Elkhorn offers an exceptional quality of life for families and professionals alike.
            </p>
            <p className="text-sm text-black/70 leading-relaxed mb-6 font-serif text-center" style={{ letterSpacing: '0.02em' }}>
              The city's real estate market features diverse options from historic homes near downtown to newer developments in family-friendly neighborhoods. With its central location in the Geneva Lakes region, residents enjoy easy access to lake recreation, dining, shopping, and cultural activities while maintaining a welcoming small-town atmosphere.
            </p>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-white mb-12 text-center tracking-[0.05em]">
            Elkhorn Market Overview
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
            Why Elkhorn?
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
            Elkhorn Homes for Sale
          </h2>
          <p className="text-sm text-black/70 mb-12 text-center max-w-2xl mx-auto font-serif" style={{ letterSpacing: '0.02em' }}>
            Explore family homes and historic properties in Elkhorn, Wisconsin.
          </p>
          <CommunityProperties cityId={5} cityName="Elkhorn" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="w-24 h-px bg-[#890100] mx-auto mb-12"></div>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-white mb-8 tracking-[0.05em]">
            Ready to Find Your Elkhorn Home?
          </h2>
          <p className="text-sm text-white/70 mb-12 font-serif" style={{ letterSpacing: '0.02em' }}>
            Let our local experts guide you through the Elkhorn real estate market.
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
