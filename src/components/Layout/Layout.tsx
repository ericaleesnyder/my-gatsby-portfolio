import GlobalStyle from "GlobalStyle";
import React from "react";

import GlobalNav from "components/Header/Header";
// import { LayoutWrapper } from 'components/Layout/styles/Layout.styled';

import useScrollPosition from "utils/useScrollPosition";

import type { FC, ReactNode } from "react";

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
      <main>{children}</main>
    </>
  );
};

export default Layout;
