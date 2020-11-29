// https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/
// https://whoisryosuke.com/blog/2020/handling-scroll-based-animations-in-react/
// https://codesandbox.io/s/sticky-sandbox-j5fr3?file=/src/index.js:437-443
// https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj

import React, { useState, useMemo, useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { SELECTORS_HEADER } from '../../config/domSelectors';
import useWindowSize from '../../hooks/useWindowSize';
import NavigationLogo from '../../containers/Header/components/NavigationLogo';

const HEADER_HEIGHT = 90;

const LogoStyled = styled(NavigationLogo).attrs(({ dX, dY }) => ({
  style: { transform: `translate3d(${dX}px, ${dY}px, 0)` },
}))`
  position: fixed;
  transition: transform 0.3s ease;
`;

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  margin-top: -${HEADER_HEIGHT}px;
  overflow: inherit;
`;
const ViewPort = styled.div`
  position: relative;
  width: 100%;
  height: ${p => p.height || '100vh'};
`;

const getRectangle = element => element?.getBoundingClientRect() || {};
const getScrollPercentage = (y, height) => Math.min(1, y / height);
const getTrxDelta = (a1, a2, pct) => a1 - (a1 - a2) * pct;

// raster based sizings
const initDelta = { dX: 0, dY: 0 };
const Home = props => {
  const winSize = useWindowSize();
  const [destination, setDestination] = useState();
  const [logoDelta, setLogoDelta] = useState(initDelta);

  const scrollRef = useRef(null);
  const scrollBounds = useRef(null);
  const logoRef = useRef(null);

  const logoRect = getRectangle(logoRef.current);
  const boundsRect = getRectangle(scrollBounds.current);

  const src = useMemo(() => {
    const x1 = winSize.width / 2 - logoRect.width / 2;
    const y1 = winSize.height / 2 - logoRect.height / 2;

    return { x: x1, y: y1 };
  }, [logoRect, winSize]);

  const getTranslation = offset => {
    if (!scrollBounds || !destination) {
      return { x: 0, y: 0 };
    }
    const pct = getScrollPercentage(offset, boundsRect.height);

    const x = getTrxDelta(src.x, destination.x, pct);
    const y = getTrxDelta(src.y, destination.y, pct);

    // if x is less than destination.x, take x

    return { x, y };
  };

  // scroll monitoring
  useScrollPosition(
    ({ prevPos = {}, currPos = {} }) => {
      const trx = getTranslation(currPos.y);
      setLogoDelta(trx);
    },
    [destination, logoDelta, scrollBounds, getTranslation],
    scrollBounds,
    true,
    null,
  );

  // on initial load / resize
  useEffect(() => {
    const y =
      document.documentElement.scrollTop || document.body.scrollTop || 0;
    const trx = getTranslation(y);
    setLogoDelta(trx);
  }, []);

  // initial positioning
  useEffect(() => {
    const pageLogoEl = document.querySelector(`[${SELECTORS_HEADER.NAV_LOGO}]`);
    const { x, y, height, width } = getRectangle(pageLogoEl);
    setDestination({ x, y, height, width });
  }, []);

  return (
    <Wrapper ref={scrollRef}>
      <ViewPort ref={scrollBounds}>
        <LogoStyled ref={logoRef} dX={logoDelta.x} dY={logoDelta.y} />
      </ViewPort>
      <ViewPort>
        Hi! I'm Eric, I like to build functional systems and bringing ideas to
        life
      </ViewPort>
    </Wrapper>
  );
};

// ack, move this to a type
// const domRectType = PropTypes.shape({
//   left: PropTypes.number,
//   top: PropTypes.number,
//   right: PropTypes.number,
//   bottom: PropTypes.number,
//   x: PropTypes.number,
//   y: PropTypes.number,
//   width: PropTypes.number,
//   height: PropTypes.number,
// });

export default Home;
