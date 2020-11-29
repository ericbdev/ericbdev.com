import styled from 'styled-components/macro';
import { ReactComponent as LogoSvg } from '../../../assets/logo-bdev.svg';

// todo: this probably isnt that smart
// todo: we want to use full with at some pont
// todo: make this global sizing
const HeaderLogo = styled(LogoSvg)`
  width: ${214 / 2}px;
  height: ${120 / 2}px;
`;

export default HeaderLogo;
