import styled, { css } from "styled-components";
import { color } from "../../../atoms/colors";

type Props = {
  variant: 'primary' | 'secondary' | 'tertiary' | 'inline';
}

export const ButtonWrap = styled.div<Props>`
  padding: 8px 12px;
  border-radius: 20px;
  width: fit-content;
  text-decoration: none;
  a {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  &:focus-visible, :focus {
    border: 2px solid ${color.common.flamingo};
    outline: none;
  }
  ${(props) => props.variant && 
    props.variant === "primary" && css`
      color: ${color.common.midnight};
      border: 2px solid ${color.common.sunshine};
      background-color: ${color.common.sunshine};
      &:hover {
        background-color: ${color.common.marigold};
        border: 2px solid ${color.common.marigold};
      }
    ` 
    || props.variant === "secondary" && css`
      color: ${color.common.midnight};
      border: 2px solid ${color.common.midnight};
      &:hover {
        color: ${color.common.lavender};
        border: 2px solid ${color.common.lavender};
      }
    ` 
    || props.variant === "tertiary" && css`
      color: ${color.common.midnight};
      background-color: ${color.common.baby};
      border: 2px solid ${color.common.baby};
      &:hover {
        border: 2px solid ${color.common.marigold};
        background-color: ${color.common.marigold};
      }
    ` 
    || props.variant === "inline" && css`
      padding: 0;
      color: ${color.common.lavender};
      text-decoration: underline;
      &:hover {
        color: ${color.common.midnight};
      }
    `
  }
`;
