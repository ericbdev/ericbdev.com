// https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/
// https://whoisryosuke.com/blog/2020/handling-scroll-based-animations-in-react/
// https://codesandbox.io/s/sticky-sandbox-j5fr3?file=/src/index.js:437-443
// https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj

import React, { useEffect, useState, useRef } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import Viewport from '../Viewport';

import { getRectangle } from '../../utils/getRectangle';

const getScrollPercentage = (y, height, offset = 0) =>
  Math.min(1, (y + offset) / height);

// raster based sizings
const initParams = {
  pct: 0,
};

// default
const initPos = {
  prevPos: { y: 0, x: 0 },
  currPos: { y: 0, x: 0 },
};

const ScrollWatcher = ({ offset, children, $height }) => {
  const [scrollParams, setParams] = useState(initParams);
  const ref = useRef(null);
  const boundsRect = getRectangle(ref.current);

  const handleTranslate = ({ currPos: { y } } = initPos) => {
    const height = boundsRect?.height || 0;
    const pct = getScrollPercentage(y, height, offset) || 0;

    return setParams({ pct });
  };

  useEffect(() => {
    const y =
      document.documentElement.scrollTop || document.body.scrollTop || 0;
    handleTranslate({ ...initPos, currPos: { x: 0, y } });

    // eslint-disable-next-line
  }, []);

  // scroll monitoring
  useScrollPosition(handleTranslate, [ref, handleTranslate], ref, true, null);

  return (
    <Viewport $height={$height} ref={ref}>
      {children({ scrollParams })}
    </Viewport>
  );
};

export default ScrollWatcher;
