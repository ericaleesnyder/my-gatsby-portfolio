import styled, { css } from 'styled-components';

import { color } from 'atoms/colors';

interface IconProps {
  invert?: boolean;
}

export const Wrap = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 32px;
  padding: 40px 0;
  @media (min-width: 768px) {
    flex-direction: column;
  }
  @media (min-width: 993px) {
    padding-top: 0;
  }
`

export const ImageWrap = styled.div`
  border-radius: 20px;
  margin: 0 auto;
  aspect-ratio: 21 / 9;
  max-width: 1016px;
  img {
    border: 2px solid ${color.black};
    object-position: top;
  }
  .gatsby-image-wrapper,
  img {
    aspect-ratio: 21 / 9;
    border-radius: 20px;
    margin: 0 auto;
  }
  @media (min-width: 768px) {
    border-radius: 40px;
    img {
      border-radius: 40px;
    }
  }
`;

export const ContentWrap = styled.div`
  max-width: 840px;
  width: 100%;
  padding: 0 32px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 60fr 30fr;
    gap: 10%;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 24px;
  @media (min-width: 768px) {
    grid-gap: 32px;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  a {
    width: fit-content;
  }
`;

export const LinkGroup = styled.div`
  display: flex;
  gap: 16px;
  padding-top: 16px;
`

export const FrameworkWrap = styled.div`
  display: flex;
  max-height: 32px;
  width: fit-content;
  gap: 16px;
  svg, img {
    max-width: 32px;
  }
`;

export const Icon = styled.svg<IconProps>`
  height: 60px;
  width: 12px;
  margin: 0 auto;
  display: flex;
  ${({ invert }) => invert && css`
    transform: rotate(180deg);
  `}
`

