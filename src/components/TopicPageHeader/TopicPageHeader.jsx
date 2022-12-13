/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import React from 'react';
import { graphql } from 'gatsby';
import theme from '../../theme';

export const TopicPageHeader = ({
  topicPageHeaderText,
  topicPageHeaderTitle,
}) => {
  return (
    <Container>
      <div
        className="flex-col"
        sx={{
          py: 4,
          '@media screen and (max-width: 64em)': {
            px: 4,
          },
        }}
      >
        <h1
          sx={{
            borderBottom: `1px solid ${theme.colors.slate}`,
            fontSize: '6xl',
            fontFamily: 'roboto-slab-var',
            pb: '28px',
            lineHeight: '2rem',
            color: 'nittanyNavy',
            whiteSpace: 'pre-line',
          }}
        >
          {topicPageHeaderTitle}
        </h1>

        <p
          sx={{
            fontFamily: 'roboto-regular',
            fontSize: 'lg',
            color: 'oldCoaly',
            m: 0,
          }}
        >
          {topicPageHeaderText}
        </p>
      </div>
    </Container>
  );
};

export const query = graphql`
  fragment HomepageParagraphSummaryContent on HomepageParagraphSummary {
    paragraphSummarySubtitle
    paragraphSummaryAuthor
    paragraphSummaryText
    blocktype
  }
`;
