import styled from 'styled-components';

import { color } from 'atoms/colors';

export const DetailContent = styled.div`
  max-width: 840px;
  width: 100%;
  padding: 0 32px;
  margin: 0 auto;
  p {
    padding-bottom: 16px;
  }
  a {
    text-decoration: underline;
  }
  h2, h3 {
    margin-top: 16px;
  }
`;

export const ImageWrap = styled.div`
  border-radius: 30px;
  margin: 0 auto 16px;
  .gatsby-image-wrapper,
  img {
    border-radius: 40px;
  }
  img {
    border: 2px solid ${color.black};
  }
  @media (min-width: 768px) {
    border-radius: 40px;
    max-width: 80%;
    .gatsby-image-wrapper,
    img {
      border-radius: 40px;
    }
  }
`

export default DetailContent;
