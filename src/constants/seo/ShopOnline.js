const title = 'Tiendas online / E-commerce | Initgrammers';
const description =
  'Desarrollo de tiendas online de acuerdo a su necesidad, tales como Facebook e Instagram shop, whatsapp business, sitios e-commerce con Woocommerce';
const url = 'https://initgrammers.com/servicios/comercio-electronico-ecuador';

const image =
  'https://seo-web-page.web.app/assets/images/desarrollo-aplicaciones-web-ecuador.jpg';

const LandingPageSEO = {
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

export default LandingPageSEO;
