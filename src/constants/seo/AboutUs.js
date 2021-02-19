import routes from '#app/routes';

const title = 'Quiénes somos | Initgrammers';

const description = '¿Quiénes somos?, Conoce la misión, visión, valores y equipo de trabajo de Initgrammers ';

const url = `https://initgrammers.com${routes.services.shopOnline}`;

const image = 'https://seo-web-page.web.app/assets/images/desarrollo-aplicaciones-web-ecuador.jpg';

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
