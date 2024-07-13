import React, { type FC } from 'react';

import DesktopTimelineInstance from 'components/Story/components/DesktopTimelineInstance';
import { DesktopWrap } from 'components/Story/styles/Timeline.styled';

import type { DatoCmsComponentStory } from 'graphqlTypes';

type TimelineProps = Omit<
  DatoCmsComponentStory,
  'children' | 'internal' | 'id' | 'originalId' | 'meta'
>;

const DesktopTimeline: FC<TimelineProps> = ({ timelineItems }) => {
  let colorCode = 0;

  return (
    <DesktopWrap>
      {timelineItems &&
        timelineItems.length > 0 &&
        timelineItems.map((item) => {
          if (colorCode === 5) {
            colorCode = 1;
          } else {
            colorCode++;
          }

          return (
            <DesktopTimelineInstance
              key={item?.sortOrder}
              last={timelineItems.length === item?.sortOrder}
              colorCode={colorCode}
              {...item}
            />
          );
        })}
    </DesktopWrap>
  );
};

export default DesktopTimeline;
