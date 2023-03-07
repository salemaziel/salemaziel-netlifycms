const config = require('./config');


module.exports = {
  siteMetadata: {
    // edit below
    title: `Personal Blog and Portfolio for Salem Aziel`,
    author: `Salem Aziel`,
    description: `Personal Blog and Portfolio for Salem Aziel`,
    siteUrl: `https://salemaziel.com/`,
    social: {
      twitter: `salemamb760`,
    },
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-next-seo`,
    },
    `gatsby-plugin-root-import`,
//    {
//      resolve: `gatsby-source-filesystem`,
//      options: {
//        path: `${__dirname}/content/blog`,
//        name: `blog`,
//      },
//    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
//    {
//      resolve: `gatsby-plugin-manifest`,
//      options: {
//        name: `Gatsby Starter Blog`,
//        short_name: `GatsbyJS`,
//        start_url: `/`,
//        background_color: `#ffffff`,
//        theme_color: `#663399`,
//        display: `minimal-ui`,
        // edit below
//        icon: `content/assets/gatsby-icon.png`,
//      },
//    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://salemaziel.com",
        sitemap: "https://salemaziel.com/sitemap.xml",
      },
    },
//    `gatsby-plugin-offline`,
  ],
}
