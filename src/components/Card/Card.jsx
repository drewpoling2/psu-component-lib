/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui';
import theme from '../../theme';
import PropTypes from 'prop-types';
import '../../global.css';
/**
 * 

Use the Card component in your ui.

<br>
<br>
<h3>Basic Card</h3>
Card description 
*/

export const Card = ({
  sx,
  children,
  variant,
  color,
  size,
  backgroundImage,
  borderRadius,
}) => {
  const cardVariants = {
    outlined: {
      border: `1px solid ${color}`,
    },
    outlinedThick: {
      border: `25px solid ${color}`,
    },
    solid: {
      backgroundColor: `${color}`,
    },
    transparent: {
      backgroundColor: 'none',
    },
  };

  const sizeObj = {
    s: { p: 3 },
    m: { p: 4 },
    lg: { p: 5 },
  };

  return (
    <ThemeProvider theme={theme}>
      {backgroundImage ? (
        <div
          className={`bg-cover bg-center bg-no-repeat rounded-${borderRadius}`}
          style={{
            backgroundImage: `linear-gradient(rgba(30, 64, 124, 0.7) 70%, rgba(39, 71, 129, 0.3)), url(${backgroundImage})`,
          }}
          sx={{
            ...sizeObj[size],
            ...cardVariants[variant],
            ...sx,
          }}
        >
          {children}
        </div>
      ) : (
        <div
          className={`rounded-${borderRadius}`}
          sx={{
            ...sizeObj[size],
            ...cardVariants[variant],
            ...sx,
          }}
        >
          {children}
        </div>
      )}
    </ThemeProvider>
  );
};

Card.propTypes = {
  /**
   * Optional extra sx props for styling using the theme object
   */
  sx: PropTypes.any,

  /**
   * Color of border or background depending on variant
   */
  color: PropTypes.string,

  /**
   * Optional background image for card
   */
  backgroundImage: PropTypes.any,

  /**
   * Card variants
   */
  variant: PropTypes.oneOf([
    'outlined',
    'solid',
    'transparent',
    'outlinedThick',
  ]),

  /**
   * Size for card padding
   */
  size: PropTypes.oneOf(['s', 'm', 'lg']),

  /**
   * Card border radius
   */
  borderRadius: PropTypes.oneOf(['none', 's', 'm', 'lg', 'xl', '2xl', '3xl']),
  children: PropTypes.any,
};

Card.defaultProps = {
  color: `${theme.colors.beaverBlue}`,
  variant: 'outlined',
  size: 'm',
  borderRadius: 'none',
};
