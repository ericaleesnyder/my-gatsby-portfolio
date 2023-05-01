import { PageProps, graphql } from "gatsby";
import React from "react";
import { DatoCmsTemplatePage } from "../graphqlTypes";

import Layout from "../components/Layout/Layout";

import type { FC } from "react";

interface PageDataType {
  pageData: DatoCmsTemplatePage;
}

const IndexPage: FC<PageProps<PageDataType>> = (props) => {
  console.log(props);
  return (
    <Layout>
      <div>{props?.data?.pageData?.title}</div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query templatePageQuery($slug: String!) {
    pageData: datoCmsTemplatePage(slug: { eq: $slug }) {
      ...datoCmsTemplatePage
    }
  }
`;

export default IndexPage;
