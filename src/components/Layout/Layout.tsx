import React, { ReactNode } from "react";
import GlobalStyle from "../../GlobalStyle";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default Layout;
