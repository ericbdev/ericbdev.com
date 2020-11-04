import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';
import mixins from '../../styles/mixins';

const common = css`
  ${mixins.linkStyles};
`;

const Component = styled.a`
  ${common};
`;

const LinkComponent = styled(RouterLink)`
  ${common};
`;

const Link = ({ to, ...props }) => {
  if (!to) return <Component {...props} />;
  if (to) return <LinkComponent {...props} to={to} />;
};

Link.propTypes = {
  // make it route
  to: PropTypes.string,
};

export default Link;
