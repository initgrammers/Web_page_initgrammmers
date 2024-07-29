import React from 'react';
import Index from '#screens/services/partnershipModels/index';
import SEOsearch from '#app/constants/seo/SEO';

export function generateViewport() {
  return {
    viewport: 'width=device-width, initial-scale=1, viewport-fit=cover'
  };
}

export function metadata() {
  return {
    title: SEOsearch.title,
    description: SEOsearch.description,
    robots: 'index, follow',

    openGraph: {
      title: SEOsearch.title,
      description: SEOsearch.description,
      url: SEOsearch.urlAltern,
      siteName: 'InitGrammers',
      images: [
        {
          url: SEOsearch.image,
          width: 800,
          height: 600,
        },
      ],
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image', 
      title: SEOsearch.title,
      description: SEOsearch.description,
      images: [SEOsearch.image],
    },

    'google-site-verification': 'y1PcP4kGPOQqbyawDjt73ede4lda4WJP35jRYcnbbcE',
    'facebook-domain-verification': 'f6e1m61awoty4uqq75apqhiupih6vb',
    
    alternates: {
      canonical: SEOsearch.urlAltern,
      languages: {
        'es-ec': SEOsearch.urlAltern,
        'x-default': SEOsearch.urlAltern,
      },
    },
    icons: {
      shortcut: '/assets/images/icono-initgrammers.png',
      apple: '/assets/images/icono-initgrammers.png',
    },
  };
}

const page = () => {
  return <Index />
};

export default page;