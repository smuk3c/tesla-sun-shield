/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Tesla Sun Shield`,
    description: `Looking for a reliable source to buy handmade Tesla sunroof covers online? Look no further than TeslaSunShield.com! We offer a wide range of high-quality sunroof covers that are specifically designed to fit your Tesla perfectly. Our covers are made from durable materials and provide excellent protection against the sun's harmful UV rays, keeping your vehicle's interior cool and comfortable all summer long. With our easy-to-use online ordering system, you can order your Tesla sunroof cover in just a few clicks. So why wait? Visit TeslaSunShield.com today and experience the difference!`,
    author: `@smuk3c`,
    siteUrl: process.env.GATSBY_PAGE_URL,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tesla-sun-shield`,
        short_name: `sun shield`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/images/model_y_3.jpg`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-SJDJ29SMFR",
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
          delayOnRouteUpdate: 100,
        },
      },
    },
  ],
}
