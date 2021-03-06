import { darken, lighten } from 'polished';

const blue = {
  darker: '#004b6e',
  dark: '#0096dd',
  base: '#4cc6ff',
  light: '#88d9ff',
  lighter: '#c3ecff',
};
const green = {
  darker: '#0a6815',
  dark: '#14d02a',
  base: '#66f076',
  light: '#99f5a4',
  lighter: '#ccfad1',
};
const yellow = {
  darker: '#c6c601',
  dark: '#fefe0c',
  base: '#fefe4e',
  light: '#fefe89',
  lighter: '#ffffc4',
};
const orange = {
  darker: '#cc9600',
  dark: '#e6a800',
  base: '#ffbb00',
  light: '#ffd255',
  lighter: '#ffe8aa',
};
const red = {
  darker: '#660505',
  dark: '#b70909',
  base: '#f64a4a',
  light: '#f98686',
  lighter: '#fcc3c3',
};

const neutral = {
  darkest: '#000',
  darker: '#1b1c1d',
  dark: '#222425',
  base: '#3d4142',
  light: lighten(0.1, '#4c4f52'), // todo: codif
  lighter: lighten(0.2, '#7e8486'), // todo: codify
  lightest: '#fff',
};

// used for weird things
const secondary = {
  dark: darken(0.1, '#1eb9c1'),
  base: '#1eb9c1',
  light: lighten(0.05, '#1eb9c1'),
  lighter: lighten(0.2, '#1eb9c1'),
};

const colors = {
  blue,
  green,
  yellow,
  orange,
  red,
  neutral,
  secondary,
};

export default colors;
