import { graphql } from 'gatsby';

export const assetQuery = graphql`
  fragment imageAsset on DatoCmsFileField {
    __typename
    url
    gatsbyImageData
    isImage
  }
`

export const timelineInstanceQuery = graphql`
  fragment timelineInstance on DatoCmsTimelineInstance {
    __typename
    year
    heading
    description
  }
`

export const entitySkill = graphql`
  fragment datoCmsEntitySkill on DatoCmsEntitySkill {
    __typename
    id
    title
    logo {
      ...imageAsset
    }
  }
`

export const callToActionQuery = graphql`
  fragment datoCmsComponentCallToAction on DatoCmsComponentCallToAction {
    __typename
    internalName
    id
    label
    link
    isDark
    hoverColor
    icon
    buttonType
    size
  }
`

export const componentImageQuery = graphql`
  fragment datoCmsComponentImage on DatoCmsComponentImage {
    id
    internalName
    title
    alt
    description
    caption
    desktopImage {
      ...imageAsset
    }
    mobileImage {
      ...imageAsset
    }
  }
`

export const componentHeroQuery = graphql`
  fragment datoCmsComponentHero on DatoCmsComponentHero {
    __typename
    id
    internalName
        heading
    subheading
    featuredImage {
      ...datoCmsComponentImage
    }
    secondaryImage {
      ...datoCmsComponentImage
    }
    tertiaryImage {
      ...datoCmsComponentImage
    }
    body {
      blocks
      value
      links {
        ...datoCmsComponentCallToAction
      }
    }
    ctas {
      ...datoCmsComponentCallToAction
    }
  }
`

export const componentStoryQuery = graphql`
  fragment datoCmsComponentStory on DatoCmsComponentStory {
    __typename
    id
    heading
    subheading
    timelineItems {
      ...timelineInstance
    }
  }
`

export const layoutSectionQuery = graphql`
  fragment layoutSection on DatoCmsLayoutSection {
    __typename
    id
    internalName
    desktopTopPadding
    desktopBottomPadding
    tabletTopPadding
    tabletBottomPadding
    mobileTopPadding
    mobileBottomPadding
    component {
      ...datoCmsComponentHero
      ...datoCmsComponentStory
    }
  }
`

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
    layouts {
      ...layoutSection
    }
  }
`;

export const templateProjectQuery = graphql`
  fragment datoCmsTemplateProject on DatoCmsTemplateProject {
    __typename
    id
    internalName
    slug
    link
    title
    year
    role
    featured
    featuredImage {
      ...datoCmsComponentImage
    }
    framework
    cms
    github
    blurb
    body {
      blocks
      value
      links {
        ...datoCmsComponentImage
      }
    }
  }
`
