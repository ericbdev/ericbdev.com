import React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as Logo } from '../assets/logo-eric-bright.svg';
import Button from '../components/Button';

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
  align-items: flex-start;
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
          <Button to="/">Home</Button>
        </ListItem>
        <ListItem>
          <Button to="/about">About</Button>
        </ListItem>
        <ListItem>
          <Button to="/findings-ideas">Findings & Ideas</Button>
        </ListItem>
      </List>
    </InnerWrapper>
  </Wrapper>
);
