import styled from 'styled-components';

export const ViewPort = styled.div`
  position: relative;
  width: 100%;
  min-height: ${p => p.$height || '100vh'};

  & ~ & {
    height: unset;
  }
`;
