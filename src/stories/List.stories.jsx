/* eslint-disable no-undef */
import React from 'react';
import { List } from '../components/List';

const component = List;

export default {
  title: component.name || component.displayName || 'undefined component name',
  component: component,
};

const Template = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {};
