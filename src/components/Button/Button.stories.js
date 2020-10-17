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
  children: 'Hello',
  variant: 'primary',
  onClick: action('clicked'),
};

export const Secondary = args => <Button {...args} />;
Secondary.args = {
  children: 'Hello',
  variant: 'secondary',
  onClick: action('clicked'),
};

export const Success = args => <Button {...args} />;
Success.args = {
  children: 'Hello',
  variant: 'success',
  onClick: action('clicked'),
};

export const Danger = args => <Button {...args} />;
Danger.args = {
  children: 'Hello',
  variant: 'danger',
  onClick: action('clicked'),
};

export const Info = args => <Button {...args} />;
Info.args = {
  children: 'Hello',
  variant: 'info',
  onClick: action('clicked'),
};
