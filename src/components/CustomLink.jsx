import PropTypes from 'prop-types';
import Link from 'next/link';
import { forwardRef } from 'react';

const CustomLink = forwardRef(({ children = '', href = '#' }, ref) => (
  <Link href={href} passHref legacyBehavior>
    <a ref={ref}>{children}</a>
  </Link>
));
CustomLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
};
export default CustomLink;
