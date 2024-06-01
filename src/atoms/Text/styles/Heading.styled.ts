import styled, { css } from 'styled-components';

import type { HeadingProps } from 'atoms/Text/textTypesAndData';
import { font } from 'atoms/typography';

type HeadingStyleProps = Omit<HeadingProps, 'hTag' | 'children'>;

export const H1 = styled.h1<HeadingStyleProps>`
  ${({ desktopSize, tabletSize, mobileSize }) => ((desktopSize && tabletSize && mobileSize) ? 
      css`
        ${font(mobileSize, 700)}
        @media (min-width: 576px) {
          ${font(tabletSize, 700)}
        }
        @media (min-width: 993px) {
          ${font(desktopSize, 700)}
        }` :
      css`
        ${font('head2xl', 700)}`
    )};
`;

export const H2 = styled.h2<HeadingStyleProps>`
  ${({ desktopSize, tabletSize, mobileSize }) => ((desktopSize && tabletSize && mobileSize) ? 
      css`
        ${font(mobileSize, 700)}
        @media (min-width: 576px) {
          ${font(tabletSize, 700)}
        }
        @media (min-width: 993px) {
          ${font(desktopSize, 700)}
        }` :
      css`
        ${font('headXl', 700)}`
    )};
`;

export const H3 = styled.h3<HeadingStyleProps>`
  ${({ desktopSize, tabletSize, mobileSize }) => ((desktopSize && tabletSize && mobileSize) ? 
      css`
        ${font(mobileSize, 700)}
        @media (min-width: 576px) {
          ${font(tabletSize, 700)}
        }
        @media (min-width: 993px) {
          ${font(desktopSize, 700)}
        }` :
      css`
        ${font('headLg', 700)}`
    )};
`;

export const H4 = styled.h4<HeadingStyleProps>`
    ${({ desktopSize, tabletSize, mobileSize }) => ((desktopSize && tabletSize && mobileSize) ? 
      css`
        ${font(mobileSize, 700)}
        @media (min-width: 576px) {
          ${font(tabletSize, 700)}
        }
        @media (min-width: 993px) {
          ${font(desktopSize, 700)}
        }` :
      css`
        ${font('headMed', 700)}`
    )};
`;

export const H5 = styled.h5<HeadingStyleProps>`
  ${({ desktopSize, tabletSize, mobileSize }) => ((desktopSize && tabletSize && mobileSize) ? 
      css`
        ${font(mobileSize, 700)}
        @media (min-width: 576px) {
          ${font(tabletSize, 700)}
        }
        @media (min-width: 993px) {
          ${font(desktopSize, 700)}
        }` :
      css`
        ${font('headSm', 700)}`
    )};
`;

export const H6 = styled.h6<HeadingStyleProps>`
  ${({ desktopSize, tabletSize, mobileSize }) => ((desktopSize && tabletSize && mobileSize) ? 
      css`
        ${font(mobileSize, 700)}
        @media (min-width: 576px) {
          ${font(tabletSize, 700)}
        }
        @media (min-width: 993px) {
          ${font(desktopSize, 700)}
        }` :
      css`
        ${font('headXs', 700)}`
    )};
`;
