import { create } from '@storybook/theming';
import theme from './theme';

export default create({
  base: 'dark',

  colorPrimary: theme.colors.creek,
  colorSecondary: theme.colors.beaverBlue,

  // UI
  appBg: theme.colors.nittanyNavy,
  appContentBg: '#EFF2F5',
  appBorderColor: theme.colors.limestoneMaxLight,
  appBorderRadius: 3,

  // Typography
  fontBase: '"Roboto", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: theme.colors.oldCoaly,
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: theme.colors.limestone,
  barSelectedColor: theme.colors.oldCoaly,
  barBg: theme.colors.whiteout,

  // Form colors
  inputBg: theme.colors.whiteout,
  inputBorder: theme.colors.limestoneLight,
  inputTextColor: theme.colors.oldCoaly,
  inputBorderRadius: 3,

  brandTitle: 'PSU gatsby&contentful storybook',
  brandUrl: 'https://www.psu.edu/',
  brandImage: 'https://www.psu.edu/psu-edu-assets/images/shared/psu-mark.svg',
  brandTarget: '_self',
});
