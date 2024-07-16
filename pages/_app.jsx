import { useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import NextNprogress from 'nextjs-progressbar';
import theme from '../theme/index';
import { appWithTranslation } from 'next-i18next'
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
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin="true"
        />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com/" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link rel="dns-prefetch" href="https://initgrammers.com" />
        <link
          rel="preconnect"
          href="https://initgrammers.com"
          crossOrigin="true"
        />

        <link rel="dns-prefetch" href="https://res.cloudinary.com/" />
        <link
          rel="preconnect"
          href="https://res.cloudinary.com/"
          crossOrigin="true"
        />

        <link rel="dns-prefetch" href="https://cdn.calconic.com/" />
        <link
          rel="preconnect"
          href="https://cdn.calconic.com/"
          crossOrigin="true"
        />

        <link rel="dns-prefetch" href="https://www.googletagmanager.com/" />
        <link
          rel="preconnect"
          href="https://www.googletagmanager.com/"
          crossOrigin="true"
        />

        <link rel="dns-prefetch" href="https://www.google-analytics.com/" />
        <link
          rel="preconnect"
          href="https://www.google-analytics.com/"
          crossOrigin="true"
        />

        <link rel="dns-prefetch" href="https://connect.facebook.net/" />
        <link
          rel="preconnect"
          href="https://connect.facebook.net/"
          crossOrigin="true"
        />

        <link
          rel="preconnect"
          href="https://fonts.googleapis.com/"
          crossOrigin="true"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com/" />
      </Head>
      <ThemeProvider theme={theme}>
        <FacebookPixel>
          {/* <HeatMap> */}
          <Layout {...layoutProps}>
            <>
              <CssBaseline />
              <Component {...restPageProps} />
            </>
          </Layout>
          {/* </HeatMap> */}
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
export default appWithTranslation(MyApp);
