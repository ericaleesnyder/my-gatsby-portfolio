import React, { type FC } from 'react';
import {
  StructuredText,
  type StructuredTextGraphQlResponse,
} from 'react-datocms/structured-text';

import type { ColorKeys } from 'atoms/colors';

import Author from 'components/Testimonials/components/Author';
import {
  QuoteIcon,
  TestimonialWrapper,
  TextWrap,
} from 'components/Testimonials/styles/TestimonialSlider.styled';

import type { DatoCmsEntityPerson } from 'graphqlTypes';

export interface TestimonialProps {
  quote?: StructuredTextGraphQlResponse;
  author?: DatoCmsEntityPerson;
  color?: 'blue' | 'pink' | 'green';
}

const Testimonial: FC<TestimonialProps> = ({ quote, author, color }) => (
  <TestimonialWrapper clr={color as ColorKeys}>
    <QuoteIcon clr={color as ColorKeys}>
      <use href='/icons/sprites.svg#quote' />
    </QuoteIcon>
    <TextWrap>
      <StructuredText data={quote} />
      {author && <Author {...author} />}
    </TextWrap>
  </TestimonialWrapper>
);

export default Testimonial;
