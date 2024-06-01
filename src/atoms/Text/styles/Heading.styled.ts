import styled from 'styled-components';

import type { HeadingProps } from 'atoms/Text/Heading';
import { font } from 'atoms/typography';

type HeadingStyleProps = Omit<HeadingProps, 'hTag' | 'children'>;

export const H1 = styled.h1<HeadingStyleProps>`
  ${({ size }) => (size ? font('head', size, 700) : font('head', 'xxl', 700))};
`;

export const H2 = styled.h2<HeadingStyleProps>`
  ${({ size }) => (size ? font('head', size, 700) : font('head', 'xl', 700))};
`;

export const H3 = styled.h3<HeadingStyleProps>`
  ${({ size }) => (size ? font('head', size, 700) : font('head', 'lg', 700))};
`;

export const H4 = styled.h4<HeadingStyleProps>`
  ${({ size }) => (size ? font('head', size, 700) : font('head', 'med', 700))};
`;

export const H5 = styled.h5<HeadingStyleProps>`
  ${({ size }) => (size ? font('head', size, 700) : font('head', 'sm', 700))};
`;

export const H6 = styled.h6<HeadingStyleProps>`
  ${({ size }) => (size ? font('head', size, 700) : font('head', 'xs', 700))};
`;
