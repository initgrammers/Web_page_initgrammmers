import { useTranslations } from 'next-intl';

const useProjects = () => {
  const t = useTranslations('Index');

  const bannerProjects = {
    backgroundImage:
      'https://res.cloudinary.com/initgrammers/image/upload/v1609854733/servicios/seo/figures/bloque5.png',
    heightImage: 1060,
    titlePart1: t('projectsBannerTitlePart1'),
    titlePart2: t('projectsBannerTitlePart2'),
    description: t('projectsBannerDescription'),
    image:
      'https://res.cloudinary.com/initgrammers/image/upload/v1611682178/quienes-somos/quienes-somos.png',
    backgroundPrimaryFade: true,
  };

  const detailsProjectsOptions = [
    {
      id: 1,
      title: t('detailsProjectsOptionsTitle1'),
      description: t('detailsProjectsOptionsDescription1'),
    },
    {
      id: 2,
      title: t('detailsProjectsOptionsTitle2'),
      description: t('detailsProjectsOptionsDescription2'),
    },
    {
      id: 3,
      title: t('detailsProjectsOptionsTitle3'),
      description: t('detailsProjectsOptionsDescription3'),
    },
    {
      id: 4,
      title: t('detailsProjectsOptionsTitle4'),
      description: t('detailsProjectsOptionsDescription4'),
    },
  ];

  const detailsProjects = {
    backgroundImage:
      'https://res.cloudinary.com/initgrammers/image/upload/v1611679369/quienes-somos/figures/bloque1.png',
    heightImage: 632,
    title: t('detailsProjectsTitle'),
    detailsProjectsOptions,
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
    backgroundPrimaryFade: false,
    titlePrimaryMain: true,
    descriptionBlack: true,
  };

  const moreDetailsProjectsOptions = [
    {
      id: 1,
      title: t('moreDetailsProjectsOptionsTitle1'),
      description: t('moreDetailsProjectsOptionsDescription1'),
    },
    {
      id: 2,
      title: t('moreDetailsProjectsOptionsTitle2'),
      description: t('moreDetailsProjectsOptionsDescription2'),
    },
    {
      id: 3,
      title: t('moreDetailsProjectsOptionsTitle3'),
      description: t('moreDetailsProjectsOptionsDescription3'),
    },
    {
      id: 4,
      title: t('moreDetailsProjectsOptionsTitle4'),
      description: t('moreDetailsProjectsOptionsDescription4'),
    },
  ];

  const moreDetailsProjects = {
    backgroundImage:
      'https://res.cloudinary.com/initgrammers/image/upload/v1607008550/LandingPage/figures/bloque1.png',
    heightImage: 632,
    title: t('moreDetailsProjectsTitle'),
    moreDetailsProjectsOptions,
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
    isImageRight: true,
    backgroundPrimaryFade: true,
    titlePrimaryMain: true,
    descriptionBlack: true,
  };

  const cardsPricing = [
    {
      id: 1,
      title: t('cardsPricingTitle1'),
      subtitle: t('cardsPricingSubtitle1'),
      price: t('cardsPricingPrice1'),
      titleOptions: t('cardsPricingTitleOptions1'),
      options: [
        t('cardsPricing1Option1'),
        t('cardsPricing1Option2'),
        t('cardsPricing1Option3'),
        t('cardsPricing1Option4'),
        t('cardsPricing1Option5'),
      ],
      buttonText: t('cardsPricingButtonText1'),
      highlightOption: false,
    },
    {
      id: 2,
      title: t('cardsPricingTitle2'),
      subtitle: t('cardsPricingSubtitle2'),
      price: t('cardsPricingPrice2'),
      titleOptions: t('cardsPricingTitleOptions2'),
      options: [
        t('cardsPricing2Option1'),
        t('cardsPricing2Option2'),
        t('cardsPricing2Option3'),
        // t('cardsPricing2Option4'),
        // t('cardsPricing2Option5'),
      ],
      buttonText: t('cardsPricingButtonText1'),
      highlightOption: true,
    },
    {
      id: 3,
      title: t('cardsPricingTitle3'),
      subtitle: t('cardsPricingSubtitle3'),
      price: t('cardsPricingPrice3'),
      titleOptions: t('cardsPricingTitleOptions2'),
      options: [
        t('cardsPricing2Option1'),
        t('cardsPricing2Option2'),
        t('cardsPricing2Option3'),
        // t('cardsPricing2Option4'),
        // t('cardsPricing2Option5'),
      ],
      buttonText: t('cardsPricingButtonText1'),
      highlightOption: false,
    },
    // {
    //   id: 4,
    //   title: t('cardsPricingTitle4'),
    //   subtitle: t('cardsPricingSubtitle4'),
    //   price: t('cardsPricingPrice4'),
    //   titleOptions: t('cardsPricingTitleOptions2'),
    //   options: [
    //     t('cardsPricing2Option1'),
    //     t('cardsPricing2Option2'),
    //     t('cardsPricing2Option3'),
    //     t('cardsPricing2Option4'),
    //     t('cardsPricing2Option5'),
    //   ],
    //   buttonText: t('cardsPricingButtonText1'),
    //   highlightOption: false,
    // },
  ];

  const pricingProjects = {
    title1: t('pricingProjectsTitle1'),
    title2: t('pricingProjectsTitle2'),
    description: t('pricingProjectsDescription'),
    backgroundImage:
      'https://res.cloudinary.com/initgrammers/image/upload/v1606839723/LandingPage/figures/bloque2.png',
    heightImage: 434,
    // backgroundColor: theme.palette.primary.fade,
    cardsPricing,
  };

  return {
    bannerProjects,
    detailsProjects,
    moreDetailsProjects,
    pricingProjects,
  };
};

export default useProjects;
