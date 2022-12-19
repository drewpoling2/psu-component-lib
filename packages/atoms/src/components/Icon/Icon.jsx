/* eslint-disable no-undef */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui';
import PropTypes from 'prop-types';
import iconPath from '@exe-psu-lib/style-engine/static/icons/iconLib';
import theme from '@exe-psu-lib/style-engine/theme';
import '@exe-psu-lib/style-engine/global.css';

/**
 * 

Use the Icon component to present your design and content as clearly and efficiently as possible.

<br>
<br>
<h3>Basic Icon</h3>
Icon component description
*/

const defaultOnClick = () => {
  console.log('No onClick assigned');
};

export const Icon = ({
  sx,
  className,
  size,
  color,
  icon,
  circleFill,
  onClick,
}) => {
  const rectDimensions = iconPath[icon].viewBox.substring(
    iconPath[icon].viewBox.indexOf(' ') + 3,
    iconPath[icon].viewBox.length - 3
  );
  return (
    <ThemeProvider theme={theme}>
      <span
        className="pointer"
        sx={{ width: `${size}px`, height: `${size}px` }}
        onClick={onClick}
      >
        <svg
          className={className}
          sx={{ ...sx }}
          viewBox={iconPath[icon].viewBox}
          width={`${size}px`}
          height={`${size}px`}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          {circleFill && (
            <rect
              width={rectDimensions}
              height={rectDimensions}
              rx={'50%'}
              ry={'50%'}
              fill={circleFill}
            />
          )}

          <path fill={color} d={iconPath[icon].path} />
        </svg>
      </span>
    </ThemeProvider>
  );
};

Icon.propTypes = {
  /**
   * Size of icon
   */
  size: PropTypes.any,

  /**
   * onClick handler for icon
   */
  onClick: PropTypes.func,

  /**
   * Color of icon
   */
  color: PropTypes.any,

  /**
   * Icon referenced from iconLib
   */
  icon: PropTypes.string.isRequired,

  /**
   * circle fill color if you want a circle around the icon
   */

  circleFill: PropTypes.any,

  /**
   * Optional extra sx props for styling using the theme object
   */
  sx: PropTypes.any,

  /**
   * Optional extra className for styling using the global.css
   */
  className: PropTypes.any,
};

Icon.defaultProps = {
  size: 64,
  color: `${theme.colors.whiteout}`,
  sx: {},
  className: '',
  onClick: defaultOnClick,
};
