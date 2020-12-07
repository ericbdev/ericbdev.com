import React from 'react';
import styled from 'styled-components/macro';
import { useLocation } from 'react-router-dom';

import { SELECTORS_HEADER } from '../../config/domSelectors';
import Link from '../../components/Link';

import layers from '../../styles/layers';
import mixins from '../../styles/mixins';
import sizes from '../../styles/sizes';
import colors from '../../styles/colors';

import { LOGO_SIZES } from '../../components/Logo/LogoSvg';
import LogoLinked from '../../components/Logo/NavigationLogo';

export const HEADER_HEIGHT = LOGO_SIZES.short.height / 2 + 16 + 16;

const LogoStyled = styled(LogoLinked)`
  ${p =>
    p.visuallyHidden &&
    `
   position: relative;
   top: 0;
   bottom: 0;
   height: ${LOGO_SIZES.short.height / 2}px;
 `}
`;

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${layers.header};
  width: 100%;
  padding: ${sizes.small} 0;
  background-color: ${colors.neutral.lightest};
`;

// layout z-index scope for ${Logo}
const InnerWrapper = styled.nav`
  ${mixins.layoutOuter};
  align-items: flex-end;
  position: relative;
`;

const List = styled.ul.attrs({ role: 'menubar' })`
  ${mixins.listReset};
  height: ${LOGO_SIZES.short.height / 2}px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  margin-left: auto;
`;

const ListItem = styled.li`
  margin-top: ${sizes.xSmall};

  &:first-child {
    margin-top: 0;
  }
`;

const ListItemSeparator = styled.li.attrs({ role: 'separator' })`
  margin-right: ${sizes.small};
  margin-left: ${sizes.small};
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
        <LogoStyled {...navLogoProps} />
        <List>
          <ListItem>
            <Link to="/" role="menu-item">
              Home
            </Link>
          </ListItem>
          <ListItemSeparator>/</ListItemSeparator>
          <ListItem>
            <Link to="/findings-ideas" role="menu-item">
              Findings & Ideas
            </Link>
          </ListItem>
        </List>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Header;
