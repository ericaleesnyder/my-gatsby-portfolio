import styled from 'styled-components';

import { color } from 'atoms/colors';

export const AuthorWrapper = styled.div`
  display: flex;
  padding: 12px;
  background-color: ${color.white};
  border: 2px solid ${color.black};
  border-radius: 8px;
  gap: 8px;
  position: absolute;
  transform: rotate(-3deg);
  margin-top: 8px;
  width: 100%;
  @media (min-width: 576px) {
    width: fit-content;
    right: -50px;
  }
`

export const Headshot = styled.div`
  border-radius: 50%;
  .gatsby-image-wrapper, img {
    border-radius: 50%;
    width: 48px;
    height: 48px;
  }
`;

export const TextWrap = styled.div`
  display: grid;
`
