import Section from 'basics/Section.styled';
import React from 'react';

import componentGenerator from 'utils/componentGenerator';

import type { DatoCmsLayoutSection } from 'graphqlTypes';
import type { FC } from 'react';

export interface LayoutSectionProps
  extends Omit<
    DatoCmsLayoutSection,
    'id' | 'children' | 'model' | 'meta' | 'internal' | 'originalId'
  > {
  id?: string;
}

const LayoutSection: FC<LayoutSectionProps> = (props) => {
  const {
    component,
    mobileTopPadding,
    mobileBottomPadding,
    tabletTopPadding,
    tabletBottomPadding,
    desktopTopPadding,
    desktopBottomPadding,
  } = props;
  const isHero = component?.__typename === 'DatoCmsComponentHero';

  return (
    <Section
      isHero={isHero}
      id={props?.id}
      desktopTopPadding={desktopTopPadding}
      desktopBottomPadding={desktopBottomPadding}
      tabletTopPadding={tabletTopPadding}
      tabletBottomPadding={tabletBottomPadding}
      mobileTopPadding={mobileTopPadding}
      mobileBottomPadding={mobileBottomPadding}
    >
      {component && componentGenerator(component)}
    </Section>
  );
};

export default LayoutSection;
