import styled from 'styled-components';

import font from 'atoms/typography';

export interface StyledTextProps {
  size: string;
  weight: 300 | 400 | 500 | 600 | 700 | 800 | 900;
}

export const TextAtom = styled.span<StyledTextProps>`
  ${({ size, weight }) => ((size || weight) ? font('text', size, weight) : font('text', 'med', 700))};
`
