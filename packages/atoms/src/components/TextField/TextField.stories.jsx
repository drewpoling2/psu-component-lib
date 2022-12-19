import React from 'react';
import { TextField } from './TextField';

export default {
  title: 'Text Field',
  component: TextField,
};

const Template = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {};
export const Standard = Template.bind({});
Standard.args = {
  variant: 'filled',
};
export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
};
