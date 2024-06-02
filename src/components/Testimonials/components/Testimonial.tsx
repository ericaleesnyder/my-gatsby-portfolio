import React, { type FC } from 'react';
import {
  StructuredText,
  type StructuredTextGraphQlResponse,
} from 'react-datocms/structured-text';

import Author from 'components/Testimonials/components/Author';
import {
  TestimonialWrapper,
  TextWrap,
} from 'components/Testimonials/styles/TestimonialSlider.styled';

import type { DatoCmsEntityPerson } from 'graphqlTypes';

interface TestimonialProps {
  quote?: StructuredTextGraphQlResponse;
  author?: DatoCmsEntityPerson;
}

const Testimonial: FC<TestimonialProps> = ({ quote, author }) => {
  console.log(quote, author);

  return (
    <TestimonialWrapper className='quote'>
      <TextWrap>
        <StructuredText data={quote} />
        {author && <Author {...author} />}
      </TextWrap>
    </TestimonialWrapper>
  );
};

export default Testimonial;
