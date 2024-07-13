import Container from 'basics/Container.styled';
import React, { type FC } from 'react';

import ComponentHeading from 'components/Heading/ComponentHeading';
import DesktopTimeline from 'components/Story/components/DesktopTimelineRow';
import MobileTimeline from 'components/Story/components/MobileTimelineRow';

import useWindowDimensions from 'utils/useWindowWidth';

import type { DatoCmsComponentStory } from 'graphqlTypes';

const Story: FC<DatoCmsComponentStory> = ({
  heading,
  subheading,
  timelineItems,
}) => {
  const windowWidth = useWindowDimensions().width;

  return (
    <Container>
      {(heading || subheading) && (
        <ComponentHeading
          heading={heading}
          subheading={subheading}
          hTag='h2'
          desktopSize='headLg'
          tabletSize='headMed'
          mobileSize='headMed'
          subheadingSize='textLg'
          subheadingWeight={400}
          alignment='center'
        />
      )}
      {windowWidth > 992 && <DesktopTimeline timelineItems={timelineItems} />}
      {windowWidth <= 992 && <MobileTimeline timelineItems={timelineItems} />}
    </Container>
  );
};

export default Story;
