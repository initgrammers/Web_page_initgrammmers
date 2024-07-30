import routes from '#app/routes/';
import { useTranslation } from 'react-i18next';

const useLandingPage = () => {
  const { t } = useTranslation();

  const bannerLandingPage = {
    backgroundImage:
      'https://res.cloudinary.com/initgrammers/image/upload/v1607008550/LandingPage/figures/bloque1.png',
    heightImage: 672,
    title: t('homeBannerTitle'),
    description: t('homeBannerDescription'),
    image:
      'https://res.cloudinary.com/initgrammers/image/upload/v1607028746/LandingPage/desarrollo-diseno-software.png',
  };

  const onlineSolution = {
    backgroundImage:
      'https://res.cloudinary.com/initgrammers/image/upload/v1606839723/LandingPage/figures/bloque2.png',
    heightImage: 628,
    title: t('onlineSolutionTitle'),
    description:t('onlineSolutionDescription'),
    image:
      'https://res.cloudinary.com/initgrammers/image/upload/v1609863472/LandingPage/solucion-en-linea.png',
    titlePrimaryMain: true,
    descriptionBlack: true,
    imageSizes: {
      xs: {
        width: 288,
        height: 308,
      },
      sm: {
        width: 412,
        height: 442,
      },
      md: {
        width: 544,
        height: 539,
      },
      lg: {
        width: 504,
        height: 500,
      },
    },
    isImageRight: true,
  };

  const partnershipModels = [
    {
      path:
        'https://res.cloudinary.com/initgrammers/image/upload/v1606839967/LandingPage/proyecto-precio-fijo.png',
      title: t('partnershipModelsTitle1'),
      description: t('partnershipModelsDescription1')
    },
    {
      path:
        'https://res.cloudinary.com/initgrammers/image/upload/v1606839967/LandingPage/extension-de-tu-equipo.png',
      title: t('partnershipModelsTitle2'),
      description: t('partnershipModelsDescription2')
    },
    {
      path:
        'https://res.cloudinary.com/initgrammers/image/upload/v1606839967/LandingPage/nos-convertimos-en-tu-equipo.png',
      title: t('partnershipModelsTitle3'),
      description: t('partnershipModelsDescription3')
    },
  ];

  const partnershipModel = {
    title: t('partnershipModelTitle'),
    description:t('partnershipModelDescription'),
    image:
      'https://res.cloudinary.com/initgrammers/image/upload/v1609863472/LandingPage/modelo-partnership.png',
    backgroundImage:
      'https://res.cloudinary.com/initgrammers/image/upload/v1606839723/LandingPage/figures/bloque4.png',
    heightImage: 1262,
    partnershipModels,
  };

  const services = [
    {
      href: routes.services.webDevelopment,
      path:
        'https://res.cloudinary.com/initgrammers/image/upload/v1606839497/LandingPage/desarrollo-web.png',
      service: t('webDevelopment'),
    },
    {
      href: routes.services.uxUiDesign,
      path:
        'https://res.cloudinary.com/initgrammers/image/upload/v1606839497/LandingPage/diseno-ux-ui.png',
      service: t('ux/uiDesign'),
    },
    {
      href: routes.services.mobileDevelopment,
      path:
        'https://res.cloudinary.com/initgrammers/image/upload/v1606839497/LandingPage/desarrollo-movil.png',
      service: t('mobileDevelopment'),
    },
    {
      href: routes.services.trainings,
      path:
        'https://res.cloudinary.com/initgrammers/image/upload/v1606839497/LandingPage/capacitaciones.png',
      service: t('training'),
    },
    // {
    //   href: routes.services.marketingDigital,
    //   path:
    //     'https://res.cloudinary.com/initgrammers/image/upload/v1606839497/LandingPage/marketing.png',
    //   service: 'Marketing Digital',
    // },
    // {
    //   href: routes.services.seo,
    //   path:
    //     'https://res.cloudinary.com/initgrammers/image/upload/v1606839497/LandingPage/posicionamiento-buscadores.png',
    //   service: 'Posicionamiento en buscadores / SEO',
    // },
    // {
    //   href: routes.services.shopOnline,
    //   path:
    //     'https://res.cloudinary.com/initgrammers/image/upload/v1606839497/LandingPage/e-commerce.png',
    //   service: 'Comercio Electrónico',
    // },
  ];

  const servicesInitgrammers = {
    backgroundImage:
      'https://res.cloudinary.com/initgrammers/image/upload/v1606839723/LandingPage/figures/bloque3.png',
    heightImage: 720,
    title: t('servicesTitle'),
    services,
  };

  const clients = [
    {
      label: 'Atenas Education',
      image:
        'https://res.cloudinary.com/initgrammers/image/upload/v1609862938/LandingPage/atenas-education.png',
    },
    {
      label: 'La Casa del Carpintero',
      image:
        'https://res.cloudinary.com/initgrammers/image/upload/v1609862948/LandingPage/la-casa-del-carpintero.png',
    },
    {
      label: 'JRTEC',
      image:
        'https://res.cloudinary.com/initgrammers/image/upload/v1609862943/LandingPage/JRTEC.png',
    },
    {
      label: 'Escuela Politécnica Nacional',
      image:
        'https://res.cloudinary.com/initgrammers/image/upload/v1609862939/LandingPage/Escuela-Politecnica-Nacional.png',
    },
    {
      label: 'Solufer Ecuador',
      image:
        'https://res.cloudinary.com/initgrammers/image/upload/v1609862938/LandingPage/solufer.png',
    },
  ];

  const clientsInitgrammers = {
    title: t('clientsTitle'),
    variantTitle: 'h4',
    titleBlack: true,
    clients,
  };

  const carryOutProject = {
    titlePart1: t('carryOutTitle1'),
    titlePart2: t('carryOutTitle2'),
    description: t('carryOutDescription'),
    image:
      'https://res.cloudinary.com/initgrammers/image/upload/v1609863472/LandingPage/soporte-adicional-sin-costo.png',
  };

  const questions = [
    {
      id: 0,
      title: t('question1'),
      details:t('detailsQuestion1')
    },
    {
      id: 1,
      title: t('question2'),
      details:t('detailsQuestion2')
    },
    {
      id: 2,
      title: t('question3'),
      details:t('detailsQuestion3')
    },
    {
      id: 3,
      title: t('question4'),
      details:t('detailsQuestion4')
    },
    {
      id: 4,
      title: t('question5'),
      details:t('detailsQuestion5')
    },
    {
      id: 5,
      title: t('question6'),
      details:t('detailsQuestion6')
    },
    {
      id: 6,
      title: t('question7'),
      details:t('detailsQuestion7')
    },
    {
      id: 7,
      title: t('question8'),
      details:t('detailsQuestion8')
    },
  ];

  const FAQLandingPage = {
    titlePart1: t('FAQTitle1'),
    titlePart2: t('FAQTitle2'),
    questions,
  };

  return {
    bannerLandingPage,
    onlineSolution,
    partnershipModel,
    servicesInitgrammers,
    clientsInitgrammers,
    carryOutProject,
    FAQLandingPage,
  };
};

export default useLandingPage;
