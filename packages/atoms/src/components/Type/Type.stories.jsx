/* eslint-disable no-undef */
import React from 'react';
import { Type } from './Type';
import '@exe-psu-lib/style-engine/global.css';

const component = Type;

export default {
  title: component.name || component.displayName || 'undefined component name',
  component: component,
};

const Template = (args) => <Type {...args} />;

export const Default = Template.bind({});
Default.args = {};
