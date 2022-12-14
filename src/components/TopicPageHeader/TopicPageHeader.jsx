/** @jsx jsx */
import { jsx, Container, ThemeProvider } from 'theme-ui';
import { graphql } from 'gatsby';
import theme from '../../theme';
import PropTypes from 'prop-types';
import Divider from '../Divider/Divider';
export const TopicPageHeader = ({
  topicPageHeaderText,
  topicPageHeaderTitle,
}) => {
  const colors = theme.colors;
  return (
    <ThemeProvider theme={theme}>
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
              borderBottom: `1px solid ${colors.slate}`,
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
    </ThemeProvider>
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

TopicPageHeader.propTypes = {
  /**
   * Placeholder value for TextField
   */
  topicPageHeaderText: PropTypes.string,

  /**
   * Variant options
   */
  topicPageHeaderTitle: PropTypes.string,
};

TopicPageHeader.defaultProps = {};
