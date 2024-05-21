import type { KeyboardEvent } from 'react';

const onKeyDown = (
  event: KeyboardEvent<HTMLElement | SVGSVGElement>,
  action: () => void,
  targetKey?: string | string[],
) => {
  const target = targetKey ?? ['Enter', ' '];

  if (event.key === target || (Array.isArray(target) && target.includes(event.key))) {
    event.preventDefault();
    action();
  }
};

export default onKeyDown;
