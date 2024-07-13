import loadable from '@loadable/component';
import React from 'react';

import Hero from 'components/Hero/Hero';

import type { DatoCmsLayoutSection } from 'graphqlTypes';

const CardDeck = loadable(() => import('components/CardDeck'));
const TestimonialCarousel = loadable(() => import('components/Testimonials'));
const SkillsBar = loadable(() => import('components/SkillsBar'));
const Story = loadable(() => import('components/Story'));

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
    case 'DatoCmsComponentFeaturedProjectGrid':
      return <CardDeck {...component} />;
    case 'DatoCmsComponentStory':
      return <Story {...component} />;
    default:
      return null;
  }
};

export default componentGenerator;
