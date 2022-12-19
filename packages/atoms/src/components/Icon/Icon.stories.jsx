/* eslint-disable no-undef */
/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui';
import { Icon } from './Icon';
import { Stack } from '../Stack';
import theme from '@exe-psu-lib/style-engine/theme';
import '@exe-psu-lib/style-engine/global.css';

const component = Icon;

const iconObj1 = [
  { icon: 'facebook' },
  { icon: 'twitter' },
  { icon: 'linkedIn' },
  { icon: 'instagram' },
];
const iconObj2 = [
  { icon: 'facebookCircle' },
  { icon: 'twitterCircle' },
  { icon: 'linkedInCircle' },
  { icon: 'mailCircle' },
  { icon: 'printerCircle' },
];

export default {
  title: component.name || component.displayName || 'undefined component name',
  component: component,
};

const Template1 = (args) => (
  <ThemeProvider theme={theme}>
    <Icon {...args} />
  </ThemeProvider>
);

const Template2 = (args) => (
  <ThemeProvider theme={theme}>
    <Stack
      spacing={'lg'}
      sx={{
        borderRadius: '3px',
        p: 4,
        backgroundColor: `${theme.colors.beaverBlue}`,
      }}
    >
      {iconObj1.map(({ icon, index }) => (
        <Icon size={32} key={index} icon={icon} {...args} />
      ))}
    </Stack>
  </ThemeProvider>
);

const Template3 = (args) => (
  <ThemeProvider theme={theme}>
    <Stack spacing={'lg'}>
      {iconObj2.map(({ icon, index }) => (
        <Icon size={32} key={index} icon={icon} {...args} />
      ))}
    </Stack>
  </ThemeProvider>
);

export const Default = Template1.bind({});
Default.args = {
  sx: {
    position: 'relative',
    top: 0,
    transition: 'top 0.2s',
    '&:hover': {
      top: '-10px',
    },
  },
  circleFill: theme.colors.paLink,
  icon: 'mailCircle',
};

export const IconGroup = Template2.bind({});
IconGroup.args = {
  color: theme.colors.paLinkLight,
};

export const CircledIconGroup = Template3.bind({});
CircledIconGroup.args = {
  sx: {
    position: 'relative',
    top: 0,
    transition: 'top 0.2s',
    '&:hover': {
      top: '-10px',
    },
  },
  circleFill: theme.colors.paLink,
};
