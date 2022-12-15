/** @jsx jsx */
import { jsx } from 'theme-ui';
import theme from '../../theme';
import PropTypes from 'prop-types';
import { Type } from '../Type';
const colors = theme.colors;

export const Divider = ({ orientation, variant, color, extraSx }) => {
  //const sizeObj = { s: '60%', m: '80%', lg: '100%' };
  const orientationObj = {
    vertical: {
      width: '100%',
      //height: `${sizeObj[size]}`,
      height: '100%',
      borderRight: `2px ${variant} ${color}`,
    },
    horizontal: {
      //width: `${sizeObj[size]}`,
      width: '100%',
      height: '100%',
      borderBottom: `2px ${variant} ${color}`,
    },
  };
  const sxVar = orientationObj[orientation];

  return (
    <div className="flex justify-center">
      <div sx={{ ...extraSx, ...sxVar }}></div>
    </div>
  );
};

Divider.propTypes = {
  /**
   * Orientation for divider
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),

  /**
   * Variant options
   */
  variant: PropTypes.oneOf(['dotted', 'dashed', 'solid']),

  //   /**
  //    * Size options
  //    */
  //   size: PropTypes.oneOf(['s', 'm', 'lg']),

  /**
   * Divider color
   */

  color: PropTypes.string,

  /**
   * Optional extra sx props for styling using the theme object
   */
  extraSx: PropTypes.any,
};

Divider.defaultProps = {
  orientation: 'horizontal',
  variant: 'solid',
  //size: 'lg',
  color: `${colors.endlessPotential}`,
};
