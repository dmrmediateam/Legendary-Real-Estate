import { Metadata } from 'next';
import Script from 'next/script';

interface ListingPageProps {
  searchParams: Promise<{
    listingPhotoUrl?: string;
    listingPhotoWidth?: string;
    listingPhotoHeight?: string;
    listingAddress?: string;
    listingCity?: string;
  }>;
}

export async function generateMetadata({ 
  searchParams 
}: ListingPageProps): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  
  const {
    listingPhotoUrl,
    listingPhotoWidth,
    listingPhotoHeight,
    listingAddress,
    listingCity
  } = resolvedSearchParams;

  // Default values if not provided
  const address = listingAddress || 'Property Listings';
  const city = listingCity || '';
  const photoUrl = listingPhotoUrl || '';
  const photoWidth = listingPhotoWidth || '1200';
  const photoHeight = listingPhotoHeight || '800';

  const metadata: Metadata = {
    title: address,
    description: `Photos and Property Details for ${address}. Get complete property information, maps, street view, schools, walk score and more. Request additional information, schedule a showing, save to your property organizer.`,
    keywords: `${address}${city ? `, ${city} Real Estate, ${city} Property for Sale` : ''}`,
  };

  // Add Open Graph image if photo URL is provided
  if (photoUrl) {
    metadata.openGraph = {
      images: [
        {
          url: photoUrl,
          width: parseInt(photoWidth),
          height: parseInt(photoHeight),
          alt: `${address} property photo`,
        },
      ],
    };
  }

  return metadata;
}

export default async function ListingPage({ searchParams }: ListingPageProps) {
  return (
    <>
      {/* iHomeFinder Kestrel Render Script */}
      <Script
        id="ihf-kestrel-listing-render"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof window !== 'undefined' && window.ihfKestrel && window.ihfKestrel.render) {
              document.currentScript.replaceWith(ihfKestrel.render());
            }
          `,
        }}
      />
    </>
  );
}
