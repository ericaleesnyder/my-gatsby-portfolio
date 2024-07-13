import styled, { css } from 'styled-components';

interface IconProps {
  invert?: boolean;
}

export const ProjectGrid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr;
  height: 100%;
  padding: 15px 0;
  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 993px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

//  TODO: create icon component that accepts id and handles size
export const Icon = styled.svg<IconProps>`
  height: 60px;
  width: 12px;
  margin: 0 auto;
  display: flex;
  ${({ invert }) => invert && css`
    transform: rotate(180deg);
  `}
  @media (min-width: 768px) {
    margin: none;
    display: inline-block;
  }
`

export default ProjectGrid;
