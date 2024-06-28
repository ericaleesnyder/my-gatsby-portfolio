import styled, { css } from 'styled-components';

interface HeadingProps {
  alignment?: 'center' | 'left';
}

export const HeadingWrap = styled.div<HeadingProps>`
  height: fit-content;
  display: grid;
  grid-gap: 16px;
  margin: auto 0;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  @media (min-width: 768px) {
    ${({ alignment }) => alignment && alignment !== 'center' &&  
      css` 
        text-align: left;
        margin: unset;
      `
    }
  }
`;

export const CtaWrap = styled.div<HeadingProps>`
  flex-direction: column;
  margin-top: 8px;
  display: flex;
  gap: 12px;
  width: 100%;
  justify-content: center;
  align-items: center;
  div {
    width: 100%;
  }
  @media (min-width: 576px) {
    flex-direction: row;
    div {
      width: unset;
    }
  }
  @media (min-width: 768px) {
    ${({ alignment }) => alignment && alignment !== 'center' && css`
      justify-content: flex-start;
    `}
  }
`;
