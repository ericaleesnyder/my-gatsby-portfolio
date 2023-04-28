import { createGlobalStyle } from "styled-components";
import { color } from "./atoms/colors";
import { font } from "./atoms/typography";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Poppins";
    box-sizing: border-box;
    margin-block-start: 0;
    color: ${color.grey[900]}
  }
  a {
    ${font("text", "med", 600)}
    color: ${color.common.orange};
    &:hover {
      color: ${color.common.purple};
    }
  }
`

export default GlobalStyle
