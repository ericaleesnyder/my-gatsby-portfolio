import Container from 'basics/Container.styled';
import Section from 'basics/Section.styled';
import { type HeadFC, graphql } from 'gatsby';
import React, { type FC } from 'react';

import Card from 'components/Card';
import Hero from 'components/Hero/Hero';
import OptimizedImage from 'components/Image';
import Layout from 'components/Layout/Layout';

import { ProjectGrid } from 'pages/styles/Projects.styled';

import type { DatoCmsTemplatePage, DatoCmsTemplateProject } from 'graphqlTypes';

interface ProjectListingProps extends DatoCmsTemplatePage {
  data: {
    allDatoCmsTemplateProject: {
      nodes: DatoCmsTemplateProject[];
    };
  };
}

const IndexPage: FC<ProjectListingProps> = ({ data }) => {
  const { allDatoCmsTemplateProject } = data;
  const { nodes: projects } = allDatoCmsTemplateProject;

  return (
    <Layout isGradientBackground>
      <Hero heading='My Projects' />
      <Section>
        <Container>
          <OptimizedImage src='/images/filler.png' />
        </Container>
        <Container>
          <ProjectGrid>
            {projects &&
              projects.length > 0 &&
              projects.map((project: DatoCmsTemplateProject) => (
                <Card
                  key={project.id}
                  featuredImage={project?.featuredImage}
                  cms={project?.cms}
                  title={project?.title}
                  slug={`/projects/${project?.slug}`}
                  blurb={project?.blurb}
                  framework={project?.blurb}
                />
              ))}
          </ProjectGrid>
        </Container>
        <Container className='invert'>
          <OptimizedImage src='/images/filler.png' />
        </Container>
      </Section>
    </Layout>
  );
};

export const projectListingQuery = graphql`
  query projectListingQuery {
    allDatoCmsTemplateProject {
      nodes {
        ...datoCmsTemplateProject
      }
    }
  }
`;

export default IndexPage;

export const Head: HeadFC = () => <title>Project Listing Page</title>;
