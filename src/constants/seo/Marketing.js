import routes from '#app/routes';

const title = 'Marketing y diseño digital Ecuador | Initgrammers';
const description =
  'Marketing digital en Ecuador, páginas o sitios web, landing page, Atrae, fideliza clientes a tu marca';
const url = `https://initgrammers.com${routes.services.marketingDigital}`;

const image =
  'https://seo-web-page.web.app/assets/images/marketing-diseno-digital-ecuador.jpg';

const MarketingSEO = {
  title,
  description,
  urlAltern: url,
  properties: [
    {
      property: 'og:url',
      content: url,
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:image',
      content: image,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'twitter:url',
      content: url,
    },
    {
      property: 'twitter:title',
      content: title,
    },
    {
      property: 'twitter:description',
      content: description,
    },
    {
      property: 'twitter:image',
      content: image,
    },
  ],
};

export default MarketingSEO;
