/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui';
import theme from '../../theme';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import '../../global.css';

/** * Box ui component 
<br>
<br>
<h3>Basic Box</h3>
Box description */

export const Box = ({ extraSx }) => {
  return (
    <ThemeProvider theme={theme}>
      <div sx={{ extraSx }}>This is the Box component</div>
    </ThemeProvider>
  );
};

Box.propTypes = {
  /** * Optional extra sx props for styling using the theme object */
  extraSx: PropTypes.any,
};

Box.defaultProps = {};

export const query = graphql``;
