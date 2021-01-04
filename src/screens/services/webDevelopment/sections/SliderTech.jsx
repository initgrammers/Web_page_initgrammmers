import SliderTechnologies from '#Components/SliderTechnologies';
import { sliderWebTechnologies } from '#constants/services/webDevelopment';

const SliderTech = () => (
  <SliderTechnologies
    title={sliderWebTechnologies.title}
    technologies={sliderWebTechnologies.technologies}
  />
);

export default SliderTech;
