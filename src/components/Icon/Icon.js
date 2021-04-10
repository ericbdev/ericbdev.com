import React from 'react';
import styled from 'styled-components/macro';
import IconLoader from './IconLoader';

import colors from '../../styles/colors';

const Wrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  ${p => p.size && `width: ${parseInt(p.size, 10)}px;`};
  ${p => p.size && `height: ${parseInt(p.size, 10)}px;`};
  ${p => p.color && `color: ${colors[p.color] ?? p.color}`};

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Icon = ({ title, name, size }) => {
  return (
    <Wrapper role="presentation" aria-label={title || name} size={size}>
      <IconLoader name={name} title={title} size={size} />
    </Wrapper>
  );
};

export default Icon;
