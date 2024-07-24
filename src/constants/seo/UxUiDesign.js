import routes from '#app/routes';

const title = 'Diseño UX UI en Ecuador | Initgrammers';

const description =
  'Diseño UI/UX de aplicaciones web y móviles en Ecuador. Le ayudamos a crear una experiencia ideal para sus productos con interfaces estéticas.';

const url = `https://initgrammers.com${routes.services.uxUiDesign}`;

const image =
  'https://seo-web-page.web.app/assets/images/desarrollo-aplicaciones-web-ecuador.jpg';

const UxUiDesignSeo = {
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

export default UxUiDesignSeo;
