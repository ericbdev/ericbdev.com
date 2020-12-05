import styled from 'styled-components/macro';
import { ReactComponent as LogoSvg } from '../../assets/logo-bdev.svg';
import { ReactComponent as LogoFullSvg } from '../../assets/logo-ericbdev.svg';

export const LOGO_SIZES = {
  short: {
    width: 212,
    height: 120,
  },
  full: {
    width: 370,
    height: 120,
  },
};

export const LogoShort = styled(LogoSvg)`
  width: ${LOGO_SIZES.short.width / 2}px;
  height: ${LOGO_SIZES.short.height / 2}px;
`;

export const LogoFull = styled(LogoFullSvg)`
  width: ${LOGO_SIZES.full.width / 2}px;
  height: ${LOGO_SIZES.full.height / 2}px;
`;
