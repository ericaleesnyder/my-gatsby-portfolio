import Container from 'basics/Container.styled';
import React, { type FC } from 'react';

import ComponentHeading from 'components/Heading/ComponentHeading';
import Testimonial from 'components/Testimonials/components/Testimonial';
import { TestimonialsWrapper } from 'components/Testimonials/styles/TestimonialSlider.styled';

import type {
  DatoCmsComponentTestimonialCarousel,
  DatoCmsEntityPerson,
} from 'graphqlTypes';
import type { StructuredTextGraphQlResponse } from 'react-datocms/structured-text';

const TestimonialCarousel: FC<DatoCmsComponentTestimonialCarousel> = ({
  heading,
  quotes,
}) => {
  console.log(heading, quotes);

  return (
    <Container>
      {heading && (
        <ComponentHeading heading={heading} hTag='h2' desktopSize='headLg' />
      )}
      <TestimonialsWrapper>
        {quotes &&
          quotes.length > 0 &&
          quotes.map((quote) => (
            <Testimonial
              key={quote?.id}
              quote={quote?.quote as StructuredTextGraphQlResponse}
              author={quote?.author as DatoCmsEntityPerson}
            />
          ))}
      </TestimonialsWrapper>
    </Container>
  );
};

export default TestimonialCarousel;
