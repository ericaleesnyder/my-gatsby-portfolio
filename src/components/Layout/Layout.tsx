import GlobalStyle from 'GlobalStyle';
import React from 'react';

import GlobalFooter from 'components/Footer';
import ContactForm from 'components/Form';
import GlobalNav from 'components/Header/Header';

import useScrollPosition from 'utils/useScrollPosition';

import type { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  isGradientBackground?: boolean;
}

const Layout: FC<Props> = ({ children, isGradientBackground }) => {
  const scrollPosition = useScrollPosition();

  return (
    <>
      <GlobalStyle isGradientBackground={isGradientBackground} />
      <GlobalNav isTransparent={scrollPosition < 30} />
      <main>{children}</main>
      <ContactForm />
      <GlobalFooter />
    </>
  );
};

export default Layout;
