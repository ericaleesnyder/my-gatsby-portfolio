import { graphql } from 'gatsby';
import React, { type FC } from 'react';

import Layout from 'components/Layout/Layout';
import LayoutSection from 'components/LayoutSection';

import type { DatoCmsTemplatePage } from 'graphqlTypes';

interface PageProps {
  data: { pageData: DatoCmsTemplatePage };
}

const IndexPage: FC<PageProps> = ({ data }) => {
  const { pageData } = data;
  const layouts = pageData?.layouts;

  return (
    <Layout>
      {layouts &&
        layouts.length > 0 &&
        layouts.map((layout) => (
          <>
            {layout && (
              <LayoutSection
                key={Math.random()}
                component={layout?.component ?? layout.component}
              />
            )}
          </>
        ))}
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
