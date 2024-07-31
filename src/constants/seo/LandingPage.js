const title = 'Diseño, desarrollo de aplicaciones web y móviles - InitGrammers';
const description = 'Desarrollo de aplicaciones móviles para Android y iOS, sitios web, diseño UI/UX, tiendas online, marketing digital, software a medida en Ecuador ';
const url = 'https://initgrammers.com/';

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
