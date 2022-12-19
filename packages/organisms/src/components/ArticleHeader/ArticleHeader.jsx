/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, ThemeProvider } from 'theme-ui';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import theme from '@exe-psu-lib/style-engine/theme';
import '@exe-psu-lib/style-engine/global.css';

export const ArticleHeader = ({
  articleHeaderTitle,
  articleHeaderSubtitle,
  articleHeaderTopic,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <div
          className="flex-col items-center"
          sx={{
            py: 4,
            '@media screen and (max-width: 64em)': {
              px: 4,
            },
          }}
        >
          {articleHeaderTopic && (
            <h4
              className="uppercase"
              sx={{
                color: 'paLink',
                mb: '3.5rem',
                pb: 14,
                fontSize: '1.125rem',
                letterSpacing: '.54px',
                borderBottom: `1px solid ${theme.colors.nittanyNavy}`,
              }}
            >
              {articleHeaderTopic}
            </h4>
          )}
          <h1
            className="text-center"
            sx={{
              variant: 'text.slabH1',
              color: 'nittanyNavy',
              whiteSpace: 'pre-line',
              mb: '2rem',
            }}
          >
            {articleHeaderTitle}
          </h1>
          {articleHeaderSubtitle && (
            <p
              className="text-center italic"
              sx={{
                fontFamily: 'roboto-bold',
                fontSize: 'xl',
                color: 'nittanyNavy',
                mb: '3.5rem',
                lineHeight: '1.625rem',
                mt: '0rem',
              }}
            >
              {articleHeaderSubtitle}
            </p>
          )}
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

ArticleHeader.propTypes = {
  articleHeaderTitle: PropTypes.string.isRequired,
  articleHeaderSubtitle: PropTypes.string,
  articleHeaderTopic: PropTypes.string,
};
