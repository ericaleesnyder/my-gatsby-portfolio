import React, { type FC } from 'react';

import Text from 'atoms/Text/Text';

import Icon, { type IconIds } from 'components/Icon';
import {
  IconWrap,
  Middle,
  PlaceHolder,
  RowWrap,
  TimelineWrap,
} from 'components/Story/styles/TimelineInstance.styled';

import type { DatoCmsTimelineInstance } from 'graphqlTypes';

interface TimelineProps
  extends Omit<
    DatoCmsTimelineInstance,
    'children' | 'id' | 'internal' | 'meta' | 'originalId'
  > {
  last?: boolean;
  colorCode: number;
}

const DesktopTimelineInstance: FC<TimelineProps> = ({
  iconId,
  heading,
  description,
  year,
  sortOrder,
  last,
  colorCode,
}) => (
  <RowWrap>
    {sortOrder && sortOrder % 2 !== 0 ? (
      <TimelineWrap colorCode={colorCode}>
        <Text size='text2xl' weight={900}>
          {year}
        </Text>
        <Text size='textXl' weight={700}>
          {heading}
        </Text>
        <Text>{description}</Text>
      </TimelineWrap>
    ) : (
      <PlaceHolder />
    )}
    <Middle last={last}>
      <IconWrap colorCode={colorCode}>
        <Icon id={iconId as IconIds} size='32px' />
      </IconWrap>
    </Middle>
    {sortOrder && sortOrder % 2 === 0 ? (
      <TimelineWrap even colorCode={colorCode}>
        <Text size='text2xl' weight={900}>
          {year}
        </Text>
        <Text size='textXl' weight={700}>
          {heading}
        </Text>
        <Text>{description}</Text>
      </TimelineWrap>
    ) : (
      <PlaceHolder />
    )}
  </RowWrap>
);

export default DesktopTimelineInstance;
