import { useTranslation } from 'react-i18next';

const useUxUiDesign = () => {
  const { t } = useTranslation();

  const bannerUxUiDesign = {
    heightImage: 664,
    backgroundImage:
      'https://res.cloudinary.com/initgrammers/image/upload/v1606844370/servicios/diseno-ux-ui/figures/bloque1.png',
    title: t('uxuiDesignBannerTittle'),
    description: t('uxuiDesignBannerDescription'),
    image:
      t('uxuiDesignBannerImage'),
  };
  const innovateDesign = {
    backgroundImage:
      'https://res.cloudinary.com/initgrammers/image/upload/v1606844370/servicios/diseno-ux-ui/figures/bloque2.png',
    heightImage: 631,
    title: t('uxuiDesignInnovateDesignTitle'),
    description:
      t('uxuiDesignInnovateDesignDescription'),
    image:
      'https://res.cloudinary.com/initgrammers/image/upload/v1606843570/servicios/diseno-ux-ui/diseno-innovador.png',
    imageSizes: {
      xs: {
        width: 288,
        height: 288,
      },
      sm: {
        width: 552,
        height: 552,
      },
      md: {
        width: 544,
        height: 552,
      },
      lg: {
        width: 503,
        height: 503,
      },
    },
    isImageRight: true,
    backgroundPrimaryLight: true,
  };
  const whatIsUxUiDesign = {
    backgroundImage:
      'https://res.cloudinary.com/initgrammers/image/upload/v1606844370/servicios/diseno-ux-ui/figures/bloque3.png',
    heightImage: 468,
    title: t('uxuiDesignWhatIsUxUiDesignTitle'),
    description:
      t('uxuiDesignWhatIsUxUiDesignDescription'),
    image:
      t('uxuiDesignWhatIsUxUiDesignImage'),
    imageSizes: {
      xs: {
        width: 288,
        height: 194,
      },
      sm: {
        width: 552,
        height: 372,
      },
      md: {
        width: 544,
        height: 367,
      },
      lg: {
        width: 504,
        height: 340,
      },
    },
    isImageRight: true,
    titlePrimaryMain: true,
    descriptionBlack: true,
  };

  const uxUiTechnologies = [
    {
      label: 'Figma',
      image:
        'https://res.cloudinary.com/initgrammers/image/upload/v1607085341/servicios/diseno-ux-ui/figma.svg',
    },
    {
      label: 'Zeplin',
      image:
        '/assets/images/zeplin.svg',
    },
    {
      label: 'Adobe XD',
      image:
        '/assets/images/adobe.svg',
    },
    {
      label: 'Adobe Ilustrator',
      image:
        'https://res.cloudinary.com/initgrammers/image/upload/v1607085341/servicios/diseno-ux-ui/adobe-illustrator.svg',
    },
  ];

  const sliderUxUiTechnologies = {
    backgroundImage:
      'https://res.cloudinary.com/initgrammers/image/upload/v1606844370/servicios/diseno-ux-ui/figures/bloque4.png',
    heightImage: 364,
    title: t('uxuiDesignSliderUxUiTechnologiesTitle'),
    technologies: uxUiTechnologies,
  };

  const uniqueDesignAdaptedToYourBrand = {
    title: t('uxuiDesignUniqueDesignAdaptedToYourBrandTitle'),
    description:
      t('uxuiDesignUniqueDesignAdaptedToYourBrandDescription'),
    image:
      'https://res.cloudinary.com/initgrammers/image/upload/v1607085601/servicios/diseno-ux-ui/diseno-unico-adaptado-a-tu-marca.png',
    imageSizes: {
      xs: {
        width: 288,
        height: 288,
      },
      sm: {
        width: 509,
        height: 509,
      },
      md: {
        width: 509,
        height: 509,
      },
      lg: {
        width: 504,
        height: 504,
      },
    },
    isImageRight: false,
    backgroundPrimaryFade: true,
    titlePrimaryMain: true,
    descriptionBlack: true,
  };

  const unforgetableExperiences = {
    titlePart1: t('uxuiDesignUnforgetableExperiencesTitlePart1'),
    titlePart2: t('uxuiDesignUnforgetableExperiencesTitlePart2'),
    description:
      t('uxuiDesignUnforgetableExperiencesDescription'),
    image:
      'https://res.cloudinary.com/initgrammers/image/upload/v1606843570/servicios/diseno-ux-ui/experiencias-inolvidables-con-alto-impacto.png',
    backgroundImage:
      'https://res.cloudinary.com/initgrammers/image/upload/v1606844370/servicios/diseno-ux-ui/figures/bloque5.png',
    heightImage: 1046,
    imageSizes: {
      xs: {
        width: 288,
        height: 286,
      },
      sm: {
        width: 552,
        height: 548,
      },
      md: {
        width: 544,
        height: 540,
      },
      lg: {
        width: 608,
        height: 537,
      },
    },
  };

  const questions = [
    {
      id: 0,
      title: t('uxuiDesignQuestion0'),
      details:
        t('uxuiDesignDetailsQuestion0'),
    },
    {
      id: 1,
      title: t('uxuiDesignQuestion1'),
      details:
        t('uxuiDesignDetailsQuestion1'),
    },
    {
      id: 2,
      title: t('uxuiDesignQuestion2'),
      details:
        t('uxuiDesignDetailsQuestion2'),
    },
    {
      id: 3,
      title: t('uxuiDesignQuestion3'),
      details:
        t('uxuiDesignDetailsQuestion3'),
    },
    {
      id: 4,
      title: t('uxuiDesignQuestion4'),
      details:
        t('uxuiDesignDetailsQuestion4'),
    },
  ];

  const FAQUxUiDesign = {
    titlePart1: t('uxuiDesignFAQUxUiDesignTitlePart1'),
    titlePart2: t('uxuiDesignFAQUxUiDesignTitlePart2'),
    questions,
  };

  return {
    bannerUxUiDesign,
    innovateDesign,
    whatIsUxUiDesign,
    sliderUxUiTechnologies,
    uniqueDesignAdaptedToYourBrand,
    unforgetableExperiences,
    FAQUxUiDesign,
  };
};

export default useUxUiDesign;
