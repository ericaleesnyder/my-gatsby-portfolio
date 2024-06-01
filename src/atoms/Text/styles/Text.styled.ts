import styled from 'styled-components';

import { type ColorValues, color } from 'atoms/colors';
import font from 'atoms/typography';

export interface StyledTextProps {
  size: string;
  weight: 300 | 400 | 500 | 600 | 700 | 800 | 900;
  colorValue?: ColorValues;
}

export const TextAtom = styled.span<StyledTextProps>`
  ${({ size, weight }) => ((size || weight) ? font('text', size, weight) : font('text', 'med', 700))};
  color: ${({ colorValue }) => colorValue ? colorValue : color.black};
`
