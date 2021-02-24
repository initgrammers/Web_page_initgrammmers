import routes from '#app/routes';

const title = 'Desarrollo de páginas, aplicaciones web Ecuador | Initgrammers';

const description =
  'Diseño y desarrollo de aplicaciones web en Ecuador, páginas o sitios web, landing page, desarrollo web con CMS (WordPress, Joomla) y software a medida';

const url = `https://initgrammers.com${routes.services.webDevelopment}`;

const image =
  'https://seo-web-page.web.app/assets/images/desarrollo-aplicaciones-web-ecuador.jpg';

const WebDevelopmentSEO = {
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

export default WebDevelopmentSEO;
