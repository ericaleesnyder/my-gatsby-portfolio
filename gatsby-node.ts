import path from 'path';

import type { DatoCmsTemplatePageConnection, DatoCmsTemplateProjectConnection } from './src/graphqlTypes';

import type { GatsbyNode } from 'gatsby';

interface AllPageData {
  data: {
    allDatoCmsTemplatePage: DatoCmsTemplatePageConnection;
  };
}

interface AllProjectData {
  data: {
    allDatoCmsTemplateProject: DatoCmsTemplateProjectConnection
  }
}

export const createPages: GatsbyNode['createPages'] = async ({
  actions,
  graphql,
}) => {
  const { data: pageData } = (await graphql(`
    query allPageQuery {
      allDatoCmsTemplatePage {
        nodes {
          slug
          searchEngineOptimization {
            title
          }
        }
      }
    }
  `)) as AllPageData;

  const { data: projectData } = (await graphql(`
    query allProjectQuery {
      allDatoCmsTemplateProject {
        nodes {
          slug
          searchEngineOptimization {
            title
          }
        }
      }
    }
  `)) as AllProjectData

  pageData.allDatoCmsTemplatePage.nodes.forEach((node) => {
    const { slug, searchEngineOptimization: seo } = node;
    if (!slug) {
      return;
    }
    const pagePath = slug[0] === '/' ? slug : `/${slug}`;

    actions.createPage({
      path: pagePath,
      component: path.resolve('./src/templates/pages.tsx'),
      context: {
        slug,
        seo,
      },
    });
  });

  projectData.allDatoCmsTemplateProject.nodes.forEach((node) => {
    const { slug, searchEngineOptimization: seo } = node;

    if (!slug) {
      return;
    }
    const projectPath = slug[0] === '/' ? slug : `/projects/${slug}`;

    actions.createPage({
      path: projectPath,
      component: path.resolve('./src/templates/projects/index.tsx'),
      context: {
        slug,
        seo,
      }
    })
  })
};
