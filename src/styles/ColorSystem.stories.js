import React from 'react';
import styled from 'styled-components';
import styles from './';

const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(${p => p.cols}, 1fr);
  grid-template-rows: 1fr;
`;

const ColorItem = styled.div`
  background: white;
  border: 2px solid black;
  border-radius: 4px;
`;

const ColorBlock = styled.div`
  padding-bottom: 100%;
  background-color: ${p => p.color};
  border-radius: 4px 4px 0 0;
`;

const ColorInfo = styled.div`
  padding: 12px;
  font-size: 16px;
  line-height: 1.4;
  font-family: 'Courier New', Courier, monospace;
`;

const ColorTitle = styled.span`
  display: block;
`;
const ColorValue = styled.span`
  display: block;
`;

const genColorScale = name =>
  Object.keys(styles.colors[name]).map(k => ({
    name: k,
    color: styles.colors[name][k],
  }));

const ColorScale = ({ scale }) => (
  <Grid cols={scale.length}>
    {scale.map(c => (
      <ColorItem key={c.name} name={c.name} color={c.color}>
        <ColorBlock color={c.color} />
        <ColorInfo>
          <ColorTitle>{c.name}</ColorTitle>
          <ColorValue>{c.color}</ColorValue>
        </ColorInfo>
      </ColorItem>
    ))}
  </Grid>
);

export const ColorSystem = () => {
  const scales = ['blue', 'green', 'yellow', 'orange', 'red', 'neutral'];

  return (
    <Grid cols={1}>
      {scales.map(scale => (
        <div>
          <ColorScale scale={genColorScale(scale)} />
        </div>
      ))}
    </Grid>
  );
};

export default {
  component: ColorSystem,
  title: 'ColorSystem',
};
