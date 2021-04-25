export default {
  title: 'Word Cloud',
  name: 'wordCloud',
  type: 'object',
  fields: [
    {
      title: 'Shape',
      name: 'shape',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Select only one',
      options: {
        list: [
          { title: 'Circle', value: 'circle' },
          { title: 'Diamond', value: 'diamond' },
          { title: 'Cardioid', value: 'cardioid' },
          { title: 'Pentagon', value: 'pentagon' },
          { title: 'Star', value: 'star' },
          { title: 'Triangle', value: 'triangle' },
          { title: 'Triangle-forward', value: 'triangle-forward' }
        ],
        layout: 'tags'
      }
    },
    {
      title: 'Useless Words',
      name: 'uselessWords',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.unique()
    }
  ]
}