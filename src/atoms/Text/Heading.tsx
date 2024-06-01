import React, { type FC } from 'react';

import { H1, H2, H3, H4, H5, H6 } from 'atoms/Text/styles/Heading.styled';
import type { HeadingProps } from 'atoms/Text/textTypesAndData';

const Heading: FC<HeadingProps> = ({
  desktopSize,
  tabletSize,
  mobileSize,
  hTag,
  children,
}) => {
  switch (hTag) {
    case 'h1':
      return (
        <H1
          desktopSize={desktopSize ?? 'head2xl'}
          tabletSize={tabletSize ?? 'headXl'}
          mobileSize={mobileSize ?? 'headXl'}
        >
          {children}
        </H1>
      );
    case 'h2':
      return (
        <H2
          desktopSize={desktopSize ?? 'headXl'}
          tabletSize={tabletSize ?? 'headLg'}
          mobileSize={mobileSize ?? 'headLg'}
        >
          {children}
        </H2>
      );
    case 'h3':
      return (
        <H3
          desktopSize={desktopSize ?? 'headLg'}
          tabletSize={tabletSize ?? 'headMed'}
          mobileSize={mobileSize ?? 'headMed'}
        >
          {children}
        </H3>
      );
    case 'h4':
      return (
        <H4
          desktopSize={desktopSize ?? 'headMed'}
          tabletSize={tabletSize ?? 'headSm'}
          mobileSize={mobileSize ?? 'headSm'}
        >
          {children}
        </H4>
      );
    case 'h5':
      return (
        <H5
          desktopSize={desktopSize ?? 'headSm'}
          tabletSize={tabletSize ?? 'headXs'}
          mobileSize={mobileSize ?? 'headXs'}
        >
          {children}
        </H5>
      );
    case 'h6':
      return (
        <H6
          desktopSize={desktopSize ?? 'headXs'}
          tabletSize={tabletSize ?? 'headXs'}
          mobileSize={mobileSize ?? 'headXs'}
        >
          {children}
        </H6>
      );
    default:
      return null;
  }
};

export default Heading;
