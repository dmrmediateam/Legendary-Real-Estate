import { defineField, defineType } from 'sanity'
import blockContent from './blockContent'

export default defineType({
  name: 'brandSettings',
  title: 'Brand Settings',
  type: 'document',
  __experimental_formPreviewTitle: false,
  fields: [
    // Core Identity
    {
      name: 'coreIdentity',
      title: 'Core Identity',
      type: 'object',
      fields: [
        defineField({
          name: 'brandName',
          title: 'Brand Name (Short)',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'legalName',
          title: 'Legal Name',
          type: 'string',
        }),
        defineField({
          name: 'tagline',
          title: 'Tagline / Value Proposition',
          type: 'string',
          description: 'One-liner tagline',
        }),
        defineField({
          name: 'brandVoice',
          title: 'Brand Voice',
          type: 'object',
          fields: [
            {
              name: 'description',
              type: 'text',
              title: 'Description',
              rows: 3,
            },
            {
              name: 'doExamples',
              type: 'array',
              title: 'Do Examples',
              of: [{ type: 'string' }],
            },
            {
              name: 'dontExamples',
              type: 'array',
              title: "Don't Examples",
              of: [{ type: 'string' }],
            },
          ],
        }),
        defineField({
          name: 'defaultLocation',
          title: 'Default Location / Market',
          type: 'object',
          fields: [
            { name: 'city', type: 'string' },
            { name: 'state', type: 'string' },
            { name: 'serviceArea', type: 'text', rows: 2 },
          ],
        }),
      ],
    },

    // Logos
    {
      name: 'logos',
      title: 'Logos',
      type: 'object',
      fields: [
        defineField({
          name: 'primaryLogo',
          title: 'Primary Logo (SVG preferred)',
          type: 'image',
          options: {
            accept: '.svg,.png,.jpg',
          },
        }),
        defineField({
          name: 'secondaryLogo',
          title: 'Secondary Logo (Stacked/Horizontal)',
          type: 'image',
        }),
        defineField({
          name: 'markLogo',
          title: 'Mark/Icon-Only Logo',
          type: 'image',
        }),
        defineField({
          name: 'favicon',
          title: 'Favicon',
          type: 'image',
        }),
        defineField({
          name: 'socialSharingImage',
          title: 'Social Sharing Image (OG Image)',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'lightLogo',
          title: 'Light Variant Logo',
          type: 'image',
        }),
        defineField({
          name: 'darkLogo',
          title: 'Dark Variant Logo',
          type: 'image',
        }),
      ],
    },

    // Color System
    {
      name: 'colors',
      title: 'Color System',
      type: 'object',
      fields: [
        defineField({
          name: 'primary',
          title: 'Primary Color',
          type: 'string',
          description: 'Hex color code (e.g., #890100)',
          validation: (Rule) => Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/).error('Must be a valid hex color'),
        }),
        defineField({
          name: 'secondary',
          title: 'Secondary Color',
          type: 'string',
          description: 'Hex color code',
          validation: (Rule) => Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
        }),
        defineField({
          name: 'accent',
          title: 'Accent Color',
          type: 'string',
          description: 'Hex color code',
          validation: (Rule) => Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
        }),
        defineField({
          name: 'background',
          title: 'Background Color',
          type: 'string',
          description: 'Hex color code',
          validation: (Rule) => Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
        }),
        defineField({
          name: 'surface',
          title: 'Surface Color (Cards)',
          type: 'string',
          description: 'Hex color code',
          validation: (Rule) => Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
        }),
        defineField({
          name: 'textPrimary',
          title: 'Text Primary Color',
          type: 'string',
          description: 'Hex color code',
          validation: (Rule) => Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
        }),
        defineField({
          name: 'textSecondary',
          title: 'Text Secondary Color',
          type: 'string',
          description: 'Hex color code',
          validation: (Rule) => Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
        }),
        defineField({
          name: 'border',
          title: 'Border Color',
          type: 'string',
          description: 'Hex color code',
          validation: (Rule) => Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
        }),
        defineField({
          name: 'success',
          title: 'Success Color',
          type: 'string',
          description: 'Hex color code',
          validation: (Rule) => Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
        }),
        defineField({
          name: 'warn',
          title: 'Warning Color',
          type: 'string',
          description: 'Hex color code',
          validation: (Rule) => Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
        }),
        defineField({
          name: 'error',
          title: 'Error Color',
          type: 'string',
          description: 'Hex color code',
          validation: (Rule) => Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
        }),
        defineField({
          name: 'gradients',
          title: 'Gradients (Optional)',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'name', type: 'string', title: 'Gradient Name' },
                { name: 'from', type: 'string', title: 'From Color' },
                { name: 'to', type: 'string', title: 'To Color' },
                { name: 'direction', type: 'string', title: 'Direction', options: { list: ['to-r', 'to-b', 'to-l', 'to-t', 'to-br', 'to-bl', 'to-tr', 'to-tl'] } },
              ],
            },
          ],
        }),
      ],
    },

    // Typography
    {
      name: 'typography',
      title: 'Typography',
      type: 'object',
      fields: [
        defineField({
          name: 'headingFont',
          title: 'Heading Font Family',
          type: 'string',
          description: 'Google Font name or font stack',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'bodyFont',
          title: 'Body Font Family',
          type: 'string',
          description: 'Google Font name or font stack',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'fontWeights',
          title: 'Font Weights Used',
          type: 'array',
          of: [{ type: 'string' }],
          options: {
            list: [
              { title: '100 - Thin', value: '100' },
              { title: '200 - Extra Light', value: '200' },
              { title: '300 - Light', value: '300' },
              { title: '400 - Normal', value: '400' },
              { title: '500 - Medium', value: '500' },
              { title: '600 - Semi Bold', value: '600' },
              { title: '700 - Bold', value: '700' },
              { title: '800 - Extra Bold', value: '800' },
              { title: '900 - Black', value: '900' },
            ],
          },
        }),
        defineField({
          name: 'typeScale',
          title: 'Type Scale',
          type: 'object',
          fields: [
            { name: 'xs', type: 'string', title: 'XS', description: 'e.g., 0.75rem' },
            { name: 'sm', type: 'string', title: 'SM', description: 'e.g., 0.875rem' },
            { name: 'base', type: 'string', title: 'Base', description: 'e.g., 1rem' },
            { name: 'lg', type: 'string', title: 'LG', description: 'e.g., 1.125rem' },
            { name: 'xl', type: 'string', title: 'XL', description: 'e.g., 1.25rem' },
            { name: 'text2xl', type: 'string', title: '2XL', description: 'e.g., 1.5rem' },
            { name: 'text3xl', type: 'string', title: '3XL', description: 'e.g., 1.875rem' },
            { name: 'text4xl', type: 'string', title: '4XL', description: 'e.g., 2.25rem' },
            { name: 'text5xl', type: 'string', title: '5XL', description: 'e.g., 3rem' },
            { name: 'text6xl', type: 'string', title: '6XL', description: 'e.g., 3.75rem' },
          ],
        }),
        defineField({
          name: 'lineHeight',
          title: 'Line Height Preferences',
          type: 'object',
          fields: [
            { name: 'tight', type: 'string', title: 'Tight', description: 'e.g., 1.25' },
            { name: 'normal', type: 'string', title: 'Normal', description: 'e.g., 1.5' },
            { name: 'relaxed', type: 'string', title: 'Relaxed', description: 'e.g., 1.75' },
          ],
        }),
      ],
    },

    // UI Styling
    {
      name: 'uiStyling',
      title: 'UI Styling',
      type: 'object',
      fields: [
        defineField({
          name: 'borderRadius',
          title: 'Border Radius Scale',
          type: 'object',
          fields: [
            { name: 'sm', type: 'string', title: 'Small', description: 'e.g., 0.125rem' },
            { name: 'md', type: 'string', title: 'Medium', description: 'e.g., 0.375rem' },
            { name: 'lg', type: 'string', title: 'Large', description: 'e.g., 0.5rem' },
            { name: 'xl', type: 'string', title: 'XL', description: 'e.g., 0.75rem' },
          ],
        }),
        defineField({
          name: 'shadowStyle',
          title: 'Shadow Style',
          type: 'string',
          options: {
            list: [
              { title: 'None', value: 'none' },
              { title: 'Soft', value: 'soft' },
              { title: 'Medium', value: 'medium' },
              { title: 'Strong', value: 'strong' },
            ],
          },
        }),
        defineField({
          name: 'buttonStyle',
          title: 'Button Style Default',
          type: 'string',
          options: {
            list: [
              { title: 'Filled', value: 'filled' },
              { title: 'Outline', value: 'outline' },
              { title: 'Ghost', value: 'ghost' },
            ],
          },
        }),
        defineField({
          name: 'containerWidth',
          title: 'Container Width Preset',
          type: 'string',
          description: 'e.g., 1280px, 1440px',
        }),
        defineField({
          name: 'sectionSpacing',
          title: 'Section Spacing Preset',
          type: 'string',
          description: 'e.g., 4rem, 6rem',
        }),
      ],
    },

    // Global Layout Content - Header
    {
      name: 'header',
      title: 'Header / Navigation',
      type: 'object',
      fields: [
        defineField({
          name: 'navItems',
          title: 'Primary Nav Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'label', type: 'string', title: 'Label' },
                {
                  name: 'linkType',
                  type: 'string',
                  title: 'Link Type',
                  options: {
                    list: [
                      { title: 'Internal Route', value: 'internal' },
                      { title: 'External URL', value: 'external' },
                      { title: 'Anchor', value: 'anchor' },
                      { title: 'Dropdown', value: 'dropdown' },
                    ],
                  },
                },
                { name: 'href', type: 'string', title: 'Link/Route' },
                {
                  name: 'children',
                  type: 'array',
                  title: 'Dropdown Items',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        { name: 'label', type: 'string' },
                        { name: 'href', type: 'string' },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        }),
        defineField({
          name: 'ctaButton',
          title: 'CTA Button',
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Label' },
            { name: 'href', type: 'string', title: 'Link' },
          ],
        }),
        defineField({
          name: 'stickyHeader',
          title: 'Sticky Header',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'announcementBar',
          title: 'Announcement Bar',
          type: 'object',
          fields: [
            { name: 'enabled', type: 'boolean', title: 'Enabled', initialValue: false },
            { name: 'text', type: 'string', title: 'Text' },
            { name: 'link', type: 'string', title: 'Link' },
            { name: 'startDate', type: 'datetime', title: 'Start Date' },
            { name: 'endDate', type: 'datetime', title: 'End Date' },
          ],
        }),
      ],
    },

    // Footer
    {
      name: 'footer',
      title: 'Footer',
      type: 'object',
      fields: [
        defineField({
          name: 'columns',
          title: 'Footer Columns',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', type: 'string', title: 'Column Title' },
                {
                  name: 'links',
                  type: 'array',
                  title: 'Links',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        { name: 'label', type: 'string' },
                        { name: 'href', type: 'string' },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        }),
        defineField({
          name: 'legalLinks',
          title: 'Legal Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'label', type: 'string' },
                { name: 'href', type: 'string' },
              ],
            },
          ],
        }),
        defineField({
          name: 'address',
          title: 'Address',
          type: 'text',
          rows: 2,
        }),
        defineField({
          name: 'phone',
          title: 'Phone',
          type: 'string',
        }),
        defineField({
          name: 'email',
          title: 'Email',
          type: 'string',
        }),
        defineField({
          name: 'businessHours',
          title: 'Business Hours',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'socialLinks',
          title: 'Social Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'platform',
                  type: 'string',
                  title: 'Platform',
                  options: {
                    list: [
                      { title: 'Facebook', value: 'facebook' },
                      { title: 'Twitter', value: 'twitter' },
                      { title: 'Instagram', value: 'instagram' },
                      { title: 'LinkedIn', value: 'linkedin' },
                      { title: 'YouTube', value: 'youtube' },
                    ],
                  },
                },
                { name: 'url', type: 'url', title: 'URL' },
              ],
            },
          ],
        }),
        defineField({
          name: 'newsletterCopy',
          title: 'Newsletter Signup Copy',
          type: 'text',
          rows: 2,
        }),
      ],
    },

    // SEO + Sharing Defaults
    {
      name: 'seo',
      title: 'SEO + Sharing Defaults',
      type: 'object',
      fields: [
        defineField({
          name: 'siteTitleTemplate',
          title: 'Site Title Template',
          type: 'string',
          description: 'e.g., "{page} | {brand}"',
        }),
        defineField({
          name: 'defaultMetaTitle',
          title: 'Default Meta Title',
          type: 'string',
        }),
        defineField({
          name: 'defaultMetaDescription',
          title: 'Default Meta Description',
          type: 'text',
          rows: 2,
        }),
        defineField({
          name: 'defaultOgTitle',
          title: 'Default OG Title',
          type: 'string',
        }),
        defineField({
          name: 'defaultOgDescription',
          title: 'Default OG Description',
          type: 'text',
          rows: 2,
        }),
        defineField({
          name: 'defaultOgImage',
          title: 'Default OG Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'twitterCardType',
          title: 'Twitter Card Type',
          type: 'string',
          options: {
            list: [
              { title: 'Summary', value: 'summary' },
              { title: 'Summary Large Image', value: 'summary_large_image' },
              { title: 'App', value: 'app' },
              { title: 'Player', value: 'player' },
            ],
          },
        }),
        defineField({
          name: 'robotsDefault',
          title: 'Robots Default',
          type: 'string',
          options: {
            list: [
              { title: 'Index, Follow', value: 'index, follow' },
              { title: 'No Index, No Follow', value: 'noindex, nofollow' },
            ],
          },
        }),
        defineField({
          name: 'organizationSchema',
          title: 'Organization Schema',
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Organization Name' },
            { name: 'logo', type: 'image', title: 'Logo' },
            { name: 'url', type: 'url', title: 'URL' },
            {
              name: 'sameAs',
              type: 'array',
              title: 'Social Profiles (SameAs)',
              of: [{ type: 'url' }],
            },
            { name: 'address', type: 'text', title: 'Address', rows: 2 },
            {
              name: 'contactPoint',
              type: 'object',
              title: 'Contact Point',
              fields: [
                { name: 'type', type: 'string', title: 'Type', options: { list: [{ title: 'Customer Support', value: 'Customer Support' }, { title: 'Sales', value: 'Sales' }] } },
                { name: 'telephone', type: 'string', title: 'Telephone' },
                { name: 'email', type: 'string', title: 'Email' },
              ],
            },
          ],
        }),
      ],
    },

    // Media + Component Defaults
    {
      name: 'mediaDefaults',
      title: 'Media + Component Defaults',
      type: 'object',
      fields: [
        defineField({
          name: 'defaultHeroBackground',
          title: 'Default Hero Background Image/Video',
          type: 'object',
          fields: [
            {
              name: 'type',
              type: 'string',
              title: 'Type',
              options: { list: [{ title: 'Image', value: 'image' }, { title: 'Video', value: 'video' }] },
            },
            { name: 'image', type: 'image', title: 'Image' },
            { name: 'videoUrl', type: 'url', title: 'Video URL' },
          ],
        }),
        defineField({
          name: 'defaultPlaceholderImages',
          title: 'Default Placeholder Images',
          type: 'object',
          fields: [
            { name: 'blog', type: 'image', title: 'Blog Placeholder' },
            { name: 'team', type: 'image', title: 'Team Placeholder' },
            { name: 'testimonials', type: 'image', title: 'Testimonials Placeholder' },
          ],
        }),
        defineField({
          name: 'defaultTestimonials',
          title: 'Default Testimonials',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'name', type: 'string' },
                { name: 'text', type: 'text', rows: 3 },
                { name: 'location', type: 'string' },
                { name: 'image', type: 'image' },
              ],
            },
          ],
        }),
      ],
    },

    // Calls-to-Action System
    {
      name: 'ctas',
      title: 'Calls-to-Action System',
      type: 'object',
      fields: [
        defineField({
          name: 'ctaPresets',
          title: 'CTA Presets',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'id', type: 'string', title: 'ID' },
                { name: 'headline', type: 'string', title: 'Headline' },
                { name: 'subhead', type: 'string', title: 'Subhead' },
                { name: 'buttonLabel', type: 'string', title: 'Button Label' },
                { name: 'buttonLink', type: 'string', title: 'Button Link' },
                {
                  name: 'styleVariant',
                  type: 'string',
                  title: 'Style Variant',
                  options: {
                    list: [
                      { title: 'Primary', value: 'primary' },
                      { title: 'Secondary', value: 'secondary' },
                      { title: 'Outline', value: 'outline' },
                    ],
                  },
                },
                { name: 'image', type: 'image', title: 'Image' },
              ],
            },
          ],
        }),
        defineField({
          name: 'primaryContactCta',
          title: 'Primary Contact CTA',
          type: 'object',
          fields: [
            { name: 'headline', type: 'string' },
            { name: 'subhead', type: 'string' },
            { name: 'buttonLabel', type: 'string' },
            { name: 'buttonLink', type: 'string' },
          ],
        }),
        defineField({
          name: 'leadMagnetCta',
          title: 'Lead Magnet CTA',
          type: 'object',
          fields: [
            { name: 'headline', type: 'string' },
            { name: 'subhead', type: 'string' },
            { name: 'buttonLabel', type: 'string' },
            { name: 'buttonLink', type: 'string' },
          ],
        }),
      ],
    },

    // Contact + Conversion Settings
    {
      name: 'contactSettings',
      title: 'Contact + Conversion Settings',
      type: 'object',
      fields: [
        defineField({
          name: 'primaryContactMethod',
          title: 'Primary Contact Method Preference',
          type: 'string',
          options: {
            list: [
              { title: 'Form', value: 'form' },
              { title: 'Phone', value: 'phone' },
              { title: 'Calendar', value: 'calendar' },
            ],
          },
        }),
        defineField({
          name: 'formRouting',
          title: 'Form Routing',
          type: 'object',
          fields: [
            {
              name: 'recipientEmails',
              type: 'array',
              title: 'Recipient Email(s)',
              of: [{ type: 'string' }],
            },
            { name: 'webhookEndpoint', type: 'url', title: 'CRM/Webhook Endpoint' },
            { name: 'defaultSubject', type: 'string', title: 'Default Subject' },
            { name: 'defaultLabels', type: 'array', title: 'Default Labels', of: [{ type: 'string' }] },
          ],
        }),
        defineField({
          name: 'calendlyLink',
          title: 'Calendly/Booking Link',
          type: 'url',
        }),
        defineField({
          name: 'autoReplyCopy',
          title: 'Auto-Reply Copy',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'successPageMessage',
          title: 'Success Page Message',
          type: 'text',
          rows: 2,
        }),
      ],
    },

    // Analytics / Integrations
    {
      name: 'analytics',
      title: 'Analytics / Integrations',
      type: 'object',
      fields: [
        defineField({
          name: 'ga4MeasurementId',
          title: 'GA4 Measurement ID',
          type: 'string',
        }),
        defineField({
          name: 'gtmContainerId',
          title: 'Google Tag Manager Container ID',
          type: 'string',
        }),
        defineField({
          name: 'metaPixelId',
          title: 'Meta Pixel ID',
          type: 'string',
        }),
        defineField({
          name: 'linkedInInsightTagId',
          title: 'LinkedIn Insight Tag ID',
          type: 'string',
        }),
        defineField({
          name: 'hotjarId',
          title: 'Hotjar/Clarity ID',
          type: 'string',
        }),
        defineField({
          name: 'searchConsoleVerification',
          title: 'Search Console Verification',
          type: 'string',
        }),
        defineField({
          name: 'cookieConsentEnabled',
          title: 'Cookie Consent Enabled',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'cookieConsentProvider',
          title: 'Cookie Consent Provider Config',
          type: 'string',
        }),
      ],
    },

    // Legal + Compliance
    {
      name: 'legal',
      title: 'Legal + Compliance',
      type: 'object',
      fields: [
        defineField({
          name: 'companyLegalName',
          title: 'Company Legal Name',
          type: 'string',
        }),
        defineField({
          name: 'privacyPolicy',
          title: 'Privacy Policy Content',
          type: 'blockContent',
        }),
        defineField({
          name: 'terms',
          title: 'Terms Content',
          type: 'blockContent',
        }),
        defineField({
          name: 'accessibilityStatement',
          title: 'Accessibility Statement',
          type: 'blockContent',
        }),
      ],
    },

    // Theme Presets (Optional)
    {
      name: 'themePresets',
      title: 'Theme Presets',
      type: 'object',
      fields: [
        defineField({
          name: 'activePreset',
          title: 'Active Theme Preset',
          type: 'string',
          options: {
            list: [
              { title: 'Modern', value: 'modern' },
              { title: 'Luxury', value: 'luxury' },
              { title: 'Playful', value: 'playful' },
            ],
          },
        }),
        defineField({
          name: 'presets',
          title: 'Theme Preset Definitions',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'name', type: 'string', title: 'Preset Name' },
                {
                  name: 'colors',
                  type: 'object',
                  title: 'Colors',
                  fields: [
                    { name: 'primary', type: 'string' },
                    { name: 'secondary', type: 'string' },
                    { name: 'accent', type: 'string' },
                  ],
                },
                { name: 'headingFont', type: 'string', title: 'Heading Font' },
                { name: 'bodyFont', type: 'string', title: 'Body Font' },
                { name: 'borderRadius', type: 'string', title: 'Border Radius' },
                { name: 'shadowStyle', type: 'string', title: 'Shadow Style' },
              ],
            },
          ],
        }),
      ],
    },
  ],
  preview: {
    select: {
      title: 'coreIdentity.brandName',
    },
    prepare(selection) {
      return {
        title: selection.title || 'Brand Settings',
        subtitle: 'Global brand configuration',
      }
    },
  },
})

