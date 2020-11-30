import InformationWithImageSection from '#Components/InformationWithImageSection';

const imageSizes = {
  xs: {
    width: 288,
    height: 229,
  },
  sm: {
    width: 412,
    height: 385,
  },
  md: {
    width: 544,
    height: 509,
  },
  lg: {
    width: 504,
    height: 472,
  },
};

const DesignAdaptedToYourBrand = () => (
  <InformationWithImageSection
    title="Diseño único, adaptado a tu marca"
    description="Creamos experiencias con alto significado, pensando en los usuarios de los productos y en el proceso que deben seguir para utilizarlo, te ayudamos a desarrollar un plan para ejecutar el proyecto que tienes en mente. "
    image="/assets/images/diseno-unico-adaptado-a-tu-marca.png"
    imageSizes={imageSizes}
    isImageRight={false}
    backgroundSecondary
    descriptionBlack
  />
);

export default DesignAdaptedToYourBrand;
