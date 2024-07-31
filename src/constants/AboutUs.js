import { useTranslation } from 'react-i18next';

const teamPlayer = [
  {
    name: 'Henry Villavicencio',
    title: 'Chief Executive Officer',
    image:
      'https://res.cloudinary.com/initgrammers/image/upload/v1611680064/quienes-somos/henry-villavicencio.png',
    href: 'https://ec.linkedin.com/in/henry-villavicencio-catota-a7b76516b',
  },
  {
    name: 'Andrea Jurado',
    title: 'Chief Project Officer',
    image:
      'https://res.cloudinary.com/initgrammers/image/upload/v1611680063/quienes-somos/andrea-jurado.png',
    href: 'https://www.linkedin.com/in/andreajurado-n/',
  },
  // {
  //   name: 'Oscar España',
  //   title: 'Diseñador UI/UX',
  //   image:
  //     'https://res.cloudinary.com/initgrammers/image/upload/v1611680064/quienes-somos/oscar-espana.png',
  //   href: 'https://www.linkedin.com/in/oscar-españa-56aa77172/',
  // },
  // {
  //   name: 'Cristian Ronda',
  //   title: 'Desarrollador Frontend',
  //   image:
  //     'https://res.cloudinary.com/initgrammers/image/upload/v1611680063/quienes-somos/cristian-ronda.png',
  //   href: 'https://www.linkedin.com/in/cristian-ronda-169414180/',
  // },
  // {
  //   name: 'Julio Gonzalez',
  //   title: 'Desarrollador Backend',
  //   image:
  //     'https://res.cloudinary.com/initgrammers/image/upload/v1611680064/quienes-somos/julio-gonzalez.png',
  //   href: 'https://www.linkedin.com/in/julio-gonzález-8a64a3199/',
  // },
  {
    name: 'Juan Carlos Guaña',
    title: 'Chief Operating Officer',
    image:
      'https://res.cloudinary.com/initgrammers/image/upload/v1611680064/quienes-somos/juan-carlos-guana.png',
    href: 'https://www.linkedin.com/in/juan-carlos-guana/',
  },
];

const useAboutUs = () => {
  const { t } = useTranslation();

  const mision = {
    title: t('misionTitle'),
    description: t('misionDescription'),
    image:
      'https://res.cloudinary.com/initgrammers/image/upload/v1611680188/quienes-somos/mision.png',
    colorTitleIsSecondary: false,
  };

  const vision = {
    title: t('visionTitle'),
    description: t('visionDescription'),
    image:
      'https://res.cloudinary.com/initgrammers/image/upload/v1611680177/quienes-somos/vision.png',
    colorTitleIsSecondary: true,
  };

  const valores = [
    {
      description: t('ourValues1'),
      image:
        'https://res.cloudinary.com/initgrammers/image/upload/v1611680184/quienes-somos/difundir-conocimiento.png',
      isBorderSecondary: true,
    },
    {
      description: t('ourValues2'),
      image:
        'https://res.cloudinary.com/initgrammers/image/upload/v1611680178/quienes-somos/ambiente-laboral-de-calidad.png',
      isBorderSecondary: false,
    },
    {
      description: t('ourValues3'),
      image:
        'https://res.cloudinary.com/initgrammers/image/upload/v1611680176/quienes-somos/soluciones-responsables.png',
      isBorderSecondary: true,
    },
    {
      description: t('ourValues4'),
      image:
        'https://res.cloudinary.com/initgrammers/image/upload/v1611680186/quienes-somos/integridad.png',
      isBorderSecondary: false,
    },
    {
      description: t('ourValues5'),
      image:
        'https://res.cloudinary.com/initgrammers/image/upload/v1611680177/quienes-somos/trabajar-con-pasion.png',
      isBorderSecondary: true,
    },
    {
      description: t('ourValues6'),
      image:
        'https://res.cloudinary.com/initgrammers/image/upload/v1611680182/quienes-somos/aprender-y-perseverar.png',
      isBorderSecondary: false,
    },
  ];

  const bannerAboutUs = {
    backgroundImage:
      'https://res.cloudinary.com/initgrammers/image/upload/v1611679369/quienes-somos/figures/bloque1.png',
    heightImage: 664,
    title: t('aboutUsBannerTitle'),
    description: t('aboutUsBannerSubtitle'),
    image:
      'https://res.cloudinary.com/initgrammers/image/upload/v1611682178/quienes-somos/quienes-somos.png',
  };

  const misionVision = {
    mision,
    vision,
    backgroundImage:
      'https://res.cloudinary.com/initgrammers/image/upload/v1611679369/quienes-somos/figures/bloque2.png',
    heightImage: 388,
  };

  const team = {
    teamPlayer,
    title: 'Equipo fundador',
    backgroundImage:
      'https://res.cloudinary.com/initgrammers/image/upload/v1611679369/quienes-somos/figures/bloque3.png',
    heightImage: 574,
  };

  const valoresInitgrammers = {
    valores,
    title: t('ourValuesTitle'),
    backgroundImage:
      'https://res.cloudinary.com/initgrammers/image/upload/v1611679369/quienes-somos/figures/bloque4.png',
    heightImage: 648,
  };

  return {
    bannerAboutUs,
    misionVision,
    valoresInitgrammers,
    team,
  };
};

export default useAboutUs;
