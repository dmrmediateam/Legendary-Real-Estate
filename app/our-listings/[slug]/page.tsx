import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { getListingBySlug, getAllListings, getListingImageUrl, formatPrice, formatAddress } from '@/lib/listings';
import { getAgentImageUrl } from '@/lib/agents';
import ListingGallery from '@/components/ListingGallery';
import FAQAccordion from '@/components/FAQAccordion';

export const revalidate = 60; // Revalidate every 60 seconds

interface ListingPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all listings
export async function generateStaticParams() {
  const listings = await getAllListings();
  return listings.map((listing) => ({
    slug: listing.slug?.current || '',
  })).filter((item) => item.slug);
}

// Generate metadata for each listing
export async function generateMetadata({ params }: ListingPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const listing = await getListingBySlug(resolvedParams.slug);

  if (!listing) {
    return {
      title: 'Listing Not Found',
    };
  }

  const title = listing.seo?.metaTitle || listing.content?.headline || formatAddress(listing.address) || 'Property Listing';
  const description = listing.seo?.metaDescription || listing.content?.summary || 'Property listing details';
  const imageUrl = listing.media?.heroImage ? getListingImageUrl(listing.media.heroImage) : null;

  return {
    title,
    description,
    openGraph: {
      title: listing.seo?.ogTitle || title,
      description: listing.seo?.ogDescription || description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default async function ListingDetailPage({ params }: ListingPageProps) {
  const resolvedParams = await params;
  const listing = await getListingBySlug(resolvedParams.slug);

  if (!listing) {
    notFound();
  }

  const heroImageUrl = listing.media?.heroImage ? getListingImageUrl(listing.media.heroImage) : null;
  const heroVideoUrl = listing.media?.heroVideoUrl;
  const address = formatAddress(listing.address);
  const price = formatPrice(listing.listingCore?.price, listing.listingCore?.priceDisplay);
  const gallery = listing.media?.gallery || [];
  const agent = listing.agentAssociation?.agentId;
  const agentImageUrl = agent?.image ? getAgentImageUrl(agent as any) : null;

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string | undefined): string | null => {
    if (!url) return null;
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(youtubeRegex);
    return match ? match[1] : null;
  };

  const heroVideoId = heroVideoUrl ? getYouTubeVideoId(heroVideoUrl) : null;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] bg-black">
        {heroVideoId ? (
          // Hero Video (YouTube)
          <div className="absolute inset-0">
            <iframe
              src={`https://www.youtube.com/embed/${heroVideoId}?autoplay=1&mute=1&loop=1&playlist=${heroVideoId}&controls=0&showinfo=0&rel=0&modestbranding=1`}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ pointerEvents: 'none' }}
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ) : heroImageUrl ? (
          // Hero Image (fallback)
          <Image
            src={heroImageUrl}
            alt={listing.media?.heroImage?.alt || listing.content?.headline || 'Property image'}
            fill
            className="object-cover opacity-90"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <span className="text-gray-400 font-serif text-lg">No Image Available</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12">
          <div className="container-max">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-white mb-4 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
              {listing.content?.headline || address || 'Property Listing'}
            </h1>
            {address && (
              <p className="text-lg text-white/80 font-serif mb-4" style={{ letterSpacing: '0.02em' }}>
                {address}
              </p>
            )}
            <div className="text-3xl font-serif font-normal text-[#890100] mb-4">
              {price}
            </div>
            {/* Tags */}
            {listing.niceToHave?.tags && listing.niceToHave.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {listing.niceToHave.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 text-xs font-serif tracking-[0.1em] uppercase border border-white/30"
                  >
                    {tag.replace(/_/g, ' ')}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container-max px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Property Details */}
              <div className="mb-12">
                <h2 className="text-2xl font-serif font-normal text-black mb-6 tracking-[0.05em]">Property Details</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {listing.propertyDetails?.beds && (
                    <div>
                      <div className="text-xs text-black/50 font-serif uppercase tracking-[0.1em] mb-1">Bedrooms</div>
                      <div className="text-xl font-serif font-normal text-black">{listing.propertyDetails.beds}</div>
                    </div>
                  )}
                  {listing.propertyDetails?.bathsFull && (
                    <div>
                      <div className="text-xs text-black/50 font-serif uppercase tracking-[0.1em] mb-1">Bathrooms</div>
                      <div className="text-xl font-serif font-normal text-black">{listing.propertyDetails.bathsFull}</div>
                    </div>
                  )}
                  {listing.propertyDetails?.sqft && (
                    <div>
                      <div className="text-xs text-black/50 font-serif uppercase tracking-[0.1em] mb-1">Square Feet</div>
                      <div className="text-xl font-serif font-normal text-black">{listing.propertyDetails.sqft.toLocaleString()}</div>
                    </div>
                  )}
                  {listing.propertyDetails?.propertyType && (
                    <div>
                      <div className="text-xs text-black/50 font-serif uppercase tracking-[0.1em] mb-1">Type</div>
                      <div className="text-xl font-serif font-normal text-black">{listing.propertyDetails.propertyType}</div>
                    </div>
                  )}
                  {listing.propertyDetails?.yearBuilt && (
                    <div>
                      <div className="text-xs text-black/50 font-serif uppercase tracking-[0.1em] mb-1">Year Built</div>
                      <div className="text-xl font-serif font-normal text-black">{listing.propertyDetails.yearBuilt}</div>
                    </div>
                  )}
                  {listing.propertyDetails?.lotSqft && (
                    <div>
                      <div className="text-xs text-black/50 font-serif uppercase tracking-[0.1em] mb-1">Lot Size</div>
                      <div className="text-xl font-serif font-normal text-black">{listing.propertyDetails.lotSqft.toLocaleString()} sq ft</div>
                    </div>
                  )}
                  {listing.propertyDetails?.garageSpaces && (
                    <div>
                      <div className="text-xs text-black/50 font-serif uppercase tracking-[0.1em] mb-1">Garage</div>
                      <div className="text-xl font-serif font-normal text-black">{listing.propertyDetails.garageSpaces}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              {listing.content?.descriptionLong && (
                <div className="mb-12">
                  <h2 className="text-2xl font-serif font-normal text-black mb-6 tracking-[0.05em]">Description</h2>
                  <div className="prose prose-lg max-w-none font-serif text-black/70 leading-relaxed" style={{ letterSpacing: '0.02em' }}>
                    <PortableText value={listing.content.descriptionLong} />
                  </div>
                </div>
              )}

              {/* Highlights */}
              {listing.content?.highlights && listing.content.highlights.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-serif font-normal text-black mb-6 tracking-[0.05em]">Highlights</h2>
                  <ul className="space-y-3">
                    {listing.content.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start text-black/70 font-serif" style={{ letterSpacing: '0.02em' }}>
                        <span className="text-[#890100] mr-3">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Gallery */}
              {gallery.length > 0 && (
                <ListingGallery 
                  images={gallery.map((image) => ({
                    url: getListingImageUrl(image) || '',
                    alt: image.alt,
                    caption: image.caption,
                  })).filter((img) => img.url)} 
                />
              )}

              {/* Videos - Show before gallery if available */}
              {listing.media?.videoUrls && listing.media.videoUrls.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-serif font-normal text-black mb-6 tracking-[0.05em]">Property Video</h2>
                  <div className="space-y-6">
                    {listing.media.videoUrls.map((video, index) => {
                      if (!video.url) return null;
                      // Extract YouTube video ID from various YouTube URL formats
                      const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
                      const match = video.url.match(youtubeRegex);
                      const videoId = match ? match[1] : null;

                      if (!videoId) {
                        // If it's not a YouTube URL, try to use it directly
                        return (
                          <div key={index} className="relative aspect-video bg-black">
                            <iframe
                              src={video.url}
                              title={video.title || `Video ${index + 1}`}
                              className="absolute inset-0 w-full h-full"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        );
                      }

                      return (
                        <div key={index} className="relative aspect-video bg-black rounded overflow-hidden">
                          <iframe
                            src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                            title={video.title || `Video ${index + 1}`}
                            className="absolute inset-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Matterport 3D Tour */}
              {listing.media?.matterportUrl && (
                <div className="mb-12">
                  <h2 className="text-2xl font-serif font-normal text-black mb-6 tracking-[0.05em]">3D Tour</h2>
                  <div className="relative aspect-video bg-black">
                    <iframe
                      src={listing.media.matterportUrl}
                      className="absolute inset-0 w-full h-full"
                      allow="fullscreen"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {/* FAQ Section */}
              {listing.content?.faq && listing.content.faq.length > 0 && (
                <FAQAccordion faqs={listing.content.faq} />
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* CTA Section */}
              <div className="bg-gray-light p-8 mb-8 border border-black/10">
                <h3 className="text-xl font-serif font-normal text-black mb-6 tracking-[0.05em]">Schedule a Showing</h3>
                <p className="text-sm text-black/70 font-serif mb-6 leading-relaxed" style={{ letterSpacing: '0.02em' }}>
                  Interested in this property? Contact us to schedule a private showing.
                </p>
                <Link
                  href="/contact"
                  className="inline-block w-full text-center border border-[#890100] text-[#890100] hover:bg-[#890100] hover:text-white px-6 py-3 font-serif text-xs tracking-[0.1em] uppercase transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>

              {/* Agent Information */}
              {agent && (
                <div className="bg-white border border-black/10 p-8 mb-8">
                  <h3 className="text-xl font-serif font-normal text-black mb-6 tracking-[0.05em]">Listing Agent</h3>
                  <div className="flex flex-col items-center text-center">
                    {agentImageUrl && (
                      <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden">
                        <Image
                          src={agentImageUrl}
                          alt={agent.name || 'Agent'}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <h4 className="text-lg font-serif font-normal text-black mb-1">
                      {agent.name}
                    </h4>
                    {agent.title && (
                      <p className="text-sm text-black/60 font-serif mb-4">{agent.title}</p>
                    )}
                    {agent.bio && (
                      <p className="text-sm text-black/70 font-serif leading-relaxed mb-4 line-clamp-3" style={{ letterSpacing: '0.02em' }}>
                        {agent.bio.length > 150 ? `${agent.bio.substring(0, 150)}...` : agent.bio}
                      </p>
                    )}
                    {agent.phone && (
                      <a
                        href={`tel:${agent.phone.replace(/\D/g, '')}`}
                        className="text-sm text-[#890100] font-serif hover:underline mb-2"
                      >
                        {agent.phone}
                      </a>
                    )}
                    {agent.email && (
                      <a
                        href={`mailto:${agent.email}`}
                        className="text-sm text-[#890100] font-serif hover:underline mb-4"
                      >
                        {agent.email}
                      </a>
                    )}
                    {agent.slug?.current && (
                      <Link
                        href={`/agents/${agent.slug.current}`}
                        className="text-xs text-black/60 hover:text-[#890100] font-serif tracking-[0.1em] uppercase transition-colors duration-300"
                      >
                        View Profile →
                      </Link>
                    )}
                  </div>
                </div>
              )}

              {/* Property Info */}
              <div className="bg-white border border-black/10 p-8">
                <h3 className="text-xl font-serif font-normal text-black mb-6 tracking-[0.05em]">Property Information</h3>
                <dl className="space-y-4">
                  {listing.listingCore?.mlsId && (
                    <>
                      <dt className="text-xs text-black/50 font-serif uppercase tracking-[0.1em]">MLS ID</dt>
                      <dd className="text-sm text-black font-serif">{listing.listingCore.mlsId}</dd>
                    </>
                  )}
                  {listing.propertyDetails?.propertyType && (
                    <>
                      <dt className="text-xs text-black/50 font-serif uppercase tracking-[0.1em]">Property Type</dt>
                      <dd className="text-sm text-black font-serif">{listing.propertyDetails.propertyType}</dd>
                    </>
                  )}
                  {listing.propertyDetails?.yearBuilt && (
                    <>
                      <dt className="text-xs text-black/50 font-serif uppercase tracking-[0.1em]">Year Built</dt>
                      <dd className="text-sm text-black font-serif">{listing.propertyDetails.yearBuilt}</dd>
                    </>
                  )}
                  {listing.propertyDetails?.schoolDistrict && (
                    <>
                      <dt className="text-xs text-black/50 font-serif uppercase tracking-[0.1em]">School District</dt>
                      <dd className="text-sm text-black font-serif">{listing.propertyDetails.schoolDistrict}</dd>
                    </>
                  )}
                  {listing.propertyDetails?.hoa && (
                    <>
                      <dt className="text-xs text-black/50 font-serif uppercase tracking-[0.1em]">HOA</dt>
                      <dd className="text-sm text-black font-serif">
                        {listing.propertyDetails.hoaFee
                          ? `$${listing.propertyDetails.hoaFee.toLocaleString()}${listing.propertyDetails.hoaFrequency ? `/${listing.propertyDetails.hoaFrequency}` : ''}`
                          : 'Yes'}
                      </dd>
                    </>
                  )}
                  {listing.propertyDetails?.taxesAnnual && (
                    <>
                      <dt className="text-xs text-black/50 font-serif uppercase tracking-[0.1em]">Annual Taxes</dt>
                      <dd className="text-sm text-black font-serif">${listing.propertyDetails.taxesAnnual.toLocaleString()}</dd>
                    </>
                  )}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

