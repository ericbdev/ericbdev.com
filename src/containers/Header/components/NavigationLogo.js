import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';

import mixins from '../../../styles/mixins';
import colors from '../../../styles/colors';

import { LogoShort, LogoFull } from './HeaderLogo';
import Link from '../../../components/Link';

const Wrapper = styled(Link)`
  color: ${colors.neutral.darker};
  ${p => p.visuallyHidden && mixins.visuallyHidden};

  &:hover {
    color: ${colors.secondary.base};
  }
`;

const NavigationLogo = React.forwardRef(
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

export default NavigationLogo;
