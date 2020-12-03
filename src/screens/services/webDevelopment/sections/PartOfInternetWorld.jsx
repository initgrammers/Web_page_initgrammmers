import React from 'react';
import CallToActionSection from '#Components/CallToActionSection';

const imageSizes = {
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

const PartOfInternetWorld = () => (
  <CallToActionSection
    titlePart1="Forma parte "
    titlePart2="del mundo del internet"
    titlePart3=", empieza hoy"
    description=" El futuro del desarrollo web para ti, te apoyamos durante
  todo el proceso"
    image="/assets/images/forma-parte-del-mundo-del-internet-Initgrammers.png"
    backgroundImage="/assets/images/figures/webDevelopment/bloque6.png"
    heightImage={944}
    imageSizes={imageSizes}
  />
);

export default PartOfInternetWorld;
