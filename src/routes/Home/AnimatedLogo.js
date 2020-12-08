import React, { useMemo, useRef } from 'react';

import { SELECTORS_HEADER } from '../../config/domSelectors';
import useWindowSize from '../../hooks/useWindowSize';
import { getRectangle } from '../../utils/getRectangle';

import { LOGO_SIZES } from '../../components/Logo/LogoSvg';

import LogoStyled from './styles/LogoStyled';

// raster based sizings
const initParams = {
  x: window?.innerWidth / 2 - LOGO_SIZES.full.width / 4 || 0,
  y: window?.innerHeight / 2 - LOGO_SIZES.full.height / 4,
};

// move a point
const getTrxDelta = (a1, a2, pct) => a1 - (a1 - a2) * pct;

// moves a logo from a designated x/y coord to a final rect
const AnimatedLogo = React.forwardRef(({ pct = 0, ...props }, ref) => {
  const logoRef = useRef(null);
  const winSize = useWindowSize();

  // destination get {x ,y }
  const pageLogoEl = document.querySelector(`[${SELECTORS_HEADER.NAV_LOGO}]`);
  const destination = getRectangle(pageLogoEl);

  //src
  const logoRect = getRectangle(logoRef.current);
  const src = useMemo(() => {
    const x = winSize.width / 2 - logoRect.width / 2;
    const y = winSize.height / 2 - logoRect.height / 2;

    return { x: isNaN(x) ? initParams.x : x, y: isNaN(y) ? initParams.y : y };
  }, [logoRect, winSize]);

  // move X and Y based on scroll amount
  const dX = useMemo(() => getTrxDelta(src.x, destination.x, pct), [
    src.x,
    destination.x,
    pct,
  ]);

  const dY = useMemo(() => getTrxDelta(src.y, destination.y, pct), [
    src.y,
    destination.y,
    pct,
  ]);

  return <LogoStyled ref={ref} logoSize={'full'} dX={dX} dY={dY} pct={pct} />;
});

export default AnimatedLogo;
