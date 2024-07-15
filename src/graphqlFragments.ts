import { graphql } from 'gatsby';

export const pageSeoQuery = graphql`
  fragment pageSeo on DatoCmsTemplatePage {
    searchEngineOptimization {
      title
      description
      image {
        gatsbyImageData
        url
      }
    }
  }
`

export const projectSeoQuery = graphql`
  fragment projectSeo on DatoCmsTemplateProject {
    searchEngineOptimization {
      title
      description
      image {
        gatsbyImageData
        url
      }
    }
  }
`

export const assetQuery = graphql`
  fragment imageAsset on DatoCmsFileField {
    __typename
    url
    gatsbyImageData
    isImage
  }
`

export const imageBlock = graphql`
  fragment imageBlock on DatoCmsImage {
    __typename
    id: originalId
    originalId
    alt
    asset {
      gatsbyImageData
      url
      title
    }
  }
`

export const timelineInstanceQuery = graphql`
  fragment timelineInstance on DatoCmsTimelineInstance {
    __typename
    sortOrder
    year
    iconId
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

export const entityPerson = graphql`
  fragment datoCmsEntityPerson on DatoCmsEntityPerson {
    __typename
    id
    name
    positionTitle
    company
    headshot {
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
    download
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
    model {
      apiKey
    }
  }
`

export const componentTestimonialQuery = graphql`
  fragment datoCmsComponentTestimonial on DatoCmsComponentTestimonial {
    __typename
    id
    quote {
      blocks
      value
      links
    }
    author {
      ...datoCmsEntityPerson
    }
  }
`

export const componentTestimonialCarouselQuery = graphql`
  fragment datoCmsComponentTestimonialCarousel on DatoCmsComponentTestimonialCarousel {
    __typename
    id
    heading
    quotes {
      ...datoCmsComponentTestimonial
    }
  }
`

export const componentFeaturedProjectGridQuery = graphql`
  fragment datoCmsComponentFeaturedProjectGrid on DatoCmsComponentFeaturedProjectGrid {
    __typename
    id
    heading
    subheading
    cta {
      ...datoCmsComponentCallToAction
    }
    projects {
      title
      blurb
      hoverColor
      slug
      featuredImage {
        ...datoCmsComponentImage
      }
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

export const componentSkillsBarQuery = graphql`
  fragment datoCmsComponentSkillsBar on DatoCmsComponentSkillsBar {
    __typename
    id
    heading
    skills {
      ...datoCmsEntitySkill
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
      ...datoCmsComponentSkillsBar
      ...datoCmsComponentTestimonialCarousel
      ...datoCmsComponentFeaturedProjectGrid
    }
  }
`

export const templatePageQuery = graphql`
  fragment datoCmsTemplatePage on DatoCmsTemplatePage {
    __typename
    ...pageSeo
    id
    internalName
    title
    slug
    layouts {
      ...layoutSection
    }
  }
`;

export const templateProjectQuery = graphql`
  fragment datoCmsTemplateProject on DatoCmsTemplateProject {
    __typename
    ...projectSeo
    id
    internalName
    slug
    link
    title
    year
    role
    featured
    hoverColor
    featuredImage {
      ...datoCmsComponentImage
    }
    framework
    cms
    github
    blurb
    body {
      blocks {
        ...imageBlock
      }
      value
      links
    }
    relatedProjects {
      ...datoCmsComponentFeaturedProjectGrid
    }
  }
`
