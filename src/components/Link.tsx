type LinkProps = {
  children: string;
  className: string;
};
export const Link = ({ children, className }: LinkProps): JSX.Element => (
  <a href="">{children}</a>
);
