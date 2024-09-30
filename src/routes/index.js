const servicesBaseURL = 'services/';

const routes = {
  landingPage: '/',
  services: {
    webDevelopment: `${servicesBaseURL}webDevelopment`,
    mobileDevelopment: `${servicesBaseURL}mobileDevelopment`,
    uxUiDesign: `${servicesBaseURL}uxuiDesign`,
    trainings: `${servicesBaseURL}trainings`,
    partnershipModels: `${servicesBaseURL}partnershipModels`,
    shopOnline: `${servicesBaseURL}tiendas-en-linea-ecuador`,
    marketingDigital: `${servicesBaseURL}marketing-diseno-digital-ecuador`,
  },
  portfolio: 'portfolio',
  products: 'products',
  aboutUs: 'aboutUs',
  contactUs: '/contact-us',
  blog: '/blog',
  contact: '/contacto',
};

export default routes;
