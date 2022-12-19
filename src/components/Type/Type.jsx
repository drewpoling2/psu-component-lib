/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui';
import theme from '../../theme';
import PropTypes from 'prop-types';

/**
 * 

Use typography to present your design and content as clearly and efficiently as possible.

<br>
<br>
<h3>Basic Type</h3>
Too many type sizes and styles at once can spoil any layout. A typographic scale has a limited set of type sizes that work well together along with the layout grid.
*/

export const Type = ({ text, size, variant, sx, className }) => {
  const Variant = variant;
  return (
    <ThemeProvider theme={theme}>
      <Variant className={`${className}`} sx={{ ...sx, fontSize: `${size}` }}>
        {text}
      </Variant>
    </ThemeProvider>
  );
};

Type.propTypes = {
  /**
   *  Variant html tags
   */
  variant: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
    .isRequired,
  /**
   *  Text content
   */
  text: PropTypes.string.isRequired,
  /**
   *  Font size option
   */
  size: PropTypes.oneOf([
    'xs',
    's',
    'm',
    'lg',
    'xl',
    '2xl',
    '3xl',
    '4xl',
    '5xl',
    '6xl',
    '7xl',
    '8xl',
    '9xl',
    '10xl',
    '11xl',
  ]),
  /**
   * Optional extra sx props for styling using the theme object
   */
  sx: PropTypes.any,

  /**
   * Optional extra classes for styling using the global.css
   */
  className: PropTypes.string,
};

Type.defaultProps = {
  variant: 'p',
  text: 'Add a text prop',
  size: 'lg',
};
