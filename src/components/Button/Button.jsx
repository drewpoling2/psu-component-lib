/** @jsx jsx */
import Link from '../Link/Link';
import { jsx, ThemeProvider } from 'theme-ui';
import theme from '../../theme';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */

export const Button = ({
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
          variant: `buttons.${variant}`,
        }}
      >
        <span sx={{ variant: 'text.button' }}>{text}</span>
      </Link>
    </ThemeProvider>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
