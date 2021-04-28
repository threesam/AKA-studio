export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          name: 'content',
          type: 'reference',
          to: [
            {
              type: 'post'
            }
          ]
        }
      ]
    }
  ],
}