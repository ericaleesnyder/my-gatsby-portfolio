import GlobalStyle from "GlobalStyle";
import React from "react";

import GlobalNav from "components/Header/Header";
import { LayoutWrapper } from "components/Layout/styles/Layout.styled";

import type { FC, ReactNode } from "react";
import useScrollPosition from "utils/useScrollPosition";

interface Props {
  children: ReactNode;
  transparentNav?: boolean;
}

const Layout: FC<Props> = ({ children }) => {
  const scrollPosition = useScrollPosition();

  return (
    <>
      <GlobalStyle />
      <GlobalNav isTransparent={scrollPosition < 50} />
      <LayoutWrapper>{children}</LayoutWrapper>
    </>
  );
};

export default Layout;
