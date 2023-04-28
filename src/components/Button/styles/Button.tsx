import React from "react";
import type { ReactNode, FC } from "react";
import { navigate } from "gatsby";
import onKeyDown from "../../../utils/onKeyDown";

import Link from "../../Link/Link";
import { ButtonWrap } from "./Button.styled";

interface ButtonProps {
  to: string;
  children: ReactNode;
  variant: "primary" | "secondary" | "tertiary" | "inline";
}

const Button: FC<ButtonProps> = ({ to, children, variant }) => (
  <ButtonWrap
    role="button"
    variant={variant}
    tabIndex={1}
    aria-label={`${children}`}
    onKeyDown={(e) => onKeyDown(e, () => navigate(to))}
    onClick={() => navigate(to)}
  >
    <Link to={to} tabIndex={-1}>
      {children}
    </Link>
  </ButtonWrap>
);

export default Button;
