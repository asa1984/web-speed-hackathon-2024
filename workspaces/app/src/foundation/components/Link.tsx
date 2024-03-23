import { Link as ReactRouterLink, type LinkProps } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  href?: string;
  to?: string;
} & LinkProps;

export const Link: React.FC<Props> = ({ children, href, to, ...rest }) => {
  return (
    <ReactRouterLink to={to ?? href} {...rest}>
      {children}
    </ReactRouterLink>
  );
};
