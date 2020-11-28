import React from 'react';
import CallToActionSection from '#Components/CallToActionSection';

const imageSizes = {
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
};

const ApplicationAtYourFingertips = () => (
  <CallToActionSection
    titlePart1="El mundo de las"
    titlePart2=" aplicaciones móviles "
    titlePart3="al alcance de tu mano"
    description=" El futuro de las aplicaciones móviles para ti, te apoyamos durante
  todo el proceso"
    image="/assets/images/aplicaciones-moviles-al-alcance-de-tu-mano.png"
    backgroundImage="/assets/images/figures/webDevelopment/bloque5.png"
    heightImage={1019}
    imageSizes={imageSizes}
  />
);

export default ApplicationAtYourFingertips;
