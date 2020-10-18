import React from 'react';
// import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

export default {
  component: Button,
  title: 'Button',
};

export const Primary = args => <Button {...args} />;
Primary.args = {
  children: 'Button variant',
  variant: 'primary',
  onClick: action('clicked'),
};

export const Secondary = args => <Button {...args} />;
Secondary.args = {
  children: 'Button variant',
  variant: 'secondary',
  onClick: action('clicked'),
};

export const Success = args => <Button {...args} />;
Success.args = {
  children: 'Button variant',
  variant: 'success',
  onClick: action('clicked'),
};

export const Danger = args => <Button {...args} />;
Danger.args = {
  children: 'Button variant',
  variant: 'danger',
  onClick: action('clicked'),
};

export const Info = args => <Button {...args} />;
Info.args = {
  children: 'Button variant',
  variant: 'info',
  onClick: action('clicked'),
};

export const Together = () => {
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <Button>Button variant</Button>
      <Button variant="secondary">Button variant</Button>
      <Button variant="success">Button variant</Button>
      <Button variant="danger">Button variant</Button>
      <Button variant="info">Button variant</Button>
    </div>
  );
};
