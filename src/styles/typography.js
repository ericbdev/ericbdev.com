import { css } from 'styled-components/macro';
import { desaturate } from 'polished';
import colors from './colors';

const font = {
  sizes: [12, 14, 16, 20, 24, 32, 48, 64],
  families: {
    body: "'Roboto', system-ui, sans-serif",
    button: "'Open Sans', system-ui, sans-serif",
    heading: "'Roboto', 'inherit'",
  },
  weights: {
    body: 400,
    link: 500,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
};

const buttons = {
  primary: {
    initial: css`
      background-color: ${colors.blue.dark};
      color: ${colors.neutral.lightest};
    `,
    active: css`
      border-color: ${desaturate(0.4, colors.blue.dark)};
      background-color: ${desaturate(0.2, colors.blue.dark)};
    `,
  },
  secondary: {
    initial: css`
      background-color: ${colors.secondary.lighter};
      color: ${colors.neutral.darker};
    `,
    active: css`
      background-color: ${desaturate(0.3, colors.secondary.lighter)};
    `,
  },
  info: {
    initial: css`
      background-color: ${colors.neutral.lighter};
      color: ${colors.neutral.dark};
    `,
    active: css`
      border-color: ${colors.neutral.light};
    `,
  },
  success: {
    initial: css`
      background-color: ${colors.green.dark};
      color: ${colors.neutral.darker};
    `,
    active: css`
      background-color: ${desaturate(0.1, colors.green.dark)};
    `,
  },
  danger: {
    initial: css`
      background-color: ${colors.red.dark};
      color: ${colors.neutral.lightest};
    `,
    active: css`
      background-color: ${desaturate(0.1, colors.red.dark)};
    `,
  },
};

const typography = {
  font,
  buttons,
};

export default typography;
