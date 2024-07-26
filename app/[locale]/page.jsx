import React from 'react';
import LandingPage from '#screens/landingPage';
import LandingPageSEO from '#app/constants/seo/LandingPage';
import initTranslations from 'app/i18n';
import TranslationsProvider from '#Components/TranslationsProvider';

export function generateViewport() {
  return {
    viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
  };
}
export function metadata() {
  return {
    title: LandingPageSEO.title,
    description: LandingPageSEO.description,
    robots: 'index, follow',

    openGraph: {
      title: LandingPageSEO.title,
      description: LandingPageSEO.description,
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
      title: LandingPageSEO.title,
      description: LandingPageSEO.description,
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
