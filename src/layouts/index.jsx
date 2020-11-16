import Head from 'next/head';
import PropTypes from 'prop-types';
import Navigation from './AppBar';
import CustomFooter from './_Footer';

const Layout = ({ children, navigation }) => (
  <div>
    <Head>
      <title>InitGrammers</title>
      <link href="/fonts/Raleway/fonts.css" rel="stylesheet" />
    </Head>
    <Navigation index={navigation?.index} />
    <main>{children}</main>
    {/* <CustomFooter /> */}
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  navigation: PropTypes.shape(),
};

Layout.defaultProps = { navigation: {} };
export default Layout;
