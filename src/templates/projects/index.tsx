import { graphql } from 'gatsby';
import React, { type FC } from 'react';

import Layout from 'components/Layout/Layout';

import type { DatoCmsTemplateProject } from 'graphqlTypes';

interface ProjectProps {
  data: { projectData: DatoCmsTemplateProject };
}

const ProjectPage: FC<ProjectProps> = ({ data }) => {
  const { projectData } = data;

  return (
    <Layout>
      <div>{projectData?.title}</div>
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
