import styled from 'styled-components';

import { color } from 'atoms/colors';

import type { HeaderProps } from 'components/Header/headerTypesAndData';
import Link from 'components/Link/Link';

// TODO: create Icon component 
export const Logo = styled.svg`
  width: 40px;
  height: 40px;
  @media (min-width: 993px) {
    width: 56px;
    height: 56px;
  }
`;

export const NavItem = styled(Link)`
  &:focus-visible {
    outline: 2px solid ${color.black};
    border-radius: 4px;
    outline-offset: 2px;
  }
`;

export const Wrapper = styled.header<HeaderProps>`
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  background-color: ${({ isTransparent }) => isTransparent ? 'transparent' :  color.cream};
  height: 65px;
  z-index: 101;
  border-bottom: ${({ isTransparent }) => isTransparent ? '1.5px solid transparent' : `1.5px solid ${color.grey}`};
  transition: ease border 100ms, background-color ease 150ms;
  @media (min-width: 768px) {
    height: 88px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
