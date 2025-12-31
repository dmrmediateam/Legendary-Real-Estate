import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllListings, getListingImageUrl, formatPrice, formatAddress } from '@/lib/listings';

export const revalidate = 60; // Revalidate every 60 seconds

export const metadata: Metadata = {
  title: 'Our Listings - Legendary Real Estate Services',
  description: 'Browse our exclusive property listings in Lake Geneva, WI and the surrounding areas.',
};

export default async function OurListingsPage() {
  const listings = await getAllListings();

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="section-padding bg-gray-light">
        <div className="container-max text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-black mb-6 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
          Our Listings
        </h1>
          <p className="text-lg text-black/70 leading-relaxed font-serif max-w-2xl mx-auto" style={{ letterSpacing: '0.02em' }}>
            Discover exceptional properties in Lake Geneva, WI and the Geneva Lakes area.
          </p>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="py-20 bg-white">
        <div className="container-max px-6 lg:px-12">
          {listings.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-black/60 font-serif">No listings available at this time.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {listings.map((listing) => {
                const imageUrl = listing.media?.heroImage ? getListingImageUrl(listing.media.heroImage) : null;
                const address = formatAddress(listing.address);
                const price = formatPrice(listing.listingCore?.price, listing.listingCore?.priceDisplay);
                const slug = listing.slug?.current;

                return (
                  <Link
                    key={listing._id}
                    href={slug ? `/our-listings/${slug}` : '#'}
                    className="group block bg-white border border-black/10 hover:border-[#890100] transition-all duration-500 overflow-hidden"
                  >
                    {/* Image */}
                    <div className="relative h-64 bg-gray-200 overflow-hidden">
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={listing.media?.heroImage?.alt || listing.content?.headline || 'Property image'}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                          <span className="text-gray-500 font-serif text-sm">No Image</span>
                        </div>
                      )}
                      {/* Featured Badge */}
                      {listing.listingCore?.featured && (
                        <div className="absolute top-4 left-4 bg-[#890100] text-white px-3 py-1 text-xs font-serif tracking-[0.1em] uppercase">
                          Featured
                        </div>
                      )}
                      {/* Status Badge */}
                      {listing.listingCore?.status && (
                        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 text-xs font-serif tracking-[0.1em] uppercase">
                          {listing.listingCore.status}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-serif font-normal text-black mb-2 group-hover:text-[#890100] transition-colors duration-300 tracking-[0.05em]">
                        {listing.content?.headline || address || 'Property Listing'}
                      </h3>
                      
                      {address && (
                        <p className="text-sm text-black/60 font-serif mb-4" style={{ letterSpacing: '0.02em' }}>
                          {address}
                        </p>
                      )}

                      {/* Property Details */}
                      <div className="flex flex-wrap gap-4 mb-4 text-xs text-black/50 font-serif">
                        {listing.propertyDetails?.beds && (
                          <span>{listing.propertyDetails.beds} Bed{listing.propertyDetails.beds !== 1 ? 's' : ''}</span>
                        )}
                        {listing.propertyDetails?.bathsFull && (
                          <span>{listing.propertyDetails.bathsFull} Bath{listing.propertyDetails.bathsFull !== 1 ? 's' : ''}</span>
                        )}
                        {listing.propertyDetails?.sqft && (
                          <span>{listing.propertyDetails.sqft.toLocaleString()} sq ft</span>
                        )}
                      </div>

                      {/* Price */}
                      <div className="text-2xl font-serif font-normal text-[#890100] mb-4">
                        {price}
                      </div>

                      {/* Summary */}
                      {listing.content?.summary && (
                        <p className="text-sm text-black/70 leading-relaxed font-serif mb-4 line-clamp-2" style={{ letterSpacing: '0.02em' }}>
                          {listing.content.summary}
                        </p>
                      )}

                      {/* View Details Link */}
                      <div className="text-[#890100] text-xs flex items-center group-hover:translate-x-2 transition-transform duration-300 font-serif tracking-[0.1em] uppercase">
                        View Details
                        <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
      </div>
      </section>
    </div>
  );
}
