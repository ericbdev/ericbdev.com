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

import React, { useEffect, useState, useMemo, useRef } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { SELECTORS_HEADER } from '../../config/domSelectors';
import useWindowSize from '../../hooks/useWindowSize';

import { HEADER_HEIGHT } from '../../containers/Header/Header';

import Portal from '../Portal';
import { LOGO_SIZES } from '../Logo/LogoSvg';
import { LogoStyled } from './LogoStyled';

// raster based sizings
const initParams = {
  x: window?.innerWidth / 2 - LOGO_SIZES.full.width / 4 || 0,
  y: window?.innerHeight / 2 - LOGO_SIZES.full.height / 4,
  pct: 0,
};

// ack but also will be a typ
const initPos = {
  prevPos: { y: 0, x: 0 },
  currPos: { y: 0, x: 0 },
};

const getRectangle = element => element?.getBoundingClientRect() || {};
const getScrollPercentage = (y, height) =>
  Math.min(1, (y + HEADER_HEIGHT) / height);
const getTrxDelta = (a1, a2, pct) => a1 - (a1 - a2) * pct;

const ViewPort = styled.div`
  position: relative;
  width: 100%;
  height: ${p => p.$height || '100vh'};
`;

const AnimatedLogo = ({ children, $height }) => {
  const winSize = useWindowSize();
  const logoRef = useRef(null);
  const scrollBounds = useRef(null);
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

    const p = { x, y, pct };

    return setLogoParams(p);
  };

  useEffect(() => {
    const y =
      document.documentElement.scrollTop || document.body.scrollTop || 0;
    handleTranslate({ ...initParams.currPos, y });

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
    <ViewPort $height={$height} ref={scrollBounds}>
      <Portal>
        <LogoStyled
          ref={logoRef}
          dX={logoParams.x}
          dY={logoParams.y}
          pct={logoParams.pct}
          logoSize={'full'}
        />
      </Portal>
      {children({ scrollParams: logoParams })}
    </ViewPort>
  );
};

export default AnimatedLogo;
