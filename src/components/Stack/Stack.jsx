/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx, ThemeProvider } from 'theme-ui';
import theme from '../../theme';
import PropTypes from 'prop-types';
import '../../global.css';

/**
 * 

Use the Stack component in your ui.

<br>
<br>
<h3>Basic Stack</h3>
Stack description 
*/

export const Stack = ({
  sx,
  className,
  direction,
  alignItems,
  justifyContent,
  children,
  divider,
  spacing,
}) => {
  const spacingObj = {
    s: { p: 1 },
    m: { p: 12 },
    lg: { p: 2 },
    xl: { p: 3 },
  };

  //automatically assigns and handles all of the key requirements to the original children for subsequent uses
  const childrenArray = React.Children.toArray(children);

  //providing a wrapper around each breadcrumb list item
  const childrenMap = childrenArray.map((child, index) => {
    if (
      justifyContent !== 'between' ||
      justifyContent !== 'around' ||
      justifyContent !== 'evently'
    ) {
      return (
        <span sx={{ ...spacingObj[spacing] }} key={`stack-item${index}`}>
          {child}
        </span>
      );
    } else return <span key={`stack-item${index}`}>{child}</span>;
  });

  //grab the last index for the reducer
  const lastIndex = childrenMap.length - 1;

  //use a reducer to add the seperator between BreadcrumbItems
  const childrenReducer = childrenMap.reduce((acc, child, index) => {
    const notLast = index < lastIndex;
    if (
      justifyContent !== 'between' ||
      justifyContent !== 'around' ||
      justifyContent !== 'evently'
    ) {
      if (notLast) {
        acc.push(
          child,
          <span id={index} key={`stack-sep${index}`}>
            {divider && divider}
          </span>
        );
      } else {
        acc.push(child);
      }
    } else {
      if (notLast) {
        acc.push(
          child,
          <span
            sx={{ width: 'fit-content', height: 'fit-content' }}
            key={`stack-sep${index}`}
          >
            {divider && divider}
          </span>
        );
      } else {
        acc.push(child);
      }
    }
    return acc;
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div
        sx={{ ...sx }}
        className={`flex-wrap flex-${direction} items-${alignItems} justify-${justifyContent} ${className}`}
      >
        {childrenReducer}
      </div>
    </ThemeProvider>
  );
};

Stack.propTypes = {
  /**
   * Optional extra sx props for styling using the theme object
   */
  sx: PropTypes.any,

  /**
   * Optional extra classes for styling using the global.css
   */
  className: PropTypes.any,

  /**
   * Direction of stack
   */
  direction: PropTypes.oneOf(['row', 'row-reverse', 'col', 'col-reverse']),

  /**
   * Align items
   */
  alignItems: PropTypes.oneOf([
    'start',
    'center',
    'end',
    'stretch',
    'baseline',
  ]),

  /**
   * Justify content
   */
  justifyContent: PropTypes.oneOf([
    'start',
    'center',
    'end',
    'between',
    'around',
    'evenly',
  ]),

  /**
   * Spacing between children
   */
  spacing: PropTypes.oneOf(['s', 'm', 'lg', 'xl']),

  /**
   * Optional divider
   */
  divider: PropTypes.oneOf(['solid', 'dotted', 'dashed']),
  children: PropTypes.any,
};

Stack.defaultProps = { direction: 'row' };
