import styled from 'styled-components';

export const HeadingWrap = styled.div`
  height: fit-content;
  display: grid;
  grid-gap: 16px;
  margin: auto 0;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  @media (min-width: 768px) {
    text-align: left;
    margin: unset;
  }
`;

export const CtaWrap = styled.div`
  flex-direction: column;
  margin-top: 8px;
  display: flex;
  gap: 12px;
  width: 100%;
  justify-content: center;
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
    justify-content: flex-start;

  }
`;
