import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components/macro';
import { desaturate } from 'polished';
import { Link } from 'react-router-dom';
import { colors, mixins, sizes } from '../../styles';

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
    background-color: ${colors.blue.dark};
    color: ${colors.neutral.lightest};

    &:focus,
    &:active,
    &:hover {
      border-color: ${desaturate(0.4, colors.blue.dark)};
      background-color: ${desaturate(0.2, colors.blue.dark)};
    }
  `,
  secondary: css`
    background-color: ${colors.secondary.lighter};
    color: ${colors.neutral.darker};

    &:focus,
    &:active,
    &:hover {
      background-color: ${desaturate(0.3, colors.secondary.lighter)};
    }
  `,
  info: css`
    background-color: ${colors.neutral.lighter};
    color: ${colors.neutral.dark};

    &:focus,
    &:active,
    &:hover {
      border-color: ${colors.neutral.light};
    }
  `,
  success: css`
    background-color: ${colors.green.dark};
    color: ${colors.neutral.darker};

    &:focus,
    &:active,
    &:hover {
      background-color: ${desaturate(0.1, colors.green.dark)};
    }
  `,
  danger: css`
    background-color: ${colors.red.dark};
    color: ${colors.neutral.lightest};

    &:focus,
    &:active,
    &:hover {
      background-color: ${desaturate(0.1, colors.red.dark)};
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
