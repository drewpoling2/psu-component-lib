/** @jsx jsx */
import { jsx } from 'theme-ui';
import theme from '../../theme';
import PropTypes from 'prop-types';

const colors = theme.colors;

export const Divider = ({ orientation, variant, color }) => {
  //const sizeArray = { s: '60%', m: '80%', lg: '100%' };
  const orientationArray = {
    vertical: {
      width: '100%',
      //height: `${sizeArray[size]}`,
      height: '100%',
      borderRight: `2px ${variant} ${color}`,
    },
    horizontal: {
      //width: `${sizeArray[size]}`,
      width: '100%',
      height: '100%',
      borderBottom: `2px ${variant} ${color}`,
    },
  };
  const sxVar = orientationArray[orientation];

  return (
    <div className="flex justify-center">
      <div
        sx={{
          ...sxVar,
        }}
      ></div>
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
   * Optional sx props for styling using the theme object
   */
  sxProps: PropTypes.any,
};

Divider.defaultProps = {
  orientation: 'horizontal',
  variant: 'solid',
  //size: 'lg',
  color: `${colors.endlessPotential}`,
};
