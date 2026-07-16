import OperationsGuide from '#screens/operationsGuide';

const title = 'Guía Operativa Logística Gratis | InitGrammers';
const description = 'Descarga la guía gratuita para dejar de coordinar tu operación logística por Excel y WhatsApp: trazabilidad de carga, bodegaje y coordinación de flota en tiempo real.';
const url = 'https://initgrammers.com/operations-guide';

export const generateViewport = {
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
};

export const metadata = {
  title,
  description,
  robots: 'index, follow',
  openGraph: {
    title,
    description,
    url,
    siteName: 'InitGrammers',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  alternates: {
    canonical: url,
  },
  icons: {
    shortcut: '/assets/images/icono-initgrammers.png',
    apple: '/assets/images/icono-initgrammers.png',
  },
};

export default function Page() {
  return <OperationsGuide />;
}
