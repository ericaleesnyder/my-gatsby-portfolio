import styled from 'styled-components';

import { color } from 'atoms/colors';

export const HeroWrap = styled.div`
  width: 100%;
  padding-top: 80px;
`;

export const HeroContentWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 36px;
`;

export const ImageWrapper = styled.div`
  border-radius: 40px;
  margin-left: auto;
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
