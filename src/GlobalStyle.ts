import { createGlobalStyle } from 'styled-components';

import { color } from 'atoms/colors';
// import { font } from 'atoms/typography';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Quicksand';
    box-sizing: border-box;
    margin-block-start: 0;
    margin-block-end: 0;
  }
  html {
    background-color: #FFFBEF;
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
