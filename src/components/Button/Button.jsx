/** @jsx jsx */
import Link from '../Link/Link';
import { jsx, ThemeProvider } from 'theme-ui';
import theme from '../../theme';
import PropTypes from 'prop-types';

/**
 * Buttons allow users to take actions, and make choices, with a single tap.
 * They communicate actions that users can take. They are typically placed throughout your UI, in places like:

<li>Modal windows</li>
<li>Forms</li>
<li>Cards</li>
<li>Toolbars</li>
<br>
<br>
<h3>Basic Button</h3>
The Button comes with three variants: default, outlinedNavSecondary, and hotline.
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
   * String representing href or external link for routing
   */
  to: PropTypes.string,
  /**
   * What variant should the button be?
   */
  variant: PropTypes.oneOf(['default', 'hotline', 'outlinedNavSecondary']),
  /**
   * Button contents
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

Button.defaultProps = {
  variant: 'default',
  text: 'Button',
};
