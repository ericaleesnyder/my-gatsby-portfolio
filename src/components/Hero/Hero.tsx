import Container from 'basics/Container.styled';
import React, { type FC } from 'react';

import ComponentHeading from 'components/Heading/ComponentHeading';
import {
  HeroContentWrap,
  HeroWrap,
  ImageWrapper,
  ThreeImageGrid,
  TwoImageGrid,
} from 'components/Hero/styles/Hero.styled';
import OptimizedImage from 'components/Image';

import type { DatoCmsComponentHero } from 'graphqlTypes';
import type { StructuredTextGraphQlResponse } from 'react-datocms/structured-text';

type HeroProps = Omit<
  DatoCmsComponentHero,
  'children' | 'id' | 'internal' | 'meta' | 'originalId'
>;

const Hero: FC<HeroProps> = ({
  heading,
  subheading,
  body,
  ctas,
  featuredImage,
  secondaryImage,
  tertiaryImage,
}) => {
  const oneImage = featuredImage && !secondaryImage && !tertiaryImage;
  const twoImages = featuredImage && secondaryImage && !tertiaryImage;
  const allImages =
    featuredImage !== null && secondaryImage !== null && tertiaryImage !== null;

  const imageGrid = (() => {
    switch (true) {
      case oneImage: {
        return (
          <ImageWrapper>
            <OptimizedImage
              image={featuredImage?.desktopImage?.gatsbyImageData}
              src={featuredImage?.desktopImage?.url}
              alt={featuredImage?.alt ?? ''}
              loading='eager'
            />
          </ImageWrapper>
        );
      }
      case twoImages: {
        return (
          <TwoImageGrid>
            <OptimizedImage
              image={featuredImage?.desktopImage?.gatsbyImageData}
              src={featuredImage?.desktopImage?.url}
              alt={featuredImage?.alt ?? ''}
              className='primary image'
            />
            <OptimizedImage
              image={secondaryImage?.desktopImage?.gatsbyImageData}
              src={secondaryImage?.desktopImage?.url}
              alt={secondaryImage?.alt ?? ''}
              className='secondary image'
            />
          </TwoImageGrid>
        );
      }
      case allImages: {
        return (
          <ThreeImageGrid>
            <OptimizedImage
              image={featuredImage?.desktopImage?.gatsbyImageData}
              src={featuredImage?.desktopImage?.url}
              alt={featuredImage?.alt ?? ''}
              className='primary image'
            />
            <OptimizedImage
              image={secondaryImage?.desktopImage?.gatsbyImageData}
              src={secondaryImage?.desktopImage?.url}
              alt={secondaryImage?.alt ?? ''}
              className='secondary image'
            />
            <OptimizedImage
              image={tertiaryImage?.desktopImage?.gatsbyImageData}
              src={tertiaryImage?.desktopImage?.url}
              alt={tertiaryImage?.alt ?? ''}
              className='tertiary image'
            />
          </ThreeImageGrid>
        );
      }
    }
  })();

  return (
    <HeroWrap>
      <Container>
        <HeroContentWrap>
          {(heading || subheading || ctas) && (
            <ComponentHeading
              heading={heading}
              subheading={subheading}
              ctas={ctas}
              body={body as StructuredTextGraphQlResponse}
              hTag='h1'
            />
          )}
          {imageGrid}
        </HeroContentWrap>
      </Container>
    </HeroWrap>
  );
};

export default Hero;
