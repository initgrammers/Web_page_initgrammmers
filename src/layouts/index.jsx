import Head from 'next/head';
import PropTypes from 'prop-types';
import Navigation from './AppBar';
import CustomFooter from './_Footer';

const Layout = ({ children, navigation }) => (
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
  children: PropTypes.element.isRequired,
  navigation: PropTypes.shape(),
};

Layout.defaultProps = { navigation: {} };
export default Layout;
