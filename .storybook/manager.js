import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import canvasTheme from './CanvasTheme';

addons.setConfig({
  theme: canvasTheme,
});
