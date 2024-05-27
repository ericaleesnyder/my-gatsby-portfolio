import styled from 'styled-components';

export const ProjectGrid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr;
  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 993px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default ProjectGrid;
