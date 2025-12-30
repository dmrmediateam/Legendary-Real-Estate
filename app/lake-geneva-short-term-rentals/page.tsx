import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lake Geneva Short-Term Rentals - Legendary Real Estate Services',
  description: 'Lake Geneva Short-Term Rentals Are Changing. Don\'t get Left Behind.Due to local Policy in Lake Geneva short-term rentals are at risk. Get ahead of wave and lear',
};

export default function Page() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-black mb-8 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
          Lake Geneva Short-Term Rentals
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-black/70 leading-relaxed font-serif mb-6" style={{ letterSpacing: '0.02em' }}>
            Due to local Policy in Lake Geneva short-term rentals are at risk. Get ahead of wave and learn how you can capitalize on this opportunity. Get a Personalized Video and PDF guide as to how much you could lose from this policy.
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
