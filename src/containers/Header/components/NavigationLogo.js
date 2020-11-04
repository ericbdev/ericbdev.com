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

const NavigationLogo = ({ visuallyHidden }) => {
  const history = useHistory();

  return (
    <LinkedLogo
      visuallyHidden={visuallyHidden}
      onClick={() => {
        history.push('/');
      }}
    >
      <HeaderLogo />
    </LinkedLogo>
  );
};

export default NavigationLogo;
