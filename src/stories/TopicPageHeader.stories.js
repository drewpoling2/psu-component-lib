import React from 'react';
import { storiesOf } from '@storybook/react';
import { TopicPageHeader } from '../components/TopicPageHeader';
import './styles.css';
import '../global.css';
const stories = storiesOf('TopicPageHeader', module);

stories.add('Default', () => {
  return (
    <div className="flex ">
      <div className="full-w-view-box">
        <TopicPageHeader
          topicPageHeaderText={
            "We'd love to hear from you. Use our contact form to send us your thoughts, questions, or comments."
          }
          topicPageHeaderTitle={'Contact us'}
        />
      </div>
    </div>
  );
});
