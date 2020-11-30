import React from 'react';
import styled from 'styled-components/macro';
import { useLocation } from 'react-router-dom';

import { SELECTORS_HEADER } from '../../config/domSelectors';
import Link from '../../components/Link';

import layers from '../../styles/layers';
import mixins from '../../styles/mixins';
import sizes from '../../styles/sizes';
import colors from '../../styles/colors';

import NavigationLogo from './components/NavigationLogo';

const NavigationLogoStyled = styled(NavigationLogo)``;

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${layers.header};
  width: 100%;
  padding: ${sizes.small} 0;
  background-color: ${colors.neutral.lightest}
`;

// layout z-index scope for ${NavigationLogo}
const InnerWrapper = styled.nav`
  ${mixins.layoutOuter};
  align-items: center;
  position: relative;

  ${NavigationLogoStyled} {
    top: 0;
    left: ${sizes.small};
  }
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

  const navLogoProps = {
    visuallyHidden: isIndex,
    [SELECTORS_HEADER.NAV_LOGO]: true,
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <NavigationLogoStyled {...navLogoProps} />
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
