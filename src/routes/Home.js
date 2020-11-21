import React, { useState, useRef, useLayoutEffect } from 'react';
import isEmpty from 'lodash/isEmpty';
import styled from 'styled-components';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import NavigationLogo from '../containers/Header/components/NavigationLogo';

const HEADER_HEIGHT = 90;

const LogoStyled = styled(NavigationLogo)`
  position: fixed;
`;

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  margin-top: -${HEADER_HEIGHT}px;
  overflow: scroll;
`;
const ViewPort = styled.div`
  position: relative;
  width: 100%;
  height: ${p => p.height || '100vh'};
`;

const utils = {
  getRect: element => element.getBoundingClientRect(),
  getPosTop: element => element.getBoundingClientRect().top,
  getPosBottom: element => element.getBoundingClientRect().bottom,
  getHeight: element => element.offsetHeight,
};

// https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/
// https://whoisryosuke.com/blog/2020/handling-scroll-based-animations-in-react/
// https://codesandbox.io/s/sticky-sandbox-j5fr3?file=/src/index.js:437-443
// https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj
// const useLogoMove = scollRef => {
//   const logoRef = useRef(null);
//   const logoLimit = useRef(null);
//   const [style, setStyle] = useState();

//   // const updateStyle = (pos, method) => {
//   //   console.log({ pos, method });

//   //   setStyle({});
//   // };

//   useLayoutEffect(() => {
//     const useScroll = () => {
//       const scrollPos = window.scrollY + window.innerHeight;
//       const bottomEdge = utils.bottomEdge(logoLimit.current);

//       const logoRect = utils.getRect(logoRef.current);

//       console.log({ scrollPos, bottomEdge, logoRect });
//     };

//     window.addEventListener('scroll', useScroll);
//     return () => window.removeEventListener('scroll', useScroll);
//   }, [logoRef, logoLimit]);

//   return [style, logoRef, logoLimit];
// };

const Home = props => {
  const scrollRef = useRef(null);
  const logoLimit = useRef(null);
  const logoRef = useRef(null);

  const [logoStyle, setLogoStyle] = useState({});

  // get scroll position of logoLimit within scrollRef
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const logoRect = utils.getRect(logoRef.current);
      const logoLimitRect = utils.getRect(logoLimit.current);

      console.log({ prevPos, currPos, logoRect, logoLimitRect });
      let style = {};
      if (logoLimit.current) {
        const midX = (logoLimitRect.width + logoRect.width) / 2 - currPos.x;
        const midY = (logoLimitRect.height + logoRect.height) / 2 - currPos.y;
        style.transform = `translate(${midX}px, ${midY}px)`;
      }

      setLogoStyle(style);
    },
    [logoStyle, logoLimit, scrollRef],
    logoLimit,
    false,
    null,
    scrollRef,
  );


  console.log(logoStyle)
  // haeader pos is to
  return (
    <Wrapper ref={scrollRef}>
      <ViewPort ref={logoLimit}>
        <LogoStyled ref={logoRef} style={logoStyle} />
      </ViewPort>
      <ViewPort>
        Hi! I'm Eric, I like to build functional systems and bringing ideas to
        life
      </ViewPort>
    </Wrapper>
  );
};

export default Home;
