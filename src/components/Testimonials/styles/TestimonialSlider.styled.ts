import styled, { css } from 'styled-components';

import { type ColorKeys, color } from 'atoms/colors';

interface StyledProps {
  clr?: ColorKeys;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`

export const TestimonialsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TestimonialWrapper = styled.div<StyledProps>`
  padding: 8px 24px 24px;
  border-radius: 24px;
  background: white;
  position: relative;
  border: 2px solid ${color.black};
  width: 100%;
  margin-bottom: 80px;
  ::before {
    ${({ clr }) => clr && css`
      background-color: ${color[clr]};`
    }
    user-select: none;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.1;
    border-radius: 24px;
    margin: -8px -24px -24px;
    z-index: 0;
  }
`;

export const QuoteIcon = styled.svg<StyledProps>`
  width: 56px;
  height: 56px;
  ${({ clr }) => clr && css`
    color: ${color[clr]};
  `};
`

export const TextWrap = styled.div`
  position: relative;
  z-index: 2;
`;
