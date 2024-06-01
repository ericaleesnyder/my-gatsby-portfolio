import styled from 'styled-components';

import { color } from 'atoms/colors';

export const HeroWrap = styled.div`
  width: 100%;
  padding-top: 65px;
  position: relative;
  z-index: 0;
  @media (min-width: 768px) {
    padding-top: 88px;
  }
`;

export const HeroContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  /* text-align: center; */
  @media (min-width: 768px) {
    display: grid;
    /* text-align: left; */
    grid-template-columns: repeat(2, 1fr);
    text-align: center;
  }
`;

export const ImageWrapper = styled.div`
  border-radius: 40px;
  margin: 0 auto;
  @media (min-width: 768px) {
    margin: 0 0 0 auto;
  }
  .gatsby-image-wrapper {
    max-width: 480px;
    max-height: 480px;
  }
  .gatsby-image-wrapper,
  img {
    border-radius: 40px;
  }
  img {
    border: 2px solid ${color.black};
  }
`;
