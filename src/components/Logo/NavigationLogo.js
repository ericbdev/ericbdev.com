import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';

import mixins from '../../styles/mixins';
import colors from '../../styles/colors';

import { LogoShort, LogoFull } from './LogoSvg';
import Link from '../Link';

const Wrapper = styled(Link)`
  ${p => p.visuallyHidden && mixins.visuallyHidden};
  display: flex;
  color: ${colors.neutral.darker};

  &:hover {
    color: ${colors.secondary.base};
  }
`;

const Logo = React.forwardRef(
  ({ style, className, visuallyHidden, logoSize = 'short', ...rest }, ref) => {
    const history = useHistory();
    const props = {
      onClick: () => history.push('/'),
      className,
      style,
      ref,
      visuallyHidden,
      ...rest,
    };

    return (
      <Wrapper {...props}>
        {logoSize === 'short' && <LogoShort />}
        {logoSize === 'full' && <LogoFull />}
      </Wrapper>
    );
  },
);

export default Logo;
