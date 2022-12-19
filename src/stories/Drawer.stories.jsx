/* eslint-disable no-undef */
/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui';
import { Drawer } from '../components/Drawer';
import { Stack } from '../components/Stack';
import { Type } from '../components/Type';
import theme from '../theme';
const component = Drawer;

const contentArray = [
  { text: 'Smeal College of Business' },
  { text: 'Faculty and Staff' },
  { text: 'Business and industry' },
  { text: 'Alumni' },
  { text: 'University Park' },
  { text: 'Research' },
  { text: 'Academics' },
  { text: 'Faculty Achievement' },
];

export default {
  title: component.name || component.displayName || 'undefined component name',
  component: component,
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Stack spacing={'lg'}>
      {['left', 'right', 'top', 'bottom'].map((anchor, i) => (
        <Drawer
          key={i}
          anchor={anchor}
          OpenButton={<p className="capitalize pointer">{anchor}</p>}
          {...args}
        >
          <Stack sx={{ pl: 3 }} direction={'col'}>
            <Type
              className="uppercase"
              variant="p"
              sx={{ fontSize: '16px' }}
              text="Find information for"
            />
            {contentArray.map(({ to, text, index }) => (
              <Type
                className="pointer"
                variant="p"
                text={text}
                sx={{
                  fontSize: '25px',
                  color: 'endlessPotential',
                  py: 1,
                  m: 0,
                }}
                key={`chip-${index}`}
                to={to}
                {...args}
              />
            ))}
          </Stack>
        </Drawer>
      ))}
    </Stack>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
