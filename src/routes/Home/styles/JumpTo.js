import styled from 'styled-components';
import Button from '../../../components/Button';

export const JumpTo = styled(Button).attrs(p => ({
  style: {
    display: p.$scrollPct >= 1 ? 'none' : '',
    opacity: Math.max(0, 1 - p.$scrollPct * p.$scrollPct * 1000),
    transform: `translate3d(
    -50%,
    ${1500 * p.$scrollPct}px,
    0
  )`,
  },
}))`
  position: fixed;
  display: block;
  bottom: 30px;
  left: 50%;
`;
