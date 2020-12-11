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

const IncreaseClics = () => (
  <CallToActionSection
    titlePart1="Incremente tus ventas, "
    titlePart2="a un clic de distancia"
    description="Diseñamos y desarrollamos tu tienda online de acuerdo a tus necesidades, no te quedes fuera del mundo digital"
    image="/assets/images/incrementa-ventas.png"
    backgroundImage="/assets/images/figures/webDevelopment/bloque6.png"
    heightImage={944}
    imageSizes={imageSizes}
  />
);

export default IncreaseClics;
