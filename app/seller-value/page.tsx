import type { Metadata } from 'next';
import HomeValuationForm from '@/components/HomeValuationForm';

export const metadata: Metadata = {
  title: "What's My Home Worth? - Legendary Real Estate Services",
  description: 'Get a free home valuation from Legendary Real Estate Services. Discover your property\'s market value with our comprehensive analysis based on recent comparable sales in Lake Geneva, WI.',
};

export default function Page() {
  return (
    <div className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-16 h-px bg-[#890100] mx-auto mb-8"></div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-black mb-6 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
            What's My Home Worth?
          </h1>
          <p className="text-lg text-black/70 leading-relaxed font-serif max-w-3xl mx-auto mb-4" style={{ letterSpacing: '0.02em' }}>
            Home values are rising. Thinking of selling? We can help you see what your property is worth.
          </p>
          <p className="text-base text-black/60 leading-relaxed font-serif max-w-3xl mx-auto" style={{ letterSpacing: '0.02em' }}>
            Get a free, no-obligation home valuation based on recent comparable sales in your area.
          </p>
          <div className="w-16 h-px bg-[#890100] mx-auto mt-8"></div>
        </div>

        {/* Valuation Form */}
        <HomeValuationForm />
      </div>
    </div>
  );
}
