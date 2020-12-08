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
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.secondary.dark};
  }
`;

const visuallyHidden = css`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
`;

const layoutOuter = css`
  max-width: 1024px;
  width: 100%;
  display: flex;
  padding-right: ${sizes.small};
  padding-left: ${sizes.small};
  margin-right: auto;
  margin-left: auto;
  ${p => p.layoutStyle === 'content' && `max-width: 38rem;`}
`;

const mixins = {
  buttonReset,
  linkStyles,
  listReset,
  layoutOuter,
  visuallyHidden,
};

export default mixins;
