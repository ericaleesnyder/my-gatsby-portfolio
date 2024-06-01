import { navigate } from 'gatsby';
import React from 'react';

import { type ColorKeys, type ColorValues, getColor } from 'atoms/colors';

import {
  IconBtn,
  IconBtnWrap,
  Pill,
  PillWrap,
  TextLink,
} from 'components/Button/styles/Button.styled';
// import { Logo } from 'components/Header/styles/Header.styled';
// import Link from 'components/Link/Link';

import onKeyDown from 'utils/onKeyDown';

import type { FC, ReactNode } from 'react';

export interface ButtonProps {
  to?: string;
  children: ReactNode;
  hoverColor?: string | null;
  isDark?: boolean | null;
  size?: 'Small' | 'Large' | string | null;
  buttonType?: 'Pill' | 'Text' | 'Icon' | null;
  onSubmit?: () => void;
}

// TODO: fix/confirm accessibility via for click and hover state. Not seeing the to link display in the corner of the window with the current implementation

const Button: FC<ButtonProps> = ({
  to,
  children,
  hoverColor,
  isDark,
  size,
  buttonType,
  onSubmit,
}) => {
  const hover = hoverColor && hoverColor.toLowerCase();

  const getButtonType = (btnType: ButtonProps['buttonType']) => {
    switch (btnType) {
      case 'Icon':
        return (
          <IconBtnWrap hoverColor={getColor(hover as ColorKeys) as ColorValues}>
            <IconBtn
              role={to ? 'link' : 'button'}
              isDark={isDark}
              size={size}
              tabIndex={0}
              aria-label={`${children}`}
              onKeyDown={
                to
                  ? (e) => onKeyDown(e, () => navigate(to))
                  : onSubmit ?? onSubmit
              }
              onClick={to ? () => navigate(to) : onSubmit ?? onSubmit}
            >
              <svg>
                <use href='/icons/sprites.svg#logo' />
              </svg>
            </IconBtn>
          </IconBtnWrap>
        );
      case 'Text':
        return <>{to && <TextLink to={to}>{children}</TextLink>}</>;
      case 'Pill':
      default:
        return (
          <PillWrap
            hoverColor={getColor(hover as ColorKeys) as ColorValues}
            size={size}
            className='pill'
          >
            <Pill
              role={to ? 'link' : 'button'}
              isDark={isDark}
              size={size}
              tabIndex={0}
              aria-label={`${children}`}
              onKeyDown={
                to
                  ? (e) => onKeyDown(e, () => navigate(to))
                  : onSubmit ?? onSubmit
              }
              onClick={to ? () => navigate(to) : onSubmit ?? onSubmit}
            >
              <span>{children}</span>
            </Pill>
          </PillWrap>
        );
    }
  };

  return getButtonType(buttonType);
};

export default Button;
