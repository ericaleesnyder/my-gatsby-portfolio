import { graphql } from 'gatsby';
import React, { type FC } from 'react';

import Layout from 'components/Layout/Layout';
import LayoutSection from 'components/LayoutSection';
import SEO from 'components/Seo';

import type { DatoCmsTemplatePage } from 'graphqlTypes';

interface PageProps {
  data: { pageData: DatoCmsTemplatePage };
}

interface IHead extends PageProps {
  location: {
    pathname: string;
  };
}

const IndexPage: FC<PageProps> = ({ data }) => {
  const { pageData } = data;
  const layouts = pageData?.layouts;

  return (
    <Layout>
      {layouts &&
        layouts.length > 0 &&
        layouts.map((layout) => (
          <>{layout && <LayoutSection key={Math.random()} {...layout} />}</>
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

export const Head: FC<IHead> = ({ data: { pageData }, location }) => {
  const { searchEngineOptimization: seo } = pageData;

  return (
    <SEO
      title={seo?.title || pageData?.title}
      description={seo?.description}
      image={seo?.image?.url}
      indexable={true}
      location={location}
    />
  );
};
