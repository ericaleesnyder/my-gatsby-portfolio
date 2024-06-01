import styled, { css } from 'styled-components';

import type { LayoutSectionProps } from 'components/LayoutSection';

interface SectionProps extends Omit<LayoutSectionProps, 'component'> {
  isHero?: boolean;
}

const Section = styled.section<SectionProps>`
  padding-left: 0;
  padding-right: 0;
  width: 100%;
  height: fit-content;
  display:block;
  position: relative;

  &#contact-me-form {
    z-index: 0;
    background: radial-gradient(57.22% 58.84% at 83.51% 83.51%, rgba(255,182,248, 0.5) 0%, transparent 100%);
  }

  padding-top: ${({ mobileTopPadding }) => mobileTopPadding ? `${mobileTopPadding}px` : '24px'};
  padding-bottom: ${({ mobileBottomPadding }) => mobileBottomPadding ? `${mobileBottomPadding}px` : '24px'};

  @media (min-width: 577px) {
    padding-top: ${({ tabletTopPadding }) => tabletTopPadding ? `${tabletTopPadding}px` : '48px'};
    padding-bottom: ${({ tabletBottomPadding }) => tabletBottomPadding ? `${tabletBottomPadding}px` : '48px'};
  };

  @media (min-width: 993px) {
    padding-top: ${({ desktopTopPadding }) => desktopTopPadding ? `${desktopTopPadding}px` : '96px'};
    padding-bottom: ${({ desktopBottomPadding }) => desktopBottomPadding ? `${desktopBottomPadding}px` : '96px'};
  };


  ${({ isHero }) => isHero && css`
    background:
      radial-gradient(20% 10% at 75% 90%, rgba(25, 255, 20, 0.4) 0%, transparent 100%),
      radial-gradient(20% 10% at 78% 91%, rgba(20, 255, 241, 0.5) 0%, transparent 100%),
      radial-gradient(20% 8% at 90% 88%, rgba(41,255,140, 0.5) 0%, transparent 100%),
      radial-gradient(15% 10% at 90% 85%, rgba(41,114,255, 0.3) 0%, transparent 100%),
      radial-gradient(15% 7% at 10% 60%, rgba(138, 20, 255, 0.3) 0%, transparent 100%),
      radial-gradient(17% 9% at 8% 62%, rgba(255, 41, 231, .3) 0%, transparent 100%),
      radial-gradient(18% 9% at 7% 68%, rgba(255, 20, 34, 0.15) 0%, transparent 100%),
      radial-gradient(30% 7% at 9% 70%, rgba(255, 118, 41, .25) 0%, transparent 100%),
      radial-gradient(57.22% 58.84% at 16.49% 16.48%, rgba(255,182,248, 0.5) 0%, transparent 100%);

    @media (min-width: 400px) {
      background: 
        radial-gradient(20% 10% at 75% 90%, rgba(25, 255, 20, 0.4) 0%, transparent 100%),
        radial-gradient(20% 10% at 78% 91%, rgba(20, 255, 241, 0.5) 0%, transparent 100%),
        radial-gradient(20% 8% at 90% 88%, rgba(41,255,140, 0.5) 0%, transparent 100%),
        radial-gradient(15% 10% at 90% 85%, rgba(41,114,255, 0.3) 0%, transparent 100%),
        radial-gradient(15% 7% at 10% 50%, rgba(138, 20, 255, 0.2) 0%, transparent 100%),
        radial-gradient(17% 9% at 8% 52%, rgba(255, 41, 231, .2) 0%, transparent 100%),
        radial-gradient(18% 9% at 7% 58%, rgba(255, 20, 34, 0.15) 0%, transparent 100%),
        radial-gradient(20% 7% at 9% 60%, rgba(255, 118, 41, .25) 0%, transparent 100%),
        radial-gradient(57.22% 58.84% at 16.49% 16.48%, rgba(255,182,248, 0.5) 0%, transparent 100%);
    }

    @media (min-width: 576px) {
      background: 
        radial-gradient(20% 10% at 75% 90%, rgba(25, 255, 20, 0.4) 0%, transparent 100%),
        radial-gradient(20% 10% at 78% 91%, rgba(20, 255, 241, 0.5) 0%, transparent 100%),
        radial-gradient(20% 8% at 90% 88%, rgba(41,255,140, 0.5) 0%, transparent 100%),
        radial-gradient(15% 10% at 90% 85%, rgba(41,114,255, 0.3) 0%, transparent 100%),
        radial-gradient(15% 7% at 15% 40%, rgba(138, 20, 255, 0.3) 0%, transparent 100%),
        radial-gradient(17% 9% at 13% 42%, rgba(255, 41, 231, .3) 0%, transparent 100%),
        radial-gradient(18% 9% at 12% 48%, rgba(255, 20, 34, 0.15) 0%, transparent 100%),
        radial-gradient(20% 7% at 14% 50%, rgba(255, 118, 41, .25) 0%, transparent 100%),
        radial-gradient(57.22% 58.84% at 16.49% 16.48%, rgba(255,182,248, 0.5) 0%, transparent 100%);
    }

    @media (min-width: 768px) {
      background:
        radial-gradient(20% 40% at 95% 50%, rgba(25, 255, 20, 0.4) 0%, transparent 100%),
        radial-gradient(20% 40% at 98% 48%, rgba(20, 255, 241, 0.5) 0%, transparent 100%),
        radial-gradient(25% 20% at 80% 80%, rgba(41,255,140, 0.5) 0%, transparent 100%),
        radial-gradient(15% 22% at 80% 78%, rgba(41,114,255, 0.3) 0%, transparent 100%),
        radial-gradient(10% 20% at 65% 25%, rgba(138, 20, 255, 0.3) 0%, transparent 100%),
        radial-gradient(15% 25% at 65% 25%, rgba(255, 41, 231, .3) 0%, transparent 100%),
        radial-gradient(11% 25% at 60% 60%, rgba(255, 20, 34, 0.25) 0%, transparent 100%),
        radial-gradient(25% 35% at 60% 60%, rgba(255, 118, 41, .35) 0%, transparent 100%),
        radial-gradient(57.22% 58.84% at 16.49% 16.48%, rgba(255,182,248, 0.5) 0%, transparent 100%);
    }`
  }
`;

export default Section;
