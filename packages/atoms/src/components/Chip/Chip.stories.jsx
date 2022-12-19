/* eslint-disable no-undef */
/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui';
import { Chip } from './Chip';
import { Stack } from '../Stack';
const component = Chip;

const items = [
  { to: 'https://www.psu.edu/', text: 'Smeal College of Business' },
  { to: 'https://www.psu.edu/', text: 'Faculty and Staff' },
  { to: 'https://www.psu.edu/', text: 'Business and industry' },
  { to: 'https://www.psu.edu/', text: 'Alumni' },
  { to: 'https://www.psu.edu/', text: 'University Park' },
  { to: 'https://www.psu.edu/', text: 'Research' },
  { to: 'https://www.psu.edu/', text: 'Academics' },
  { to: 'https://www.psu.edu/', text: 'Faculty Achievement' },
];

export default {
  title: component.name || component.displayName || 'undefined component name',
  component: component,
};

const Template = (args) => <Chip {...args} />;
const Template2 = (args) => (
  <ThemeProvider theme={theme}>
    <div sx={{ maxWidth: '600px' }}>
      <Stack spacing={'m'} alignItems={'center'} justifyContent={'start'}>
        {items.map(({ to, text, index }) => (
          <Chip key={`chip-${index}`} text={text} to={to} {...args} />
        ))}
      </Stack>
    </div>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};

export const GroupOfChips = Template2.bind({});
Default.args = {};
