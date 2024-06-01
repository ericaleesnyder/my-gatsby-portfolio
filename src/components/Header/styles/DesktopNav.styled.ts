import styled from 'styled-components';

export const DesktopNav = styled.nav`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const DesktopRight = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;
