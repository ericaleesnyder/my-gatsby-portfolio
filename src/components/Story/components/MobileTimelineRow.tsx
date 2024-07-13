import React, { type FC } from 'react';

import MobileTimelineInstance from 'components/Story/components/MobileTimelineInstance';
import { MobileWrap } from 'components/Story/styles/Timeline.styled';

import type { DatoCmsComponentStory } from 'graphqlTypes';

type TimelineProps = Omit<
  DatoCmsComponentStory,
  'children' | 'internal' | 'id' | 'originalId' | 'meta'
>;

const MobileTimeline: FC<TimelineProps> = ({ timelineItems }) => {
  let colorCode = 0;

  return (
    <MobileWrap>
      {timelineItems &&
        timelineItems.length > 0 &&
        timelineItems.map((item) => {
          if (colorCode === 5) {
            colorCode = 1;
          } else {
            colorCode++;
          }

          return (
            <MobileTimelineInstance
              key={item?.sortOrder}
              last={timelineItems.length === item?.sortOrder}
              colorCode={colorCode}
              {...item}
            />
          );
        })}
    </MobileWrap>
  );
};

export default MobileTimeline;
