import React from 'react';

import Hero from 'components/Hero/Hero';

import type { DatoCmsLayoutSection } from 'graphqlTypes';

const componentGenerator = (component: DatoCmsLayoutSection['component']) => {
  if (!component) {
    return null;
  }

  // TODO: resolve type error

  switch (component.__typename) {
    case 'DatoCmsComponentHero':
      return <Hero {...component} />;
    default:
      return null;
  }
};

export default componentGenerator;
