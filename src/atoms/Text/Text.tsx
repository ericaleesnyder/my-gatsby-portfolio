import React, { type FC } from 'react';

import { TextAtom } from 'atoms/Text/styles/Text.styled';
import type { TextProps } from 'atoms/Text/textTypesAndData';
import { type ColorKeys, type ColorValues, getColor } from 'atoms/colors';

const Text: FC<TextProps> = ({ size, weight, children, color, className }) => (
  <TextAtom
    size={size ?? 'textMed'}
    weight={weight ?? 500}
    colorValue={getColor(color as ColorKeys) as ColorValues}
    className={className}
  >
    {children}
  </TextAtom>
);

export default Text;
