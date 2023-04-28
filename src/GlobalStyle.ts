import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: -apple-system, Roboto, sans-serif, serif;
    box-sizing: border-box;
    margin-block-start: 0;
  }
  a {
    color: green;
    &:hover {
      color: blue;
    }
  }
`

export default GlobalStyle
