import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../components/Button';
import './styles.css';
import '../global.css';
const stories = storiesOf('Button', module);

stories.add('Default', () => {
  return (
    <div className="flex items-center justify-center">
      <div className="light-view-box">
        <Button text="Submit" variant="default" />
      </div>
    </div>
  );
});
stories.add('Hotline', () => {
  return (
    <div className="flex items-center justify-center">
      <div className="light-view-box">
        <Button text="Submit" variant="hotline" />
      </div>
    </div>
  );
});
stories.add('Outlined', () => {
  return (
    <div className="flex items-center justify-center">
      <div className="navy-view-box">
        <Button text="Submit" variant="outlined" />
      </div>
    </div>
  );
});
stories.add('OutlinedNav', () => {
  return (
    <div className="flex items-center justify-center">
      <div className="navy-view-box">
        <Button text="Submit" variant="outlinedNav" />
      </div>
    </div>
  );
});
stories.add('OutlinedNavSecondary', () => {
  return (
    <div className="flex items-center justify-center">
      <div className="light-view-box">
        <Button text="Submit" variant="outlinedNavSecondary" />
      </div>
    </div>
  );
});
