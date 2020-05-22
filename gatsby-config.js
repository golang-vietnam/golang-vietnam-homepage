const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Golang Vietnam`,
    description: `Golang Community in Vietnam.`,
    author: `@golang-vietnam`
  },
  pathPrefix: `/img`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/sources`,
        name: 'sources'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: []
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `golang-community-in-vietname`,
        short_name: `golang-vietnam`,
        start_url: `/`,
        background_color: `#3BA2BC`,
        theme_color: `#3BA2BC`,
        display: `minimal-ui`,
        icon: `src/images/gopher-icon.png` // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        sources: path.join(__dirname, 'sources/'),
        root: path.join(__dirname, 'src/'),
        containers: path.join(__dirname, 'src/containers'),
        components: path.join(__dirname, 'src/components'),
        utils: path.join(__dirname, 'src/utils'),
        assets: path.join(__dirname, 'src/assets'),
        css: path.join(__dirname, 'src/css'),
        shared: path.join(__dirname, 'src/shared'),
        cms: path.join(__dirname, 'src/cms'),
        data: path.join(__dirname, 'src/data'),
        images: path.join(__dirname, 'src/images')
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
        purgeOnly: ['src/css/style.css'] // Purge only tailwind
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    }
  ]
};
