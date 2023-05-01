import { graphql } from "gatsby";

export const templatePageQuery = graphql`
  fragment datoCmsTemplatePage on DatoCmsTemplatePage {
    __typename
    id
    internalName
    title
    slug
    searchEngineOptimization {
      title
      description
      image {
        gatsbyImageData
      }
      twitterCard
    }
  }
`;
