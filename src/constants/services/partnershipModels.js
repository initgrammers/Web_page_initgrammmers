import { useTranslations } from 'next-intl';

const usePartnershipModels = () => {
  const t = useTranslations('Index');

  const bannerPartnershipModels = {
    backgroundImage:
      'https://res.cloudinary.com/initgrammers/image/upload/v1609854733/servicios/seo/figures/bloque1.png',
    heightImage: 696,
    title: t('partnershipModelsBannerTitle'),
    description: t('partnershipModelsBannerDescription'),
    image:
      'https://res.cloudinary.com/initgrammers/image/upload/v1722371643/imagen_dev40u.png',
    buttonColor: 'primary',
  };

  const partnershipModelsBenefitsTypes = {
    backgroundImage:
      'https://res.cloudinary.com/initgrammers/image/upload/v1609854733/servicios/seo/figures/bloque3.png',
    heightImage: 598,
    backgroundGray: true,
    title: t('partnershipModelsBenefitsTypesTitle'),
    subTitle: t('partnershipModelsBenefitsTypesSubTitle'),
    description: t('partnershipModelsBenefitsTypesDescription'),
    image:
      'https://res.cloudinary.com/initgrammers/image/upload/v1609854277/servicios/seo/beneficios-seo.png',
    imageSizes: {
      xs: {
        width: 500,
        height: 500,
      },
      sm: {
        width: 414,
        height: 414,
      },
      md: {
        width: 414,
        height: 414,
      },
      lg: {
        width: 504,
        height: 504,
      },
    },
  };

  const importancePartnershipModels = {
    backgroundImage:
      'https://res.cloudinary.com/initgrammers/image/upload/v1609854733/servicios/seo/figures/bloque2.png',
    heightImage: 516,
    title: t('partnershipModelsImportanceTitle'),
    description:
      t('partnershipModelsImportanceDescription'),
    titlePrimaryMain: true,
    descriptionBlack: true,
    image:
      'https://res.cloudinary.com/initgrammers/image/upload/v1609854276/servicios/seo/importancia-seo.png',
    imageSizes: {
      xs: {
        width: 288,
        height: 222,
      },
      sm: {
        width: 552,
        height: 319,
      },
      md: {
        width: 552,
        height: 319,
      },
      lg: {
        width: 504,
        height: 388,
      },
    },
    isImageRight: false,
  };

  const whatIsPartnershipModels = {
    backgroundImage:
      'https://res.cloudinary.com/initgrammers/image/upload/v1609854733/servicios/seo/figures/bloque4.png',
    heightImage: 632,
    title: t('partnershipModelsWhatIsPartnershipModelsTitle'),
    description:
      t('partnershipModelsWhatIsPartnershipModelsDescription'),
    titlePrimaryMain: true,
    descriptionBlack: true,
    image:
      'https://res.cloudinary.com/initgrammers/image/upload/v1722371642/Collab-rafiki_1_p5aoz5.png',
    imageSizes: {
      xs: {
        width: 288,
        height: 288,
      },
      sm: {
        width: 414,
        height: 414,
      },
      md: {
        width: 414,
        height: 414,
      },
      lg: {
        width: 504,
        height: 504,
      },
    },
    isImageRight: false,
  };

  const becomeYourTeam = {
    backgroundImage:
      'https://res.cloudinary.com/initgrammers/image/upload/v1609854733/servicios/seo/figures/bloque5.png',
    heightImage: 732,
    title: t('partnershipModelsBecomeYourTeamTitle'),
    description:
      t('partnershipModelsBecomeYourTeamDescription'),
    titlePrimaryMain: true,
    descriptionBlack: true,
    image:
      'https://res.cloudinary.com/initgrammers/image/upload/v1722371642/Company-amico_1_qm737a.png',
    imageSizes: {
      xs: {
        width: 288,
        height: 288,
      },
      sm: {
        width: 414,
        height: 414,
      },
      md: {
        width: 414,
        height: 414,
      },
      lg: {
        width: 504,
        height: 504,
      },
    },
    isImageRight: true,
    backgroundPrimaryFade: true,
  };

  const imageSizesOportunitiesPartnershipModels = {
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
  const oportunitiePartnershipModels = {
    titlePart1: t('partnershipModelsOportunitieTitlePart1'),
    titlePart2: t('partnershipModelsOportunitieTitlePart2'),
    description:
      t('partnershipModelsOportunitieDescription'),
    image:
      'https://res.cloudinary.com/initgrammers/image/upload/v1609854277/servicios/seo/oportunidades-para-negocio.png',
    backgroundImage:
      'https://res.cloudinary.com/initgrammers/image/upload/v1609856760/servicios/marketing-digital/figures/bloque4.png',
    heightImage: 895,
    imageSizes: imageSizesOportunitiesPartnershipModels,
  };

  const questions = [
    {
      id: 0,
      title: t('question2'),
      details:
        t('detailsQuestion2'),
    },
    {
      id: 1,
      title: t('question6'),
      details:
        t('detailsQuestion6'),
    },
  ];

  const FAQPartnershipModels = {
    titlePart1: t('partnershipModelsFAQTitlePart1'),
    titlePart2: t('partnershipModelsFAQTitlePart2'),
    questions,
  };

  return {
    bannerPartnershipModels,
    partnershipModelsBenefitsTypes,
    importancePartnershipModels,
    whatIsPartnershipModels,
    becomeYourTeam,
    oportunitiePartnershipModels,
    questions,
    FAQPartnershipModels,
  };
};

export default usePartnershipModels;
