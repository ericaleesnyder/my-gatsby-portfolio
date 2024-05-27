import { Link } from 'gatsby';
import styled from 'styled-components'

import { color } from 'atoms/colors';

export const CardWrap = styled(Link)`
  border: 2px solid ${color.black};
  border-radius: 24px;
  background-color: ${color.white};
  padding: 24px;
  display: grid;
  gap: 16px;
`

export const HeadingWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Blurb = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
