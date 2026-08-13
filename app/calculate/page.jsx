import Calculate from '#screens/calculate';

const title = 'Calculadora de Costo Oculto Logístico | InitGrammers';
const description = 'Descubre en 60 segundos cuánto te cuesta al mes coordinar tu operación logística por Excel y WhatsApp, y descarga un informe personalizado en PDF.';
const url = 'https://initgrammers.com/calculate';

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
  return <Calculate />;
}
