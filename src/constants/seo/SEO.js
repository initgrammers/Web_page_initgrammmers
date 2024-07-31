import routes from '#app/routes';

const title = 'Modelos de Partnership | Initgrammers';

const description = 'Servicios de Desarrollo de Software: Tecnología que Impulsa tu Crecimiento';
const url = `https://initgrammers.com${routes.services.partnershipModels}`;

const image = 'https://seo-web-page.web.app/assets/images/posicionamiento-motores-busqueda.jpg';

const SEOsearch = {
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

export default SEOsearch;
