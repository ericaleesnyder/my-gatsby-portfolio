import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

import { type ColorValues, color } from 'atoms/colors';
import { font } from 'atoms/typography';

import type { ButtonProps } from 'components/Button/Button';

interface StyledButtonProps extends Omit<ButtonProps, 'to' | 'children' | 'hoverColor'> {
  buttonType?: 'Pill' | 'Text' | 'Icon' | null;
  hoverColor?: ColorValues;
  size?: 'Small' | 'Large' | string | null;
  isDark?: boolean | null;
  fullWidth?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: transparent;
  border: none;
  padding: 0;
  position: relative;
  border-radius: ${({ buttonType }) => buttonType === 'Pill' ? '40px' : '8px'};
  cursor: pointer;
  min-width: fit-content;
  width: ${({ buttonType }) => buttonType === 'Pill' ? '100%' : 'fit-content'};
  :focus-visible,
  :focus {
    outline: -webkit-focus-ring-color auto 1px;
    outline-color: ${color.black};
    outline-offset: 5px;
  }
  @media (min-width: 768px) {
    min-width: fit-content;
    width: ${({ fullWidth }) => fullWidth ? '100%' : 'fit-content'};
  }

  :hover:not(:focus-visible) > div {
    left: ${({ buttonType }) => buttonType === 'Pill' ? '-4px' : '-6px'};
    bottom: 7px;
    ::before {
      content: '';
      left: ${({ buttonType }) => buttonType === 'Pill' ? '2px' : '4px'};
      bottom: -9px;
      width: 100%;
      background-color: ${({ hoverColor }) => hoverColor ? hoverColor : color.blue};
      border-radius: ${({ buttonType }) => buttonType === 'Pill' ? '40px' : '8px'};
      border: 2px solid ${color.black};
      z-index: -2;
    }
  }


  ${({ buttonType, hoverColor}) => hoverColor && buttonType === 'Icon' && css`
    position: relative;
    width: fit-content;
    cursor: pointer;
    border: none;
    border-radius: 40px;
    background-color: transparent;
    padding: 0;
    :hover:not(:focus-visible) > div {
      left: -5px;
      bottom: 6px;
      ::before {
        content: '';
        left: 3px;
        bottom: -8px;
        width: 100%;
        height: 100%;
        background-color: ${hoverColor} ? ${hoverColor} : ${color.blue};
        border-radius: 8px;
        border: 2px solid ${color.black};
        z-index: -2;
      }
    }
    :focus-visible,
    :focus {
      outline: -webkit-focus-ring-color auto 1px;
      outline-color: ${color.black};
      outline-offset: 5px;
    }
  `}
`

export const Btn = styled.div<StyledButtonProps>`
  ${({ size }) => size === 'Small' ? font('btnSm', 600) : font('btnLg', 600)}
  color: ${({ isDark }) => isDark ? color.white : color.black };
  padding: ${({ size }) => size && size === 'Small' ? '12px 24px' : '16px 40px'};
  background-color: ${({ isDark }) => isDark ? color.black : color.white };
  width: fit-content;
  border-radius: ${({ buttonType }) => buttonType === 'Pill' ? '40px' : '8px'};
  border: 2px solid ${color.black};
  text-align: center;
  position: relative;
  left: 0px;
  bottom: 0px;
  white-space: nowrap;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  ::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }

  ${({ buttonType }) => buttonType === 'Icon' && css`
    padding: 12px;
    background-color: ${color.white};
    svg {
      height: 32px;
      width: 32px;
    }
  `}
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
