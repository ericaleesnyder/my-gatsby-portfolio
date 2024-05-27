import Container from 'basics/Container.styled';
import React, { type FC } from 'react';

import ComponentHeading from 'components/Heading/ComponentHeading';
import {
  HeroContentWrap,
  HeroWrap,
  ImageWrapper,
} from 'components/Hero/styles/Hero.styled';
import OptimizedImage from 'components/Image';

import type {
  DatoCmsComponentCallToAction,
  DatoCmsComponentImage,
} from 'graphqlTypes';
import type { StructuredTextGraphQlResponse } from 'react-datocms/structured-text';

interface HeroProps {
  heading?: string | null;
  subheading?: string | null;
  ctas?: DatoCmsComponentCallToAction[] | null;
  body?: StructuredTextGraphQlResponse | null;
  featuredImage?: DatoCmsComponentImage | null;
}

const Hero: FC<HeroProps> = ({
  heading,
  subheading,
  body,
  ctas,
  featuredImage,
}) => (
  <HeroWrap>
    <Container>
      <HeroContentWrap>
        {(heading || subheading || ctas) && (
          <ComponentHeading
            heading={heading}
            subheading={subheading}
            ctas={ctas}
            body={body}
            headingTag='h1'
          />
        )}
        <ImageWrapper>
          <OptimizedImage
            image={featuredImage?.desktopImage?.gatsbyImageData}
            src={featuredImage?.desktopImage?.url}
            alt={featuredImage?.alt ?? ''}
            loading='eager'
          />
        </ImageWrapper>
      </HeroContentWrap>
    </Container>
  </HeroWrap>
);

export default Hero;
