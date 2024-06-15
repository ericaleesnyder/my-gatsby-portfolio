import React, { type FC } from 'react';
import { StructuredText } from 'react-datocms/structured-text';

import Heading from 'atoms/Text/Heading';
import Text from 'atoms/Text/Text';
import type { HeadingProps } from 'atoms/Text/textTypesAndData';
import type { FontWeights, TextSizes } from 'atoms/typography';

import Button from 'components/Button/Button';
import {
  CtaWrap,
  HeadingWrap,
} from 'components/Heading/styles/ComponentHeading.styled';

import type { DatoCmsComponentCallToAction, Maybe } from 'graphqlTypes';
import type { StructuredTextGraphQlResponse } from 'react-datocms/structured-text';

export interface ComponentHeadingProps extends HeadingProps {
  heading?: string | null;
  subheading?: string | null;
  subheadingSize?: TextSizes | null;
  subheadingWeight?: FontWeights | null;
  ctas?: Maybe<DatoCmsComponentCallToAction>[] | null | undefined;
  body?: StructuredTextGraphQlResponse | null;
  alignment?: 'center' | 'left';
}

const ComponentHeading: FC<ComponentHeadingProps> = ({
  heading,
  desktopSize,
  tabletSize,
  mobileSize,
  hTag,
  subheading,
  subheadingSize,
  subheadingWeight,
  ctas,
  body,
  alignment = 'left',
}) => (
  <HeadingWrap alignment={alignment}>
    {heading && (
      <Heading
        hTag={hTag ?? 'h1'}
        desktopSize={desktopSize}
        tabletSize={tabletSize}
        mobileSize={mobileSize}
      >
        {heading}
      </Heading>
    )}
    {subheading && (
      <Text size={subheadingSize ?? 'text2xl'} weight={subheadingWeight ?? 600}>
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
