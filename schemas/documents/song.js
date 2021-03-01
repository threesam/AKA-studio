export default {
  name: 'song',
  type: 'document',
  title: 'Song',
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
      description: 'Some frontends will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'cover',
      type: 'coverImage',
      title: 'Cover'
    },
    {
      name: 'collection',
      type: 'reference',
      title: 'Collection',
      to: [{ type: 'collection' }]
    },
    {
      name: 'lyrics',
      type: 'text',
      title: 'Lyrics'
    },
    {
      name: 'credits',
      type: 'array',
      title: 'Credits',
      of: [
        {
          type: 'string',
        }
      ]
    },
    {
      name: 'audio',
      type: 'file',
      title: 'Audio'
    }
  ]
}