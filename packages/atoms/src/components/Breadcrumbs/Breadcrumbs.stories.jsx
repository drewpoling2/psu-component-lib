/* eslint-disable no-undef */
import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import { Link } from '../Link';
import theme from '@exe-psu-lib/style-engine/theme';
import '@exe-psu-lib/style-engine/global.css';

const component = Breadcrumbs;
const items = [
  { to: 'https://www.psu.edu/', label: 'Arts' },
  { to: 'https://www.psu.edu/', label: 'Science' },
  { to: 'https://www.psu.edu/', label: 'Health' },
  { to: 'https://www.psu.edu/', label: 'Technology' },
  { to: 'https://www.psu.edu/', label: 'Public Events' },
];

export default {
  title: component.name || component.displayName || 'undefined component name',
  component: component,
};

const Template = (args) => (
  <Breadcrumbs {...args}>
    {items.map(({ to, label, i }) => (
      <Link
        style={{ fontSize: '22px' }}
        className="decoration-none roboto-condensed-bold hover-underline"
        key={i}
        to={to}
      >
        {label}
      </Link>
    ))}
  </Breadcrumbs>
);

export const Default = Template.bind({});
Default.args = {
  color: `${theme.colors.paLink}`,
};
