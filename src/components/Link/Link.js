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

const Link = React.forwardRef(({ to, ...props }, ref) => {
  if (!to) return <Component {...props} ref={ref} />;
  if (to) return <LinkComponent {...props} to={to} ref={ref} />;
});

Link.propTypes = {
  // make it route
  to: PropTypes.string,
};

export default Link;
