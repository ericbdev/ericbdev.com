import React, { useRef, useCallback } from 'react';
import ScrollWatcher from '../../components/ScrollWatcher';
import Icon from '../../components/Icon';
import Link from '../../components/Link';
import Portal from '../../components/Portal';
import Viewport from '../../components/Viewport';

import { JumpTo } from './styles/JumpTo';
import { LinkList } from './styles/LinkList';
import { Layout } from './styles/Layout';
import { Wrapper } from './styles/Wrapper';

import AnimatedLogo from './AnimatedLogo';

const Home = props => {
  const main = useRef(null);
  const logoRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    main && main.current && main.current.scrollIntoView({ behavior: 'smooth' });
  }, [main]);

  return (
    <Wrapper>
      <ScrollWatcher offset={0} id={'home--scroll'} $height={'400vh'}>
        {({ scrollParams: { pct } } = {}) => (
          <Portal>
            <AnimatedLogo ref={logoRef} pct={pct} logoSize={'full'} />
            <JumpTo variant="info" onClick={scrollToBottom} $scrollPct={pct}>
              Jump to content
            </JumpTo>
            <LinkList $scrollPct={pct}>
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
          </Portal>
        )}
      </ScrollWatcher>
      <Viewport id={'home--main'} ref={main}>
        <Layout layoutStyle="content">
          Hi! I'm Eric, I like to build functional systems and bringing ideas to
          life. This is really more a play ground for me than anything. I like
          to practice, and sometimes get my own ideas to life.
        </Layout>
      </Viewport>
    </Wrapper>
  );
};

export default Home;
