import React from 'react';
import PortfolioSEO from '#app/constants/seo/Portfolio';
import Index from '#screens/portfolio/index';

export const generateViewport = {
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
};
export const metadata = {
  title: PortfolioSEO.title,
  description: PortfolioSEO.description,
  robots: 'index, follow',

  openGraph: {
    title: PortfolioSEO.title,
    description: PortfolioSEO.description,
    url: PortfolioSEO.urlAltern,
    siteName: 'InitGrammers',
    images: [
      {
        url: PortfolioSEO.image,
        width: 800,
        height: 600,
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: PortfolioSEO.title,
    description: PortfolioSEO.description,
    images: [PortfolioSEO.image],
  },

  'google-site-verification': 'y1PcP4kGPOQqbyawDjt73ede4lda4WJP35jRYcnbbcE',
  'facebook-domain-verification': 'f6e1m61awoty4uqq75apqhiupih6vb',

  alternates: {
    canonical: PortfolioSEO.urlAltern,
    languages: {
      'es-ec': PortfolioSEO.urlAltern,
      'x-default': PortfolioSEO.urlAltern,
    },
  },
  icons: {
    shortcut: '/assets/images/icono-initgrammers.png',
    apple: '/assets/images/icono-initgrammers.png',
  },
};

export default async function Page() {
  return (
    <>
      <Index />
    </>
  );
}
