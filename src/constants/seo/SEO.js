const title = 'SEO / Posicionamiento en motores de búsqueda | Initgrammers';

const description =
  'Posiciona tu página web en los primeros resultados de Google';
const url = 'https://initgrammers.com/servicios/seo-ecuador';

const image =
  'https://seo-web-page.web.app/assets/images/posicionamiento-motores-busqueda.jpg';

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
