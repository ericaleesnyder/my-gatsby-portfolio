import Container from 'basics/Container.styled';
import { Link } from 'gatsby';
import React from 'react';

import Text from 'atoms/Text/Text';

import {
  FooterContent,
  FooterLogo,
  FooterWrap,
} from 'components/Footer/styles/Footer.styled';

const GlobalFooter = () => (
  <FooterWrap>
    <Container>
      <FooterContent>
        <Link to='/'>
          <FooterLogo>
            <use href='/icons/sprites.svg#logo' />
          </FooterLogo>
        </Link>
        <Text color='darkGrey'>© Erica Snyder {new Date().getFullYear()}</Text>
      </FooterContent>
    </Container>
  </FooterWrap>
);

export default GlobalFooter;
