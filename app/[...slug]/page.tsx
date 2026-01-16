import Link from 'next/link';
import { notFound } from 'next/navigation';

type CityHubConfig = {
  city: string;
  state: string;
  slug: string;
  relatedLinks: { label: string; href: string }[];
};

// Add future city hub pages here using the exact sitemap slug as the key.
const cityHubConfig: Record<string, CityHubConfig> = {
  'elkhorn-wi-real-estate-and-homes-for-sale': {
    city: 'Elkhorn',
    state: 'WI',
    slug: 'elkhorn-wi-real-estate-and-homes-for-sale',
    relatedLinks: [
      {
        label: 'Duplexes for Sale in Elkhorn, WI',
        href: '/duplexes-for-sale-in-elkhorn-wi/',
      },
      {
        label: 'Waterfront Properties for Sale in Elkhorn, WI',
        href: '/waterfront-properties-for-sale-in-elkhorn-wi/',
      },
      {
        label: 'Condos for Sale in Elkhorn, WI',
        href: '/condos-for-sale-in-elkhorn-wi/',
      },
      {
        label: 'Townhomes for Sale in Elkhorn, WI',
        href: '/townhomes-for-sale-in-elkhorn-wi/',
      },
    ],
  },
  'burlington-wi-real-estate-and-homes-for-sale': {
    city: 'Burlington',
    state: 'WI',
    slug: 'burlington-wi-real-estate-and-homes-for-sale',
    relatedLinks: [
      {
        label: 'Duplexes for Sale in Burlington, WI',
        href: '/duplexes-for-sale-in-burlington-wi/',
      },
      {
        label: 'Waterfront Properties for Sale in Burlington, WI',
        href: '/waterfront-properties-for-sale-in-burlington-wi/',
      },
      {
        label: 'Condos for Sale in Burlington, WI',
        href: '/condos-for-sale-in-burlington-wi/',
      },
      {
        label: 'Townhomes for Sale in Burlington, WI',
        href: '/townhomes-for-sale-in-burlington-wi/',
      },
    ],
  },
  'abbey-springs-wi-real-estate-and-homes-for-sale': {
    city: 'Abbey Springs',
    state: 'WI',
    slug: 'abbey-springs-wi-real-estate-and-homes-for-sale',
    relatedLinks: [
      {
        label: 'Duplexes for Sale in Abbey Springs, WI',
        href: '/duplexes-for-sale-in-abbey-springs-wi/',
      },
      {
        label: 'Waterfront Properties for Sale in Abbey Springs, WI',
        href: '/waterfront-properties-for-sale-in-abbey-springs-wi/',
      },
      {
        label: 'Condos for Sale in Abbey Springs, WI',
        href: '/condos-for-sale-in-abbey-springs-wi/',
      },
      {
        label: 'Townhomes for Sale in Abbey Springs, WI',
        href: '/townhomes-for-sale-in-abbey-springs-wi/',
      },
    ],
  },
  'cedar-point-park-wi-real-estate-and-homes-for-sale': {
    city: 'Cedar Point Park',
    state: 'WI',
    slug: 'cedar-point-park-wi-real-estate-and-homes-for-sale',
    relatedLinks: [
      {
        label: 'Duplexes for Sale in Cedar Point Park, WI',
        href: '/duplexes-for-sale-in-cedar-point-park-wi/',
      },
      {
        label: 'Waterfront Properties for Sale in Cedar Point Park, WI',
        href: '/waterfront-properties-for-sale-in-cedar-point-park-wi/',
      },
      {
        label: 'Condos for Sale in Cedar Point Park, WI',
        href: '/condos-for-sale-in-cedar-point-park-wi/',
      },
      {
        label: 'Townhomes for Sale in Cedar Point Park, WI',
        href: '/townhomes-for-sale-in-cedar-point-park-wi/',
      },
    ],
  },
  'country-club-estates-wi-real-estate-and-homes-for-sale': {
    city: 'Country Club Estates',
    state: 'WI',
    slug: 'country-club-estates-wi-real-estate-and-homes-for-sale',
    relatedLinks: [
      {
        label: 'Duplexes for Sale in Country Club Estates, WI',
        href: '/duplexes-for-sale-in-country-club-estates-wi/',
      },
      {
        label: 'Waterfront Properties for Sale in Country Club Estates, WI',
        href: '/waterfront-properties-for-sale-in-country-club-estates-wi/',
      },
      {
        label: 'Condos for Sale in Country Club Estates, WI',
        href: '/condos-for-sale-in-country-club-estates-wi/',
      },
      {
        label: 'Townhomes for Sale in Country Club Estates, WI',
        href: '/townhomes-for-sale-in-country-club-estates-wi/',
      },
    ],
  },
  'delavan-wi-real-estate-and-homes-for-sale': {
    city: 'Delavan',
    state: 'WI',
    slug: 'delavan-wi-real-estate-and-homes-for-sale',
    relatedLinks: [
      {
        label: 'Duplexes for Sale in Delavan, WI',
        href: '/duplexes-for-sale-in-delavan-wi/',
      },
      {
        label: 'Waterfront Properties for Sale in Delavan, WI',
        href: '/waterfront-properties-for-sale-in-delavan-wi/',
      },
      {
        label: 'Condos for Sale in Delavan, WI',
        href: '/condos-for-sale-in-delavan-wi/',
      },
      {
        label: 'Townhomes for Sale in Delavan, WI',
        href: '/townhomes-for-sale-in-delavan-wi/',
      },
    ],
  },
  'east-troy-wi-real-estate-and-homes-for-sale': {
    city: 'East Troy',
    state: 'WI',
    slug: 'east-troy-wi-real-estate-and-homes-for-sale',
    relatedLinks: [
      {
        label: 'Duplexes for Sale in East Troy, WI',
        href: '/duplexes-for-sale-in-east-troy-wi/',
      },
      {
        label: 'Waterfront Properties for Sale in East Troy, WI',
        href: '/waterfront-properties-for-sale-in-east-troy-wi/',
      },
      {
        label: 'Condos for Sale in East Troy, WI',
        href: '/condos-for-sale-in-east-troy-wi/',
      },
      {
        label: 'Townhomes for Sale in East Troy, WI',
        href: '/townhomes-for-sale-in-east-troy-wi/',
      },
    ],
  },
  'fontana-wi-real-estate-and-homes-for-sale': {
    city: 'Fontana',
    state: 'WI',
    slug: 'fontana-wi-real-estate-and-homes-for-sale',
    relatedLinks: [
      {
        label: 'Duplexes for Sale in Fontana, WI',
        href: '/duplexes-for-sale-in-fontana-wi/',
      },
      {
        label: 'Waterfront Properties for Sale in Fontana, WI',
        href: '/waterfront-properties-for-sale-in-fontana-wi/',
      },
      {
        label: 'Condos for Sale in Fontana, WI',
        href: '/condos-for-sale-in-fontana-wi/',
      },
      {
        label: 'Townhomes for Sale in Fontana, WI',
        href: '/townhomes-for-sale-in-fontana-wi/',
      },
    ],
  },
  'geneva-national-wi-real-estate-and-homes-for-sale': {
    city: 'Geneva National',
    state: 'WI',
    slug: 'geneva-national-wi-real-estate-and-homes-for-sale',
    relatedLinks: [
      {
        label: 'Duplexes for Sale in Geneva National, WI',
        href: '/duplexes-for-sale-in-geneva-national-wi/',
      },
      {
        label: 'Waterfront Properties for Sale in Geneva National, WI',
        href: '/waterfront-properties-for-sale-in-geneva-national-wi/',
      },
      {
        label: 'Condos for Sale in Geneva National, WI',
        href: '/condos-for-sale-in-geneva-national-wi/',
      },
      {
        label: 'Townhomes for Sale in Geneva National, WI',
        href: '/townhomes-for-sale-in-geneva-national-wi/',
      },
    ],
  },
  'genoa-city-wi-real-estate-and-homes-for-sale': {
    city: 'Genoa City',
    state: 'WI',
    slug: 'genoa-city-wi-real-estate-and-homes-for-sale',
    relatedLinks: [
      {
        label: 'Duplexes for Sale in Genoa City, WI',
        href: '/duplexes-for-sale-in-genoa-city-wi/',
      },
      {
        label: 'Waterfront Properties for Sale in Genoa City, WI',
        href: '/waterfront-properties-for-sale-in-genoa-city-wi/',
      },
      {
        label: 'Condos for Sale in Genoa City, WI',
        href: '/condos-for-sale-in-genoa-city-wi/',
      },
      {
        label: 'Townhomes for Sale in Genoa City, WI',
        href: '/townhomes-for-sale-in-genoa-city-wi/',
      },
    ],
  },
  'lake-geneva-wi-real-estate-and-homes-for-sale': {
    city: 'Lake Geneva',
    state: 'WI',
    slug: 'lake-geneva-wi-real-estate-and-homes-for-sale',
    relatedLinks: [
      {
        label: 'Duplexes for Sale in Lake Geneva, WI',
        href: '/duplexes-for-sale-in-lake-geneva-wi/',
      },
      {
        label: 'Waterfront Properties for Sale in Lake Geneva, WI',
        href: '/waterfront-properties-for-sale-in-lake-geneva-wi/',
      },
      {
        label: 'Condos for Sale in Lake Geneva, WI',
        href: '/condos-for-sale-in-lake-geneva-wi/',
      },
      {
        label: 'Townhomes for Sale in Lake Geneva, WI',
        href: '/townhomes-for-sale-in-lake-geneva-wi/',
      },
    ],
  },
  'lyons-wi-real-estate-and-homes-for-sale': {
    city: 'Lyons',
    state: 'WI',
    slug: 'lyons-wi-real-estate-and-homes-for-sale',
    relatedLinks: [
      {
        label: 'Duplexes for Sale in Lyons, WI',
        href: '/duplexes-for-sale-in-lyons-wi/',
      },
      {
        label: 'Waterfront Properties for Sale in Lyons, WI',
        href: '/waterfront-properties-for-sale-in-lyons-wi/',
      },
      {
        label: 'Condos for Sale in Lyons, WI',
        href: '/condos-for-sale-in-lyons-wi/',
      },
      {
        label: 'Townhomes for Sale in Lyons, WI',
        href: '/townhomes-for-sale-in-lyons-wi/',
      },
    ],
  },
  'north-shore-estates-wi-real-estate-and-homes-for-sale': {
    city: 'North Shore Estates',
    state: 'WI',
    slug: 'north-shore-estates-wi-real-estate-and-homes-for-sale',
    relatedLinks: [
      {
        label: 'Duplexes for Sale in North Shore Estates, WI',
        href: '/duplexes-for-sale-in-north-shore-estates-wi/',
      },
      {
        label: 'Waterfront Properties for Sale in North Shore Estates, WI',
        href: '/waterfront-properties-for-sale-in-north-shore-estates-wi/',
      },
      {
        label: 'Condos for Sale in North Shore Estates, WI',
        href: '/condos-for-sale-in-north-shore-estates-wi/',
      },
      {
        label: 'Townhomes for Sale in North Shore Estates, WI',
        href: '/townhomes-for-sale-in-north-shore-estates-wi/',
      },
    ],
  },
  'powers-lake-wi-real-estate-and-homes-for-sale': {
    city: 'Powers Lake',
    state: 'WI',
    slug: 'powers-lake-wi-real-estate-and-homes-for-sale',
    relatedLinks: [
      {
        label: 'Duplexes for Sale in Powers Lake, WI',
        href: '/duplexes-for-sale-in-powers-lake-wi/',
      },
      {
        label: 'Waterfront Properties for Sale in Powers Lake, WI',
        href: '/waterfront-properties-for-sale-in-powers-lake-wi/',
      },
      {
        label: 'Condos for Sale in Powers Lake, WI',
        href: '/condos-for-sale-in-powers-lake-wi/',
      },
      {
        label: 'Townhomes for Sale in Powers Lake, WI',
        href: '/townhomes-for-sale-in-powers-lake-wi/',
      },
    ],
  },
  'powers-wi-real-estate-and-homes-for-sale': {
    city: 'Powers',
    state: 'WI',
    slug: 'powers-wi-real-estate-and-homes-for-sale',
    relatedLinks: [
      {
        label: 'Duplexes for Sale in Powers, WI',
        href: '/duplexes-for-sale-in-powers-wi/',
      },
      {
        label: 'Waterfront Properties for Sale in Powers, WI',
        href: '/waterfront-properties-for-sale-in-powers-wi/',
      },
      {
        label: 'Condos for Sale in Powers, WI',
        href: '/condos-for-sale-in-powers-wi/',
      },
      {
        label: 'Townhomes for Sale in Powers, WI',
        href: '/townhomes-for-sale-in-powers-wi/',
      },
    ],
  },
  'salem-wi-real-estate-and-homes-for-sale': {
    city: 'Salem',
    state: 'WI',
    slug: 'salem-wi-real-estate-and-homes-for-sale',
    relatedLinks: [
      {
        label: 'Duplexes for Sale in Salem, WI',
        href: '/duplexes-for-sale-in-salem-wi/',
      },
      {
        label: 'Waterfront Properties for Sale in Salem, WI',
        href: '/waterfront-properties-for-sale-in-salem-wi/',
      },
      {
        label: 'Condos for Sale in Salem, WI',
        href: '/condos-for-sale-in-salem-wi/',
      },
      {
        label: 'Townhomes for Sale in Salem, WI',
        href: '/townhomes-for-sale-in-salem-wi/',
      },
    ],
  },
  'silver-lake-wi-real-estate-and-homes-for-sale': {
    city: 'Silver Lake',
    state: 'WI',
    slug: 'silver-lake-wi-real-estate-and-homes-for-sale',
    relatedLinks: [
      {
        label: 'Duplexes for Sale in Silver Lake, WI',
        href: '/duplexes-for-sale-in-silver-lake-wi/',
      },
      {
        label: 'Waterfront Properties for Sale in Silver Lake, WI',
        href: '/waterfront-properties-for-sale-in-silver-lake-wi/',
      },
      {
        label: 'Condos for Sale in Silver Lake, WI',
        href: '/condos-for-sale-in-silver-lake-wi/',
      },
      {
        label: 'Townhomes for Sale in Silver Lake, WI',
        href: '/townhomes-for-sale-in-silver-lake-wi/',
      },
    ],
  },
  'twin-lakes-wi-real-estate-and-homes-for-sale': {
    city: 'Twin Lakes',
    state: 'WI',
    slug: 'twin-lakes-wi-real-estate-and-homes-for-sale',
    relatedLinks: [
      {
        label: 'Duplexes for Sale in Twin Lakes, WI',
        href: '/duplexes-for-sale-in-twin-lakes-wi/',
      },
      {
        label: 'Waterfront Properties for Sale in Twin Lakes, WI',
        href: '/waterfront-properties-for-sale-in-twin-lakes-wi/',
      },
      {
        label: 'Condos for Sale in Twin Lakes, WI',
        href: '/condos-for-sale-in-twin-lakes-wi/',
      },
      {
        label: 'Townhomes for Sale in Twin Lakes, WI',
        href: '/townhomes-for-sale-in-twin-lakes-wi/',
      },
    ],
  },
  'walworth-wi-real-estate-and-homes-for-sale': {
    city: 'Walworth',
    state: 'WI',
    slug: 'walworth-wi-real-estate-and-homes-for-sale',
    relatedLinks: [
      {
        label: 'Duplexes for Sale in Walworth, WI',
        href: '/duplexes-for-sale-in-walworth-wi/',
      },
      {
        label: 'Waterfront Properties for Sale in Walworth, WI',
        href: '/waterfront-properties-for-sale-in-walworth-wi/',
      },
      {
        label: 'Condos for Sale in Walworth, WI',
        href: '/condos-for-sale-in-walworth-wi/',
      },
      {
        label: 'Townhomes for Sale in Walworth, WI',
        href: '/townhomes-for-sale-in-walworth-wi/',
      },
    ],
  },
  'whitewater-wi-real-estate-and-homes-for-sale': {
    city: 'Whitewater',
    state: 'WI',
    slug: 'whitewater-wi-real-estate-and-homes-for-sale',
    relatedLinks: [
      {
        label: 'Duplexes for Sale in Whitewater, WI',
        href: '/duplexes-for-sale-in-whitewater-wi/',
      },
      {
        label: 'Waterfront Properties for Sale in Whitewater, WI',
        href: '/waterfront-properties-for-sale-in-whitewater-wi/',
      },
      {
        label: 'Condos for Sale in Whitewater, WI',
        href: '/condos-for-sale-in-whitewater-wi/',
      },
      {
        label: 'Townhomes for Sale in Whitewater, WI',
        href: '/townhomes-for-sale-in-whitewater-wi/',
      },
    ],
  },
  'williams-bay-wi-real-estate-and-homes-for-sale': {
    city: 'Williams Bay',
    state: 'WI',
    slug: 'williams-bay-wi-real-estate-and-homes-for-sale',
    relatedLinks: [
      {
        label: 'Duplexes for Sale in Williams Bay, WI',
        href: '/duplexes-for-sale-in-williams-bay-wi/',
      },
      {
        label: 'Waterfront Properties for Sale in Williams Bay, WI',
        href: '/waterfront-properties-for-sale-in-williams-bay-wi/',
      },
      {
        label: 'Condos for Sale in Williams Bay, WI',
        href: '/condos-for-sale-in-williams-bay-wi/',
      },
      {
        label: 'Townhomes for Sale in Williams Bay, WI',
        href: '/townhomes-for-sale-in-williams-bay-wi/',
      },
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const slugKey = slug.join('/');
  const cityHub = cityHubConfig[slugKey];

  if (!cityHub) {
    return {};
  }

  return {
    title: `${cityHub.city}, ${cityHub.state} Real Estate & Homes for Sale`,
    description: `Explore ${cityHub.city}, ${cityHub.state} real estate and homes for sale with local insights and property options.`,
  };
}

export default async function CityHubPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  // Await params in Next.js 15
  const { slug } = await params;
  const slugKey = slug.join('/');
  const cityHub = cityHubConfig[slugKey];

  if (!cityHub || slug.length !== 1) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-black mb-6">
            {cityHub.city}, {cityHub.state} Real Estate &amp; Homes for Sale
          </h1>
          <p className="text-sm text-black/70 leading-relaxed font-serif mb-10">
            Explore current listings, neighborhood highlights, and local market
            insights for {cityHub.city}, {cityHub.state}. This city hub is built
            to help you quickly find property types that match your goals.
          </p>

          <div className="border border-black/10 p-6 rounded-sm">
            <h2 className="text-xl font-serif text-black mb-4">
              Explore Other Property Types in {cityHub.city}, {cityHub.state}
            </h2>
            <ul className="space-y-3 text-sm font-serif">
              {cityHub.relatedLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#890100] hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 border border-dashed border-black/20 p-8 text-center text-sm text-black/60 font-serif">
            {/* iHomeFinder listings will be connected here in the future. */}
            Listings placeholder for {cityHub.city}, {cityHub.state}.
          </div>
        </div>
      </section>
    </div>
  );
}
