/* eslint-disable no-undef */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Stack } from '../Stack';
import theme from '@exe-psu-lib/style-engine/theme';
import '@exe-psu-lib/style-engine/global.css';

/** * Use the
Select
component in your ui.

<br />
<br />
<h3>Basic Select</h3>
Select
description */

//BreadcrumbSeparator wrapper that adds spacing around separator
const ListItem = ({ children, onClick, ...props }) => (
  <li onClick={onClick} sx={{ py: '0.55rem', px: '1.375rem' }} {...props}>
    {children}
  </li>
);

export const Select = ({
  sx,
  className,
  children,
  placeHolder,
  Icon,
  Divider,
}) => {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleOpen = (event) => {
    event.stopPropagation;
    setOpened(!opened);
  };

  const handleChange = (event) => {
    event.stopPropagation;
    setSelected(event.target.value);
    setOpened(!opened);
  };

  //automatically assigns and handles all of the key requirements to the original children for subsequent uses
  const childrenArray = React.Children.toArray(children);

  //grab the last index for the childrenMap
  const lastIndex = childrenArray.length - 1;

  //providing a wrapper around each select list item
  const childrenMap = childrenArray.map((child, index) => {
    const notLast = index < lastIndex;
    return (
      <>
        <ListItem onClick={handleChange} key={`list_item${index}`}>
          {child}
        </ListItem>
        {Divider && notLast && Divider}
      </>
    );
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <div
          id={'select'}
          onClick={handleOpen}
          className={`${className} text-left pointer`}
          sx={{
            ...sx,
            border: `1px solid ${theme.colors.oldCoaly}`,
            borderRadius: '30px',
            fontFamily: 'roboto-bold',
            color: `${theme.colors.endlessPotential}`,
            fontSize: '1.063rem',
            lineHeight: '24px',
            boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.16)',
          }}
        >
          <span
            sx={{ py: '0.55rem', px: '1.375rem' }}
            className="flex-row items-center justify-between relative"
          >
            {console.log(selected)}
            {selected ? selected : placeHolder}
            {Icon && Icon}
          </span>
          {opened && (
            <ol
              className="absolute"
              sx={{
                p: 0,
                m: 0,
                maxHeight: '250px',
                transition: '0.4s height',
                borderRadius: '22px',
              }}
            >
              <Stack direction={'col'} className="relative">
                {Divider && Divider}
                {childrenMap}
              </Stack>
            </ol>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
};

Select.propTypes = {
  /**
   * Optional sx props for styling using the theme object
   */

  sx: PropTypes.any,

  /**
   * Optional classes for styling using the global.css
   */
  className: PropTypes.any,

  /**
   * Required placeholder select component
   */
  placeHolder: PropTypes.any.isRequired,

  /**
   * children
   */
  children: PropTypes.any.isRequired,

  /**
   * optional Icon component
   */
  Icon: PropTypes.any,
};

Select.defaultProps = {};
