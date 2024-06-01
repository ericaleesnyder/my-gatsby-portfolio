import React, { type FC } from 'react';
import {
  StructuredText,
  type StructuredTextGraphQlResponse,
} from 'react-datocms/structured-text';

import Heading, { type HeadingTypes } from 'atoms/Text/Heading';
import Text from 'atoms/Text/Text';

import Button from 'components/Button/Button';
import {
  CtaWrap,
  HeadingWrap,
} from 'components/Heading/styles/ComponentHeading.styled';

import type { DatoCmsComponentCallToAction, Maybe } from 'graphqlTypes';

interface HeadingProps {
  heading?: string | null;
  headingTag?: HeadingTypes | null;
  headingSize?: 'xs' | 'sm' | 'med' | 'lg' | 'xl' | 'xxl' | null;
  subheading?: string | null;
  subheadingSize?: 'sm' | 'med' | 'lg' | 'xl' | 'xxl' | null;
  subheadingWeight?: 300 | 400 | 500 | 600 | 700 | 800 | 900 | null;
  ctas?: Maybe<DatoCmsComponentCallToAction>[] | null | undefined;
  body?: StructuredTextGraphQlResponse | null;
}

const ComponentHeading: FC<HeadingProps> = ({
  heading,
  headingSize,
  headingTag,
  subheading,
  subheadingSize,
  subheadingWeight,
  ctas,
  body,
}) => (
  <HeadingWrap>
    {heading && (
      <Heading hTag={headingTag ?? 'h1'} size={headingSize}>
        {heading}
      </Heading>
    )}
    {subheading && (
      <Text size={subheadingSize ?? 'xxl'} weight={subheadingWeight ?? 600}>
        {subheading}
      </Text>
    )}
    {body && <StructuredText data={body} />}
    {ctas && ctas.length > 0 && (
      <CtaWrap>
        {ctas.map((cta) => (
          <Button
            to={cta?.link ?? ''}
            hoverColor={cta?.hoverColor}
            key={cta?.id ?? Math.random()}
            size={cta?.size}
            isDark={cta?.isDark}
          >
            {cta?.label}
          </Button>
        ))}
      </CtaWrap>
    )}
  </HeadingWrap>
);

export default ComponentHeading;
