import React from 'react';
import { Button } from '../components/Button';
import './styles.css';
import '../global.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  variant: 'default',
  text: 'Button',
};

export const OutlinedNavSecondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OutlinedNavSecondary.args = {
  variant: 'outlinedNavSecondary',
  text: 'Button',
};
export const Hotline = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Hotline.args = {
  variant: 'hotline',
  text: 'Button',
};
