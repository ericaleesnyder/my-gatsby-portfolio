import { Link } from 'gatsby';
import styled from 'styled-components'

import { color } from 'atoms/colors';
import type { ColorValues } from 'atoms/colors';

interface StyledCardProps {
  hoverColor?: ColorValues;
}

export const CardWrap = styled(Link)<StyledCardProps>`
  border: 2px solid ${color.black};
  border-radius: 24px;
  background-color: ${color.white};
  padding: 24px;
  display: grid;
  gap: 16px;
  position: relative;
  ::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
  :hover {
    left: -6px;
    bottom: 7px;
    ::before {
      content: '';
      left: 4px;
      bottom: -9px;
      width: 100%;
      background-color: ${({ hoverColor }) => hoverColor ? hoverColor : color.blue};
      border-radius: 24px;
      border: 2px solid ${color.black};
      z-index: -2;
    }
  }
`

export const HeadingWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

//  TODO: create icon component that accepts id and handles size
export const Icon = styled.svg`
  width: 24px;
  height: 24px;
`

export const Blurb = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ImageWrap = styled.div`
  border-radius: 10px;
  margin: 0 auto;
  aspect-ratio: 16 / 9;
  @media (min-width: 768px) {
    margin: 0 0 0 auto;
  }
  .gatsby-image-wrapper {
    aspect-ratio: 16 / 9;
  }
  .gatsby-image-wrapper,
  img {
    border-radius: 10px;
  }
`;
