import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import {  mixins, sizes, typography } from '../../styles';

const common = css`
  ${mixins.buttonReset};
  padding: ${sizes.xSmall} ${sizes.small};
  letter-spacing: 0.2px;
  color: currentColor;
  border-width: 2px;
  border-style: solid;
  border-color: transparent;
  border-radius: 4px;
  transition: all 0.1s linear;
`;

const variantsMap = {
  primary: css`
    ${typography.buttons.primary.initial};

    &:focus,
    &:active,
    &:hover {
      ${typography.buttons.primary.initial};
    }
  `,
  secondary: css`
    ${typography.buttons.secondary.initial};

    &:focus,
    &:active,
    &:hover {
      ${typography.buttons.secondary.active};
    }
  `,
  info: css`
    ${typography.buttons.info.initial};

    &:focus,
    &:active,
    &:hover {
      ${typography.buttons.info.active};
    }
  `,
  success: css`
    ${typography.buttons.success.initial};

    &:focus,
    &:active,
    &:hover {
      ${typography.buttons.success.active};
    }
  `,
  danger: css`
    ${typography.buttons.danger.initial};

    &:focus,
    &:active,
    &:hover {
      ${typography.buttons.danger.active};
    }
  `,
};

const variants = p => css`
  ${variantsMap[p?.variant]}
`;

// todo: this looks kinda hacky and silly
const Component = styled.button`
  ${common};
  ${variants};
`;
const LinkComponent = styled(Link)`
  ${common};
  ${variants};
`;

const Button = ({ to, variant = 'primary', ...props }) => {
  const nextProps = { variant, ...props };
  if (!to) return <Component {...nextProps} />;
  if (to) return <LinkComponent {...nextProps} to={to} />;
};

Button.PropTypes = {
  // make it route
  to: PropTypes.string,
  // control base style
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'info',
  ]),
};

export default Button;
