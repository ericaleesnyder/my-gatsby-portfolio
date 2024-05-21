import Container from "basics/Container.styled";
import Section from "basics/Section.styled";
import { type HeadFC, type PageProps, graphql } from "gatsby";
import React from "react";
import styled from "styled-components";

import { font } from "atoms/typography";

import Button from "components/Button/Button";
import Layout from "components/Layout/Layout";

import type { FC } from "react";

const Title = styled.h1`
  ${font("head", "xl")}
`;

const IndexPage: FC<PageProps> = (props) => {
  console.log(props);

  return (
    <Layout>
      <Section>
        <Container>
          <Title>This is my homepage!! Learning TypeScript!! Yay!!</Title>
          <Button to="/test" variant="primary">
            Test Page
          </Button>
        </Container>
      </Section>
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
