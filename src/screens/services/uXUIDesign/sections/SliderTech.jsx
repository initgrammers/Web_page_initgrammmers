import SliderTechnologies from '#Components/SliderTechnologies';
import { UxUiTechnologies } from '#constants/services/UxUiDesign';

const SliderTech = () => (
  <SliderTechnologies
    backgroundImage="/assets/images/figures/uxUiDesign/bloque4.png"
    heightImage={364}
    title="Tecnologías con las que trabajamos para el diseño UX UI"
    technologies={UxUiTechnologies}
  />
);

export default SliderTech;
