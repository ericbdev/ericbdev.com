import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import styled from 'styled-components';

import NavigationLogo from '../containers/Header/components/NavigationLogo';

const Wrapper = styled.div``;
const ViewPort = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Home = props => {
  const [headerPos, setHeaderPos] = useState();
  // haeader pos is to
  return (
    <Wrapper>
      <Waypoint onEnter={() => {}} onPositionChange={() => {}}>
        <ViewPort>
          <NavigationLogo />
        </ViewPort>
      </Waypoint>
      <Waypoint onEnter={() => {}} onPositionChange={() => {}}>
        {/* make logo visible when scroll into here */}
        <ViewPort>
          Hi! I'm Eric, I like to build functional systems and bringing ideas to
          life
        </ViewPort>
      </Waypoint>
    </Wrapper>
  );
};

export default Home;
