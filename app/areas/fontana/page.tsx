import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fontana Real Estate - Legendary Real Estate Services',
  description: 'Skip to content December 19, 2024 Fontana Real Estate Areas Table of Contents Living in FontanaFontana on the Lake was voted the #7 best place to retire in Wisc',
};

export default function Page() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-black mb-8 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
          Fontana Real Estate
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-black/70 leading-relaxed font-serif mb-6" style={{ letterSpacing: '0.02em' }}>
            Fontana on the Lake was voted the #7 best place to retire in Wisconsin. It is a tight-knit, waterfront community with a small-town feel. It offers many activities and events when Chicago residence vacation here while boasting of many recreational and conservancy parks. There are also many restaurants, coffee shops, and pubs for year-round entertainment.
          </p>
          <p className="text-lg text-black/70 leading-relaxed font-serif mb-6" style={{ letterSpacing: '0.02em' }}>
            The population is approximately 1,500, and over 80% of the residents have some form of higher education. Approximately 90% of the residents own their homes. The 2021 year-to-date median sale price of single-family homes is \$531,000, while the median rent is \$1000.
          </p>
          <p className="text-lg text-black/70 leading-relaxed font-serif mb-6" style={{ letterSpacing: '0.02em' }}>
            Don't have an account yet? Register
          </p>
          <p className="text-lg text-black/70 leading-relaxed font-serif mb-6" style={{ letterSpacing: '0.02em' }}>
            Already have an account? Sign In
          </p>
          <p className="text-lg text-black/70 leading-relaxed font-serif mb-6" style={{ letterSpacing: '0.02em' }}>
            Please enter your username or email address, you will receive a link to create a new password via email.
          </p>
        </div>
      </div>
    </div>
  );
}
