import React from 'react';
import styled from 'styled-components';

import mixins from '../../styles/mixins';

import AnimatedLogo from '../../components/AnimatedLogo';

const HEADER_HEIGHT = 90;

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  margin-top: -${HEADER_HEIGHT}px;
  overflow: inherit;
`;

const Layout = styled.div`
  ${mixins.layoutOuter};
  align-items: center;
  position: relative;
  padding-top: 300px;
  min-height: 100vh;
`;

const Home = props => {
  return (
    <Wrapper>
      <AnimatedLogo>
        <Layout>
          Hi! I'm Eric, I like to build functional systems and bringing ideas to
          life
        </Layout>
      </AnimatedLogo>
    </Wrapper>
  );
};

export default Home;
