import { type PageProps, graphql } from "gatsby";
import React, { type FC } from "react";

import Layout from "components/Layout/Layout";

import type { DatoCmsTemplatePage } from "graphqlTypes";
import useScrollPosition from "utils/useScrollPosition";

const IndexPage: FC<PageProps<DatoCmsTemplatePage>> = (props) => {
  const scrollPosition = useScrollPosition();

  console.log(scrollPosition);

  return (
    <Layout>
      <div>{props?.data?.title}</div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query templatePageQuery($slug: String!) {
    datoCmsTemplatePage(slug: { eq: $slug }) {
      ...datoCmsTemplatePage
    }
  }
`;

export default IndexPage;
