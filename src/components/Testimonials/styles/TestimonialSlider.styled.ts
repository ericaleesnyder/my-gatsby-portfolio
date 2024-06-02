import styled from 'styled-components';

import { type ColorKeys, color } from 'atoms/colors';

interface StyledProps {
  color?: ColorKeys;
}

export const TestimonialsWrapper = styled.div`
  .quote:nth-child(3n + 1) {
    ::before {
      background-color: ${color.blue};
    }
  }
  .quote:nth-child(3n+2) {
    ::before {
      background-color: ${color.pink};
    }
  }
  .quote:nth-child(3n + 3) {
    ::before {
      background-color: ${color.green};
    }
  }
`;

export const TestimonialWrapper = styled.div<StyledProps>`
  padding: 24px;
  border-radius: 24px;
  background: white;
  position: relative;
  border: 2px solid ${color.black};
  ::before {
    user-select: none;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.1;
    border-radius: 24px;
    margin: -24px;
    z-index: 0;
  }
`;

export const TextWrap = styled.div`
position: relative;
  z-index: 2;
`



