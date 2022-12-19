/* eslint-disable no-undef */
/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui';
import { Select } from './Select';
import { Icon } from '../Icon';
import { Divider } from '../Divider';
import theme from '@exe-psu-lib/style-engine/theme';
import '@exe-psu-lib/style-engine/global.css';

const component = Select;

const selectList = [
  { value: 'Penn State News', label: 'Penn State News' },
  { value: 'All Penn State', label: 'All Penn State' },
  { value: 'News Archive', label: 'News Archive' },
];
export default {
  title: component.name || component.displayName || 'undefined component name',
  component: component,
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Select
      Divider={<Divider thickness={'s'} />}
      Icon={
        <Icon size={24} icon={'downArrow'} color={`${theme.colors.paLink}`} />
      }
      placeHolder={selectList[0].label}
      {...args}
    >
      {selectList.map(({ label, i }) => (
        <span key={i}>{label}</span>
      ))}
    </Select>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
