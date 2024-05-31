import styled from 'styled-components';

import { color } from 'atoms/colors';
import { font } from 'atoms/typography';

import type { NavProps } from 'components/Header/Header';
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

export const Wrapper = styled.div<NavProps>`
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  background-color: ${({ isTransparent }) => isTransparent ? 'transparent' :  color.cream};
  height: 88px;
  z-index: 101;
  border-bottom: ${({ isTransparent }) => isTransparent ? '1.5px solid transparent' : `1.5px solid ${color.grey}`};
  transition: ease border 100ms, background-color ease 150ms;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const NavItem = styled(Link)`
  ${font('text', 'xl', 700)}
  color: ${color.black};
  transition: color 150ms ease;
  &:hover {
    color: ${color.yellow};
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;
