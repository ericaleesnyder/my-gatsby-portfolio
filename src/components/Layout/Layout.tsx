import GlobalStyle from 'GlobalStyle';
import React, { useState } from 'react';

import GlobalFooter from 'components/Footer';
import ContactForm from 'components/Form';
import GlobalNav from 'components/Header';

import useIsScrolled from 'utils/useIsScrolled';

import type { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  isGradientBackground?: boolean;
}

const Layout: FC<Props> = ({ children, isGradientBackground }) => {
  const [mobileNavActive, setMobileNavActive] = useState<boolean>(false);
  const isScrolled = useIsScrolled().isScrolled;

  return (
    <>
      <GlobalStyle
        isGradientBackground={isGradientBackground}
        mobileNavActive={mobileNavActive}
      />
      <GlobalNav
        isTransparent={!isScrolled}
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
