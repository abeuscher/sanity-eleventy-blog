export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
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
                  buildHookId: '62cc8a7d0a2bbd046f3bba3c',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-mfmzq62p',
                  apiId: '63440515-a476-4d0d-af87-137388aa329a'
                },
                {
                  buildHookId: '62cc8a7dd0b01f04541cbb2b',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-nsmg5f79',
                  apiId: '4792d471-7ab9-45da-aedb-f37ecf259eaa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/abeuscher/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-nsmg5f79.netlify.app', category: 'apps'}
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
