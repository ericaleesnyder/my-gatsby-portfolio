import styled, { css } from 'styled-components';

interface StyledDeckProps {
  variant?: 'homepage' | 'detail';
}

export const CardDeckWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Deck = styled.div<StyledDeckProps>`
  ${({ variant }) => variant && variant === 'homepage' ? 
  css`
    display: grid;
    gap: 24px;
    @media (min-width: 576px) {
      grid-template-columns: repeat(4, 1fr);
      .card:nth-child(1) { grid-area: 1 / 1 / 2 / 3; }
      .card:nth-child(2) { grid-area: 1 / 3 / 2 / 5; }
      .card:nth-child(3) { grid-area: 2 / 1 / 3 / 3; }
      .card:nth-child(4) { grid-area: 2 / 3 / 3 / 5; }
      .card:nth-child(5) { grid-area: 3 / 2 / 4 / 4; }
    }
    @media (min-width: 993px) {
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: 1.25fr 1fr;
      .card:nth-child(1) { grid-area: 1 / 1 / 2 / 4; }
      .card:nth-child(2) { grid-area: 1 / 4 / 2 / 7; }
      .card:nth-child(3) { grid-area: 2 / 1 / 3 / 3; }
      .card:nth-child(4) { grid-area: 2 / 3 / 3 / 5; }
      .card:nth-child(5) { grid-area: 2 / 5 / 3 / 7; }
    }
  ` : 
  css`
    display: flex;
    gap: 24px;
    flex-direction: column;
    justify-content: center;
    .card {
      flex: 1 1 0px;
    }
    @media (min-width: 768px) {
      flex-direction: row;
    }
  `}
`;
