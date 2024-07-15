import Container from 'basics/Container.styled';
import DetailContent, { ImageWrap } from 'basics/DetailContent.styled';
import Section from 'basics/Section.styled';
import { graphql } from 'gatsby';
import React, { type FC } from 'react';
import {
  StructuredText,
  type StructuredTextGraphQlResponse,
} from 'react-datocms/structured-text';

import ProjectHero from 'components/Hero/ProjectHero';
import { IconWrap } from 'components/Hero/styles/ProjectHeroStyled';
import Icon from 'components/Icon';
import OptimizedImage from 'components/Image';
import Layout from 'components/Layout/Layout';
import LayoutSection from 'components/LayoutSection';
import SEO from 'components/Seo';

import type { StructuredTextBlock } from 'utils/structuredTextUtilTypes';

import type { DatoCmsTemplateProject } from 'graphqlTypes';

interface ProjectProps {
  data: { projectData: DatoCmsTemplateProject };
}

interface IHead extends ProjectProps {
  location: {
    pathname: string;
  };
}

const ProjectPage: FC<ProjectProps> = ({ data }) => {
  const { projectData } = data;
  const {
    relatedProjects,
    title,
    featuredImage,
    blurb,
    role,
    year,
    framework,
    cms,
    link,
    github,
    body,
  } = projectData;

  return (
    <Layout isGradientBackground>
      <ProjectHero
        title={title}
        featuredImage={featuredImage}
        blurb={blurb}
        framework={framework}
        role={role}
        year={year}
        cms={cms}
        link={link}
        github={github}
      />
      {body && (
        <Section
          desktopTopPadding='0'
          tabletTopPadding='0'
          mobileTopPadding='0'
          desktopBottomPadding='0'
          tabletBottomPadding='0'
          mobileBottomPadding='0'
        >
          <Container>
            <DetailContent>
              <StructuredText
                data={body as StructuredTextGraphQlResponse}
                renderBlock={({ record }) => {
                  const { asset, alt } =
                    record as unknown as StructuredTextBlock;
                  switch (record?.__typename) {
                    case 'DatoCmsImage':
                      return (
                        <ImageWrap>
                          <OptimizedImage
                            image={asset?.gatsbyImageData}
                            src={asset?.url}
                            alt={alt}
                          />
                        </ImageWrap>
                      );
                    default:
                      return null;
                  }
                }}
              />
            </DetailContent>
          </Container>
        </Section>
      )}
      <Container flex>
        <IconWrap>
          <Icon id='filler' width='12px' height='60px' />
        </IconWrap>
      </Container>
      {relatedProjects && <LayoutSection component={relatedProjects} />}
    </Layout>
  );
};

export const projectQuery = graphql`
  query templateProjectQuery($slug: String!) {
    projectData: datoCmsTemplateProject(slug: { eq: $slug }) {
      ...datoCmsTemplateProject
    }
  }
`;

export default ProjectPage;

export const Head: FC<IHead> = ({ data: { projectData }, location }) => {
  const { featuredImage, searchEngineOptimization: seo } = projectData;

  return (
    <SEO
      title={seo?.title || projectData?.title}
      description={
        seo?.description ||
        `A description of my roles and responsibilities on ${projectData?.title}`
      }
      image={seo?.image?.url || featuredImage?.desktopImage?.url}
      indexable={true}
      location={location}
    />
  );
};
