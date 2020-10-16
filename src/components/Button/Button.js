import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, mixins } from '../../styles';

// todo: map in variants
const common = css`
  ${mixins.buttonReset};
  padding: 4px 8px;
  color: ${colors.neutral.dark};
  border: 2px solid ${colors.neutral.light};
  border-radius: 4px;
  outline-color: ${colors.neutral.light};

  &:focus,
  &:active,
  &:hover {
    border-color: ${colors.neutral.dark};
    outline-color: ${colors.neutral.dark};
  }
`;

// todo: this looks kinda hacky and silly
const Component = styled.button`
  ${common}
`;
const LinkComponent = styled(Link)`
  ${common}
`;

const Button = ({ to, ...props }) => {
  if (!to) return <Component {...props} />;
  if (to) return <LinkComponent {...props} to={to} />;
};

export default Button;
