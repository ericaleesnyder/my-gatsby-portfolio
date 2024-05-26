import styled, { css } from 'styled-components';

import { color } from 'atoms/colors';

interface SectionProps {
  isHero?: boolean;
}

const Section = styled.section<SectionProps>`
  padding: 15px 0;
  width: 100%;
  height: fit-content;
  display:block;

  @media (min-width: 577px) {
    padding: 25px 0;
  }
  @media (min-width: 993px) {
    padding: 41px 0;
      //TODO: create gradients for other breakpoints
  ${({ isHero }) => isHero && css`
    background:
      radial-gradient(20% 40% at 95% 50%, rgba(25, 255, 20, 0.4) 0%, transparent 100%),
      radial-gradient(20% 40% at 98% 48%, rgba(20, 255, 241, 0.5) 0%, transparent 100%),
      radial-gradient(25% 30% at 80% 70%, rgba(41,255,140, 0.5) 0%, transparent 100%),
      radial-gradient(15% 26% at 80% 70%, rgba(41,114,255, 0.3) 0%, transparent 100%),
      radial-gradient(10% 20% at 65% 25%, rgba(138, 20, 255, 0.3) 0%, transparent 100%),
      radial-gradient(15% 25% at 65% 25%, rgba(255, 41, 231, .3) 0%, transparent 100%),
      radial-gradient(11% 25% at 60% 60%, rgba(255, 20, 34, 0.25) 0%, transparent 100%),
      radial-gradient(25% 35% at 60% 60%, rgba(255, 118, 41, .35) 0%, transparent 100%),
      radial-gradient(57.22% 58.84% at 16.49% 16.48%, ${color.pink} 0%, transparent 100%);
  `}
  }
`;

export default Section;
