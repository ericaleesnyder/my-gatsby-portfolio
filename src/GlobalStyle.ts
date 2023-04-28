import { createGlobalStyle } from "styled-components";
import { color } from "./atoms/colors";
import { font } from "./atoms/typography";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Poppins";
    box-sizing: border-box;
    margin-block-start: 0;
    margin-block-end: 0;
  }
  body {
    color: ${color.grey[900]};
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
