import React, { type FC } from 'react';

import { TextAtom } from 'atoms/Text/styles/Text.styled';

export interface TextProps {
  size?: string;
  weight?: 300 | 400 | 500 | 600 | 700 | 800 | 900;
  children?: React.ReactNode;
}

const Text: FC<TextProps> = ({ size, weight, children }) => (
  <TextAtom size={size} weight={weight ?? 500}>
    {children}
  </TextAtom>
);

export default Text;
