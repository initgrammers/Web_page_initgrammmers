import routes from '#app/routes';

const title = 'Portafolio | Initgrammers';

const description = 'Descubre cómo nuestras soluciones web, móviles y de diseño impulsan marcas hacia el éxito. ';

const url = `https://initgrammers.com${routes.portfolio}`;

const image = '';

const PortfolioSEO = {
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

export default PortfolioSEO;
