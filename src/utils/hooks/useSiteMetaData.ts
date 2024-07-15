import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query siteMetaQuery {
      datoCmsSite {
        globalSeo {
          siteName
          titleSuffix
          fallbackSeo {
            description
            title
            image {
              gatsbyImageData
              url
            }
          }
        }
      }
    }
  `);

  return data.datoCmsSite.globalSeo;
};

export default useSiteMetadata;
