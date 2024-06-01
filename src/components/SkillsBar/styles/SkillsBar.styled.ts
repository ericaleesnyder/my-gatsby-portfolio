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
  align-items: center;
  position: relative;
  padding: 0 16px;
  flex: 1 0 50%;
  z-index: 0;
  .gatsby-image-wrapper, img {
    height: 48px;
    width: auto;
    z-index: 1;
  }
  span {
    padding: 4px 8px;
    border: 2px solid ${color.black};
    border-radius: 8px;
    background-color:${color.white}; 
    opacity: 0;
    position: absolute;
    top: 105%;
    text-align: center;
    transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.1s ease;
    z-index: 2;
  }
  &:hover, :focus, :focus-visible {
    outline: none;
    span {
      opacity: 1;
    }
    &:nth-child(even) {
      span {
        transform: rotate(-3deg);
      }
    }
    &:nth-child(odd) {
      span {
        transform: rotate(3deg);
      }
    }
  }
  @media (min-width: 400px) {
    flex: 1 0 33%;
  }

  @media (min-width: 993px) {
    flex: unset;
    span {
      padding: 8px 12px;
    }
    .gatsby-image-wrapper, img {
      height: 64px;
      width: auto;
    }
  }
`
