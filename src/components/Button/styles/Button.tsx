import React from "react";
import type { ReactNode, FC } from "react";

import Link from "../../Link/Link";
import { ButtonWrap } from "./Button.styled";

interface ButtonProps {
  to: string;
  children: ReactNode;
  variant: 'primary' | 'secondary' | 'tertiary' | 'inline';
}

const Button: FC<ButtonProps> = ({ to, children, variant }) => {

  return (
    <ButtonWrap variant={variant} tabIndex={1}>
      <Link to={to} tabIndex={-1}>
        {children}
      </Link>
    </ButtonWrap>
  )
}

export default Button