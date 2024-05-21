import styled from 'styled-components';

import { color } from 'atoms/colors';
import { font } from 'atoms/typography';

import Link from 'components/Link/Link';

import type { NavProps } from 'components/Header/Header';

export const Wrapper = styled.div<NavProps>`
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  background-color: ${({ isTransparent }) => isTransparent ? `transparent` :  color.white};
  height: 80px;
  z-index: 101;
  border-bottom: ${({ isTransparent }) => isTransparent ? 'none' : `1px solid ${color.black}`};
`;

export const Line = styled.div`
  height: 1px;
  width: 100vw;
  content: '';
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  z-index: 101;
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
  gap: 12px;
`;
