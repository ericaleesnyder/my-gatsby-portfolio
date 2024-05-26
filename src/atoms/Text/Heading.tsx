import React, { type FC } from 'react';

import { H1, H2, H3, H4, H5, H6 } from 'atoms/Text/styles/Heading.styled';

export type HeadingTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps {
  hTag: HeadingTypes;
  size?: string | null;
  children?: React.ReactNode;
}

const Heading: FC<HeadingProps> = ({ size, hTag, children }) => {
  switch (hTag) {
    case 'h1':
      return <H1 size={size}>{children}</H1>;
    case 'h2':
      return <H2 size={size}>{children}</H2>;
    case 'h3':
      return <H3 size={size}>{children}</H3>;
    case 'h4':
      return <H4 size={size}>{children}</H4>;
    case 'h5':
      return <H5 size={size}>{children}</H5>;
    case 'h6':
      return <H6 size={size}>{children}</H6>;
    default:
      return null;
  }
};

export default Heading;
