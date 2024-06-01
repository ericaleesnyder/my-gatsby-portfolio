import Container from 'basics/Container.styled';
import React, { type FC } from 'react';

import DesktopHeader from 'components/Header/components/DesktopNav';
import MobileHeader from 'components/Header/components/MobileNav';
import {
  type HeaderProps,
  menuItems,
} from 'components/Header/headerTypesAndData';
import { Header, Wrapper } from 'components/Header/styles/Nav.styled';

const GlobalNav: FC<HeaderProps> = ({ isTransparent }) => (
  <Wrapper isTransparent={isTransparent}>
    <Header>
      <Container>
        <DesktopHeader menuItems={menuItems} />
        <MobileHeader menuItems={menuItems} />
      </Container>
    </Header>
  </Wrapper>
);

export default GlobalNav;
