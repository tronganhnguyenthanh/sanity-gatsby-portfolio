export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5def06c9c3cc96e0971c647b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-n22644io',
                  apiId: '60c4335b-42d7-4268-b8d0-1a76a7c0b76e'
                },
                {
                  buildHookId: '5def06c97c039ccf7fd63290',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-f8pbq5y6',
                  apiId: 'c0e6216e-b1f4-41a3-9d58-9197fa8de9bc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tronganhnguyenthanh/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-f8pbq5y6.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
