import { css } from 'styled-components/macro';

import { colors } from './';

const buttonReset = css`
  padding: 0;
  border: none;
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
`;

const listReset = css`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const linkStyles = css`
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  color: ${colors.secondary.base};
`;

export default {
  buttonReset,
  linkStyles,
  listReset,
};
