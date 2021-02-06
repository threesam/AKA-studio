export default {
  name: 'tag',
  type: 'document',
  title: 'Tag',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      type: 'slug',
      name: 'slug',
      title: 'Slug'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    }
  ]
}