/* eslint-disable no-undef */
import React from 'react';
import Box from '../components/Box';

const component = Box;

export default {
  title: component.name || component.displayName || 'undefined component name',
  component: component,
};

const Template = (args) => <Box {...args} />;

export const Default = Template.bind({});
Default.args = {};


