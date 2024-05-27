import Container from 'basics/Container.styled';
import React, { type FC } from 'react';

import Button from 'components/Button/Button';
import {
  Header,
  Line,
  Logo,
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
            <NavItem to='/'>
              <Logo>
                <use href='/icons/sprites.svg#logo' />
              </Logo>
            </NavItem>
            <Right>
              <Button to='/projects' buttonType='Text'>
                Projects
              </Button>
              <Button to='/about-me' buttonType='Text'>
                About Me
              </Button>
              <Button to='/#' size='Small' isDark={false}>
                My Resume
              </Button>
              <Button to='#contact-me-form' size='Small' isDark>
                Contact Me
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
