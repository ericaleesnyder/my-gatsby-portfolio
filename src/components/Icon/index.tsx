import React from 'react';
import styled, { css } from 'styled-components';

import { type ColorKeys, type ColorValues, getColor } from 'atoms/colors';

import type { FC } from 'react';

interface StyledSVGProps {
  invert?: boolean;
  color?: ColorValues | 'currentColor';
}

export const StyledSVG = styled.svg<StyledSVGProps>`
  ${({ invert }) =>
    invert === true &&
    css`
      transform: rotate(180deg);
    `}
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;

export const iconValues = [
  'logo',
  'filler',
  'right-arrow',
  'left-arrow',
  'quote',
  'dato',
  'gatsby',
  'next',
  'contentful',
  'github',
  'code-brackets-square',
  'academic-cap',
  'city',
  'sea-and-sun',
  'design-pencil',
  'peace-hand',
  'code-brackets',
  'globe',
  'pin',
  'linkedIn',
] as const;

export type IconIds = (typeof iconValues)[number];

export interface IconProps {
  id: IconIds;
  size?: string;
  width?: string;
  height?: string;
  color?: ColorKeys | 'currentColor';
  opacity?: number;
  cursor?: string;
  display?: string;
  invert?: boolean;
}

export const Icon: FC<IconProps> = ({
  id,
  size = '16px',
  height,
  width,
  color = 'currentColor',
  invert,
  ...props
}) => (
  <StyledSVG
    width={width ?? size}
    height={height ?? size}
    color={
      color === 'currentColor'
        ? color
        : (getColor(color as ColorKeys) as ColorValues)
    }
    invert={invert}
    {...props}
  >
    <use href={`/icons/sprites.svg#${id}`} />
  </StyledSVG>
);

export default Icon;
