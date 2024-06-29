import styled from 'styled-components';

import { color } from 'atoms/colors';

export const HeroWrap = styled.div`
  width: 100%;
  padding-top: 48px;
  position: relative;
  z-index: 0;
`;

export const HeroContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  align-items: center;
  @media (min-width: 768px) {
    display: grid;
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

export const TwoImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  .image, img {
    border-radius: 20px;
    @media (min-width: 768px) {
      border-radius: 40px;
    }
    img {
      border: 2px solid ${color.black};
    }
  }
  .primary {
    grid-area: 3 / 3 / 7 / 7;
    z-index: 2;
  }
  .secondary {
    grid-area: 1 / 1 / 4 / 4;
    z-index: 1;
  }
`;

export const ThreeImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 24px;
  .image, img {
    border-radius: 20px;
    @media (min-width: 768px) {
      border-radius: 40px;
    }
    img {
      border: 2px solid ${color.black};
    }
  }
  .primary {
    grid-area: 2 / 4 / 5 / 8;
    z-index: 3;
  }
  .secondary {
    grid-area: 1 / 1 / 4 / 5;
    z-index: 2;
  }
  .tertiary {
    grid-area: 4 / 2 / 7 / 6;
    z-index: 1;
  }
`;
