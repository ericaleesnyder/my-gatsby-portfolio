import { graphql } from 'gatsby';
import React from 'react';

import Layout from 'components/Layout/Layout';
import LayoutSection from 'components/LayoutSection';
import SEO from 'components/Seo';

import type { DatoCmsTemplatePage } from 'graphqlTypes';
import type { FC } from 'react';

interface HomepageProps extends DatoCmsTemplatePage {
  data: { datoCmsTemplatePage: DatoCmsTemplatePage };
}

interface IHead extends HomepageProps {
  location: {
    pathname: string;
  };
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

export const Head: FC<IHead> = ({
  data: { datoCmsTemplatePage },
  location,
}) => {
  const { searchEngineOptimization: seo } = datoCmsTemplatePage;

  return (
    <SEO
      title={seo?.title}
      description={seo?.description}
      image={seo?.image?.url}
      indexable={true}
      location={location}
    />
  );
};
