import React from "react";
import styled from "styled-components";
import Container from "../../basics/Container.styled";

const HeroWrap = styled.div`
  height: 400px;
  width: 100%;
`;
const Hero = () => {
  return (
    <HeroWrap>
      <Container>hi</Container>
    </HeroWrap>
  );
};

export default Hero;
