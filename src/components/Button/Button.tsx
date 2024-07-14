import React from 'react';

import { type ColorKeys, type ColorValues, getColor } from 'atoms/colors';

import {
  Btn,
  StyledButton,
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
  fullWidth?: boolean;
}

const Button: FC<ButtonProps> = ({
  to,
  children,
  hoverColor,
  isDark,
  size,
  buttonType = 'Pill',
  onSubmit,
  fullWidth,
}) => {
  const hover = hoverColor && hoverColor.toLowerCase();
  const { as, ...urlProps } = to ? parseUrl(to) : ({ as: undefined } as const);

  if (buttonType === 'Text') {
    return (
      <>
        {to && (
          <TextLink as={as} {...urlProps}>
            {children}
          </TextLink>
        )}
      </>
    );
  }

  return (
    <StyledButton
      as={as}
      {...urlProps}
      hoverColor={getColor(hover as ColorKeys) as ColorValues}
      onClick={onSubmit ?? onSubmit}
      buttonType={buttonType}
      fullWidth={fullWidth}
      onKeyDown={
        onSubmit
          ? (e: KeyboardEvent<HTMLElement | SVGSVGElement>) =>
              onKeyDown(e, onSubmit)
          : null
      }
    >
      <Btn buttonType={buttonType} size={size} isDark={isDark}>
        {children}
      </Btn>
    </StyledButton>
  );
};

export default Button;
