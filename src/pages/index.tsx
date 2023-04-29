import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import type { FC } from "react";

import Layout from "../components/Layout/Layout";

import styled from "styled-components";
import { font } from "../atoms/typography";
import Container from "../basics/Container.styled";
import Section from "../basics/Section.styled";
import Button from "../components/Button/Button";

const Title = styled.h1`
  ${font("head", "xl")}
`;

const IndexPage: FC<PageProps> = () => {
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

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
