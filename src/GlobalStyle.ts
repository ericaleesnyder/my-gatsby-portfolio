import { createGlobalStyle, css } from 'styled-components';

import { color } from 'atoms/colors';
// import { font } from 'atoms/typography';

interface GlobalStyleProps {
  isGradientBackground?: boolean;
  mobileNavActive: boolean;
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  * {
    font-family: 'Quicksand';
    box-sizing: border-box;
    margin-block-start: 0;
    margin-block-end: 0;
  }
  main {
    position: relative;
    z-index: 0;
    transition: opacity 250ms ease;
    ${({ isGradientBackground }) => isGradientBackground && css`
       background:
        radial-gradient(15% 15% at 75% 70%, rgba(41,255,140, 0.5) 0%, transparent 100%),
        radial-gradient(10% 10% at 80% 80%, rgba(41,114,255, 0.3) 0%, transparent 100%),
        radial-gradient(25% 25% at 20% 50%, rgba(255, 118, 41, .35) 0%, transparent 100%),
        radial-gradient(20% 20% at 25% 60%, rgba(255, 20, 34, 0.25) 0%, transparent 100%),
        radial-gradient(57.22% 30% at 16.49% 16.48%, rgba(255,182,248, 0.5) 0%, transparent 100%);
    `}
    ${({ mobileNavActive }) => mobileNavActive && css`
      opacity: 0.3;
    `}
  }
  html {
    background-color: #FFFBEF;
    scroll-behavior: smooth;
  }
  body {
    color: ${color.black};
    margin: 0;
    margin-block-start: 0;
    margin-block-end: 0;
  }
  a {
    color: inherit;
    text-decoration: inherit;
  }
`

export default GlobalStyle
