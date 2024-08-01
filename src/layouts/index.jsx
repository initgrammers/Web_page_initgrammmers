import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';

const Navigation = dynamic(() => import('./AppBar'));
const CustomFooter = dynamic(() => import('./Footer'));

const Layout = ({ children }) => (
  <>
    <Navigation />
    <main>{children}</main>
    <CustomFooter />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
