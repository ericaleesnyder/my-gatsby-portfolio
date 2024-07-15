import styled from 'styled-components';

import { color } from 'atoms/colors';
import font from 'atoms/typography';

export const Wrapper = styled.div`
  /* display: grid;
  gap: 24px;
  grid-template-columns: 1fr;
  @media (min-width: 993px) {
    grid-template-columns: repeat(2, 1fr);
  } */
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  display: grid;
  gap: 16px;
  .pill,
  div {
    width: 100%;
  }
  input,
  textarea {
    ${font('textMed', 400)}
  }
`;

export const NameGroup = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Input = styled.input`
  border-radius: 8px;
  border: 2px solid ${color.black};
  padding: 16px;
`;

export const TextArea = styled.textarea`
  border-radius: 8px;
  border: 2px solid ${color.black};
  padding: 16px;
  min-height: 150px;
`;

export const ThankYou = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin: auto 0;
  .pill,
  div {
    width: unset;
  }
`
