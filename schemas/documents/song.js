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
      name: 'cover',
      type: 'coverImage',
      title: 'Cover'
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
        },
        {
          type: 'reference',
          to: [{ type: 'author' }]
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