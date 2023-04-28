import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Layout from "../components/Layout/Layout";

import styled, { css } from "styled-components";
import { color } from "../atoms/colors";
import { font } from "../atoms/typography";
import Container from "../basics/Container.styled";

import Button from "../components/Button/styles/Button";

interface TextProps {
  size?: string;
  weight?: 300 | 400 | 500 | 600 | 700 | 800 | 900;
}

const Title = styled.h1`
  ${font("head", "xl")}
`;

const Text = styled.p<TextProps>`
  ${(props) =>
    (props?.size &&
      ((props?.size === "small" &&
        css`
          ${font("text", "sm")}
        `) ||
        (props?.size === "med" &&
          css`
            ${font("text", "med")}
          `) ||
        (props?.size === "large" &&
          css`
            ${font("text", "lg")}
          `) ||
        (props?.size === "xlarge" &&
          css`
            ${font("text", "xl")}
          `) ||
        (props?.size === "dispxs" &&
          css`
            ${font("head", "xs")}
          `) ||
        (props?.size === "dispsm" &&
          css`
            ${font("head", "sm")}
          `) ||
        (props?.size === "dispmed" &&
          css`
            ${font("head", "med")}
          `) ||
        (props?.size === "displg" &&
          css`
            ${font("head", "lg")}
          `) ||
        (props?.size === "dispxl" &&
          css`
            ${font("head", "xl")}
          `))) ||
    (props?.weight &&
      ((props?.weight === 300 &&
        css`
          ${font("text", "med", 300)}
        `) ||
        (props?.weight === 400 &&
          css`
            ${font("text", "med", 400)}
          `) ||
        (props?.weight === 500 &&
          css`
            ${font("text", "med", 500)}
          `) ||
        (props?.weight === 600 &&
          css`
            ${font("text", "med", 600)}
          `) ||
        (props?.weight === 700 &&
          css`
            ${font("text", "med", 700)}
          `) ||
        (props?.weight === 800 &&
          css`
            ${font("text", "med", 800)}
          `) ||
        (props?.weight === 900 &&
          css`
            ${font("text", "med", 900)}
          `)))}
`;
const Grid = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(3, 1fr);
  @media (min-width: 577px) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media (min-width: 993px) {
    grid-gap: 24px;
    grid-template-columns: repeat(9, 1fr);
  }
`;

const GridItem = styled.div`
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  border: 2px ${color.common.midnight} solid;
  border-radius: 10px;
  ${(props) =>
    props?.color &&
    css`
      background-color: ${props?.color};
    `}
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Container>
        <Button to="/" variant="primary">
          Home Page
        </Button>
        <Button to="/" variant="secondary">
          Home Page
        </Button>
        <Button to="/" variant="tertiary">
          Home Page
        </Button>
        <Button to="/" variant="inline">
          Home Page
        </Button>
      </Container>
      <Container>
        <Title>Font Sizes</Title>
        <Text size={"small"}>Text Small</Text>
        <Text size={"med"}>Text Medium</Text>
        <Text size={"large"}>Text Large</Text>
        <Text size={"xlarge"}>Text Extra Large</Text>
        <Text size={"dispxs"}>Display Extra Small</Text>
        <Text size={"dispsm"}>Display Small</Text>
        <Text size={"dispmed"}>Display Medium</Text>
        <Text size={"displg"}>Display Large</Text>
        <Text size={"dispxl"}>Display Extra Large</Text>
      </Container>
      <Container>
        <Title>Font Weights (all with text medium)</Title>
        <Text weight={300}>Text Medium 300</Text>
        <Text weight={400}>Text Medium 400</Text>
        <Text weight={500}>Text Medium 500</Text>
        <Text weight={600}>Text Medium 600</Text>
        <Text weight={700}>Text Medium 700</Text>
        <Text weight={800}>Text Medium 800</Text>
        <Text weight={900}>Text Medium 900</Text>
      </Container>
      <Container>
        <Title>Color Swatches</Title>
        <Grid>
          <GridItem color={color.common.white} />
          <GridItem color={color.common.black} />
          <GridItem color={color.common.sunshine} />
          <GridItem color={color.common.marigold} />
          <GridItem color={color.common.flamingo} />
          <GridItem color={color.common.baby} />
          <GridItem color={color.common.purple} />
          <GridItem color={color.common.lavender} />
          <GridItem color={color.common.midnight} />
          <GridItem color={color.common.charcoal} />
          <GridItem color={color.common.light} />
          <GridItem color={color.grey[50]} />
          <GridItem color={color.grey[100]} />
          <GridItem color={color.grey[200]} />
          <GridItem color={color.grey[300]} />
          <GridItem color={color.grey[400]} />
          <GridItem color={color.grey[500]} />
          <GridItem color={color.grey[600]} />
          <GridItem color={color.grey[700]} />
          <GridItem color={color.grey[800]} />
          <GridItem color={color.grey[900]} />
        </Grid>
      </Container>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Test Page</title>;
