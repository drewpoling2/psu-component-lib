/* eslint-disable no-undef */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Card } from './Card';
import { Type } from '../Type';
import { ThemeProvider } from 'theme-ui';
import { Divider } from '../Divider';
import { Link } from '../Link';
import theme from '@exe-psu-lib/style-engine/theme';
import '@exe-psu-lib/style-engine/global.css';

const component = Card;

export default {
  title: component.name || component.displayName || 'undefined component name',
  component: component,
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Card sx={{ maxWidth: '300px' }} {...args}>
      <Type sx={{ m: 0 }} variant={'h1'} size={'10xl'} text="96%" />
      <Divider sx={{ my: 2 }} />
      <Type
        variant={'p'}
        sx={{
          mt: 0,
          mb: 0,
          lineHeight: '27px',
        }}
        text="Within six months of graduation, 96% of students found employment or placement in graduate programs, military service, or fellowships"
      />
    </Card>
  </ThemeProvider>
);

const Template2 = (args) => (
  <ThemeProvider theme={theme}>
    <Card sx={{ maxWidth: '350px' }} {...args}>
      <Type
        sx={{ m: 0, color: 'whiteout' }}
        variant={'h1'}
        size={'6xl'}
        text="Weather can be extreme in some places but not in all places."
      />
    </Card>
  </ThemeProvider>
);

const Template3 = (args) => (
  <ThemeProvider theme={theme}>
    <div className="flex align-center justify-center items-center">
      <Link to="https://www.psu.edu/">
        <Card {...args}>
          <div
            sx={{
              height: '275px',
              backgroundImage:
                'url(https://images.unsplash.com/photo-1429552077091-836152271555?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE4NzcwNTAz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500)',
            }}
          />
          <Type
            className="uppercase hover-underline decoration-none"
            sx={{
              mt: '48px',
              mb: 0,
              fontSize: '18px',
              color: 'paLinkLight',
            }}
            variant={'h1'}
            text="Impact"
          />
          <div
            sx={{
              borderBottom: '1px solid white',
              width: '9%',
              my: '22px',
            }}
          ></div>
          <Type
            className="italic hover-underline"
            sx={{
              m: 0,
              width: '350px',
              color: 'whiteout',
              lineHeight: '33px',
              letterSpacing: 'normal',
            }}
            variant={'h3'}
            size={'4xl'}
            text="Scientists find evidence of 27 new viruses in bees"
          />
        </Card>
      </Link>
    </div>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  color: `${theme.colors.beaverBlue}`,
  variant: 'outlined',
};

export const BackgroundImageCard = Template2.bind({});
BackgroundImageCard.args = {
  color: `${theme.colors.beaverBlue}`,
  variant: 'transparent',
  backgroundImage:
    'https://images.unsplash.com/photo-1429552077091-836152271555?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE4NzcwNTAz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500',
};

export const ImageCardLink = Template3.bind({});
ImageCardLink.args = {
  color: `${theme.colors.beaverBlue}`,
  variant: 'solid',
};
