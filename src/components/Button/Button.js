import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, mixins, sizes } from '../../styles';

const common = css`
  ${mixins.buttonReset};
  padding: ${sizes.xSmall} ${sizes.small};
  color: currentColor;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  border-radius: 4px;
  transition: all 0.1s linear;
`;

// todo: map in variants
/**
 * primary - Primary
secondary - Secondary
success - Success
warning - Warning
danger - Danger
info - Info
 */

const styleMap = {
  primary: css`
    background-color: ${colors.blue.base};
    color: ${colors.neutral.lightest};

    &:focus,
    &:active,
    &:hover {
      background-color: ${colors.blue.dark};
      color: ${colors.neutral.lightest};
    }
  `,
  secondary: css`
    background-color: ${colors.secondary.base};
    border-color: ${colors.secondary.base};
    color: ${colors.neutral.lightest};

    &:focus,
    &:active,
    &:hover {
      border-color: ${colors.neutral.dark};
    }
  `,
  success: css`
    background-color: ${colors.green.base};
    color: ${colors.neutral.darker};

    &:focus,
    &:active,
    &:hover {
      background-color: ${colors.green.dark};
      color: ${colors.neutral.darker};
    }
  `,
  danger: css`
    background-color: ${colors.blue.base};
    color: ${colors.neutral.lightest};

    &:focus,
    &:active,
    &:hover {
      background-color: ${colors.blue.dark};
      color: ${colors.neutral.lighter};
    }
  `,
  info: css`
    background-color: ${colors.neutral.lightest};
    color: ${colors.neutral.dark};
    border-color: ${colors.neutral.darker};

    &:focus,
    &:active,
    &:hover {
      background-color: ${colors.neutral.lightest};
      border-color: ${colors.neutral.darkest};
    }
  `,
};

const variants = p => css`
  ${styleMap[p?.variant]}
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

const Button = ({ to, variant = 'info', ...props }) => {
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
