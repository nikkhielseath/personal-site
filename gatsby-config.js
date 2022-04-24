require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "SNikhill - Human, Learner, Developer",
    siteUrl: "https://snikhill.tech",
  },
  plugins: [
    "gatsby-plugin-robots-txt",
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
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts",
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "4ad1d28a30d5932c3e209b6897a178",
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
