import React from "react";
import Button from "../Button/Button";

import {
  Header,
  Line,
  Nav,
  NavItem,
  Right,
  Wrapper,
} from "./styles/Header.styled";
import Container from "../../basics/Container.styled";

const GlobalNav = () => {
  return (
    <>
      <Wrapper>
        <Header>
          <Container>
            <Nav>
              <NavItem to="/">Erica Snyder</NavItem>
              <Right>
                <Button to="/" variant="secondary">
                  About
                </Button>
                <Button to="/" variant="secondary">
                  Projects
                </Button>
              </Right>
            </Nav>
          </Container>
        </Header>
      </Wrapper>
      <Line />
    </>
  );
};

export default GlobalNav;
