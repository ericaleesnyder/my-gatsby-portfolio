import type { ButtonProps } from 'components/Button/Button';

import type { Dispatch, SetStateAction } from 'react';

export interface HeaderProps {
  isTransparent: boolean;
  mobileNavActive?: boolean;
  setMobileNavActive?: Dispatch<SetStateAction<boolean>>;
}

export interface NavProps {
  menuItems: MenuItemProps[];
  mobileNavActive?: boolean;
  setMobileNavActive?: Dispatch<SetStateAction<boolean>>;
}

export interface MenuItemProps extends Omit<ButtonProps, 'children'> {
  label?: string;
}

export const menuItems: MenuItemProps[] = [
  {
    label: 'Projects',
    to: '/projects',
    buttonType: 'Text',
    isDark: null,
    size: null,
  },
  {
    label: 'About Me',
    to: '/about-me',
    buttonType: 'Text',
    isDark: null,
    size: null,
  },
  {
    label: 'My CV',
    to: '/Erica_Snyder_CV.pdf',
    buttonType: 'Pill',
    size: 'Small',
    isDark: false,
    download: true,
  },
  {
    label: 'Contact Me',
    to: '#contact-me-form',
    buttonType: 'Pill',
    size: 'Small',
    isDark: true,
  },
];
