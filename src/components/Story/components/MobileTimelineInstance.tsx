import React, { type FC } from 'react';

import Text from 'atoms/Text/Text';

import Icon, { type IconIds } from 'components/Icon';
import {
  IconWrap,
  Middle,
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
  last,
  colorCode,
}) => (
  <RowWrap>
    <Middle last={last}>
      <IconWrap colorCode={colorCode}>
        <Icon id={iconId as IconIds} size='32px' />
      </IconWrap>
    </Middle>
    <TimelineWrap colorCode={colorCode}>
      <Text size='textXl' weight={900}>
        {year}
      </Text>
      <Text size='textLg' weight={700}>
        {heading}
      </Text>
      <Text>{description}</Text>
    </TimelineWrap>
  </RowWrap>
);

export default DesktopTimelineInstance;
