import { Link as GatsbyLink } from 'gatsby';
import React from 'react';

import type { AnchorHTMLAttributes, FC, ReactNode } from 'react';


interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  to: string;
  partiallyActive?: boolean;
  activeClassName?: string;
}

// set up of Link component based on Documentation: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/

const Link: FC<LinkProps> = ({
  children,
  to,
  activeClassName,
  partiallyActive,
  ...other
}) => {
  const internal = /^\/(?!\/)/.test(to);

  if (internal) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    );
  }
  
return (
    <a href={to} {...other}>
      {children}
    </a>
  );
};

export default Link;
