import GlobalStyle from 'GlobalStyle';
import React, { useState } from 'react';

import GlobalFooter from 'components/Footer';
import ContactForm from 'components/Form';
import GlobalNav from 'components/Header';

import useScrollPosition from 'utils/useScrollPosition';

import type { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  isGradientBackground?: boolean;
}

const Layout: FC<Props> = ({ children, isGradientBackground }) => {
  const scrollPosition = useScrollPosition();
  const [mobileNavActive, setMobileNavActive] = useState<boolean>(false);

  return (
    <>
      <GlobalStyle
        isGradientBackground={isGradientBackground}
        mobileNavActive={mobileNavActive}
      />
      <GlobalNav
        isTransparent={scrollPosition < 30}
        mobileNavActive={mobileNavActive}
        setMobileNavActive={setMobileNavActive}
      />
      <main>{children}</main>
      <ContactForm />
      <GlobalFooter />
    </>
  );
};

export default Layout;
