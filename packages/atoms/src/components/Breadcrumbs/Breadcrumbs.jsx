/* eslint-disable no-undef */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui';
import React from 'react';
import theme from '@exe-psu-lib/style-engine/theme';
import PropTypes from 'prop-types';

/**
 * 

Use the Breadcrumbs component in your ui.

<br>
<br>
<h3>Basic Breadcrumbs</h3>
Breadcrumbs description 
*/

//BreacrumbItem list item wrapper
const BreadcrumbItem = ({ children, ...props }) => (
  <li {...props}>{children}</li>
);

//BreadcrumbSeparator wrapper that adds spacing around separator
const BreadcrumbSeparator = ({ children, color, ...props }) => (
  <li
    className="roboto-condensed-bold"
    sx={{
      m: 'auto 0.475rem',
      fontSize: '22px',
      userSelect: 'none',
      color: `${color}`,
    }}
    {...props}
  >
    {children}
  </li>
);

export const Breadcrumbs = ({ children, separator, color }) => {
  //automatically assigns and handles all of the key requirements to the original children for subsequent uses
  const childrenArray = React.Children.toArray(children);

  //providing a wrapper around each breadcrumb list item
  const childrenMap = childrenArray.map((child, index) => {
    return (
      <BreadcrumbItem key={`breadcrumb_item${index}`}>{child}</BreadcrumbItem>
    );
  });

  //grab the last index for the reducer
  const lastIndex = childrenMap.length - 1;

  //use a reducer to add the seperator between BreadcrumbItems
  const childrenReducer = childrenMap.reduce((acc, child, index) => {
    const notLast = index < lastIndex;
    if (notLast) {
      acc.push(
        child,
        <BreadcrumbSeparator key={`breadcrumb_sep${index}`} color={color}>
          {separator}
        </BreadcrumbSeparator>
      );
    } else {
      acc.push(child);
    }
    return acc;
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ol
        className="flex justify-between roboto-condensed-bold flex-wrap"
        sx={{
          mt: 4,
          '@media screen and (max-width: 63em)': {
            width: '100%',
          },
        }}
      >
        {childrenReducer}
      </ol>
    </ThemeProvider>
  );
};

export default Breadcrumbs;

BreadcrumbItem.propTypes = {
  /**
   * Children that go into single BreadcrumbItem
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

BreadcrumbSeparator.propTypes = {
  /**
   * Children that go into BreadcrumbSeparator
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  /**
   * Color for BreadcrumbSeparator
   */
  color: PropTypes.string,
};

Breadcrumbs.propTypes = {
  /**
   * Children that go into Breadcrumbs
   */
  separator: PropTypes.oneOf(['/', '>', '-']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  /**
   * Color for Breadcrumbs children
   */
  color: PropTypes.string,
};

Breadcrumbs.defaultProps = {
  separator: '/',
  color: `${theme.colors.paLink}`,
};
