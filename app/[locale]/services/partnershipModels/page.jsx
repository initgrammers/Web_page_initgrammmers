import React from 'react';
import Index from '#screens/services/partnershipModels/index';
import SEOsearch from '#app/constants/seo/SEO';
import esMessages from '../../../../messages/es.json';
import enMessages from '../../../../messages/en.json';

export const generateViewport = {
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
};
export async function generateMetadata({ params }) {
  const locale = params?.locale || 'es';
  const messages = locale === 'en' ? enMessages : esMessages;
  const title = messages?.Index?.metaTitlePartnership || SEOsearch.title;
  const description = messages?.Index?.metaDescriptionPartnership || SEOsearch.description;

  return {
    title,
    description,
    robots: 'index, follow',
    openGraph: {
      title,
      description,
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
      title,
      description,
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

const page = () => <Index />;

export default page;
