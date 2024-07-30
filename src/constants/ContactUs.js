const { useTranslation } = require('react-i18next');

const useContactUs = () => {
  const { t } = useTranslation();

  const bannerContactUsPage = {
    backgroundImage:
      'https://res.cloudinary.com/initgrammers/image/upload/v1609856760/servicios/marketing-digital/figures/bloque1.png',
    heightImage: 664,
    titlePart1: 'Contáctanos',
    description:
      'En Initgrammers estamos comprometidos a ofrecerte el mejor servicio. Si tienes preguntas, necesitas más información o deseas comenzar un proyecto con nosotros, no dudes en ponerte en contacto. ¡Estamos aquí para ayudarte a alcanzar tus metas!',
    image:
      'https://res.cloudinary.com/initgrammers/image/upload/v1609856733/servicios/marketing-digital/marketing-diseno-digital-ecuador.png',
  };

  return {
    bannerContactUsPage,
  };
};

export default useContactUs;
