/* eslint-disable no-undef */
import React from 'react';
import { Type } from '../components/Type';

const component = Type;

export default {
  title: component.name || component.displayName || 'undefined component name',
  component: component,
};

const Template = (args) => <Type {...args} />;

export const Default = Template.bind({});
Default.args = {};
