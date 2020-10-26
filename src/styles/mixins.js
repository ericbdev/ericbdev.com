import { css } from 'styled-components/macro';

import sizes from './sizes';
import colors from './colors';
import typography from './typography';

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
  font-family: ${typography.font.families.link};
  font-weight: ${typography.font.weights.link};
  color: ${colors.secondary.base};

  &:hover {
    color: ${colors.secondary.dark};
  }
`;

const layoutOuter = css`
  max-width: 1024px;
  width: 100%;
  display: flex;
  padding-right: ${sizes.small};
  padding-left: ${sizes.small};
  margin-right: auto;
  margin-left: auto;
`;

const mixins = {
  buttonReset,
  linkStyles,
  listReset,
  layoutOuter,
};

export default mixins;
