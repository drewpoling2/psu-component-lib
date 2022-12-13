import { themes } from '@storybook/theming';
import previewTheme from './PreviewTheme';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    theme: previewTheme,
  },
};
