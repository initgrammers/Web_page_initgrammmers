import { useTranslations } from 'next-intl';

const useSoftwareIa = () => {
  const t = useTranslations('Index');

  const bannerSoftwareIa = {
    backgroundImage:
      'https://res.cloudinary.com/initgrammers/image/upload/v1750696661/servicios/software-ia/figures/bloque1.png',
    heightImage: 696,
    title: t('softwareIaBannerTitle'),
    description: t('softwareIaBannerDescription'),
    image:
      'https://res.cloudinary.com/initgrammers/image/upload/v1750437181/servicios/software-ia/software-ia.png',
    buttonColor: 'primary',
  };

  const softwareIaDevelopment = {
    backgroundImage:
      'https://res.cloudinary.com/initgrammers/image/upload/v1750696661/servicios/software-ia/figures/bloque2.png',
    heightImage: 598,
    backgroundGray: true,
    title: t('softwareIaDevelopmentTitle'),
    description: t('softwareIaDevelopmentDescription'),
    image:
      'https://res.cloudinary.com/initgrammers/image/upload/v1750436753/servicios/software-ia/resultados-inteligentes.png',
    imageSizes: {
      xs: { width: 500, height: 500 },
      sm: { width: 414, height: 414 },
      md: { width: 414, height: 414 },
      lg: { width: 504, height: 504 },
    },
  };

  const howWeApply = {
    backgroundImage:
      'https://res.cloudinary.com/initgrammers/image/upload/v1611679369/quienes-somos/figures/bloque3.png',
    heightImage: 870,
    title: t('softwareIaHowWeApplyTitle'),
    image:
      'https://res.cloudinary.com/initgrammers/image/upload/v1750436659/servicios/software-ia/desarrollo-ia.png',
    cta: t('softwareIaCtaTitle'),
    items: [
      {
        icon:
          'https://res.cloudinary.com/initgrammers/image/upload/v1750436838/servicios/software-ia/analisis-inteligentes.svg',
        title: t('softwareIaRequirementsTitle'),
        description: t('softwareIaRequirementsDescription'),
        color: 'green',
      },
      {
        icon:
          'https://res.cloudinary.com/initgrammers/image/upload/v1750436835/servicios/software-ia/optimizacion-digital.svg',
        title: t('softwareIaCodeGenTitle'),
        description: t('softwareIaCodeGenDescription'),
        color: 'pink',
      },
      {
        icon:
          'https://res.cloudinary.com/initgrammers/image/upload/v1750436833/servicios/software-ia/pruebas-automaticas.svg',
        title: t('softwareIaTestingTitle'),
        description: t('softwareIaTestingDescription'),
        color: 'green',
      },
    ],
  };

  const softwareIaFinal = {
    title1: t('softwareIaFinalTitle1'),
    title2: t('softwareIaFinalTitle2'),
    description: t('softwareIaFinalDescription'),
    backgroundImage:
      'https://res.cloudinary.com/initgrammers/image/upload/v1609856761/servicios/marketing-digital/figures/bloque5.png',
    heightImage: 932,
    image:
      'https://res.cloudinary.com/initgrammers/image/upload/v1609856733/servicios/marketing-digital/incrementa-ventas.png',
    imageSizes: {
      xs: { width: 288, height: 235 },
      sm: { width: 552, height: 449 },
      md: { width: 544, height: 443 },
      lg: { width: 608, height: 496 },
    },
  };
  const questions = [
    {
      id: 0,
      title: t('mobileDevelopmentQuestion0'),
      details: t('mobileDevelopmentDetailsQuestion0'),
    },
    {
      id: 1,
      title: t('mobileDevelopmentQuestion1'),
      details: t('mobileDevelopmentDetailsQuestion1'),
    },
    {
      id: 2,
      title: t('mobileDevelopmentQuestion2'),
      details: t('mobileDevelopmentDetailsQuestion2'),
    },
    {
      id: 3,
      title: t('mobileDevelopmentQuestion3'),
      details: t('mobileDevelopmentDetailsQuestion3'),
    },
    {
      id: 4,
      title: t('mobileDevelopmentQuestion4'),
      details: t('mobileDevelopmentDetailsQuestion4'),
    },
    {
      id: 5,
      title: t('mobileDevelopmentQuestion5'),
      details: t('mobileDevelopmentDetailsQuestion5'),
    },

  ];
  

  return {
    bannerSoftwareIa,
    softwareIaDevelopment,
    howWeApply,
    softwareIaFinal,
    questions,
  };
};

export default useSoftwareIa;
