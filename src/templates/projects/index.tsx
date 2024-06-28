import { graphql } from 'gatsby';
import React, { type FC } from 'react';

import Layout from 'components/Layout/Layout';
import LayoutSection from 'components/LayoutSection';

import type { DatoCmsTemplateProject } from 'graphqlTypes';

interface ProjectProps {
  data: { projectData: DatoCmsTemplateProject };
}

const ProjectPage: FC<ProjectProps> = ({ data }) => {
  const { projectData } = data;
  const relatedProjects = projectData?.relatedProjects;
  console.log(projectData);

  return (
    <Layout>
      <div>{projectData?.title}</div>
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
