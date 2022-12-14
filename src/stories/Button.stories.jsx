import React from 'react';
import { Button } from '../components/Button';
import './styles.css';
import '../global.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  variant: 'default',
  text: 'Button',
};

export const OutlinedNavSecondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OutlinedNavSecondary.args = {
  variant: 'outlinedNavSecondary',
  text: 'Button',
};
export const Hotline = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Hotline.args = {
  variant: 'hotline',
  text: 'Button',
};
// stories.add('Default', () => {
//   return (
//     <div className="flex items-center justify-center">
//       <div className="light-view-box">
//         <Button text="Submit" variant="default" />
//       </div>
//     </div>
//   );
// });
// stories.add('Hotline', () => {
//   return (
//     <div className="flex items-center justify-center">
//       <div className="light-view-box">
//         <Button text="Submit" variant="hotline" />
//       </div>
//     </div>
//   );
// });
// stories.add('Outlined', () => {
//   return (
//     <div className="flex items-center justify-center">
//       <div className="navy-view-box">
//         <Button text="Submit" variant="outlined" />
//       </div>
//     </div>
//   );
// });
// stories.add('OutlinedNav', () => {
//   return (
//     <div className="flex items-center justify-center">
//       <div className="navy-view-box">
//         <Button text="Submit" variant="outlinedNav" />
//       </div>
//     </div>
//   );
// });
// stories.add('OutlinedNavSecondary', () => {
//   return (
//     <div className="flex items-center justify-center">
//       <div className="light-view-box">
//         <Button text="Submit" variant="outlinedNavSecondary" />
//       </div>
//     </div>
//   );
// });
