/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Drawer as MuiDrawer } from '@mui/material';
import theme from '@exe-psu-lib/style-engine/theme';
import '@exe-psu-lib/style-engine/global.css';

/** 
 *  Use the Drawer component in your ui.

<br />
<br />
<h3>Basic Drawer</h3>
Drawer
description 
*/

export const Drawer = ({ sx, className, anchor, OpenButton, children }) => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const DrawerContent = (anchor) => (
    <div
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 250 : 400,
        height: anchor === 'top' || anchor === 'bottom' ? 250 : 400,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {children}
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <div onClick={toggleDrawer(anchor, true)}>{OpenButton}</div>
      <MuiDrawer
        sx={{ ...sx }}
        className={className}
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        {DrawerContent(anchor)}
      </MuiDrawer>
    </ThemeProvider>
  );
};

Drawer.propTypes = {
  /**
   *  Optional extra sx props for styling using the theme object
   */
  sx: PropTypes.any,

  /**
   *  Optional extra className for styling using the global.css
   */
  className: PropTypes.any,

  /**
   *  Anchor for side of drawer
   */
  anchor: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),

  /**
   *  Content inside of drawer
   */
  children: PropTypes.any,

  /**
   *  Button that opens drawer
   */
  OpenButton: PropTypes.any,
};

Drawer.defaultProps = {};
