import styled from 'styled-components';


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
export const IconWrap = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    margin: none;
    display: inline-block;
  }
`

export default ProjectGrid;
