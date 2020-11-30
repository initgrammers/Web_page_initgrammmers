import InformationWithImageSection from '#Components/InformationWithImageSection';

const imageSizes = {
  xs: {
    width: 288,
    height: 288,
  },
  sm: {
    width: 552,
    height: 552,
  },
  md: {
    width: 544,
    height: 552,
  },
  lg: {
    width: 503,
    height: 503,
  },
};

const InnovativeDesign = () => (
  <InformationWithImageSection
    backgroundImage="/assets/images/figures/uxUiDesign/bloque2.png"
    heightImage={631}
    title="Diseño innovador, experiencia única"
    description="Creamos experiencias que se grabarán en la mente de sus usuarios, un máximo impacto y un diseño significativo para sus proyectos. Entregamos el mejor producto a sus manos, diseñados a través de procesos y metodologías que le garantizarán el éxito en sus proyectos."
    image="/assets/images/diseno-innovador.png"
    imageSizes={imageSizes}
    isImageRight
    backgroundPrimayLight
  />
);

export default InnovativeDesign;
