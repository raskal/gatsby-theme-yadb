module.exports = (options) => ({
  siteMetadata: {
    siteTitle: `Julien Leleu`,
    siteTitleAlt: `Julien Leleu - Personal blog`,
    siteHeadline: `Julien Leleu - Personal blog`,
    siteUrl: `https://redjista.fr/`,
    siteDescription: `Technical and opinion posts.`,
    siteLanguage: `fr`,
    siteImage: `/banner.jpg`,
    author: `Julien Leleu`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog-core`,
      options,
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-theme-ui`,
  ],
})
