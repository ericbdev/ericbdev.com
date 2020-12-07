import styled from 'styled-components/macro';
import Link from '../Link';
import mixins from '../../styles/mixins';
import colors from '../../styles/colors';

export const LinkedLogo = styled(Link)`
  color: ${colors.neutral.darker};

  &:hover {
    color: ${colors.secondary.base};
  }
`;
