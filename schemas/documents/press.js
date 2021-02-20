export default {
  name: 'press',
  type: 'document',
  title: 'Press',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    },
    {
      name: 'link',
      title: 'Link',
      type: 'array',
      of: [{ type: 'videoUrl' }]
    },
  ]
}