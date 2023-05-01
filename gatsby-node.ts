import path from "path";

import type { DatoCmsTemplatePageConnection } from "./src/graphqlTypes";

import type { GatsbyNode } from "gatsby";

interface AllPageData {
  data: {
    allDatoCmsTemplatePage: DatoCmsTemplatePageConnection;
  };
}

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}) => {
  const { data } = (await graphql(`
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

  data.allDatoCmsTemplatePage.nodes.forEach((node) => {
    const { slug, searchEngineOptimization: seo } = node;
    if (!slug) {
      return;
    }
    const pagePath = slug[0] === "/" ? slug : `/${slug}`;

    actions.createPage({
      path: pagePath,
      component: path.resolve("./src/templates/pages.tsx"),
      context: {
        slug,
        seo,
      },
    });
  });
};
