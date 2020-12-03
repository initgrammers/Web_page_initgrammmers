import SliderTechnologies from '#Components/SliderTechnologies';
import { sliderUxUiTechnologies } from '#constants/services/UxUiDesign';

const SliderTech = () => (
  <SliderTechnologies
    backgroundImage={sliderUxUiTechnologies.backgroundImage}
    heightImage={sliderUxUiTechnologies.heightImage}
    title={sliderUxUiTechnologies.title}
    technologies={sliderUxUiTechnologies.technologies}
  />
);

export default SliderTech;
