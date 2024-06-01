import { AnimatePresence } from 'framer-motion';
import Hamburger from 'hamburger-react';
import React, { type FC, useState } from 'react';

import { color } from 'atoms/colors';

import Button from 'components/Button/Button';
import type { NavProps } from 'components/Header/headerTypesAndData';
import {
  MobileNav,
  OpenNavWrap,
} from 'components/Header/styles/MobileNav.styled';
import { Logo, NavItem } from 'components/Header/styles/Nav.styled';

const MobileHeader: FC<NavProps> = ({ menuItems }) => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  return (
    <MobileNav>
      <NavItem to='/'>
        <Logo>
          <use href='/icons/sprites.svg#logo' />
        </Logo>
      </NavItem>
      <Hamburger
        toggled={menuOpened}
        toggle={setMenuOpened}
        size={24}
        label={menuOpened ? 'Close Navigation Menu' : 'Open Navigation Menu'}
        color={color.black}
        hideOutline={false}
      />
      <AnimatePresence>
        {menuOpened && (
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
                >
                  {menuItem.label}
                </Button>
              ))}
          </OpenNavWrap>
        )}
      </AnimatePresence>
    </MobileNav>
  );
};

export default MobileHeader;
