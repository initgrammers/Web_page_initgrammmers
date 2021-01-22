import routes from '#app/routes';

const title = 'Desarrollo de aplicaciones móviles en Ecuador | Initgrammers';
const description =
  'Diseño y desarrollo de aplicaciones móviles nativas, web (PWA), híbridas, para dispositivos Android y iOS en Ecuador, usamos tecnologías actuales';
const url = `https://initgrammers.com${routes.services.mobileDevelopment}`;

const image =
  'https://seo-web-page.web.app/assets/images/desarrollo-aplicaciones-web-ecuador.jpg';

const MobileDevelopmentSEO = {
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

export default MobileDevelopmentSEO;
