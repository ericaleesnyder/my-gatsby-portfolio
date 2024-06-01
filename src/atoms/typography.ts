import { css } from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fontType: any = {
  text: {
    sm: { fontSize: 14, lineHeight: 20 },
    med: { fontSize: 16, lineHeight: 24 },
    lg: { fontSize: 18, lineHeight: 24 },
    xl: { fontSize: 20, lineHeight: 28 },
    xxl: { fontSize: 28, lineHeight: 30 },
  },
  head: {
    xs: { fontSize: 22, lineHeight: 30 },
    sm: { fontSize: 24, lineHeight: 34 },
    med: { fontSize: 36, lineHeight: 50 },
    lg: { fontSize: 48, lineHeight: 68 },
    xl: { fontSize: 56, lineHeight: 78 },
    xxl: { fontSize: 72, lineHeight: 88 },
  },
  button: {
    sm: { fontSize: 16, lineHeight: 16},
    lg: { fontSize: 20, lineHeight: 24}
  }
};

export const font = (
  type: string,
  size: string,
  weight?: 300 | 400 | 500 | 600 | 700 | 800 | 900
) => css`
    font-size: ${fontType[type][size].fontSize}px;
    line-height: ${fontType[type][size].lineHeight}px;
    font-weight: ${weight || 500};
    margin-bottom: 0;
  `;

export default font;
