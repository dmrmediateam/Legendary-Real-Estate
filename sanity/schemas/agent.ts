import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'agent',
  title: 'Agent',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g., Broker, Agent, Associate Broker, etc.',
      options: {
        list: [
          { title: 'Broker', value: 'Broker' },
          { title: 'Associate Broker', value: 'Associate Broker' },
          { title: 'Real Estate Agent', value: 'Real Estate Agent' },
          { title: 'Sales Associate', value: 'Sales Associate' },
          { title: 'Managing Broker', value: 'Managing Broker' },
        ],
      },
    }),
    defineField({
      name: 'realEstateLicense',
      title: 'Real Estate License',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.email().required(),
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      license: 'realEstateLicense',
      media: 'image',
    },
    prepare(selection) {
      const { title, subtitle, license } = selection
      return {
        ...selection,
        subtitle: subtitle ? `${subtitle} • ${license}` : license,
      }
    },
  },
})


