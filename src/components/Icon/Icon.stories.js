import React from 'react';
import styled from 'styled-components/macro';
import Icon from './Icon';

const Grid = styled.div`
  display: grid;
  gap: 16px;
  grid-auto-flow: row;
  grid-template-columns: auto;
  grid-template-rows: auto;

  & > & {
    grid-auto-flow: column;
    max-width: 300px;
  }
`;

export default {
  component: Icon,
  title: 'Icon',
  parameters: {
    name: 'github',
  },
};

export const IconsTogether = () => {
  return (
    <Grid>
      {['test-circle', 'test-square', 'github', 'loader', 'twitter'].map(
        (name, index) => (
          <Grid key={`${name}-${index}`}>
            <Icon name={name} size="16" />
            <Icon name={name} size="24" />
            <Icon name={name} size="50" />
          </Grid>
        ),
      )}
    </Grid>
  );
};
