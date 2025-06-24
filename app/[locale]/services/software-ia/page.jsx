import dynamic from 'next/dynamic';
import softwareIaSEO from '#constants/seo/SoftwareIa';

const SoftwareIaPage = dynamic(
  () => import('#screens/services/softwareIa/index'),
  { ssr: false }
);

export const generateViewport = {
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
};

export const metadata = {
  title: softwareIaSEO.title,
  description: softwareIaSEO.description,
  robots: 'index, follow',

  openGraph: {
    title: softwareIaSEO.title,
    description: softwareIaSEO.description,
    url: softwareIaSEO.urlAltern,
    siteName: 'InitGrammers',
    images: [
      {
        url:
          'https://seo-web-page.web.app/assets/images/posicionamiento-motores-busqueda.jpg',
        width: 800,
        height: 600,
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: softwareIaSEO.title,
    description: softwareIaSEO.description,
    images: [
      'https://seo-web-page.web.app/assets/images/posicionamiento-motores-busqueda.jpg',
    ],
  },

  alternates: {
    canonical: softwareIaSEO.urlAltern,
    languages: {
      'es-ec': softwareIaSEO.urlAltern,
      'x-default': softwareIaSEO.urlAltern,
    },
  },

  icons: {
    shortcut: '/assets/images/icono-initgrammers.png',
    apple: '/assets/images/icono-initgrammers.png',
  },
};

const Page = () => <SoftwareIaPage />;

export default Page;
