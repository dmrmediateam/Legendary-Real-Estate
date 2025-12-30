import { defineField, defineType } from 'sanity'
import blockContent from './blockContent'

export default defineType({
  name: 'listing',
  title: 'Our Listings',
  type: 'document',
  fields: [
    // Listing Core
    {
      name: 'listingCore',
      title: 'Listing Core Information',
      type: 'object',
      fields: [
        defineField({
          name: 'listingId',
          title: 'Listing ID (Internal UUID)',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'mlsId',
          title: 'MLS ID',
          type: 'string',
        }),
        defineField({
          name: 'status',
          title: 'Status',
          type: 'string',
          options: {
            list: [
              { title: 'Draft', value: 'draft' },
              { title: 'Active', value: 'active' },
              { title: 'Pending', value: 'pending' },
              { title: 'Sold', value: 'sold' },
              { title: 'Archived', value: 'archived' },
            ],
          },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'featured',
          title: 'Featured',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'featuredRank',
          title: 'Featured Rank (for ordering)',
          type: 'number',
        }),
        defineField({
          name: 'price',
          title: 'Price',
          type: 'number',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'priceDisplay',
          title: 'Price Display (optional string)',
          type: 'string',
        }),
      ],
    },

    // Address
    {
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        defineField({
          name: 'addressLine1',
          title: 'Address Line 1',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'addressLine2',
          title: 'Address Line 2',
          type: 'string',
        }),
        defineField({
          name: 'city',
          title: 'City',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'state',
          title: 'State',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'zip',
          title: 'ZIP Code',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'county',
          title: 'County',
          type: 'string',
        }),
        defineField({
          name: 'lat',
          title: 'Latitude',
          type: 'number',
        }),
        defineField({
          name: 'lng',
          title: 'Longitude',
          type: 'number',
        }),
      ],
    },

    // Property Details
    {
      name: 'propertyDetails',
      title: 'Property Details',
      type: 'object',
      fields: [
        defineField({
          name: 'propertyType',
          title: 'Property Type',
          type: 'string',
          options: {
            list: [
              { title: 'Single Family', value: 'single_family' },
              { title: 'Condo', value: 'condo' },
              { title: 'Townhouse', value: 'townhouse' },
              { title: 'Land', value: 'land' },
              { title: 'Multi-Family', value: 'multi_family' },
              { title: 'Commercial', value: 'commercial' },
            ],
          },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'yearBuilt',
          title: 'Year Built',
          type: 'number',
        }),
        defineField({
          name: 'beds',
          title: 'Bedrooms',
          type: 'number',
        }),
        defineField({
          name: 'bathsFull',
          title: 'Full Bathrooms',
          type: 'number',
        }),
        defineField({
          name: 'bathsHalf',
          title: 'Half Bathrooms',
          type: 'number',
        }),
        defineField({
          name: 'sqft',
          title: 'Square Feet',
          type: 'number',
        }),
        defineField({
          name: 'lotSqft',
          title: 'Lot Square Feet',
          type: 'number',
        }),
        defineField({
          name: 'acres',
          title: 'Acres',
          type: 'number',
        }),
        defineField({
          name: 'garageSpaces',
          title: 'Garage Spaces',
          type: 'number',
        }),
        defineField({
          name: 'hoa',
          title: 'HOA',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'hoaFee',
          title: 'HOA Fee',
          type: 'number',
        }),
        defineField({
          name: 'hoaFrequency',
          title: 'HOA Frequency',
          type: 'string',
          options: {
            list: [
              { title: 'Monthly', value: 'monthly' },
              { title: 'Quarterly', value: 'quarterly' },
              { title: 'Annually', value: 'annually' },
            ],
          },
        }),
        defineField({
          name: 'taxesAnnual',
          title: 'Annual Taxes',
          type: 'number',
        }),
        defineField({
          name: 'schoolDistrict',
          title: 'School District',
          type: 'string',
        }),
      ],
    },

    // Public-Facing Content
    {
      name: 'content',
      title: 'Public-Facing Content',
      type: 'object',
      fields: [
        defineField({
          name: 'headline',
          title: 'Headline (Marketing headline, not just address)',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'summary',
          title: 'Summary (1-2 sentence quick pitch)',
          type: 'text',
          rows: 2,
        }),
        defineField({
          name: 'descriptionLong',
          title: 'Long Description',
          type: 'blockContent',
        }),
        defineField({
          name: 'highlights',
          title: 'Highlights',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({
          name: 'renovationsUpgrades',
          title: 'Renovations & Upgrades',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({
          name: 'disclosures',
          title: 'Disclosures',
          type: 'blockContent',
        }),
        defineField({
          name: 'faq',
          title: 'FAQ',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'question', type: 'string', title: 'Question' },
                { name: 'answer', type: 'text', title: 'Answer', rows: 3 },
              ],
            },
          ],
        }),
      ],
    },

    // Media
    {
      name: 'media',
      title: 'Media',
      type: 'object',
      fields: [
        defineField({
          name: 'heroMedia',
          title: 'Hero Media (Image/Video)',
          type: 'object',
          fields: [
            { name: 'type', type: 'string', options: { list: ['image', 'video'] } },
            { name: 'assetId', type: 'string' },
            { name: 'url', type: 'url' },
            { name: 'title', type: 'string' },
            { name: 'caption', type: 'text' },
            { name: 'altText', type: 'string' },
            { name: 'width', type: 'number' },
            { name: 'height', type: 'number' },
            { name: 'sizeBytes', type: 'number' },
          ],
        }),
        defineField({
          name: 'gallery',
          title: 'Gallery',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'assetId', type: 'string', title: 'Asset ID' },
                { name: 'type', type: 'string', title: 'Type', options: { list: ['image', 'video'] } },
                { name: 'url', type: 'url', title: 'URL' },
                { name: 'title', type: 'string', title: 'Title' },
                { name: 'caption', type: 'text', title: 'Caption' },
                { name: 'altText', type: 'string', title: 'Alt Text' },
                { name: 'width', type: 'number', title: 'Width' },
                { name: 'height', type: 'number', title: 'Height' },
                { name: 'sizeBytes', type: 'number', title: 'Size (bytes)' },
                { name: 'sortOrder', type: 'number', title: 'Sort Order' },
              ],
            },
          ],
        }),
        defineField({
          name: 'videoUrl',
          title: 'Video URL (YouTube/Vimeo)',
          type: 'url',
        }),
        defineField({
          name: 'videoEmbedSettings',
          title: 'Video Embed Settings',
          type: 'object',
          fields: [
            { name: 'autoplay', type: 'boolean' },
            { name: 'loop', type: 'boolean' },
            { name: 'muted', type: 'boolean' },
          ],
        }),
        defineField({
          name: 'matterportUrl',
          title: 'Matterport URL (3D Tour)',
          type: 'url',
        }),
        defineField({
          name: 'floorplans',
          title: 'Floor Plans',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'fileId', type: 'string', title: 'File ID' },
                { name: 'url', type: 'url', title: 'URL' },
                { name: 'title', type: 'string', title: 'Title' },
              ],
            },
          ],
        }),
        defineField({
          name: 'documents',
          title: 'Documents',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'fileId', type: 'string', title: 'File ID' },
                { name: 'url', type: 'url', title: 'URL' },
                { name: 'title', type: 'string', title: 'Title' },
                { name: 'type', type: 'string', title: 'Type', options: { list: ['brochure', 'disclosures', 'other'] } },
              ],
            },
          ],
        }),
      ],
    },

    // Open Houses and Tours
    {
      name: 'openHouses',
      title: 'Open Houses',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'startDatetime', type: 'datetime', title: 'Start Date/Time' },
            { name: 'endDatetime', type: 'datetime', title: 'End Date/Time' },
            { name: 'timezone', type: 'string', title: 'Timezone' },
            { name: 'instructions', type: 'text', title: 'Instructions (gate code, parking)' },
          ],
        },
      ],
    },
    defineField({
      name: 'showingInstructions',
      title: 'Showing Instructions',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'calendarLink',
      title: 'Calendar Link',
      type: 'url',
    }),

    // CTAs and Lead Routing
    {
      name: 'cta',
      title: 'Call to Action',
      type: 'object',
      fields: [
        defineField({
          name: 'primaryCtaLabel',
          title: 'Primary CTA Label',
          type: 'string',
        }),
        defineField({
          name: 'primaryCtaType',
          title: 'Primary CTA Type',
          type: 'string',
          options: {
            list: [
              { title: 'Form', value: 'form' },
              { title: 'Phone', value: 'phone' },
              { title: 'SMS', value: 'sms' },
              { title: 'Calendar', value: 'calendar' },
              { title: 'External', value: 'external' },
            ],
          },
        }),
        defineField({
          name: 'primaryCtaDestination',
          title: 'Primary CTA Destination',
          type: 'string',
        }),
        defineField({
          name: 'secondaryCtaLabel',
          title: 'Secondary CTA Label',
          type: 'string',
        }),
        defineField({
          name: 'secondaryCtaDestination',
          title: 'Secondary CTA Destination',
          type: 'string',
        }),
        defineField({
          name: 'leadFormId',
          title: 'Lead Form ID',
          type: 'string',
        }),
      ],
    },
    {
      name: 'leadRouting',
      title: 'Lead Routing',
      type: 'object',
      fields: [
        defineField({
          name: 'agentId',
          title: 'Agent ID (default)',
          type: 'reference',
          to: { type: 'agent' },
        }),
        defineField({
          name: 'teamId',
          title: 'Team ID (optional)',
          type: 'string',
        }),
        defineField({
          name: 'fallbackContact',
          title: 'Fallback Contact',
          type: 'string',
        }),
      ],
    },

    // Agent / Brokerage Association
    {
      name: 'agentAssociation',
      title: 'Agent / Brokerage Association',
      type: 'object',
      fields: [
        defineField({
          name: 'agentId',
          title: 'Agent ID (who owns the listing)',
          type: 'reference',
          to: { type: 'agent' },
        }),
        defineField({
          name: 'coAgentIds',
          title: 'Co-Agent IDs',
          type: 'array',
          of: [{ type: 'reference', to: { type: 'agent' } }],
        }),
        defineField({
          name: 'brokerageId',
          title: 'Brokerage ID',
          type: 'string',
        }),
        defineField({
          name: 'agentDisplayOverrides',
          title: 'Agent Display Overrides (e.g., "Listed by...")',
          type: 'text',
        }),
      ],
    },

    // Location Context
    {
      name: 'locationContext',
      title: 'Location Context',
      type: 'object',
      fields: [
        defineField({
          name: 'neighborhoodName',
          title: 'Neighborhood Name',
          type: 'string',
        }),
        defineField({
          name: 'neighborhoodDescription',
          title: 'Neighborhood Description',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'nearbyPoints',
          title: 'Nearby Points',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'name', type: 'string', title: 'Name' },
                { name: 'type', type: 'string', title: 'Type', options: { list: ['school', 'park', 'downtown', 'other'] } },
                { name: 'lat', type: 'number', title: 'Latitude' },
                { name: 'lng', type: 'number', title: 'Longitude' },
                { name: 'distance', type: 'string', title: 'Distance' },
                { name: 'url', type: 'url', title: 'URL' },
              ],
            },
          ],
        }),
        defineField({
          name: 'commuteTimes',
          title: 'Commute Times',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'destination', type: 'string', title: 'Destination' },
                { name: 'minutes', type: 'number', title: 'Minutes' },
                { name: 'mode', type: 'string', title: 'Mode', options: { list: ['driving', 'transit', 'walking', 'biking'] } },
              ],
            },
          ],
        }),
      ],
    },

    // SEO Fields
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({
          name: 'slug',
          title: 'Slug (unique)',
          type: 'slug',
          options: {
            source: 'content.headline',
            maxLength: 96,
          },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'canonicalUrl',
          title: 'Canonical URL',
          type: 'url',
        }),
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'ogTitle',
          title: 'OG Title',
          type: 'string',
        }),
        defineField({
          name: 'ogDescription',
          title: 'OG Description',
          type: 'text',
          rows: 2,
        }),
        defineField({
          name: 'ogImage',
          title: 'OG Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'indexing',
          title: 'Indexing',
          type: 'object',
          fields: [
            { name: 'index', type: 'boolean', title: 'Index', initialValue: true },
            { name: 'follow', type: 'boolean', title: 'Follow', initialValue: true },
          ],
        }),
        defineField({
          name: 'schemaOverrides',
          title: 'Schema Overrides (JSON)',
          type: 'text',
        }),
      ],
    },

    // Internal Links
    defineField({
      name: 'internalLinks',
      title: 'Internal Links',
      type: 'object',
      fields: [
        {
          name: 'relatedCommunities',
          title: 'Related Communities',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          name: 'relatedGuides',
          title: 'Related Guides',
          type: 'array',
          of: [{ type: 'string' }],
        },
      ],
    }),

    // Analytics / Tracking
    {
      name: 'analytics',
      title: 'Analytics / Tracking',
      type: 'object',
      fields: [
        defineField({
          name: 'utmTemplate',
          title: 'UTM Template',
          type: 'string',
        }),
        defineField({
          name: 'conversionEvents',
          title: 'Conversion Events',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({
          name: 'trackingPixels',
          title: 'Tracking Pixels',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({
          name: 'pageViews',
          title: 'Page Views',
          type: 'number',
          initialValue: 0,
        }),
        defineField({
          name: 'leadCount',
          title: 'Lead Count',
          type: 'number',
          initialValue: 0,
        }),
      ],
    },

    // Admin + Governance
    {
      name: 'admin',
      title: 'Admin + Governance',
      type: 'object',
      fields: [
        defineField({
          name: 'createdAt',
          title: 'Created At',
          type: 'datetime',
        }),
        defineField({
          name: 'updatedAt',
          title: 'Updated At',
          type: 'datetime',
        }),
        defineField({
          name: 'publishedAt',
          title: 'Published At',
          type: 'datetime',
        }),
        defineField({
          name: 'createdBy',
          title: 'Created By',
          type: 'string',
        }),
        defineField({
          name: 'updatedBy',
          title: 'Updated By',
          type: 'string',
        }),
        defineField({
          name: 'approvalStatus',
          title: 'Approval Status',
          type: 'string',
          options: {
            list: [
              { title: 'Draft', value: 'draft' },
              { title: 'Pending Review', value: 'pending_review' },
              { title: 'Approved', value: 'approved' },
              { title: 'Rejected', value: 'rejected' },
            ],
          },
        }),
        defineField({
          name: 'notesInternal',
          title: 'Internal Notes (not public)',
          type: 'text',
          rows: 4,
        }),
      ],
    },

    // Nice to Have
    {
      name: 'niceToHave',
      title: 'Nice to Have',
      type: 'object',
      fields: [
        defineField({
          name: 'tags',
          title: 'Tags',
          type: 'array',
          of: [{ type: 'string' }],
          options: {
            list: [
              { title: 'Lakefront', value: 'lakefront' },
              { title: 'New Construction', value: 'new_construction' },
              { title: 'Gated', value: 'gated' },
              { title: 'Luxury', value: 'luxury' },
            ],
          },
        }),
        defineField({
          name: 'priceHistory',
          title: 'Price History',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'date', type: 'datetime', title: 'Date' },
                { name: 'price', type: 'number', title: 'Price' },
                { name: 'notes', type: 'string', title: 'Notes' },
              ],
            },
          ],
        }),
        defineField({
          name: 'statusHistory',
          title: 'Status History',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'date', type: 'datetime', title: 'Date' },
                { name: 'status', type: 'string', title: 'Status' },
                { name: 'notes', type: 'string', title: 'Notes' },
              ],
            },
          ],
        }),
        defineField({
          name: 'relatedListings',
          title: 'Related Listings',
          type: 'array',
          of: [{ type: 'reference', to: { type: 'listing' } }],
        }),
        defineField({
          name: 'socialShareCaption',
          title: 'Social Share Caption',
          type: 'text',
          rows: 2,
        }),
      ],
    },
  ],
  preview: {
    select: {
      title: 'content.headline',
      subtitle: 'listingCore.price',
      media: 'media.heroMedia',
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        ...selection,
        subtitle: subtitle ? `$${subtitle.toLocaleString()}` : 'No price set',
      }
    },
  },
})


