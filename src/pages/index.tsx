import { type HeadFC, graphql } from 'gatsby';
import React from 'react';

import Layout from 'components/Layout/Layout';
import LayoutSection from 'components/LayoutSection';

import type { DatoCmsTemplatePage } from 'graphqlTypes';
import type { FC } from 'react';

interface HomepageProps extends DatoCmsTemplatePage {
  data: { datoCmsTemplatePage: DatoCmsTemplatePage };
}

const IndexPage: FC<HomepageProps> = ({ data }) => {
  const { datoCmsTemplatePage: homepage } = data;
  const { layouts } = homepage;

  return (
    <Layout>
      {layouts &&
        layouts.length > 0 &&
        layouts.map((layout) => <LayoutSection {...layout} key={layout?.id} />)}
    </Layout>
  );
};

export const homePageQuery = graphql`
  query homepageQuery {
    datoCmsTemplatePage(internalName: { eq: "Homepage" }) {
      ...datoCmsTemplatePage
    }
  }
`;

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
