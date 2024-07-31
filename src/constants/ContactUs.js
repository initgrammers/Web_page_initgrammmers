const { useTranslation } = require('react-i18next');

const useContactUs = () => {
  const { t } = useTranslation();

  const bannerContactUsPage = {
    backgroundImage:
      'https://res.cloudinary.com/initgrammers/image/upload/v1609856760/servicios/marketing-digital/figures/bloque1.png',
    heightImage: 664,
    titlePart1: t('contactUsBannerTitle'),
    description: t('contactUsDescription'),
    image:
      'https://res.cloudinary.com/initgrammers/image/upload/v1609856733/servicios/marketing-digital/marketing-diseno-digital-ecuador.png',
  };

  return {
    bannerContactUsPage,
  };
};

export default useContactUs;
