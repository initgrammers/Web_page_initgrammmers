import React from 'react';
import LandingPage from '#screens/landingPage';
import LandingPageSEO from '#app/constants/seo/LandingPage';
import esMessages from '../../messages/es.json';
import enMessages from '../../messages/en.json';

export function generateViewport() {
  return {
    viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
  };
}

export async function generateMetadata({ params }) {
  const locale = params?.locale || 'es';
  const messages = locale === 'en' ? enMessages : esMessages;
  const title = messages.Index?.metaTitleLandingPage || LandingPageSEO.title;
  const description = messages.Index?.metaDescriptionLandingPage || LandingPageSEO.description;

  return {
    title,
    description,
    robots: 'index, follow',
    openGraph: {
      title,
      description,
      url: LandingPageSEO.urlAltern,
      siteName: 'InitGrammers',
      images: [
        {
          url: LandingPageSEO.image,
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
      images: [LandingPageSEO.image],
    },
    'google-site-verification': 'y1PcP4kGPOQqbyawDjt73ede4lda4WJP35jRYcnbbcE',
    'facebook-domain-verification': 'f6e1m61awoty4uqq75apqhiupih6vb',

    alternates: {
      canonical: LandingPageSEO.urlAltern,
      languages: {
        'es-ec': LandingPageSEO.urlAltern,
        'x-default': LandingPageSEO.urlAltern,
      },
    },

    icons: {
      shortcut: '/assets/images/icono-initgrammers.png',
      apple: '/assets/images/icono-initgrammers.png',
    },
  };
}

export default async function Home() {
  return (
    <>
      <LandingPage />
    </>
  );
}
