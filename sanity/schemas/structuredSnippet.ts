import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'structuredSnippet',
  title: 'Structured Snippet (JSON-LD)',
  type: 'object',
  description: 'Structured data for SEO and rich snippets',
  fields: [
    defineField({
      name: 'enable',
      title: 'Enable Structured Data',
      type: 'boolean',
      description: 'Enable structured data for this content',
      initialValue: true,
    }),
    defineField({
      name: 'type',
      title: 'Schema Type',
      type: 'string',
      options: {
        list: [
          { title: 'Article', value: 'Article' },
          { title: 'BlogPosting', value: 'BlogPosting' },
          { title: 'NewsArticle', value: 'NewsArticle' },
          { title: 'RealEstateAgent', value: 'RealEstateAgent' },
          { title: 'Organization', value: 'Organization' },
          { title: 'LocalBusiness', value: 'LocalBusiness' },
        ],
      },
      initialValue: 'BlogPosting',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'The headline of the article (defaults to post title)',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A description of the item (defaults to post description)',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Image URL',
      type: 'url',
      description: 'URL of an image for the item (defaults to main image)',
    }),
    defineField({
      name: 'datePublished',
      title: 'Date Published',
      type: 'datetime',
      description: 'Publication date (defaults to publishedAt)',
    }),
    defineField({
      name: 'dateModified',
      title: 'Date Modified',
      type: 'datetime',
      description: 'Last modified date',
    }),
    defineField({
      name: 'author',
      title: 'Author Name',
      type: 'string',
      description: 'Author name (defaults to post author)',
    }),
    defineField({
      name: 'publisher',
      title: 'Publisher',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Publisher Name',
          type: 'string',
          initialValue: 'Legendary Real Estate Services',
        },
        {
          name: 'logo',
          title: 'Publisher Logo URL',
          type: 'url',
          initialValue: 'https://legendaryrealestateservices.com/images/weichert-logo.svg',
        },
      ],
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Keywords for the article (defaults to post tags)',
    }),
    defineField({
      name: 'articleSection',
      title: 'Article Section',
      type: 'string',
      description: 'The section of the article (defaults to category)',
    }),
    defineField({
      name: 'wordCount',
      title: 'Word Count',
      type: 'number',
      description: 'Approximate word count of the article',
    }),
  ],
})






