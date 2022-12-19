/* eslint-disable no-undef */
/** @jsx jsx */
import { Stack } from '../components/Stack';
import { jsx, ThemeProvider } from 'theme-ui';
import { Chip } from '../components/Chip';
import theme from '../theme';
import { Button } from '../components/Button';
const component = Stack;

const items1 = [
  { to: 'https://www.psu.edu/', text: 'Item 1' },
  { to: 'https://www.psu.edu/', text: 'Item 2' },
  { to: 'https://www.psu.edu/', text: 'Item 3' },
];

const items2 = [
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

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <div sx={{ minWidth: '800px' }}>
      <Stack {...args}>
        {items1.map(({ to, text, index }) => (
          <Button
            variant="outlinedNavSecondary"
            key={`button-${index}`}
            text={text}
            to={to}
            {...args}
          />
        ))}
      </Stack>
    </div>
  </ThemeProvider>
);

const Template2 = (args) => (
  <ThemeProvider theme={theme}>
    <div sx={{ maxWidth: '600px' }}>
      <Stack {...args}>
        {items2.map(({ to, text, index }) => (
          <Chip key={`chip-${index}`} text={text} to={to} {...args} />
        ))}
      </Stack>
    </div>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  spacing: 'm',
  direction: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};

export const StackOfChips = Template2.bind({});
StackOfChips.args = {
  spacing: 'm',
  direction: 'row',
  alignItems: 'center',
  justifyContent: 'start',
};
