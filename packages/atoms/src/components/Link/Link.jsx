import React from 'react';
import { withPrefix, Link as GatsbyLink } from 'gatsby';
// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
export const Link = ({
  children,
  to,
  activeClassName,
  partiallyActive,
  sx,
  className,
  ...other
}) => {
  const internal = /^\/(?!\/)/.test(to);
  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    // Generate RSS XML links as <a> tags in order to prevent prefetching.
    const rssxml = /\/rss\.xml$/.test(to);
    if (rssxml) {
      return (
        <a
          className={`${className}`}
          sx={{ ...sx }}
          href={withPrefix(to)}
          {...other}
        >
          {children}
        </a>
      );
    }

    return (
      <GatsbyLink
        to={to}
        className={`${className}`}
        sx={{ ...sx }}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    );
  }

  return (
    <a className={`${className}`} sx={{ ...sx }} href={to} {...other}>
      {children}
    </a>
  );
};
