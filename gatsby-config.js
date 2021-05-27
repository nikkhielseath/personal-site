require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: "Nikhil Seth | SNikhill - Human, Learner, Developer",
    siteUrl: "https://snikhill.tech",
  },
  plugins: [
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: "https://snikhill.tech",
        stripQueryString: true,
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        implementation: require("sass"),
      },
    },
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: `${process.env.DATO_CMS_READ_ONLY_API}`,
        preview: false,
        disableLiveReload: false,
      },
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: "#58c7c0",
        showSpinner: false,
      },
    },
  ],
};
