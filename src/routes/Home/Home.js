import React, { useRef, useCallback } from 'react';
import styled from 'styled-components';

import mixins from '../../styles/mixins';
import sizes from '../../styles/sizes';

import { LOGO_SIZES } from '../../components/Logo/LogoSvg';
import { HEADER_HEIGHT } from '../../containers/Header/Header';

import AnimatedLogo from '../../components/AnimatedLogo';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import Link from '../../components/Link';

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
  min-height: 100vh;
`;

const LinkList = styled.div.attrs(p => ({
  style: {
    display: p.$scrollPct >= 1 ? 'none' : '',
    opacity: 1 - p.$scrollPct * p.$scrollPct * 10,
    transform: `translate3d(
      calc(-50% - ${1500 * p.$scrollPct}px),
      calc(${LOGO_SIZES.full.height / 2 + 20}px),
    0
  )`,
  },
}))`
  position: fixed;
  bottom: 50%;
  left: 50%;

  > * {
    margin-left: ${sizes.small};

    &:first-child {
      margin-left: 0;
    }
  }
`;

const JumpTo = styled(Button).attrs(p => ({
  style: {
    display: p.$scrollPct >= 1 ? 'none' : '',
    opacity: 1 - p.$scrollPct * p.$scrollPct * 10,
    transform: `translate3d(
    -50%,
    ${1500 * p.$scrollPct}px,
    0
  )`,
  },
}))`
  position: fixed;
  display: block;
  bottom: 30px;
  left: 50%;
`;

const ViewPort = styled.div`
  position: relative;
  width: 100%;
  min-height: ${p => p.$height || '100vh'};

  & ~ & {
    height: unset;
  }
`;

const Home = props => {
  const main = useRef(null);
  const scrollToBottom = useCallback(() => {
    main && main.current && main.current.scrollIntoView({ behavior: 'smooth' });
  }, [main]);

  return (
    <Wrapper>
      <AnimatedLogo id={'home--scroll'} $height={'400vh'}>
        {({ scrollParams } = {}) => (
          <>
            <JumpTo
              variant="info"
              onClick={scrollToBottom}
              $scrollPct={scrollParams.pct}
            >
              Jump to content
            </JumpTo>
            <LinkList $scrollPct={scrollParams.pct}>
              <Link href="https://github.com/ericbdev/">
                <Icon name="github" />
              </Link>
              <Link href="https://twitter.com/ericbdev">
                <Icon name="twitter" />
              </Link>
              <Link href="https://www.linkedin.com/in/eric-bright/">
                <Icon name="linkedin" />
              </Link>
            </LinkList>
          </>
        )}
      </AnimatedLogo>
      <ViewPort id={'home--main'} ref={main}>
        <Layout layoutStyle="content">
          Hi! I'm Eric, I like to build functional systems and bringing ideas to
          life. This is really more a play ground for me than anything. I like
          to practice, and sometimes get my own ideas to life.
        </Layout>
      </ViewPort>
    </Wrapper>
  );
};

export default Home;
