export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5ec3b91578ebf47084da7a59',
                  title: 'Sanity Studio',
                  name: 'envdeck-marketing-studio',
                  apiId: '4651b540-81e2-4807-857a-03888d915682'
                },
                {
                  buildHookId: '5ec3b91578ebf4663cda7d34',
                  title: 'Blog Website',
                  name: 'envdeck-marketing',
                  apiId: 'de4352f8-8674-44f1-bc36-c200f268c6c3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/FreakyTurtle/envdeck-marketing',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://envdeck-marketing.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
