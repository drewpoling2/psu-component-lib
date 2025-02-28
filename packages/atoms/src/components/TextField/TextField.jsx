/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui';
import { useState } from 'react';
import PropTypes from 'prop-types';
import theme from '@exe-psu-lib/style-engine/theme';
import '@exe-psu-lib/style-engine/global.css';

/**
 * 

Text Fields let users enter and edit text. They allow users to enter text into a UI. They typically appear in forms and dialogs.

<br>
<br>
<h3>Basic TextField</h3>
The TextField wrapper component is a complete form control including a placeholder, input, and size option. It comes with three variants: outlined , filled (default), and standard.

*/

export const TextField = ({
  placeholder,
  variant,
  size,
  disabled,
  required,
}) => {
  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const baseSx = {
    variant: `textFields.${variant}`,
    '&:focus': {
      borderColor: 'limestoneLight',
      backgroundColor: 'whiteout',
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;',
      outline: 'none',
    },
  };

  const sizeObj = {
    s: { p: 2, fontSize: 's', ...baseSx },
    m: { p: 3, fontSize: 'm', ...baseSx },
    lg: { p: 4, fontSize: 'lg', ...baseSx },
  };

  const sxVar = sizeObj[size];

  return (
    <ThemeProvider theme={theme}>
      {required && (
        <div className="flex-row">
          <p sx={{ fontSize: 'xs', m: 0, color: 'mediumGray' }}>Required </p>
          <p sx={{ fontSize: 'xs', m: 0, color: 'mediumGray' }}>&nbsp;*</p>
        </div>
      )}
      <input
        className={disabled ? 'disabled' : ''}
        sx={sxVar}
        placeholder={placeholder}
        disabled={disabled}
        type="text"
        value={text}
        required={required}
        onChange={handleChange}
      />
    </ThemeProvider>
  );
};

TextField.propTypes = {
  /**
   * Placeholder value for TextField
   */
  placeholder: PropTypes.string,

  /**
   * Variant options
   */
  variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),

  /**
   * Size options
   */
  size: PropTypes.oneOf(['s', 'm', 'lg']),

  /**
   * Optional disabled state
   */
  disabled: PropTypes.bool,

  /**
   * Optional required styling & specifies input field must be filled out before submitting
   */
  required: PropTypes.bool,
};

TextField.defaultProps = {
  variant: 'filled',
  placeholder: 'Placeholder',
  size: 'm',
};
