import { AnimatePresence } from 'framer-motion';
import Hamburger from 'hamburger-react';
import React, { type FC } from 'react';

import { color } from 'atoms/colors';

import Button from 'components/Button/Button';
import type { NavProps } from 'components/Header/headerTypesAndData';
import {
  MobileNav,
  OpenNavWrap,
} from 'components/Header/styles/MobileNav.styled';
import { NavItem } from 'components/Header/styles/Nav.styled';
import Icon from 'components/Icon';

const MobileHeader: FC<NavProps> = ({
  menuItems,
  mobileNavActive,
  setMobileNavActive,
}) => (
  <MobileNav>
    <NavItem to='/'>
      <Icon id='logo' size='40px' />
    </NavItem>
    <Hamburger
      toggled={mobileNavActive}
      toggle={setMobileNavActive}
      size={24}
      label={mobileNavActive ? 'Close Navigation Menu' : 'Open Navigation Menu'}
      color={color.black}
      hideOutline={false}
    />
    <AnimatePresence>
      {mobileNavActive && (
        <OpenNavWrap
          initial={{ opacity: 0, y: -163 }}
          animate={{ opacity: 1, y: 163 }}
          exit={{ opacity: 0 }}
        >
          {menuItems &&
            menuItems.map((menuItem) => (
              <Button
                key={menuItem.label}
                to={menuItem.to}
                buttonType={menuItem.buttonType}
                isDark={menuItem.isDark}
                size={menuItem.size}
                download={menuItem.download}
              >
                {menuItem.label}
              </Button>
            ))}
        </OpenNavWrap>
      )}
    </AnimatePresence>
  </MobileNav>
);

export default MobileHeader;
