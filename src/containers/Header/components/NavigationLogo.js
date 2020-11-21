import React from 'react';
import { useHistory } from 'react-router-dom';
import HeaderLogo from './HeaderLogo';

import styled from 'styled-components/macro';
import Link from '../../../components/Link';
import mixins from '../../../styles/mixins';
import colors from '../../../styles/colors';

const LinkedLogo = styled(Link)`
  color: ${colors.neutral.darker};
  ${p => p.visuallyHidden && mixins.visuallyHidden};

  &:hover {
    color: ${colors.secondary.base};
  }
`;

const NavigationLogo = React.forwardRef(
  ({ style, className, visuallyHidden }, ref) => {
    const history = useHistory();
    const props = {
      onClick: () => history.push('/').className,
      className,
      style,
      ref,
      visuallyHidden,
    };

    return (
      <LinkedLogo {...props}>
        <HeaderLogo />
      </LinkedLogo>
    );
  },
);

export default NavigationLogo;
