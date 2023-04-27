import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: -apple-system, Roboto, sans-serif, serif;
  }
  a {
    color: green;
    &:hover {
      color: blue;
    }
  }
`

export default GlobalStyle
