import { css } from 'styled-components';

export type HeadingTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type TextSizes = 'textSm' | 'textMed' | 'textLg' | 'textXl' | 'text2xl'

export type HeadingSizes = 'headXs' | 'headSm' | 'headMed' | 'headLg' | 'headXl' | 'head2xl'

export type ButtonSizes = 'btnSm' | 'btnLg'

export type FontWeights = 300 | 400 | 500 | 600 | 700 | 800 | 900;

export const fontSize = {
  textSm: '14px',
  textMed: '16px',
  textLg: '18px',
  textXl: '20px',
  text2xl: '28px',
  headXs: '22px',
  headSm: '24px',
  headMed: '36px',
  headLg: '48px',
  headXl: '56px',
  head2xl: '72px',
  btnSm: '16px',
  btnLg: '20px',
} as const

export const fontLineHeight = {
  textSm: '20px',
  textMed: '24px',
  textLg: '24px',
  textXl: '28px',
  text2xl: '30px',
  headXs: '30px',
  headSm: '24px',
  headMed: '36px',
  headLg: '48px',
  headXl: '56px',
  head2xl: '72px',
  btnSm: '16px',
  btnLg: '20px',
} as const

export type FontTypeDefinition = keyof typeof fontSize;

export const font = (
  type: FontTypeDefinition,
  weight?: FontWeights,
) => css`
    font-size: ${fontSize[type]};
    line-height: ${fontLineHeight[type]};
    font-weight: ${weight || 500};
    margin-bottom: 0;
  `;

export default font;
