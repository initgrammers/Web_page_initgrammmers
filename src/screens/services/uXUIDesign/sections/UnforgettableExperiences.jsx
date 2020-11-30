import React from 'react';
import CallToActionSection from '#Components/CallToActionSection';

const imageSizes = {
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
};

const UnforgettableExperiences = () => (
  <CallToActionSection
    titlePart1="Experiencias inolvidables con alto impacto, "
    titlePart2="mundo del internet"
    description=" Diseñamos un producto de principio a fin, te apoyamos durante todo el camino "
    image="/assets/images/experiencias-inolvidables-con-alto-impacto.png"
    backgroundImage="/assets/images/figures/uxUiDesign/bloque5.png"
    heightImage={1046}
    imageSizes={imageSizes}
  />
);

export default UnforgettableExperiences;
