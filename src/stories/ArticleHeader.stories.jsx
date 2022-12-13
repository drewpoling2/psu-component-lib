import React from 'react';
import { storiesOf } from '@storybook/react';
import { ArticleHeader } from '../components/ArticleHeader';
import './styles.css';

const stories = storiesOf('Article Header', module);

stories.add('Default', () => {
  return (
    <div className="view-box">
      <ArticleHeader
        articleHeaderTitle={
          'Protecting pollinators: Penn State working to reverse bee population declines'
        }
        articleHeaderSubtitle={
          'Penn State’s Christina Grozinger and the Center for Pollinator Research are implementing creative approaches to protecting bee populations in Pennsylvania and beyond.'
        }
        articleHeaderTopic={'RESEaRCH'}
      />
    </div>
  );
});
stories.add('Topic & Title', () => {
  return (
    <div className="view-box">
      <ArticleHeader
        articleHeaderTitle={
          'Protecting pollinators: Penn State working to reverse bee population declines'
        }
        articleHeaderTopic={'RESEaRCH'}
      />
    </div>
  );
});
stories.add('Title & Subtitle', () => {
  return (
    <div className="view-box">
      <ArticleHeader
        articleHeaderTitle={
          'Protecting pollinators: Penn State working to reverse bee population declines'
        }
        articleHeaderSubtitle={
          'Penn State’s Christina Grozinger and the Center for Pollinator Research are implementing creative approaches to protecting bee populations in Pennsylvania and beyond.'
        }
      />
    </div>
  );
});
