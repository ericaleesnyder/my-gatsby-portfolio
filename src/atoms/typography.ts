import { css } from "styled-components"

const fontType: any  = {
  text: {
    sm: { fontSize: 14, lineHeight: 18},
    med: { fontSize: 16, lineHeight: 24},
    lg: { fontSize: 18, lineHeight: 24},
    xl: { fontSize: 20, lineHeight: 24},
  },
  head: {
    xs: { fontSize: 22, lineHeight: 28},
    sm: { fontSize: 24, lineHeight: 30},
    med: { fontSize: 36, lineHeight: 40},
    lg: { fontSize: 48, lineHeight: 56},
    xl: { fontSize: 56, lineHeight: 60},
  }
}

export const font = (type: string, size: string, weight?: (300 | 400 | 500 | 600 | 700 | 800 | 900 )) => {
  return css`
    font-size: ${fontType[type][size].fontSize}px;
    line-height: ${fontType[type][size].lineHeight}px;
    font-weight: ${weight || 400};
    margin-bottom: 0;
  `
}
