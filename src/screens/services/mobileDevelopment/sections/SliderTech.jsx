import SliderTechnologies from '#Components/SliderTechnologies';
import { technologiesMobileApplication } from '#app/constants/services/MobileDevelopment';

const SliderTech = () => (
  <SliderTechnologies
    title={technologiesMobileApplication.title}
    technologies={technologiesMobileApplication.technologies}
    backgroundImage={technologiesMobileApplication.backgroundImage}
    heightImage={technologiesMobileApplication.heightImage}
  />
);

export default SliderTech;
