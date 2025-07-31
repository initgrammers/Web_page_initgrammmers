import React from 'react';
import WebDevelopmentSEO from '#app/constants/seo/WebDevelopment';
import Index from '#screens/services/webDevelopment/index';
import esMessages from '../../../../messages/es.json';
import enMessages from '../../../../messages/en.json';

export const generateViewport = {
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
};
export async function generateMetadata({ params }) {
  const locale = params?.locale || 'es';
  const messages = locale === 'en' ? enMessages : esMessages;
  const title = messages?.Index?.metaTitleWebDevelopment || WebDevelopmentSEO.title;
  const description = messages
    ?.Index?.metaDescriptionWebDevelopment || WebDevelopmentSEO.description;
  return {
    title,
    description,
    robots: 'index, follow',
    openGraph: {
      title,
      description,
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
      title,
      description,
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
}

const page = () => <Index />;

export default page;
