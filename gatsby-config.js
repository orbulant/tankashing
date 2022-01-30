/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },
  ],
  siteMetadata:{
    title: "ka-shing's awesome website",
    description: "Tan Ka-Shing's portfolio website for experimenting JS based Web Development tools.",
    copyright: "All rights reserved by Tan Ka-Shing, 2022."
  }
}
