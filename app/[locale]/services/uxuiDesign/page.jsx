import React from 'react';
import Index from '#screens/services/uXUIDesign/index';
import UxUiDesignSeo from '#app/constants/seo/UxUiDesign';

export function generateViewport() {
  return {
    viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
  };
}
export function metadata() {
  return {
    title: UxUiDesignSeo.title,
    description: UxUiDesignSeo.description,
    robots: 'index, follow',

    openGraph: {
      title: UxUiDesignSeo.title,
      description: UxUiDesignSeo.description,
      url: UxUiDesignSeo.urlAltern,
      siteName: 'InitGrammers',
      images: [
        {
          url: UxUiDesignSeo.image,
          width: 800,
          height: 600,
        },
      ],
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title: UxUiDesignSeo.title,
      description: UxUiDesignSeo.description,
      images: [UxUiDesignSeo.image],
    },

    'google-site-verification': 'y1PcP4kGPOQqbyawDjt73ede4lda4WJP35jRYcnbbcE',
    'facebook-domain-verification': 'f6e1m61awoty4uqq75apqhiupih6vb',

    alternates: {
      canonical: UxUiDesignSeo.urlAltern,
      languages: {
        'es-ec': UxUiDesignSeo.urlAltern,
        'x-default': UxUiDesignSeo.urlAltern,
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
