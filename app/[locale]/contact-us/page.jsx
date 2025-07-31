import React from 'react';
import ContactUsSEO from '#app/constants/seo/ContactUs';
import Index from '#screens/contactUs/index';
import esMessages from '../../../messages/es.json';
import enMessages from '../../../messages/en.json';

export const generateViewport = {
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
};
export async function generateMetadata({ params }) {
  const locale = params?.locale || 'es';
  const messages = locale === 'en' ? enMessages : esMessages;
  const title = messages?.Index?.metaTitleContactUs || ContactUsSEO.title;
  const description = messages?.Index?.metaDescriptionContactUs || ContactUsSEO.description;

  return {
    title,
    description,
    robots: 'index, follow',
    openGraph: {
      title,
      description,
      url: ContactUsSEO.urlAltern,
      siteName: 'InitGrammers',
      images: [
        {
          url: ContactUsSEO.image,
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
      images: [ContactUsSEO.image],
    },

    'google-site-verification': 'y1PcP4kGPOQqbyawDjt73ede4lda4WJP35jRYcnbbcE',
    'facebook-domain-verification': 'f6e1m61awoty4uqq75apqhiupih6vb',

    alternates: {
      canonical: ContactUsSEO.urlAltern,
      languages: {
        'es-ec': ContactUsSEO.urlAltern,
        'x-default': ContactUsSEO.urlAltern,
      },
    },
    icons: {
      shortcut: '/assets/images/icono-initgrammers.png',
      apple: '/assets/images/icono-initgrammers.png',
    },
  };
}

export default async function Page() {
  return (
    <>
      <Index />
    </>
  );
}
