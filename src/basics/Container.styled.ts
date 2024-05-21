import styled from 'styled-components';

const Container = styled.div`
  padding: 15px 30px;
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  @media (min-width: 577px) {
    max-width: 800px;
  }
  @media (min-width: 993px) {
    max-width: 1200px;
  }
`;

export default Container;
