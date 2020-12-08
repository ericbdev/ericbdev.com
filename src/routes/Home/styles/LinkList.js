import styled from 'styled-components';
import sizes from '../../../styles/sizes';
import { LOGO_SIZES } from '../../../components/Logo/LogoSvg';

export const LinkList = styled.div.attrs(p => ({
  style: {
    display: p.$scrollPct >= 1 ? 'none' : '',
    opacity: 1 - p.$scrollPct * p.$scrollPct * 10,
    transform: `translate3d(
      calc(-50% - ${1500 * p.$scrollPct}px),
      calc(${LOGO_SIZES.full.height / 2 + 20}px),
    0
  )`,
  },
}))`
  position: fixed;
  bottom: 50%;
  left: 50%;

  > * {
    margin-left: ${sizes.small};

    &:first-child {
      margin-left: 0;
    }
  }
`;
