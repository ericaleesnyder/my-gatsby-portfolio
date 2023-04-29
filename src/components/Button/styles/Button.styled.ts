import styled, { css } from "styled-components";
import { color } from "../../../atoms/colors";
import { font } from "../../../atoms/typography";

type Props = {
  variant: "primary" | "secondary" | "tertiary" | "inline";
};

export const ButtonWrap = styled.div<Props>`
  a {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  ${font("text", "med", 600)}
  padding: 8px 12px;
  border-radius: 20px;
  width: fit-content;
  text-decoration: none;
  cursor: pointer;
  transition: color 150ms ease, background-color 150ms ease, border 150ms ease;
  &:focus-visible,
  :focus {
    outline: -webkit-focus-ring-color auto 1px;
    outline-color: ${color.common.flamingo};
  }
  ${(props) =>
    (props.variant &&
      props.variant === "primary" &&
      css`
        color: ${color.common.midnight};
        border: 2px solid ${color.common.sunshine};
        background-color: ${color.common.sunshine};
        &:hover {
          background-color: ${color.common.marigold};
          border: 2px solid ${color.common.marigold};
          color: ${color.common.light};
        }
      `) ||
    (props.variant === "secondary" &&
      css`
        color: ${color.common.midnight};
        border: 2px solid ${color.common.midnight};
        &:hover {
          color: ${color.common.lavender};
          border: 2px solid ${color.common.lavender};
        }
      `) ||
    (props.variant === "tertiary" &&
      css`
        color: ${color.common.midnight};
        background-color: ${color.common.baby};
        border: 2px solid ${color.common.baby};
        &:hover {
          border: 2px solid ${color.common.marigold};
          background-color: ${color.common.marigold};
          color: ${color.common.light};
        }
      `) ||
    (props.variant === "inline" &&
      css`
        padding: 0;
        color: ${color.common.lavender};
        text-decoration: underline;
        &:hover {
          color: ${color.common.midnight};
        }
        &:focus-visible,
        :focus {
          border-radius: 0;
        }
      `)}
`;
