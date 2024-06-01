import { Link } from 'gatsby';
import styled from 'styled-components';

import { type ColorValues, color } from 'atoms/colors';
import { font } from 'atoms/typography';

import type { ButtonProps } from 'components/Button/Button';


interface StyledButtonProps extends Omit<ButtonProps, 'to' | 'children' | 'hoverColor'> {
  hoverColor?: ColorValues;
}

export const PillWrap = styled.div<StyledButtonProps>`
  position: relative;
  min-width: fit-content;
  cursor: pointer;
  :hover > div {
    left: -4px;
    bottom: 7px;
    ::before {
      content: '';
      left: 2px;
      bottom: -9px;
      width: 100%;
      background-color: ${({ hoverColor }) => hoverColor ? hoverColor : color.blue};
      border-radius: 40px;
      border: 2px solid ${color.black};
      z-index: -2;
    }
  }
  @media (min-width: 768px) {
    width: fit-content;
  }
`

export const Pill = styled.div<StyledButtonProps>`
  ${({ size }) => size && size === 'Small' ? font('btnSm', 600) : font('btnLg', 600)};
  color: ${({ isDark }) => isDark ? color.white : color.black };
  text-align: center;
  padding: ${({ size }) => size && size === 'Small' ? '12px 24px' : '16px 40px'};
  border-radius: 40px;
  border: 2px solid ${color.black};
  background-color: ${({ isDark }) => isDark ? color.black : color.white };
  position: relative;
  left: 0px;
  bottom: 0px;
  white-space: nowrap;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  :focus-visible,
  :focus {
    outline: -webkit-focus-ring-color auto 1px;
    outline-color: ${color.black};
    outline-offset: 5px;
  }
  ::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
`;


export const IconBtnWrap = styled.div<StyledButtonProps>`
  position: relative;
  width: fit-content;
  cursor: pointer;
  :hover > div {
    left: -4px;
    bottom: 7px;
    ::before {
      content: '';
      left: 2px;
      bottom: -9px;
      width: 100%;
      height: 100%;
      background-color: ${color.blue};
      border-radius: 8px;
      border: 2px solid ${color.black};
      z-index: -2;
    }
  }
`

export const IconBtn = styled.div<StyledButtonProps>`
  svg {
    height: 32px;
    width: 32px;
  }
  display: block;
  position: relative;
  border: 2px solid ${color.black};
  padding: 12px;
  border-radius: 8px;
  background-color: ${color.white};
  width: fit-content;
  :focus-visible,
  :focus {
    outline: -webkit-focus-ring-color auto 1px;
    outline-color: ${color.black};
    outline-offset: 5px;
  }
  ::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
`

export const TextLink = styled(Link)`
  transition: text-decoration 550ms ease;
  ${font('textLg', 600)}
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:focus, :focus-visible {
    border-radius: 4px;
    outline: 2px solid ${color.black};
    outline-offset: 2px;
  }
`
