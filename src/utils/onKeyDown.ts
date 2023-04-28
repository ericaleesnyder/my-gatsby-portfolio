import type { KeyboardEvent } from "react";

const onKeyDown = (
  event: KeyboardEvent<HTMLElement>,
  action: () => void, 
  key?: string,
) => {
  const keyPressed = key ?? ['Enter', ' ']

  if (event.key === keyPressed || keyPressed.includes(event.key)) {
    event.preventDefault();
    action();
  }
}

export default onKeyDown;
