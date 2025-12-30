import { client, urlFor } from './sanity'

export interface Listing {
  _id: string
  _type: 'listing'
  slug: {
    current: string
  }
  listingCore?: {
    listingId?: string
    mlsId?: string
    status?: string
    featured?: boolean
    featuredRank?: number
    price?: number
    priceDisplay?: string
  }
  address?: {
    addressLine1?: string
    addressLine2?: string
    city?: string
    state?: string
    zip?: string
    county?: string
  }
  propertyDetails?: {
    propertyType?: string
    yearBuilt?: number
    beds?: number
    bathsFull?: number
    bathsHalf?: number
    sqft?: number
    lotSqft?: number
    garageSpaces?: number
    hoa?: boolean
    hoaFee?: number
    hoaFrequency?: string
    taxesAnnual?: number
    schoolDistrict?: string
  }
  content?: {
    headline?: string
    summary?: string
    descriptionLong?: any
    highlights?: string[]
    faq?: Array<{
      question?: string
      answer?: string
    }>
  }
  niceToHave?: {
    tags?: string[]
  }
  media?: {
    heroImage?: {
      asset?: {
        _ref: string
        _type: string
      }
      alt?: string
      caption?: string
    }
    heroVideoUrl?: string
    gallery?: Array<{
      asset?: {
        _ref: string
        _type: string
      }
      alt?: string
      caption?: string
      sortOrder?: number
    }>
    videoUrls?: Array<{
      url?: string
      title?: string
      description?: string
    }>
    matterportUrl?: string
  }
  seo?: {
    slug?: {
      current: string
    }
    canonicalUrl?: string
    metaTitle?: string
    metaDescription?: string
    ogTitle?: string
    ogDescription?: string
    ogImage?: {
      asset?: {
        _ref: string
        _type: string
      }
    }
  }
    agentAssociation?: {
      agentId?: {
        _ref: string
        _type: string
        name?: string
        title?: string
        phone?: string
        email?: string
        bio?: string
        slug?: {
          current: string
        }
        image?: {
          asset?: {
            _ref: string
            _type: string
          }
        }
      }
    }
}

// Fetch all listings from Sanity
export async function getAllListings(): Promise<Listing[]> {
  const query = `*[_type == "listing" && listingCore.status == "active"] | order(listingCore.featuredRank asc, listingCore.price asc) {
    _id,
    _type,
    listingCore,
    address,
    propertyDetails,
    content {
      headline,
      summary,
      descriptionLong,
      highlights,
      faq[] {
        question,
        answer
      }
    },
    niceToHave {
      tags
    },
    media {
      heroImage {
        asset {
          _ref,
          _type
        },
        alt,
        caption
      },
      heroVideoUrl,
      gallery[] {
        asset {
          _ref,
          _type
        },
        alt,
        caption,
        sortOrder
      }
    },
    seo {
      slug {
        current
      },
      metaTitle,
      metaDescription
    },
    agentAssociation {
      agentId-> {
        _id,
        _ref,
        _type,
        name,
        title,
        phone,
        email,
        bio,
        slug {
          current
        },
        image {
          asset {
            _ref,
            _type
          },
          alt
        }
      }
    }
  }`
  
  try {
    const listings = await client.fetch(query);
    // Map the slug from seo.slug.current to the expected format
    return listings.map((listing: any) => ({
      ...listing,
      slug: listing.seo?.slug ? { current: listing.seo.slug.current } : null,
    }));
  } catch (error) {
    console.error('Error fetching listings:', error)
    return []
  }
}

// Fetch a single listing by slug
export async function getListingBySlug(slug: string): Promise<Listing | null> {
  const query = `*[_type == "listing" && seo.slug.current == $slug][0] {
    _id,
    _type,
    listingCore,
    address,
    propertyDetails,
    content {
      headline,
      summary,
      descriptionLong,
      highlights,
      faq[] {
        question,
        answer
      }
    },
    niceToHave {
      tags
    },
    media {
      heroImage {
        asset {
          _ref,
          _type
        },
        alt,
        caption
      },
      heroVideoUrl,
      gallery[] {
        asset {
          _ref,
          _type
        },
        alt,
        caption,
        sortOrder
      },
      videoUrls[] {
        url,
        title,
        description
      },
      matterportUrl
    },
    seo {
      slug {
        current
      },
      canonicalUrl,
      metaTitle,
      metaDescription,
      ogTitle,
      ogDescription,
      ogImage {
        asset {
          _ref,
          _type
        }
      }
    },
    agentAssociation {
      agentId-> {
        _id,
        _ref,
        _type,
        name,
        title,
        phone,
        email,
        bio,
        slug {
          current
        },
        image {
          asset {
            _ref,
            _type
          },
          alt
        }
      }
    },
    ctas {
      primaryCtaLabel,
      primaryCtaType,
      primaryCtaDestination,
      secondaryCtaLabel,
      secondaryCtaDestination
    },
    contactSettings {
      primaryContactMethod,
      calendlyLink
    }
  }`
  
  try {
    const listing = await client.fetch(query, { slug });
    if (!listing) return null;
    // Map the slug from seo.slug.current to the expected format
    return {
      ...listing,
      slug: listing.seo?.slug ? { current: listing.seo.slug.current } : null,
    };
  } catch (error) {
    console.error('Error fetching listing by slug:', error)
    return null
  }
}

// Get listing image URL
export function getListingImageUrl(image: any): string | null {
  if (!image?.asset) return null
  return urlFor(image).url() || null
}

// Format price for display
export function formatPrice(price: number | undefined, priceDisplay?: string): string {
  if (priceDisplay) return priceDisplay
  if (!price) return 'Price on request'
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price)
}

// Format address
export function formatAddress(address: Listing['address']): string {
  if (!address) return ''
  const parts = [
    address.addressLine1,
    address.addressLine2,
    address.city,
    address.state,
    address.zip,
  ].filter(Boolean)
  return parts.join(', ')
}

