import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How We Give Back - Legendary Real Estate Services',
  description: 'At Legendary Real Estate Services, we believe in making a meaningful impact in the communities we serve. Learn about our volunteer leadership and the organizations we support.',
};

export default function HowWeGiveBackPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-white border-b border-black/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="w-16 h-px bg-[#890100] mx-auto mb-8"></div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-black mb-6 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
            How We Give Back
        </h1>
          <p className="text-lg sm:text-xl text-black/70 font-serif max-w-3xl mx-auto leading-relaxed" style={{ letterSpacing: '0.02em' }}>
            At Legendary Real Estate Services, we believe in making a meaningful impact not just in the lives of our clients, but in the communities we serve. Giving back is at the heart of what we do, and we're proud to contribute our time, energy, and resources to causes that matter.
          </p>
          <div className="w-16 h-px bg-[#890100] mx-auto mt-8"></div>
        </div>
      </section>

      {/* Volunteer Leadership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <div className="w-16 h-px bg-[#890100] mb-6"></div>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-black mb-8 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
              Our Volunteer Leadership
            </h2>
          </div>

          {/* Jade's Positions */}
          <div className="mb-16">
            <h3 className="text-2xl font-serif font-normal text-[#890100] mb-6 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
              Jade's Volunteer Positions
            </h3>
            <p className="text-black/70 font-serif leading-relaxed mb-6" style={{ letterSpacing: '0.02em' }}>
              Jade plays a vital role in supporting and leading organizations that make a difference in our community:
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 border border-black/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-[#890100]"></div>
                </div>
                <div>
                  <p className="text-black/80 font-serif leading-relaxed" style={{ letterSpacing: '0.02em' }}>
                    <span className="font-normal text-black">Commander, American Legion Post 327:</span> Advocating for and supporting local veterans.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 border border-black/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-[#890100]"></div>
                </div>
                <div>
                  <p className="text-black/80 font-serif leading-relaxed" style={{ letterSpacing: '0.02em' }}>
                    <span className="font-normal text-black">Armed Women of America – SE Wisconsin Chapter:</span> Empowering and educating women in the safe use of firearms.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 border border-black/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-[#890100]"></div>
                </div>
                <div>
                  <p className="text-black/80 font-serif leading-relaxed" style={{ letterSpacing: '0.02em' }}>
                    <span className="font-normal text-black">2nd Vice Commander, American Legion Walworth County Council:</span> Strengthening initiatives to serve local veterans and their families.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Chris's Positions */}
          <div className="pt-12 border-t border-black/10">
            <h3 className="text-2xl font-serif font-normal text-[#890100] mb-6 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
              Chris's Volunteer Positions
            </h3>
            <p className="text-black/70 font-serif leading-relaxed mb-6" style={{ letterSpacing: '0.02em' }}>
              Chris dedicates his time to shaping the future of real estate and strengthening community ties:
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 border border-black/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-[#890100]"></div>
                </div>
                <div>
                  <p className="text-black/80 font-serif leading-relaxed" style={{ letterSpacing: '0.02em' }}>
                    <span className="font-normal text-black">2025 Chairman-Elect, Wisconsin Realtor's Association:</span> Leading initiatives to promote responsible and impactful real estate practices statewide.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Organizations We Support Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <div className="w-16 h-px bg-[#890100] mb-6"></div>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal mb-6 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
              Organizations We Support
            </h2>
            <p className="text-white/80 font-serif leading-relaxed mb-8" style={{ letterSpacing: '0.02em' }}>
              We are honored to support these incredible organizations, both through volunteer efforts and financial contributions:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-white/20 p-6">
              <h4 className="text-xl font-serif font-normal mb-3 tracking-[0.05em] text-[#890100]" style={{ letterSpacing: '0.05em' }}>
                Walworth County Toys for Tots (2024)
              </h4>
              <p className="text-white/70 font-serif leading-relaxed text-sm" style={{ letterSpacing: '0.02em' }}>
                Bringing holiday joy to children in need by providing toys and hope during the holiday season.
              </p>
            </div>

            <div className="border border-white/20 p-6">
              <h4 className="text-xl font-serif font-normal mb-3 tracking-[0.05em] text-[#890100]" style={{ letterSpacing: '0.05em' }}>
                American Legion Post 327
              </h4>
              <p className="text-white/70 font-serif leading-relaxed text-sm" style={{ letterSpacing: '0.02em' }}>
                Continuing our commitment to supporting veterans and their families.
              </p>
            </div>

            <div className="border border-white/20 p-6">
              <h4 className="text-xl font-serif font-normal mb-3 tracking-[0.05em] text-[#890100]" style={{ letterSpacing: '0.05em' }}>
                Lake Geneva Youth Camp
              </h4>
              <p className="text-white/70 font-serif leading-relaxed text-sm" style={{ letterSpacing: '0.02em' }}>
                Helping create meaningful experiences and opportunities for young people.
              </p>
            </div>

            <div className="border border-white/20 p-6">
              <h4 className="text-xl font-serif font-normal mb-3 tracking-[0.05em] text-[#890100]" style={{ letterSpacing: '0.05em' }}>
                Armed Women of America – SE Wisconsin Chapter
              </h4>
              <p className="text-white/70 font-serif leading-relaxed text-sm" style={{ letterSpacing: '0.02em' }}>
                Supporting programs that educate and empower women.
              </p>
            </div>

            <div className="border border-white/20 p-6">
              <h4 className="text-xl font-serif font-normal mb-3 tracking-[0.05em] text-[#890100]" style={{ letterSpacing: '0.05em' }}>
                Alive Rescue – Big Barn
              </h4>
              <p className="text-white/70 font-serif leading-relaxed text-sm" style={{ letterSpacing: '0.02em' }}>
                Aiding efforts to rescue and rehabilitate animals, ensuring they find loving forever homes.
              </p>
            </div>

            <div className="border border-white/20 p-6">
              <h4 className="text-xl font-serif font-normal mb-3 tracking-[0.05em] text-[#890100]" style={{ letterSpacing: '0.05em' }}>
                Join the Movement
              </h4>
              <p className="text-white/70 font-serif leading-relaxed text-sm" style={{ letterSpacing: '0.02em' }}>
                It takes all of our communities working together to protect our neighborhoods from human trafficking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Call to Action */}
      <section className="py-20 bg-white border-t border-black/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="w-16 h-px bg-[#890100] mx-auto mb-8"></div>
          <p className="text-xl sm:text-2xl font-serif font-normal text-black leading-relaxed mb-6" style={{ letterSpacing: '0.02em' }}>
            We believe everyone has the power to make a difference. Whether through volunteering, donating, or spreading awareness, we invite you to join us in giving back to the community.
          </p>
          <p className="text-2xl sm:text-3xl font-serif font-normal text-[#890100] tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
            Together, we can create lasting change.
          </p>
          <div className="w-16 h-px bg-[#890100] mx-auto mt-8"></div>
        </div>
      </section>
    </div>
  );
}
