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
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'featuredMedia',
      type: 'featuredMedia',
      title: 'Cover Image'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
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
  ]
}