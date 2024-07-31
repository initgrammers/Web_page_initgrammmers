import { useTranslation } from "react-i18next";

const useMobileDevelopment = () => {
  const {t} = useTranslation();

  const bannerMobileDevelopment = {
    titlePar1: t('mobileDevelopmentBannerTitlePart1'),
    titlePart2: t('mobileDevelopmentBannerTitlePart2'),
    titlePart3: t('mobileDevelopmentBannerTitlePart3'),
    description: t('mobileDevelopmentBannerDescription'),
    image:
      'https://res.cloudinary.com/initgrammers/image/upload/v1618501400/servicios/desarrollo-movil/diseno-desarrollo-aplicaciones-moviles-ios-android-ecuador.png',
    backgroundImage:
      'https://res.cloudinary.com/initgrammers/image/upload/v1606842502/servicios/desarrollo-movil/figures/bloque1.png',
  };
  
  const importanceApplications = {
    title: t('mobileDevelopmentImportanceApplicationsTitle'),
    mainImage:
      t('mobileDevelopmentImportanceApplicationsMainImage'),
    description1:
      t('mobileDevelopmentImportanceApplicationsDescription1'),
    description2:
      t('mobileDevelopmentImportanceApplicationsDescription2'),
    logo1:
      'https://res.cloudinary.com/initgrammers/image/upload/v1606840714/servicios/desarrollo-movil/google-play.png',
    logo2:
      'https://res.cloudinary.com/initgrammers/image/upload/v1606840714/servicios/desarrollo-movil/apple-store.png',
    backgroundImage:
      'https://res.cloudinary.com/initgrammers/image/upload/v1606842502/servicios/desarrollo-movil/figures/bloque2.png',
    heightImage: 870,
  };
  
  const MobileTechnologies = [
    {
      label: 'Flutter',
      image:
        'https://res.cloudinary.com/initgrammers/image/upload/v1606842901/servicios/desarrollo-movil/Flutter.svg',
    },
    {
      label: 'React Native',
      image:
        'https://res.cloudinary.com/initgrammers/image/upload/v1606842901/servicios/desarrollo-movil/react-native.svg',
    },
    {
      label: 'Android',
      image:
        'https://res.cloudinary.com/initgrammers/image/upload/v1606842901/servicios/desarrollo-movil/android.svg',
    },
    {
      label: 'Firebase',
      image:
        'https://res.cloudinary.com/initgrammers/image/upload/v1606842969/servicios/desarrollo-movil/firebase.svg',
    },
    {
      label: 'iOS',
      image:
        'https://res.cloudinary.com/initgrammers/image/upload/v1606842969/servicios/desarrollo-movil/apple.svg',
    },
  ];
  
  const technologiesMobileApplication = {
    title: t('mobileDevelopmentTechnologiesMobileApplicationTitle'),
    technologies: MobileTechnologies,
    backgroundImage:
      'https://res.cloudinary.com/initgrammers/image/upload/v1606842502/servicios/desarrollo-movil/figures/bloque3.png',
    heightImage: 364,
  };
  
  const typesApplication = [
    {
      title: t('mobileDevelopmentMobileApplicationTypesApplicationTitle1'),
      description:
        t('mobileDevelopmentMobileApplicationTypesApplicationDescription1'),
    },
    {
      title: t('mobileDevelopmentMobileApplicationTypesApplicationTitle2'),
      description:
        t('mobileDevelopmentMobileApplicationTypesApplicationDescription2'),
    },
    {
      title: t('mobileDevelopmentMobileApplicationTypesApplicationTitle3'),
      description:
        t('mobileDevelopmentMobileApplicationTypesApplicationDescription3'),
    },
    {
      title: t('mobileDevelopmentMobileApplicationTypesApplicationTitle4'),
      description:
        t('mobileDevelopmentMobileApplicationTypesApplicationDescription4'),
    },
  ];
  
  const mobileApplicationTypes = {
    title: t('mobileDevelopmentMobileApplicationTypesTitle'),
    typesApplication,
    image:
      t('mobileDevelopmentMobileApplicationTypesImage'),
    imageSizes: {
      xs: {
        width: 504,
        height: 607,
      },
      sm: {
        width: 547,
        height: 659,
      },
      md: {
        width: 547,
        height: 659,
      },
      lg: {
        width: 504,
        height: 607,
      },
    },
  };
  
  const applicationsInYourFingertips = {
    titlePart1: t('mobileDevelopmentApplicationsInYourFingertipsTitlePart1'),
    titlePart2: t('mobileDevelopmentApplicationsInYourFingertipsTitlePart2'),
    titlePart3: t('mobileDevelopmentApplicationsInYourFingertipsTitlePart3'),
    description:
      t('mobileDevelopmentApplicationsInYourFingertipsDescription'),
    image:
      'https://res.cloudinary.com/initgrammers/image/upload/v1618501401/servicios/desarrollo-movil/aplicaciones-moviles-al-alcance-de-tu-mano.png',
    backgroundImage:
      'https://res.cloudinary.com/initgrammers/image/upload/v1606842502/servicios/desarrollo-movil/figures/bloque5.png',
    heightImage: 1019,
    imageSizes: {
      xs: {
        width: 288,
        height: 316,
      },
      sm: {
        width: 412,
        height: 453,
      },
      md: {
        width: 412,
        height: 453,
      },
      lg: {
        width: 500,
        height: 550,
      },
    },
  };
  
  const questions = [
    {
      id: 0,
      title: t('mobileDevelopmentQuestion0'),
      details:
        t('mobileDevelopmentDetailsQuestion0'),
    },
    {
      id: 1,
      title: t('mobileDevelopmentQuestion1'),
      details:
        t('mobileDevelopmentDetailsQuestion1'),
    },
    {
      id: 2,
      title: t('mobileDevelopmentQuestion2'),
      details:
        t('mobileDevelopmentDetailsQuestion2'),
    },
    {
      id: 3,
      title: t('mobileDevelopmentQuestion3'),
      details:
        t('mobileDevelopmentDetailsQuestion3'),
    },
    {
      id: 4,
      title: t('mobileDevelopmentQuestion4'),
      details:
        t('mobileDevelopmentDetailsQuestion4'),
    },
    {
      id: 5,
      title: t('mobileDevelopmentQuestion5'),
      details:
        t('mobileDevelopmentDetailsQuestion5'),
    },
  
    {
      id: 6,
      title: t('mobileDevelopmentQuestion6'),
      details:
        t('mobileDevelopmentDetailsQuestion6'),
    },
  
    {
      id: 7,
      title: t('mobileDevelopmentQuestion7'),
      details:
        t('mobileDevelopmentDetailsQuestion7'),
    },
    {
      id: 8,
      title: t('mobileDevelopmentQuestion8'),
      details:
        t('mobileDevelopmentDetailsQuestion8'),
    },
    {
      id: 9,
      title: t('mobileDevelopmentQuestion9'),
      details:
        t('mobileDevelopmentDetailsQuestion9'),
    },
  ];
  
  const FAQMobileDevelopment = {
    titlePart1: t('mobileDevelopmentFAQTitlePart1'),
    titlePart2: t('mobileDevelopmentFAQTitlePart2'),
    questions,
  };

  return {
    bannerMobileDevelopment,
    importanceApplications,
    technologiesMobileApplication,
    mobileApplicationTypes,
    applicationsInYourFingertips,
    FAQMobileDevelopment
  }
}

export default useMobileDevelopment;