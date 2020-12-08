import styled from 'styled-components';

const Viewport = styled.div`
  position: relative;
  width: 100%;
  min-height: ${p => p.$height || '100vh'};

  & ~ & {
    height: unset;
  }
`;

export default Viewport;
