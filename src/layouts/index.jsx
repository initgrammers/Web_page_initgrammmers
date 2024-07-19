import Head from 'next/head';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';

const Navigation = dynamic(() => import('./AppBar'));
const CustomFooter = dynamic(() => import('./Footer'));

const Layout = ({ children, navigation = {} }) => (
  <>
    <Head>
      <title>InitGrammers</title>
    </Head>
    <Navigation index={navigation?.index} />
      <main>{children}</main>
    <CustomFooter />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  navigation: PropTypes.shape(),
};

export default Layout;
