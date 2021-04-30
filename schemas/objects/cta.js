export default {
  type: 'object',
  name: 'cta',
  title: 'Call To Action',
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Text',
      validation: Rule => Rule.error('You have to include text, such as: "Buy now", "Support", "Learn More", etc.').required(),
    },
    {
      name: 'url',
      type: 'url',
      title: 'Link',
      validation: Rule => Rule.error('You have to include a link.').required(),
    },
    {
      name: 'external',
      type: 'boolean',
      title: 'External?',
      initialValue: 'false'
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'For analytics purposes',
      validation: Rule => Rule.error('Must include title for analytics to be accurate.').required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'For analytics purposes',
      validation: Rule => Rule.error('Must generate slug for analytics to be accurate.').required(),
      options: {
        source: 'title',
        maxLength: 96
      }
    }
  ]
}