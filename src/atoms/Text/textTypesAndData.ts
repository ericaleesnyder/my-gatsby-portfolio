import type { ColorKeys } from 'atoms/colors';
import type { HeadingSizes, HeadingTypes, TextSizes } from 'atoms/typography';

export interface TextProps {
  size?: TextSizes;
  weight?: 300 | 400 | 500 | 600 | 700 | 800 | 900;
  children?: React.ReactNode;
  color?: ColorKeys;
  className?: string;
}

export interface HeadingProps {
  hTag: HeadingTypes;
  desktopSize?: HeadingSizes;
  tabletSize?: HeadingSizes;
  mobileSize?: HeadingSizes;
  children?: React.ReactNode;
};
