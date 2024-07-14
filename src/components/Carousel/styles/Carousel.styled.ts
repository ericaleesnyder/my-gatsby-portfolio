import styled from 'styled-components';

import { color } from 'atoms/colors';

export const CarouselWrap = styled.div`
  position: relative;
  .swiper {
    position: relative;
    overflow-y: visible;
    .swiper-notification {
      position: absolute;
      bottom: 0px;
    }
  }
`;

export const Slide = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  padding: 0 15px;
  @media (min-width: 577px) {
    max-width: 700px;
    padding: 0;
  }
  @media (min-width: 993px) {
    max-width: 800px;
  }
`

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  #swiper-pagination {
    width: fit-content;
  }
  .swiper-pagination-bullet {
    margin: 0 20px!important;
    background: ${color.white};
    opacity: 1;
    border: 2px solid ${color.black};
    width: 10px;
    height: 10px;
  }
  .swiper-pagination-bullet-active {
    background: ${color.black};
  }
`

export const PaginationButton = styled.div`
  cursor: pointer;
  &.swiper-button-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
