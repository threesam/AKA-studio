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
      name: 'items',
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