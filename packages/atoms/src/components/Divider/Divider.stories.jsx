/** @jsx jsx */
import { Divider } from './Divider';
import { jsx, ThemeProvider } from 'theme-ui';
import theme from '@exe-psu-lib/style-engine/theme';
import '@exe-psu-lib/style-engine/global.css';
export default {
  title: 'Divider',
  component: Divider,
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    {args.orientation && args.orientation === 'horizontal' && (
      <div className="flex-col" sx={{ minWidth: '45vw' }}>
        <h1 sx={{ mb: 3, color: 'endlessPotential' }}>Heading</h1>
        <Divider {...args} />
      </div>
    )}
    {args.orientation && args.orientation === 'vertical' && (
      <div className="flex-row">
        <h2 sx={{ color: 'endlessPotential', m: 0, p: 2 }}>Menu Item</h2>
        <Divider {...args} />
        <h2 sx={{ color: 'endlessPotential', m: 0, p: 2 }}>Menu Item</h2>
      </div>
    )}
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  orientation: 'horizontal',
  variant: 'solid',
  color: theme.colors.endlessPotential,
};
