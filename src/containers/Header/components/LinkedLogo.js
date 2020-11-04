import styled from 'styled-components/macro';
import Link from '../../../components/Link';
import mixins from '../../../styles/mixins';
import colors from '../../../styles/colors';


export const LinkedLogo = styled(Link)`
  color: ${colors.neutral.darker};
  ${p => p.visuallyHidden && mixins.visuallyHidden};

  &:hover {
    color: ${colors.secondary.base};
  }
`;
