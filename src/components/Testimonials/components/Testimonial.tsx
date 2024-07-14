import React, { type FC } from 'react';
import {
  StructuredText,
  type StructuredTextGraphQlResponse,
} from 'react-datocms/structured-text';

import { type ColorKeys } from 'atoms/colors';

import Icon from 'components/Icon';
import Author from 'components/Testimonials/components/Author';
import {
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
    <Icon id='quote' color={color as ColorKeys} size='56px' />
    <TextWrap>
      <StructuredText data={quote} />
      {author && <Author {...author} />}
    </TextWrap>
  </TestimonialWrapper>
);

export default Testimonial;
