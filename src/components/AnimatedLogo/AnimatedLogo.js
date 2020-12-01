// https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/
// https://whoisryosuke.com/blog/2020/handling-scroll-based-animations-in-react/
// https://codesandbox.io/s/sticky-sandbox-j5fr3?file=/src/index.js:437-443
// https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj

/** Todo list
 * 1. move 'use scroll position' to only set y value in ref
 * 2. useRaf to handle the component state instead of scrolling to handle it
 * 3. Abstract logo positioning out of home
 * 4. do a lil clean up
 * 4. Use next logo, then sort out that animation
 *
 */

import React, { useState, useMemo, useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { mix } from 'polished';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { SELECTORS_HEADER } from '../../config/domSelectors';
import colors from '../../styles/colors';
import useWindowSize from '../../hooks/useWindowSize';
import NavigationLogo from '../../containers/Header/components/NavigationLogo';

import Portal from '../Portal';

// todo: gtfo
const HEADER_HEIGHT = 90;

const getRectangle = element => element?.getBoundingClientRect() || {};
const getScrollPercentage = (y, height) =>
  Math.min(1, (y + HEADER_HEIGHT) / height);
const getTrxDelta = (a1, a2, pct) => a1 - (a1 - a2) * pct;

const LogoStyled = styled(NavigationLogo).attrs(({ dX, dY, pct }) => ({
  className: pct > 0.3 && 'logo--short',
  style: {
    transform: `translate3d(${dX}px, ${dY}px, 0)`,
    color: mix(pct, colors.secondary.base, colors.neutral.darkest),
  },
}))`
  position: fixed;
  z-index: 100;
  transition: transform 0.3s ease;
  will-change: transform;
  
  path {
    transform-origin: 50% 50%;
    transition: all 0.3s ease;
  }

  &.logo--short {
    .logo--letter-1,
    .logo--letter-2,
    .logo--letter-3,
    .logo--letter-4 {
      transform: translateX(40px);
      opacity: 0;
    }

    .logo--letter-5,
    .logo--letter-6,
    .logo--letter-7,
    .logo--letter-8 {
      transform: translateX(-158px);
    }
  }

  &:hover {
    color: currentColor;
  }
`;

const ViewPort = styled.div`
  position: relative;
  width: 100%;
  height: ${p => p.height || '200vh'};

  & ~ & {
    height: unset;
  }
`;

// raster based sizings
const initParams = {
  x: window?.innerWidth / 2 - 370 / 4 || 0,
  y: window?.innerHeight / 2 - 120 / 4,
  pct: 0,
};
// ack but also will be a typ
const initPos = {
  prevPos: { y: 0, x: 0 },
  currPos: { y: 0, x: 0 },
};

const AnimatedLogo = ({ children }) => {
  const winSize = useWindowSize();
  const scrollBounds = useRef(null);
  const logoRef = useRef(null);
  const [destination, setDestination] = useState();
  const [logoParams, setLogoParams] = useState(initParams);

  const logoRect = getRectangle(logoRef.current);
  const boundsRect = getRectangle(scrollBounds.current);

  const src = useMemo(() => {
    const x = winSize.width / 2 - logoRect.width / 2;
    const y = winSize.height / 2 - logoRect.height / 2;

    return { x: isNaN(x) ? initParams.x : x, y: isNaN(y) ? initParams.y : y };
  }, [logoRect, winSize]);

  const handleTranslate = currPos => {
    if (!scrollBounds || !destination) {
      return setLogoParams(initParams);
    }

    const pct = getScrollPercentage(currPos.y, boundsRect.height);
    const x = getTrxDelta(src.x, destination.x, pct);
    const y = getTrxDelta(src.y, destination.y, pct);

    return setLogoParams({ x, y, pct });
  };

  // on initial load / resize
  useEffect(() => {
    const y =
      document.documentElement.scrollTop || document.body.scrollTop || 0;
    handleTranslate({ ...initParams.currPos, y });
    // todo: this is smelly
    // eslint-disable-next-line
  }, []);

  // initial positioning
  useEffect(() => {
    const pageLogoEl = document.querySelector(`[${SELECTORS_HEADER.NAV_LOGO}]`);
    const { x, y, height, width } = getRectangle(pageLogoEl);
    setDestination({ x, y, height, width });
  }, [winSize]);

  // scroll monitoring
  useScrollPosition(
    ({ currPos = {} } = initPos) => handleTranslate(currPos),
    [scrollBounds, handleTranslate],
    scrollBounds,
    true,
    null,
  );

  return (
    <>
      <ViewPort ref={scrollBounds} height={'300vh'}>
        <Portal>
          <LogoStyled
            ref={logoRef}
            dX={logoParams.x}
            dY={logoParams.y}
            pct={logoParams.pct}
            logoSize={'full'}
          />
        </Portal>
      </ViewPort>
      <ViewPort>{children}</ViewPort>
    </>
  );
};

export default AnimatedLogo;
