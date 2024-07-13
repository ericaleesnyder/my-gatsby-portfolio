import React from 'react';

import { type ColorKeys, type ColorValues, getColor } from 'atoms/colors';

import {
  IconBtn,
  IconBtnWrap,
  Pill,
  PillWrap,
  TextLink,
} from 'components/Button/styles/Button.styled';

import onKeyDown from 'utils/onKeyDown';
import parseUrl from 'utils/parseUrl';

import type { FC, KeyboardEvent, ReactNode } from 'react';

export interface ButtonProps {
  to?: string;
  children?: ReactNode;
  hoverColor?: string | null;
  isDark?: boolean | null;
  size?: 'Small' | 'Large' | string | null;
  buttonType?: 'Pill' | 'Text' | 'Icon' | null;
  onSubmit?: () => void;
}

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
  const { as, ...urlProps } = to ? parseUrl(to) : ({ as: undefined } as const);

  const getButtonType = (btnType: ButtonProps['buttonType']) => {
    switch (btnType) {
      case 'Icon':
        return (
          <IconBtnWrap
            hoverColor={getColor(hover as ColorKeys) as ColorValues}
            onClick={onSubmit ?? onSubmit}
            as={as}
            {...urlProps}
            onKeyDown={
              onSubmit
                ? (e: KeyboardEvent<HTMLElement | SVGSVGElement>) =>
                    onKeyDown(e, onSubmit)
                : null
            }
          >
            <IconBtn isDark={isDark} size={size}>
              {children}
            </IconBtn>
          </IconBtnWrap>
        );
      case 'Text':
        return (
          <>
            {to && (
              <TextLink as={as} {...urlProps}>
                {children}
              </TextLink>
            )}
          </>
        );
      case 'Pill':
      default:
        return (
          <PillWrap
            hoverColor={getColor(hover as ColorKeys) as ColorValues}
            size={size}
            className='pill'
            as={as}
            {...urlProps}
            onClick={onSubmit ?? onSubmit}
            onKeyDown={
              onSubmit
                ? (e: KeyboardEvent<HTMLElement | SVGSVGElement>) =>
                    onKeyDown(e, onSubmit)
                : null
            }
          >
            <Pill isDark={isDark} size={size}>
              <span>{children}</span>
            </Pill>
          </PillWrap>
        );
    }
  };

  return getButtonType(buttonType);
};

export default Button;
