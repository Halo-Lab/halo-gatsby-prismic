require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
const { prismicRepositoryName } = require('./prismic-config');

const linkResolver = require('./prismic/utils/linkResolver');

module.exports = {
  siteMetadata: {
    siteUrl: `https://halogatsbyprismic.gatsbyjs.io/`,
    title: `Halo Gatsby Prismic`,
    description: `Halo Prismic-Gatsby starter`,
    author: `Halo Lab`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: ['/preview'],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          },
        },
      },
    },
    `gatsby-plugin-preact`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Halo Prismic-Gatsby starter`,
        short_name: `halo-gatsby-prismic`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/meta/tile.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: `static/images/meta/tile.png`,
            sizes: '310x310',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.halo-lab.com/',
        sitemap: 'https://www.halo-lab.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@': '',
          '@src': 'src',
          '@contexts': 'src/contexts',
          '@components': 'src/components',
          '@pages': 'src/pages',
          '@styles': 'src/styles',
          '@hooks': 'src/hooks',
          '@helpers': 'src/helpers',
          '@scenes': 'src/scenes',
        },
        extensions: ['js', 'sass', 'scss'],
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: prismicRepositoryName,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        linkResolver: (doc) => linkResolver(doc),
        schemas: {
          layout: require('./schemas/layout.json'),
          homepage: require('./schemas/homepage.json'),
          blog: require('./schemas/blog.json'),
          blogpost: require('./schemas/blogpost.json'),
        },
        lang: '*',
        imageImgixParams: {
          auto: 'compress,format',
          fit: 'max',
          q: 45,
        },
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/blog`, `/blog/*`],
      },
    },
  ],
};
