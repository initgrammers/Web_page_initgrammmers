import React from 'react';
import WebDevelopmentSEO from '#app/constants/seo/WebDevelopment';
import Index from '#screens/services/webDevelopment/index';

export const generateViewport = {
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
};

export const metadata = {
  title: WebDevelopmentSEO.title,
  description: WebDevelopmentSEO.description,
  robots: 'index, follow',

  openGraph: {
    title: WebDevelopmentSEO.title,
    description: WebDevelopmentSEO.description,
    url: WebDevelopmentSEO.urlAltern,
    siteName: 'InitGrammers',
    images: [
      {
        url: WebDevelopmentSEO.image,
        width: 800,
        height: 600,
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: WebDevelopmentSEO.title,
    description: WebDevelopmentSEO.description,
    images: [WebDevelopmentSEO.image],
  },

  'google-site-verification': 'y1PcP4kGPOQqbyawDjt73ede4lda4WJP35jRYcnbbcE',
  'facebook-domain-verification': 'f6e1m61awoty4uqq75apqhiupih6vb',

  alternates: {
    canonical: WebDevelopmentSEO.urlAltern,
    languages: {
      'es-ec': WebDevelopmentSEO.urlAltern,
      'x-default': WebDevelopmentSEO.urlAltern,
    },
  },
  icons: {
    shortcut: '/assets/images/icono-initgrammers.png',
    apple: '/assets/images/icono-initgrammers.png',
  },
};

const page = () => <Index />;

export default page;
