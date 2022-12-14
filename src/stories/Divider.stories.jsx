/** @jsx jsx */
import { Divider } from '../components/Divider';
import './styles.css';
import '../global.css';
import theme from '../theme';
import { jsx, ThemeProvider } from 'theme-ui';
export default {
  title: 'Divider',
  component: Divider,
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    {args.orientation && args.orientation === 'horizontal' && (
      <div className="flex-col" sx={{ minWidth: '45vw' }}>
        <h1 sx={{ mb: 3 }}>Heading</h1>
        <Divider {...args} />
      </div>
    )}
    {args.orientation && args.orientation === 'vertical' && (
      <div className="flex-row">
        <h2 sx={{ m: 0, p: 2 }}>Menu Item</h2>
        <Divider {...args} />
        <h2 sx={{ m: 0, p: 2 }}>Menu Item</h2>
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
