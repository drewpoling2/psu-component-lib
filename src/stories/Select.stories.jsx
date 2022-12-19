/* eslint-disable no-undef */
/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui';
import { Select } from '../components/Select';
import { Icon } from '../components/Icon';
import { Divider } from '../components/Divider';
import '../global.css';
import theme from '../theme';
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
