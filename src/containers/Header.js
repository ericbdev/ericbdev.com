import React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as Logo } from '../assets/logo-bdev.svg';
import Link from '../components/Link';

import colors from '../styles/colors';
import sizes from '../styles/sizes';
import mixins from '../styles/mixins';

const Wrapper = styled.div`
  width: 100%;
  padding: ${sizes.small} 0;
`;

const InnerWrapper = styled.nav`
  ${mixins.layoutOuter};
  align-items: center;
`;

const StyledLogo = styled(Logo)`
  width: ${210 / 2}px;
  height: ${119 / 2}px;
`;

const StyledLink = styled(Link)`
  color: ${colors.neutral.darker};

  &:hover {
    color: ${colors.secondary.base};
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

export default () => (
  <Wrapper>
    <InnerWrapper>
      <StyledLink to="/">
        <StyledLogo />
      </StyledLink>

      <List>
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link to="/about">About</Link>
        </ListItem>
        <ListItem>
          <Link to="/findings-ideas">Findings & Ideas</Link>
        </ListItem>
      </List>
    </InnerWrapper>
  </Wrapper>
);
