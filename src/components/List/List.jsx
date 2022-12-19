/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui';
import theme from '../../theme';
import PropTypes from 'prop-types';
import '../../global.css';

/**
 * 

Use the List component to present your design and content as clearly and efficiently as possible.

<br>
<br>
<h3>Basic List</h3>
List component description
*/

export const List = ({ sx }) => {
  return (
    <ThemeProvider theme={theme}>
      <div sx={{ ...sx }}>This is the List component</div>
    </ThemeProvider>
  );
};

List.propTypes = {
  /**
   * Optional extra sx props for styling using the theme object
   */
  sx: PropTypes.any,
};

List.defaultProps = {};
