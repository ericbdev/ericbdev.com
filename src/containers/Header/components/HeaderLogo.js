import styled from 'styled-components/macro';
import { ReactComponent as LogoSvg } from '../../../assets/logo-bdev.svg';
import { ReactComponent as LogoFullSvg } from '../../../assets/logo-ericbdev.svg';

export const LogoShort = styled(LogoSvg)`
  width: ${212 / 2}px;
  height: ${120 / 2}px;
`;

export const LogoFull = styled(LogoFullSvg)`
  width: ${370 / 2}px;
  height: ${120 / 2}px;
`;
