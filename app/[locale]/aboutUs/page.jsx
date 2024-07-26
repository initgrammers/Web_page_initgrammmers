import Index from '#screens/aboutUs/index';
import React from 'react';
import AboutUsSeo from '#app/constants/seo/AboutUs';

export function generateViewport() {
  return {
    viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
  };
}
export function metadata() {
  return {
    title: AboutUsSeo.title,
    description: AboutUsSeo.description,
    robots: 'index, follow',

    openGraph: {
      title: AboutUsSeo.title,
      description: AboutUsSeo.description,
      url: AboutUsSeo.urlAltern,
      siteName: 'InitGrammers',
      images: [
        {
          url: AboutUsSeo.image,
          width: 800,
          height: 600,
        },
      ],
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title: AboutUsSeo.title,
      description: AboutUsSeo.description,
      images: [AboutUsSeo.image],
    },

    'google-site-verification': 'y1PcP4kGPOQqbyawDjt73ede4lda4WJP35jRYcnbbcE',
    'facebook-domain-verification': 'f6e1m61awoty4uqq75apqhiupih6vb',

    alternates: {
      canonical: AboutUsSeo.urlAltern,
      languages: {
        'es-ec': AboutUsSeo.urlAltern,
        'x-default': AboutUsSeo.urlAltern,
      },
    },
    icons: {
      shortcut: '/assets/images/icono-initgrammers.png',
      apple: '/assets/images/icono-initgrammers.png',
    },
  };
}


export default async function Page({ params: locale }) {

  return (
    <>
      <Index />
    </>
  );
}
