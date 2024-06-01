import type { ButtonProps } from 'components/Button/Button';

export interface HeaderProps {
  isTransparent: boolean;
}

export interface NavProps {
  menuItems: MenuItemProps[];
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
    label: 'My Resume',
    to: '/#',
    buttonType: 'Pill',
    size: 'Small',
    isDark: false,
  },
  {
    label: 'Contact Me',
    to: '#contact-me-form',
    buttonType: 'Pill',
    size: 'Small',
    isDark: true,
  },
];
