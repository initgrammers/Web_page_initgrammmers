import routes from '#app/routes';

const title = 'Contáctanos | Initgrammers';

const description = '	¿Tienes un proyecto en mente? Escríbenos y déjanos ayudarte a transformar tus ideas.';

const url = `https://initgrammers.com${routes.contactUs}`;

const image = '';

const ContactUsSEO = {
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

export default ContactUsSEO;
