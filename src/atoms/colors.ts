export const color = {
  white: '#fff',
  black: '#000',
  grey: '#bebcb3',
  cream: '#fffbef',
  blue: '#b6f2ff',
  yellow: '#fff848',
  green: '#6eff4a',
  pink: '#ffb6f8',
  red: '#ff3737',
  purple: '#752DD3',
} as const;

export type ColorObject = typeof color;
export type ColorKeys = keyof typeof color
export type ColorValues = typeof color[ColorKeys]

export const getHoverColor = (clr?: ColorKeys) => {
  switch (clr) {
    case 'white': {
      return color.white;
    }
    case 'yellow': {
      return color.yellow;
    }
    case 'blue': {
      return color.blue;
    }
    case 'green': {
      return color.green;
    }
    case 'pink': {
      return color.pink;
    }
    case 'red': {
      return color.red;
    }
    case 'purple': {
      return color.purple;
    }
    default:
      return color.blue;
  }
};
