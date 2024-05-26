import type { GatsbyConfig } from 'gatsby';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')


const config: GatsbyConfig = {
  siteMetadata: {
    title: `My Gatsby Portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Quicksand`,
            file: `https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area. Make sure to grant both CDA and CMA permissions.
        apiToken: process.env.GATSBY_DATO_API_KEY,

        // The project environment to read from. Defaults to the primary environment:
        environment: `main`,

        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        previewMode: false,

        // Disable automatic reloading of content when some change occurs on DatoCMS:
        disableLiveReload: false,

        // Custom API base URL (you probably don't need this!)
        // apiUrl: 'https://site-api.datocms.com',

        // Limits page size and can be used to avoid build timeouts.
        // Default is 500 (also the maximum)
        pageSize: 500,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        'components': path.join(__dirname, 'src/components'),
        'templates': path.join(__dirname, 'src/templates'),
        'src': path.join(__dirname, 'src'),
        'pages': path.join(__dirname, 'src/pages')
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Erica Snyder Portfolio',
        short_name: 'ES Portfolio',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#ffb6f8',
        display: 'standalone',
        icon: 'src/assets/esLogo.png',
      },
    },
  ],
};

export default config;
