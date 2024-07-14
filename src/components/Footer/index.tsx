import Container from 'basics/Container.styled';
import { Link } from 'gatsby';
import React from 'react';

import Text from 'atoms/Text/Text';

import {
  FooterContent,
  FooterWrap,
} from 'components/Footer/styles/Footer.styled';
import Icon from 'components/Icon';

const GlobalFooter = () => (
  <FooterWrap>
    <Container>
      <FooterContent>
        <Link to='/'>
          <Icon id='logo' size='30px' />
        </Link>
        <Text color='darkGrey'>© Erica Snyder {new Date().getFullYear()}</Text>
      </FooterContent>
    </Container>
  </FooterWrap>
);

export default GlobalFooter;
