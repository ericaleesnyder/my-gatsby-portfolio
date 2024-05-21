import Container from 'basics/Container.styled';
import React, { type FC } from 'react';

import Button from 'components/Button/Button';
import {
  Header,
  Line,
  Nav,
  NavItem,
  Right,
  Wrapper,
} from 'components/Header/styles/Header.styled';

export interface NavProps {
  isTransparent: boolean;
}

const GlobalNav: FC<NavProps> = ({ isTransparent }) => (
  <>
    <Wrapper isTransparent={isTransparent}>
      <Header>
        <Container>
          <Nav>
            <NavItem to="/">
              <svg width="56px" height="56px">
                <use href="/icons/sprites.svg#logo" />
              </svg>
            </NavItem>
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

export default GlobalNav;
