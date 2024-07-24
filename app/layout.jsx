'use client';
import { CacheProvider } from '@emotion/react';
import { MuiThemeProvider } from '#app/shared/config/MuiThemeProvider';
import NextNProgress from 'next-nprogress';
import PropTypes from 'prop-types';
import './globals.css';
import { useEffect } from 'react';
import { appWithTranslation } from 'next-i18next'
import createEmotionCache from '#app/shared/config/createEmotionCache';
import { GA_TRACKING_ID } from '#app/lib/gtag';
import { FB_PIXEL_ID } from '#app/lib/facebookPixel';
import { GoogleAnalytics } from '@next/third-parties/google';
import FacebookPixel from '#Components/FacebookPixel';

const clientSideEmotionCache = createEmotionCache();

export default function RootLayout({ children }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

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
        <link rel="icon" href="/favicon.ico" sizes="any" />
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', ${FB_PIXEL_ID});
              `,
          }}
        />
        <noscript>
          <img
            height="1"
            alt="facebook pixel"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
      </head>
      <body>
        {/* <NextNProgress color={primary.main} height={6} /> */}
        <FacebookPixel>
          <MuiThemeProvider>
            <CacheProvider value={clientSideEmotionCache}>
              {children}
            </CacheProvider>
          </MuiThemeProvider>
        </FacebookPixel>
        <GoogleAnalytics gaId={GA_TRACKING_ID}/>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
  layoutProps: PropTypes.object,
};
