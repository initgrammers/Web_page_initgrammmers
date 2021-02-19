import PropTypes from 'prop-types';
import Link from 'next/link';
import { forwardRef } from 'react';

const CustomLink = forwardRef(({ children, href }, ref) => (
  <Link href={href}>
    <a>{children}</a>
  </Link>
));
CustomLink.propTypes = {
  children: PropTypes.element,
  href: PropTypes.string,
};
CustomLink.defaultProps = {
  children: '',
  href: '#',
};
export default CustomLink;
