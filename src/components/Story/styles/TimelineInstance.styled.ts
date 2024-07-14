import styled, { css } from 'styled-components';

import { color } from 'atoms/colors';

import Dot from 'components/Story/assets/dots.svg'

interface TimelineWrapProps {
  even?: boolean;
  colorCode?: number;
}

interface MiddleProps {
  last?: boolean;
  colorCode?: number;
}

const colors = {
  1: `${color.blue}`,
  2: `${color.pink}`,
  3: `${color.yellow}`,
  4: `${color.green}`,
  5: `${color.red}`,
} as const

export const RowWrap = styled.div`
  padding: 0px 30px;
  display: grid;
  grid-template-columns: 0px 1fr;
  @media (min-width: 993px) {
    grid-template-columns: 1fr 0px 1fr;
  }
`

export const TimelineWrap = styled.div<TimelineWrapProps>`
  background-color: ${color.white};
  border: 2px solid ${color.black};
  border-radius: 24px;
  padding: 16px 24px;
  display: flex;
  gap: 8px;
  flex-direction: column;
  position: relative;
  margin: 0px 20px 40px 40px;
  @media (min-width: 993px) {
    margin: ${({ even }) => even ? '0 20px 20px 40px' : '0 40px 20px 20px'};
  }
  ::before {
    content: '';
    position: absolute;
    left: 4px;
    bottom: -9px;
    width: 100%;
    height: 100%;
    background-color: ${({ colorCode }) => colorCode ? [colors[colorCode as keyof typeof colors]] : color.blue};
    border-radius: 24px;
    border: 2px solid ${color.black};
    z-index: -2;
  }
`;

export const PlaceHolder = styled.div`
  margin: 0 20px 20px 20px;
  min-height: 120px;
`

export const Middle = styled.div<MiddleProps>`
  position: relative;
  border-style: dotted;
  border-image-slice: 33%;
  border-image-repeat: round;
  border-width: 0 0 0 30px;
  border-image-source: url(${Dot});
  margin-left: -6px;
  image-rendering: auto;
  image-rendering: crisp-edges;
  image-rendering: pixelated;
  ${({ last }) => last === true && css`
    border-width: 0
    border-image-source: unset;
    border-image-slice: unset;
  `}
`;

export const IconWrap = styled.div<MiddleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  padding: 10px;
  border-radius: 50%;
  border: 2px solid ${color.black};
  position: absolute;
  top: 0;
  left: -24px;
  transform: translateX(-53%);
  background-color: ${({ colorCode }) => colorCode ? [colors[colorCode as keyof typeof colors]] : color.white};
  border-radius: 50%;
  transition: all 150ms ease-in;
`;
