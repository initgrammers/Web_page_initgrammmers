import { useTranslation } from "react-i18next";

const useWebDevelopment = () => {
  const {t} = useTranslation();

  const bannerWebDevelopment = {
    backgroundImage:
      'https://res.cloudinary.com/initgrammers/image/upload/v1609857474/servicios/desarrollo-web/figures/bloque1.png',
    heightImage: 696,
    titlePart1: t('webDevelopmentBannerTitle1'),
    titlePart2: t('webDevelopmentBannerTitle2'),
    titlePart3: t('webDevelopmentBannerTitle3'),
    description: t('webDevelopmentBannerDescription'),
    image:
      'https://res.cloudinary.com/initgrammers/image/upload/v1609857584/servicios/desarrollo-web/paginas-web-desarrollo-diseno-aplicaciones-web-ecuador.png',
  };
  
  const visibilityCompany = {
    title: t('webDevelopmentVisibilityTitle'),
    description: t('webDevelopmentVisibilityDescription'),
    image:
      'https://res.cloudinary.com/initgrammers/image/upload/v1609857584/servicios/desarrollo-web/aumenta-la-visibilidad-de-tu-empresa.png',
    backgroundImage:
      'https://res.cloudinary.com/initgrammers/image/upload/v1609857474/servicios/desarrollo-web/figures/bloque2.png',
    heightImage: 511,
  };
  
  const needAnUpdateWebDevelopment = {
    title: t('webDevelopmentNeedUpdateTitle'),
    description:t('webDevelopmentNeedUpdateDescription'),
    image:
      'https://res.cloudinary.com/initgrammers/image/upload/v1618505016/servicios/desarrollo-web/necesitas-una-actualizacion-web.png',
    backgroundImage:
      'https://res.cloudinary.com/initgrammers/image/upload/v1609857474/servicios/desarrollo-web/figures/bloque3.png',
    ornamentImage:
      'https://res.cloudinary.com/initgrammers/image/upload/v1609857474/servicios/desarrollo-web/figures/dino.png',
  };
  
  const webTechnologies = [
    {
      label: 'HTML 5',
      image:
        'https://res.cloudinary.com/initgrammers/image/upload/v1606844070/servicios/desarrollo-web/html-5.svg',
    },
    {
      label: 'Wordpress',
      image:
        'https://res.cloudinary.com/initgrammers/image/upload/v1606844070/servicios/desarrollo-web/wordpress.svg',
    },
    {
      label: 'CSS',
      image:
        'https://res.cloudinary.com/initgrammers/image/upload/v1606844084/servicios/desarrollo-web/css-3.svg',
    },
    {
      label: 'Firebase',
      image:
        'https://res.cloudinary.com/initgrammers/image/upload/v1606844100/servicios/desarrollo-web/firebase.svg',
    },
    {
      label: 'Angular',
      image:
        'https://res.cloudinary.com/initgrammers/image/upload/v1606844121/servicios/desarrollo-web/angular.svg',
    },
    {
      label: 'Next.js',
      image:
        'https://res.cloudinary.com/initgrammers/image/upload/v1606844120/servicios/desarrollo-web/next-js.svg',
    },
  ];
  
  const sliderWebTechnologies = {
    title: t('webDevelopmentSliderWebTechnologiesTitle'),
    technologies: webTechnologies,
  };
  
  const typesApplication = [
    {
      title: t('webDevelopmentTypesApplicationTitle1'),
      description: t('webDevelopmentTypesApplicationDescription1'),
    },
    {
      title: t('webDevelopmentTypesApplicationTitle2'),
      description: t('webDevelopmentTypesApplicationDescription2'),
    },
    // {
    //   title: t('webDevelopmentTypesApplicationTitle3'),
    //   description: t('webDevelopmentTypesApplicationDescription3'),
    // },
    {
      title: t('webDevelopmentTypesApplicationTitle4'),
      description: t('webDevelopmentTypesApplicationDescription4'),
    },
    // {
    //   title: t('webDevelopmentTypesApplicationTitle5'),
    //   description: t('webDevelopmentTypesApplicationDescription5'),
    // },
  ];
  
  const webApplicationTypes = {
    backgroundPrimaryLight: true,
    title: t('webDevelopmentWebApplicationTypeTitle'),
    typesApplication,
    image:
      'https://res.cloudinary.com/initgrammers/image/upload/v1609857584/servicios/desarrollo-web/tipos-aplicaciones-web.png',
    imageSizes: {
      xs: {
        width: 610,
        height: 438,
      },
      sm: {
        width: 412,
        height: 296,
      },
      md: {
        width: 412,
        height: 296,
      },
      lg: {
        width: 504,
        height: 362,
      },
    },
  };
  
  const imageSizesPartOfInternet = {
    xs: {
      width: 288,
      height: 235,
    },
    sm: {
      width: 552,
      height: 449,
    },
    md: {
      width: 544,
      height: 443,
    },
    lg: {
      width: 608,
      height: 496,
    },
  };
  
  const partOfInternet = {
    titlePart1: t('webDevelopmentPOITitle1'),
    titlePart2: t('webDevelopmentPOITitle2'),
    titlePart3: t('webDevelopmentPOITitle3'),
    description: t('webDevelopmentPOIDescription'),
    image:
      'https://res.cloudinary.com/initgrammers/image/upload/v1609857584/servicios/desarrollo-web/forma-parte-del-mundo-del-internet-Initgrammers.png',
    backgroundImage:
      'https://res.cloudinary.com/initgrammers/image/upload/v1609857474/servicios/desarrollo-web/figures/bloque6.png',
    heightImage: 944,
    imageSizes: imageSizesPartOfInternet,
  };
  
  const questions = [
    {
      id: 0,
      title: t('webDevelopmentQuestion1'),
      details: t('webDevelopmentDetailQuestion1'),
    },
    {
      id: 1,
      title: t('webDevelopmentQuestion2'),
      details: t('webDevelopmentDetailQuestion2'),
    },
    {
      id: 2,
      title: t('webDevelopmentQuestion3'),
      details: t('webDevelopmentDetailQuestion3'),
    },
    {
      id: 3,
      title: t('webDevelopmentQuestion4'),
      details: t('webDevelopmentDetailQuestion4'),
    },
    {
      id: 4,
      title: t('webDevelopmentQuestion5'),
      details: t('webDevelopmentDetailQuestion5'),
    },
    {
      id: 5,
      title: t('webDevelopmentQuestion6'),
      details: t('webDevelopmentDetailQuestion6'),
    },
    {
      id: 6,
      title: t('webDevelopmentQuestion7'),
      details: t('webDevelopmentDetailQuestion7'),
    },
  ];
  
  const FAQWeb = {
    titlePart1: t('FAQTitle1'),
    titlePart2: t('FAQTitle2'),
    questions,
  };

  return {
    bannerWebDevelopment,
    visibilityCompany,
    needAnUpdateWebDevelopment,
    sliderWebTechnologies,
    webApplicationTypes,
    partOfInternet,
    questions,
    FAQWeb
  }
}

export default useWebDevelopment;