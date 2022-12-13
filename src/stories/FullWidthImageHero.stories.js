import React from 'react';
import { storiesOf } from '@storybook/react';
import './styles.css';
import '../global.css';
const stories = storiesOf('Full Width Image Hero', module);

stories.add('Default', () => {
  return <div className="flex ">Test</div>;
});
