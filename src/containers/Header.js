import React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as Logo } from '../assets/logo-eric-bright.svg';
import Link from '../components/Link';

import { colors, sizes, mixins } from '../styles';

const Wrapper = styled.div`
  width: 100%;
  padding: ${sizes.regular} ${sizes.medium};
`;

const InnerWrapper = styled.nav`
  max-width: 1024px;
  width: 100%;
  display: flex;
  margin-right: auto;
  margin-left: auto;
`;

const StyledLogo = styled(Logo)`
  color: ${colors.neutral.darker};
  width: ${394 / 2}px;
  height: ${188 / 2}px;

  .logo-letter-alt {
    color: ${colors.secondary.base};
  }
`;

const List = styled.ul`
  ${mixins.listReset};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin-left: ${sizes.medium};
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
      <StyledLogo />

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
