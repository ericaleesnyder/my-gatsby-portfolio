import Section from 'basics/Section.styled';
import React from 'react';

import componentGenerator from 'utils/componentGenerator';

import type { DatoCmsLayoutSection } from 'graphqlTypes';
import type { FC } from 'react';

interface LayoutSectionProps
  extends Omit<
    DatoCmsLayoutSection,
    'id' | 'children' | 'model' | 'meta' | 'internal' | 'originalId'
  > {
  key?: string;
  id?: string;
}

const LayoutSection: FC<LayoutSectionProps> = (props) => {
  const {
    component,
    desktopBottomPadding,
    desktopTopPadding,
    tabletBottomPadding,
    tabletTopPadding,
    mobileBottomPadding,
    mobileTopPadding,
  } = props;

  console.log(
    desktopBottomPadding,
    desktopTopPadding,
    tabletBottomPadding,
    tabletTopPadding,
    mobileBottomPadding,
    mobileTopPadding
  );

  const isHero = component?.__typename === 'DatoCmsComponentHero';

  // TODO: build out top and bottom padding functionality
  return (
    <Section isHero={isHero} id={props?.id}>
      {component && componentGenerator(component)}
    </Section>
  );
};

export default LayoutSection;
