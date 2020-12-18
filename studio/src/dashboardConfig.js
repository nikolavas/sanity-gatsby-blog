export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fdc70c26e0c5aa6fad00e12',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-yyj4zgbo',
                  apiId: '59468385-93e6-467c-906b-d838204dd805'
                },
                {
                  buildHookId: '5fdc70c2127ec7bfc3ecfa99',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-wc8qz3we',
                  apiId: 'ca96182e-41ec-4bd0-9d4c-595733e6ab04'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nikolavas/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-wc8qz3we.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
