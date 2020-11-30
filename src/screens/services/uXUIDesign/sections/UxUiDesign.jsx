import InformationWithImageSection from '#Components/InformationWithImageSection';

const imageSizes = {
  xs: {
    width: 288,
    height: 194,
  },
  sm: {
    width: 552,
    height: 372,
  },
  md: {
    width: 544,
    height: 367,
  },
  lg: {
    width: 504,
    height: 340,
  },
};

const UxUiDesign = () => (
  <InformationWithImageSection
    backgroundImage="/assets/images/figures/uxUiDesign/bloque3.png"
    heightImage={468}
    title="¿Qué es el diseño UX UI? "
    description="El diseño UI se encarga de la apariencia , presentación e interactividad con el usuario, Mientras UX  permite entender al usuario y mejorar la experiencia al utilizar tu software o sistema. "
    image="/assets/images/que-es-diseno-ui-ux.png"
    imageSizes={imageSizes}
    isImageRight
    titlePrimaryMain
    descriptionBlack
  />
);

export default UxUiDesign;
