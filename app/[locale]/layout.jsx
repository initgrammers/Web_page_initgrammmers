/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { NextIntlClientProvider } from 'next-intl';
import { unstable_setRequestLocale, getMessages } from 'next-intl/server';
import { GA_TRACKING_ID } from '#app/lib/gtag';
import FB_PIXEL_ID from '#app/lib/facebookPixel';
import MuiThemeProvider from '#app/shared/config/MuiThemeProvider';

const locales = ['es', 'en'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params: { locale = 'es' } }) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, viewport-fit=cover, shrink-to-fit=no"
        />
        <meta name="emotion-insertion-point" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin="true"
        />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com/" />

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
        {/* <TranslationsProvider
          resources={resources}
          locale={locale}
          namespaces={i18nNamespaces}
        > */}
        <NextIntlClientProvider messages={messages}>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <MuiThemeProvider>{children}</MuiThemeProvider>
          </AppRouterCacheProvider>
        </NextIntlClientProvider>
        {/* </TranslationsProvider> */}
        <GoogleAnalytics gaId={GA_TRACKING_ID} />
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', ${FB_PIXEL_ID});
          fbq('track', 'PageView');
        `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            alt="facebookPixel"
          />
        </noscript>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
  params: PropTypes.shape({ locale: PropTypes.string.isRequired }),
};
