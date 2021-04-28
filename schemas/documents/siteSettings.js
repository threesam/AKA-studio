export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'image',
      type: 'featuredMedia',
      title: 'Site Image',
      description: 'main branding'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe ArtKillingApathy for search engines and social media.'
    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Excerpt',
      description: 'About ArtKillingApathy.'
    },
    {
      name: 'author',
      type: 'reference',
      description: 'Publish an author and set a reference to them here.',
      title: 'Author',
      to: [{ type: 'author' }]
    },
    {
      name: 'wordCloud',
      type: 'wordCloud',
      title: 'WordCloud'
    }
  ]
}
