import React from 'react';
import Index from '#screens/services/mobileDevelopment/index';
import MobileDevelopmentSEO from '#app/constants/seo/MobileDevelopment';

export function generateViewport() {
  return {
    viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
  };
}

export function metadata() {
  return {
    title: MobileDevelopmentSEO.title,
    description: MobileDevelopmentSEO.description,
    robots: 'index, follow',

    openGraph: {
      title: MobileDevelopmentSEO.title,
      description: MobileDevelopmentSEO.description,
      url: MobileDevelopmentSEO.urlAltern,
      siteName: 'InitGrammers',
      images: [
        {
          url: MobileDevelopmentSEO.image,
          width: 800,
          height: 600,
        },
      ],
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title: MobileDevelopmentSEO.title,
      description: MobileDevelopmentSEO.description,
      images: [MobileDevelopmentSEO.image],
    },

    'google-site-verification': 'y1PcP4kGPOQqbyawDjt73ede4lda4WJP35jRYcnbbcE',
    'facebook-domain-verification': 'f6e1m61awoty4uqq75apqhiupih6vb',

    alternates: {
      canonical: MobileDevelopmentSEO.urlAltern,
      languages: {
        'es-ec': MobileDevelopmentSEO.urlAltern,
        'x-default': MobileDevelopmentSEO.urlAltern,
      },
    },
    icons: {
      shortcut: '/assets/images/icono-initgrammers.png',
      apple: '/assets/images/icono-initgrammers.png',
    },
  };
}

const page = () => <Index />;

export default page;
