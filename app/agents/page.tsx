import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllAgents, getAgentImageUrl } from '@/lib/agents';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Legendary Real Estate Services Roster - Legendary Real Estate Services',
  description: 'Meet the team of real estate professionals at Legendary Real Estate Services serving Lake Geneva, WI and the Geneva Lakes area.',
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function AgentsPage() {
  const agents = await getAllAgents();

  return (
    <div className="min-h-screen py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="w-24 h-px bg-[#890100] mx-auto mb-12"></div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-black mb-8 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
            Legendary Real Estate Services Roster
          </h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-[#890100]"></div>
            <span className="text-[#890100] font-serif text-2xl">•</span>
            <div className="w-12 h-px bg-[#890100]"></div>
          </div>
          <div className="w-24 h-px bg-[#890100] mx-auto mt-12"></div>
        </div>

        {/* Agents Grid */}
        {agents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            {agents.map((agent) => {
              const imageUrl = getAgentImageUrl(agent);
              
              return (
                <Link
                  key={agent._id}
                  href={`/agents/${agent.slug.current}`}
                  className="group"
                >
                  <div className="relative overflow-hidden border border-black/10 hover:border-[#890100] transition-all duration-500">
                    {/* Image */}
                    <div className="relative h-96 bg-black/5 overflow-hidden">
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={agent.image?.alt || agent.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-black/20">
                          <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      )}
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8">
                      {agent.title && (
                        <p className="text-xs text-black/50 font-serif tracking-[0.15em] uppercase mb-2" style={{ letterSpacing: '0.15em' }}>
                          {agent.title}
                        </p>
                      )}
                      <h2 className="text-2xl font-serif font-normal text-black mb-2 group-hover:text-[#890100] transition-colors duration-300 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
                        {agent.name}
                      </h2>
                      <p className="text-xs text-black/60 font-serif tracking-[0.1em] uppercase mb-4" style={{ letterSpacing: '0.1em' }}>
                        License: {agent.realEstateLicense}
                      </p>
                      {agent.bio && (
                        <p className="text-sm text-black/70 leading-relaxed font-serif mb-6 line-clamp-3" style={{ letterSpacing: '0.02em' }}>
                          {agent.bio}
                        </p>
                      )}
                      <div className="flex items-center text-[#890100] text-xs font-serif tracking-[0.1em] uppercase group-hover:translate-x-2 transition-transform duration-300">
                        <span className="mr-2">View Profile</span>
                        <span>→</span>
                      </div>
                    </div>
                    
                    {/* Top border animation */}
                    <div className="absolute top-0 left-0 w-0 h-px bg-[#890100] transition-all duration-500 group-hover:w-full"></div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-black/60 font-serif text-lg" style={{ letterSpacing: '0.02em' }}>
              No agents found. Please check back soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
