import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Find The Right Real Estate Agent - Legendary Real Estate Services',
  description: 'Making one of the biggest financial decisions of your life... and your agent can’t even text you back?​',
};

export default function Page() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-black mb-8 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
          Find The Right Real Estate Agent
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-black/70 leading-relaxed font-serif mb-6" style={{ letterSpacing: '0.02em' }}>
            At Legendary, we pair you with agents who actually give a damn.No pressure to “just buy it.” No ghosting. No sales pitch.Just tactical advice, professional execution, and real results.
          </p>
          <p className="text-lg text-black/70 leading-relaxed font-serif mb-6" style={{ letterSpacing: '0.02em' }}>
            They Find You the Wrong House.
          </p>
          <p className="text-lg text-black/70 leading-relaxed font-serif mb-6" style={{ letterSpacing: '0.02em' }}>
            Missed inspections. Overpriced offers. Losing your dream home.Bad agents lead to bad decisions and even worse outcomes.Our agents are trained to win negotiations, not just show homes.
          </p>
          <p className="text-lg text-black/70 leading-relaxed font-serif mb-6" style={{ letterSpacing: '0.02em' }}>
            Tell us your goals, where you’re looking, and what you need in an agent. We listen before we match
          </p>
          <p className="text-lg text-black/70 leading-relaxed font-serif mb-6" style={{ letterSpacing: '0.02em' }}>
            We connect you with a vetted agent who fits your timeline, goals, and personality — no pressure, no games, no commission breath.
          </p>
          <p className="text-lg text-black/70 leading-relaxed font-serif mb-6" style={{ letterSpacing: '0.02em' }}>
            Your agent doesn’t just “show homes.” They read the market, advise you through the chaos, and help you land the right home at the right price.
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
