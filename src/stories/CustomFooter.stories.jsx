/* eslint-disable no-undef */
import React from 'react';
import { storiesOf } from '@storybook/react';
import './styles.css';
import '../global.css';
const stories = storiesOf('Footer', module);

stories.add('Default', () => {
  return <div className="flex ">Test</div>;
});
