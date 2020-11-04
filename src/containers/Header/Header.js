import React from 'react';
import styled from 'styled-components/macro';
import { useLocation } from 'react-router-dom';

import Link from '../../components/Link';

import sizes from '../../styles/sizes';
import mixins from '../../styles/mixins';

import NavigationLogo from './components/NavigationLogo';

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: ${sizes.small} 0;
`;

const InnerWrapper = styled.nav`
  ${mixins.layoutOuter};
  align-items: center;
`;

const List = styled.ul`
  ${mixins.listReset};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin-left: auto;
`;

const ListItem = styled.li`
  margin-top: ${sizes.xSmall};

  &:first-child {
    margin-top: 0;
  }
`;

const Header = () => {
  const location = useLocation();
  const isIndex = location?.pathname === '/';

  return (
    <Wrapper>
      <InnerWrapper>
        <NavigationLogo visuallyHidden={isIndex} />
        <List>
          <ListItem>
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem>
            <Link to="/findings-ideas">Findings & Ideas</Link>
          </ListItem>
        </List>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Header;
