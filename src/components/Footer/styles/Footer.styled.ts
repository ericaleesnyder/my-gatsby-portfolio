import styled from 'styled-components';

import { color } from 'atoms/colors';

export const FooterWrap = styled.footer`
  padding: 10px 0;
  border-top: 1.5px solid ${color.grey};
`

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
`

export const FooterLogo = styled.svg`
  height: 30px;
  width: 30px;
`

export default FooterLogo;
