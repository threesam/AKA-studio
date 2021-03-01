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
  ],
  orderings: [
    {
      name: 'nameAsc',
      title: 'Alphabetized',
      by: [
        {
          field: 'name',
          direction: 'desc'
        }
      ]
    },
    {
      name: 'nameDesc',
      title: 'Alphabetized',
      by: [
        {
          field: 'name',
          direction: 'asc'
        }
      ]
    }
  ]
}