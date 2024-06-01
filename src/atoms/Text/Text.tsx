import React, { type FC } from 'react';

import { TextAtom } from 'atoms/Text/styles/Text.styled';
import type { ColorKeys, ColorValues } from 'atoms/colors';
import { getColor } from 'atoms/colors';

export interface TextProps {
  size?: string;
  weight?: 300 | 400 | 500 | 600 | 700 | 800 | 900;
  children?: React.ReactNode;
  color?: ColorKeys;
  className?: string;
}

const Text: FC<TextProps> = ({ size, weight, children, color, className }) => (
  <TextAtom
    size={size ?? 'med'}
    weight={weight ?? 500}
    colorValue={getColor(color as ColorKeys) as ColorValues}
    className={className}
  >
    {children}
  </TextAtom>
);

export default Text;
