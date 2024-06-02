import React from 'react';

// TODO: loadable component for dynamic imports
import Hero from 'components/Hero/Hero';
import SkillsBar from 'components/SkillsBar';
import TestimonialCarousel from 'components/Testimonials';

import type { DatoCmsLayoutSection } from 'graphqlTypes';

const componentGenerator = (component: DatoCmsLayoutSection['component']) => {
  if (!component) {
    return null;
  }

  switch (component.__typename) {
    case 'DatoCmsComponentHero':
      return <Hero {...component} />;
    case 'DatoCmsComponentSkillsBar':
      return <SkillsBar {...component} />;
    case 'DatoCmsComponentTestimonialCarousel':
      return <TestimonialCarousel {...component} />;
    default:
      return null;
  }
};

export default componentGenerator;
