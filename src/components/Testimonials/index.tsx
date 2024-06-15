import React, { type FC } from 'react';

import Carousel from 'components/Carousel';
import ComponentHeading from 'components/Heading/ComponentHeading';
import Testimonial from 'components/Testimonials/components/Testimonial';
import type { TestimonialProps } from 'components/Testimonials/components/Testimonial';
import {
  TestimonialsWrapper,
  Wrapper,
} from 'components/Testimonials/styles/TestimonialSlider.styled';

import type {
  DatoCmsComponentTestimonialCarousel,
  DatoCmsEntityPerson,
} from 'graphqlTypes';
import type { StructuredTextGraphQlResponse } from 'react-datocms/structured-text';

const TestimonialCarousel: FC<DatoCmsComponentTestimonialCarousel> = ({
  heading,
  quotes,
}) => (
  <Wrapper>
    {heading && (
      <ComponentHeading
        heading={heading}
        hTag='h2'
        desktopSize='headLg'
        alignment='center'
      />
    )}
    <TestimonialsWrapper>
      {quotes && quotes.length > 0 && (
        <Carousel
          slides={quotes.map((quote, idx) => {
            const colors = ['blue', 'pink', 'green'];

            return (
              <Testimonial
                key={quote?.id}
                quote={quote?.quote as StructuredTextGraphQlResponse}
                author={quote?.author as DatoCmsEntityPerson}
                color={colors[idx % colors.length] as TestimonialProps['color']}
              />
            );
          })}
          spaceBetween={30}
        />
      )}
    </TestimonialsWrapper>
  </Wrapper>
);

export default TestimonialCarousel;
