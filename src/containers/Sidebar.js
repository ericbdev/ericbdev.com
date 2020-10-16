import React from 'react';
import styled from 'styled-components/macro';
import Button from '../components/Button';

import { sizes, mixins } from '../styles';

const Wrapper = styled.nav``;
const List = styled.ul`
  ${mixins.listReset};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ListItem = styled.li`
  margin-left: ${sizes.xSmall};

  &:first-child {
    margin-left: 0;
  }
`;

export default () => (
  <Wrapper>
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
  </Wrapper>
);
