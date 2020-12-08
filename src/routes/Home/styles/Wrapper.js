import styled from 'styled-components';
import { HEADER_HEIGHT } from '../../../containers/Header/Header';

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  margin-top: -${HEADER_HEIGHT}px;
  overflow: inherit;
`;
