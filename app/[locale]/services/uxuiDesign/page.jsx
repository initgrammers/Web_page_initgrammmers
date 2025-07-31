import React from 'react';
import Index from '#screens/services/uXUIDesign/index';
import UxUiDesignSeo from '#app/constants/seo/UxUiDesign';
import esMessages from '../../../../messages/es.json';
import enMessages from '../../../../messages/en.json';

export const generateViewport = {
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
};
export async function generateMetadata({ params }) {
  const locale = params?.locale || 'es';
  const messages = locale === 'en' ? enMessages : esMessages;
  const title = messages?.Index?.metaTitleUxUiDesign || UxUiDesignSeo.title;
  const description = messages?.Index?.metaDescriptionUxUiDesign || UxUiDesignSeo.description;
  return {
    title,
    description,
    robots: 'index, follow',
    openGraph: {
      title,
      description,
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
      title,
      description,
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
