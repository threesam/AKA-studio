export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
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