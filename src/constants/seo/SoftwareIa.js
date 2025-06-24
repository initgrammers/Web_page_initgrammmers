import routes from '#app/routes';

const title = 'Software IA| Initgrammers';

const description = 'Soluciones inteligentes con software potenciado por Inteligencia Artificial';
const url = `https://initgrammers.com${routes.services.softwareIa}`;

const image = 'https://seo-web-page.web.app/assets/images/posicionamiento-motores-busqueda.jpg';

const softwareIaSEO = {
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

export default softwareIaSEO;
