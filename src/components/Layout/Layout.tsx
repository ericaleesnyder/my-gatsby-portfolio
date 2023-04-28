import React from "react";
import GlobalStyle from "../../GlobalStyle";

import type { ReactNode, FC } from "react";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default Layout;
