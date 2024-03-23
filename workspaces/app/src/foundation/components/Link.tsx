import React from 'react';
import { Link as ReactRouterLink, type LinkProps } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  href: string;
} & LinkProps;

export const Link: React.FC<Props> = ({ children, href, ...rest }) => {
  return (
    <ReactRouterLink to={href} {...rest}>
      {children}
    </ReactRouterLink>
  );
};
