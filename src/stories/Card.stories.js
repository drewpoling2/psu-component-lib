import React from 'react';
import { storiesOf } from '@storybook/react';
import './styles.css';
import '../global.css';
const stories = storiesOf('Card', module);

stories.add('Default', () => {
  return <div className="flex ">Test</div>;
});
