import styled, { css } from 'styled-components';

interface ContainerProps {
  flex?: boolean;
}

const Container = styled.div<ContainerProps>`
  padding: 0 15px;
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  ${({ flex }) => flex && css`
    display: flex;
  `}
  @media (min-width: 577px) {
    max-width: 800px;
  }
  @media (min-width: 993px) {
    max-width: 1200px;
  }
`;

export default Container;
