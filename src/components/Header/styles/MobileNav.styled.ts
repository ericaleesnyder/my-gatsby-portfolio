import { motion } from 'framer-motion';
import styled from 'styled-components';

import { color } from 'atoms/colors';

export const MobileNav = styled.nav`
  justify-content: space-between;
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
  @media (min-width: 768px) {
    display: none;
  }
  // Targeting styles here to override the transition all that is default for the library
  .hamburger-react {
    border-radius: 8px;
    transition: rotate 0.4s cubic-bezier(0, 0, 0, 1) 0s, transform 0.4s cubic-bezier(0, 0, 0, 1) 0s!important;
    &:focus-visible {
      outline: 2px solid ${color.black};
    }
  }
`;

export const OpenNavWrap = styled(motion.div)`
  width: 100%;
  border-radius: 24px;
  border: 2px solid ${color.black};
  background-color: ${color.white};
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: absolute;
  align-items: center;
  div { 
    width: 100%;
  }
`

