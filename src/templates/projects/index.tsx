import { type PageProps, graphql } from 'gatsby';
import React, { type FC } from 'react';

import Layout from 'components/Layout/Layout';

import type { DatoCmsTemplateProject } from 'graphqlTypes';


interface ProjectProps {
  projectData: DatoCmsTemplateProject;
}

const ProjectPage: FC<PageProps<ProjectProps>> = ({ data }) => {
  const { projectData } = data;
  console.log(data);
  
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
