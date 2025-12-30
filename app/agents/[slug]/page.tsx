import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getAgentBySlug, getAllAgents, getAgentImageUrl } from '@/lib/agents';
import { urlFor } from '@/lib/sanity';

export const revalidate = 60; // Revalidate every 60 seconds

// Generate static params for all agents
export async function generateStaticParams() {
  const agents = await getAllAgents();
  return agents.map((agent) => ({
    slug: agent.slug.current,
  }));
}

// Generate metadata for each agent page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const agent = await getAgentBySlug(slug);

  if (!agent) {
    return {
      title: 'Agent Not Found',
    };
  }

  return {
    title: `${agent.name} - Legendary Real Estate Services`,
    description: agent.bio || `Real estate professional ${agent.name} at Legendary Real Estate Services.`,
  };
}

export default async function AgentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const agent = await getAgentBySlug(slug);

  if (!agent) {
    notFound();
  }

  const imageUrl = getAgentImageUrl(agent);

  return (
    <div className="min-h-screen py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Back Link */}
        <Link
          href="/agents"
          className="inline-flex items-center text-black/60 hover:text-[#890100] transition-colors duration-300 font-serif text-xs tracking-[0.1em] uppercase mb-12 group"
          style={{ letterSpacing: '0.1em' }}
        >
          <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Roster
        </Link>

        {/* Header */}
        <div className="mb-16">
          <div className="w-24 h-px bg-[#890100] mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Image */}
            <div className="md:col-span-1">
              <div className="relative h-96 bg-black/5 overflow-hidden border border-black/10">
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt={agent.image?.alt || agent.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-black/20">
                    <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-2">
              {agent.title && (
                <p className="text-xs text-black/50 font-serif tracking-[0.15em] uppercase mb-4" style={{ letterSpacing: '0.15em' }}>
                  {agent.title}
                </p>
              )}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-black mb-6 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                {agent.name}
              </h1>
              
              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-xs text-black/50 font-serif tracking-[0.15em] uppercase mb-1" style={{ letterSpacing: '0.15em' }}>
                    License
                  </p>
                  <p className="text-sm text-black/70 font-serif" style={{ letterSpacing: '0.02em' }}>
                    {agent.realEstateLicense}
                  </p>
                </div>
                
                <div>
                  <p className="text-xs text-black/50 font-serif tracking-[0.15em] uppercase mb-1" style={{ letterSpacing: '0.15em' }}>
                    Phone
                  </p>
                  <a
                    href={`tel:${agent.phone.replace(/\D/g, '')}`}
                    className="text-sm text-black/70 hover:text-[#890100] transition-colors duration-300 font-serif"
                    style={{ letterSpacing: '0.02em' }}
                  >
                    {agent.phone}
                  </a>
                </div>
                
                <div>
                  <p className="text-xs text-black/50 font-serif tracking-[0.15em] uppercase mb-1" style={{ letterSpacing: '0.15em' }}>
                    Email
                  </p>
                  <a
                    href={`mailto:${agent.email}`}
                    className="text-sm text-black/70 hover:text-[#890100] transition-colors duration-300 font-serif"
                    style={{ letterSpacing: '0.02em' }}
                  >
                    {agent.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bio */}
        {agent.bio && (
          <div className="mb-16">
            <div className="w-24 h-px bg-[#890100] mb-8"></div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-black/70 leading-relaxed font-serif whitespace-pre-line" style={{ letterSpacing: '0.02em' }}>
                {agent.bio}
              </p>
            </div>
            <div className="w-24 h-px bg-[#890100] mt-8"></div>
          </div>
        )}

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-6">
          <Link
            href="/contact"
            className="inline-block border border-[#890100] text-[#890100] hover:bg-[#890100] hover:text-white px-8 py-3 font-serif text-xs tracking-[0.2em] uppercase transition-all duration-500 text-center"
          >
            Contact {agent.name.split(' ')[0]}
          </Link>
          <Link
            href="/listings"
            className="inline-block border border-black/20 text-black/70 hover:border-[#890100] hover:text-[#890100] px-8 py-3 font-serif text-xs tracking-[0.2em] uppercase transition-all duration-500 text-center"
          >
            View Listings
          </Link>
        </div>
      </div>
    </div>
  );
}

