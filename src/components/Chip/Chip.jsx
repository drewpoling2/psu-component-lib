/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui';
import theme from '../../theme';
import PropTypes from 'prop-types';
import '../../global.css';
import { Link } from '../Link';
/**
 * 

Use the Chip component in your ui.

<br>
<br>
<h3>Basic Chip</h3>
Chip description 
*/

export const Chip = ({
  onClick,
  variant = 'default',
  text = 'Add a text prop',
  disabled,
  to,
  props,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Link
        className={disabled ? 'disabled' : ''}
        onClick={onClick}
        disabled={disabled}
        to={to}
        {...props}
        sx={{
          width: 'fit-content',
          height: 'fit-content',
          cursor: 'pointer',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row',
          textDecoration: 'none',
          variant: `chips.${variant}`,
        }}
      >
        <span
          className={disabled ? 'disabled' : ''}
          sx={{ fontSize: '18px !important', variant: 'text.chip' }}
        >
          {text}
        </span>
      </Link>
    </ThemeProvider>
  );
};

Chip.propTypes = {
  /**
   * String representing href or external link for routing
   */
  to: PropTypes.string,
  /**
   * Chip variants
   */
  variant: PropTypes.oneOf(['default']),
  /**
   * Chip contents
   */
  text: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Optional disabled state
   */
  disabled: PropTypes.bool,
  /**
   * Optional props
   */
  props: PropTypes.any,
};

Chip.defaultProps = {
  variant: 'default',
  text: 'Chip',
};
