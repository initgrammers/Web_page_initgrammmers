import { useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import NextNprogress from 'nextjs-progressbar';
import theme from '../theme/index';
import '../src/assets/css/globals.css';
import * as gtag from '#app/lib/gtag';
import FacebookPixel from '#Components/FacebookPixel';
import HeatMap from '#Components/HeatMap';

const NoLayout = ({ children }) => children;

const MyApp = ({ Component, pageProps }) => {
  const { layoutProps, ...restPageProps } = pageProps;
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const Layout = Component.layout || NoLayout;

  return (
    <>
      <NextNprogress height={6} color={theme.palette.primary.main} />

      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, viewport-fit=cover, shrink-to-fit=no"
        />
        <link
          rel="preload"
          href="/fonts/Raleway/Raleway-Regular.woff2"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Raleway/Raleway-Medium.woff2"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Raleway/Raleway-SemiBold.woff2"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Raleway/Raleway-Bold.woff2"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="/fonts/Raleway/fonts.css"
          media="print"
          onLoad="this.media='all'"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <FacebookPixel>
          <HeatMap>
            <Layout {...layoutProps}>
              <>
                <CssBaseline />
                <Component {...restPageProps} />
              </>
            </Layout>
          </HeatMap>
        </FacebookPixel>
      </ThemeProvider>
    </>
  );
};

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape(),
};
MyApp.defaultProps = {
  pageProps: {},
};
export default MyApp;
