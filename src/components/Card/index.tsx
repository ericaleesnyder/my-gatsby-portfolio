import React, { type FC } from 'react';

import Heading from 'atoms/Text/Heading';
import Text from 'atoms/Text/Text';

import {
  Blurb,
  CardWrap,
  HeadingWrap,
  Icon,
} from 'components/Card/styles/Card.styled';

import type { DatoCmsComponentImage } from 'graphqlTypes';

interface CardProps {
  featuredImage?: DatoCmsComponentImage | null;
  framework?: 'Next.js' | 'Gatsby' | string | null;
  cms?: 'Builder.io' | 'DatoCMS' | 'Contentful' | string | null;
  title?: string | null;
  slug?: string | null;
  blurb?: string | null;
}

const Card: FC<CardProps> = ({
  featuredImage,
  framework,
  cms,
  title,
  slug,
  blurb,
}) => {
  console.log(featuredImage, framework, cms, title, slug, blurb);

  // TODO: image styles, logo, etc.

  return (
    <CardWrap to={slug ?? ''}>
      <HeadingWrap>
        <Heading hTag='h3' desktopSize='headSm'>
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
    </CardWrap>
  );
};

export default Card;
