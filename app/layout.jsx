'use client';
import { CacheProvider } from '@emotion/react';
import { MuiThemeProvider } from '#app/shared/config/MuiThemeProvider';
import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';
import './globals.css';
import { useEffect } from 'react';
import Layout from '#Layouts/index';
import createEmotionCache from '#app/shared/config/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

export default function RootLayout({ children }) {
  // const pathname = usePathname();
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     gtag.pageview(url);
  //   };
  //   handleRouteChange();
  // }, [pathname]);

  return (
    <html lang="es">
      <head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, viewport-fit=cover, shrink-to-fit=no"
        />
        <meta
          name='emotion-insertion-point'
        >
        </meta>

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
      </head>
      <body>
        <MuiThemeProvider>
          <CacheProvider value={clientSideEmotionCache}>
            {children}
          </CacheProvider>
        </MuiThemeProvider>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
  layoutProps: PropTypes.object,
};

RootLayout.defaultProps = {
  layoutProps: {},
};
