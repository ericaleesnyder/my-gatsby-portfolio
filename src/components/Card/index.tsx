import React, { type FC } from 'react';

import Heading from 'atoms/Text/Heading';
import Text from 'atoms/Text/Text';
import { getColor } from 'atoms/colors';
import type { ColorKeys, ColorValues } from 'atoms/colors';

import {
  Blurb,
  CardWrap,
  HeadingWrap,
  Icon,
  ImageWrap,
} from 'components/Card/styles/Card.styled';
import OptimizedImage from 'components/Image';

import type { DatoCmsComponentImage } from 'graphqlTypes';

interface CardProps {
  featuredImage?: DatoCmsComponentImage | null;
  framework?: 'Next.js' | 'Gatsby' | string | null;
  cms?: 'Builder.io' | 'DatoCMS' | 'Contentful' | string | null;
  title?: string | null;
  slug?: string | null;
  blurb?: string | null;
  hoverColor?: string | null;
}

const Card: FC<CardProps> = ({
  featuredImage,
  framework,
  cms,
  title,
  slug,
  blurb,
  hoverColor,
}) => {
  console.log(featuredImage, framework, cms, title, slug, blurb, hoverColor);

  // TODO: image styles, logo, etc.

  return (
    <CardWrap
      to={slug ?? ''}
      hoverColor={
        getColor(hoverColor?.toLowerCase() as ColorKeys) as ColorValues
      }
    >
      <HeadingWrap>
        <Heading
          hTag='h3'
          desktopSize='headSm'
          tabletSize='headSm'
          mobileSize='headXs'
        >
          {title}
        </Heading>
        <Icon>
          <use href='/icons/sprites.svg#right-arrow' />
        </Icon>
      </HeadingWrap>
      {/* {blurb &&  */}
      <Blurb>
        <Text size='textLg' weight={400}>
          blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb
          blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb
          blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb
          blurb blurb blurb
        </Text>
      </Blurb>
      {/* } */}
      {featuredImage && (
        <ImageWrap>
          <OptimizedImage
            image={featuredImage?.desktopImage?.gatsbyImageData}
            src={featuredImage?.desktopImage?.url}
            alt={featuredImage?.alt ?? ''}
            loading='eager'
          />
        </ImageWrap>
      )}
    </CardWrap>
  );
};

export default Card;
