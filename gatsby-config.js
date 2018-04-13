module.exports = {
  siteMetadata: {
    title: 'Matt Welson',
    siteUrl: 'https://mattwelson.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-smartypants',
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-prismjs'
          }
        ]
      }
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-WJTDDHC',
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false
      }
    },
    'gatsby-plugin-sitemap'
  ]
}
