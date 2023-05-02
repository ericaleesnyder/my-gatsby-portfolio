import styled from "styled-components";
import { color } from "../../../atoms/colors";
import Link from "../../Link/Link";
import { font } from "../../../atoms/typography";

export const Wrapper = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  background: ${color.common.nav};
  height: 80px;
  z-index: 101;
  &::before {
    content: "";
    backdrop-filter: saturate(1.8) blur(5px);
    height: 80px;
    width: 100%;
    position: absolute;
    backface-visibility: hidden;
    z-index: -1;
  }
`;

export const Line = styled.div`
  height: 1px;
  width: 100vw;
  background-color: ${color.grey[100]};
  content: "";
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
  ${font("text", "xl", 700)}
  color: ${color.common.midnight};
  transition: color 150ms ease;
  &:hover {
    color: ${color.common.sunshine};
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;
