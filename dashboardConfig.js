// dashboardConfig.js
export default {
  widgets: [
    {
      name: 'document-list',
      options: {
        title: 'Last edited posts',
        order: '_updatedAt desc',
        types: ['post']
      },
      layout: {
        width: 'medium',
        height: 'auto'
      }
    },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: "https://api.netlify.com/build_hooks/60282d2bd15e45c5d15c5043",
                  title: 'Studio',
                  name: 'aka-studio',
                  apiId: "d67a9607-ad9a-412a-8ad7-3cd319f26b81"
                },
                {
                  buildHookId: "https://api.netlify.com/build_hooks/60282eceb3c4aca11e075b01",
                  title: 'Website',
                  name: 'aka-client',
                  apiId: "9570c49a-0166-45e8-89dc-6e1539201be6"
                }
              ]
            }
          },
          {
            name: 'analytics'
          }
        ]
      }
    },
    {
      name: 'project-users',
      layout: {
        width: 'small',
        height: 'auto'
      }
    }
    // {
    //   name: 'document-list',
    //   options: {
    //     title: 'Last edited documents',
    //     order: '_updatedAt desc',
    //   },
    //   layout: {
    //     width: 'auto',
    //     height: 'medium'
    //   }
    // },
  ]
}
