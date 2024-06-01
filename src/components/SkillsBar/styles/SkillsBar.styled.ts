import { motion } from 'framer-motion';
import styled from 'styled-components';

import { color } from 'atoms/colors';

export const SkillsBarWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 24px;
`

export const SkillsWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  row-gap: 48px;
  @media (min-width: 576px) {
    width: 75%;
  }
  @media (min-width: 993px) {
    width: 100%;
  }
`

export const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 16px;
  flex: 1 0 50%;
  z-index: 0;
  border-radius: 4px;
  width: fit-content;
  .gatsby-image-wrapper, img {
    height: 48px;
    width: auto;
  }
  .textWrap {
    opacity: 0;
  }
  :hover, :focus, :focus-visible {
    outline: none;
    .textWrap {
      opacity: 1;
    }
  }
  @media (min-width: 400px) {
    flex: 1 0 33%;
  }
  @media (min-width: 993px) {
    flex: unset;
    .gatsby-image-wrapper, img {
      height: 64px;
      width: auto;
    }
  }
`

export const TextWrap = styled(motion.div)`
  padding: 4px 8px;
  border: 2px solid ${color.black};
  border-radius: 8px;
  background-color:${color.white}; 
  opacity: 0;
  position: absolute;
  top: 105%;
  text-align: center;
  @media (min-width: 993px) {
    padding: 8px 12px;
  }
`;
