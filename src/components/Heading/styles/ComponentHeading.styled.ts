import styled from 'styled-components';

export const HeadingWrap = styled.div`
  height: fit-content;
  display: grid;
  grid-gap: 16px;
  margin: auto 0;
`;

export const CtaWrap = styled.div`
  flex-direction: column;
  margin-top: 8px;
  display: flex;
  gap: 12px;
  width: 100%;
  div {
    width: 100%;
  }
  @media (min-width: 576px) {
    flex-direction: row;
    div {
      width: unset;
    }
  }
`;
