import React, { type FC } from 'react';

import Button from 'components/Button/Button';
import type { NavProps } from 'components/Header/headerTypesAndData';
import {
  DesktopNav,
  DesktopRight,
} from 'components/Header/styles/DesktopNav.styled';
import { Logo, NavItem } from 'components/Header/styles/Nav.styled';

const DesktopHeader: FC<NavProps> = ({ menuItems }) => (
  <DesktopNav>
    <NavItem to='/'>
      {/* TODO: use icon component. add responsive sizing. */}
      <Logo>
        <use href='/icons/sprites.svg#logo' />
      </Logo>
    </NavItem>
    <DesktopRight>
      {menuItems &&
        menuItems.map((menuItem) => (
          <Button
            key={menuItem.label}
            to={menuItem.to}
            buttonType={menuItem.buttonType}
            isDark={menuItem.isDark}
            size={menuItem.size}
          >
            {menuItem.label}
          </Button>
        ))}
    </DesktopRight>
  </DesktopNav>
);

export default DesktopHeader;
