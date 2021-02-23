export default {
  name: 'collection',
  type: 'document',
  title: 'Collection',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      type: 'array',
      name: 'documents',
      of: [
        {
          name: 'postRef',
          type: 'reference',
          title: 'Posts',
          to: [{ type: 'post' }]
        },
        {
          name: 'songRef',
          type: 'reference',
          title: 'Songs',
          to: [{ type: 'song' }]
        },
        {
          name: 'pressRef',
          type: 'reference',
          title: 'Press',
          to: [{ type: 'press' }]
        }
      ]
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    }
  ]
}