import React from "react";
import GlobalStyle from "../../GlobalStyle";

import type { ReactNode, FC } from "react";
import { LayoutWrapper } from "./styles/Layout.styled";
import GlobalNav from "../Header/Header";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <GlobalNav />
      <LayoutWrapper>{children}</LayoutWrapper>
    </>
  );
};

export default Layout;
