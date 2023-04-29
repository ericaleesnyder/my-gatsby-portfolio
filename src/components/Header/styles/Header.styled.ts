import styled from "styled-components";
import { color } from "../../../atoms/colors";
import Link from "../../Link/Link";
import { font } from "../../../atoms/typography";

export const Wrapper = styled.header`
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  background: ${color.common.light};
  opacity: 0.95;
  height: 80px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${color.common.midnight};
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
