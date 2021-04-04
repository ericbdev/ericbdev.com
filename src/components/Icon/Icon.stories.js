import React from 'react';
import Icon from './Icon';

export default {
  component: Icon,
  title: 'Icon',
  parameters: {
    name: 'github',
  },
};

export const IconsTogether = () => {
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <Icon name="comment" size="16" />
      <Icon name="github" size="16" />
      <Icon name="linkedin" size="16" />
      <Icon name="loader" size="16" />
      <Icon name="twitter" size="24" />
    </div>
  );
};
