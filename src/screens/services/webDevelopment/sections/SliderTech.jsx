import SliderTechnologies from '#Components/SliderTechnologies';
import useWebDevelopment from '#constants/services/webDevelopment';

const SliderTech = () => {
  const {sliderWebTechnologies} = useWebDevelopment();
  return(
    <SliderTechnologies
      title={sliderWebTechnologies.title}
      technologies={sliderWebTechnologies.technologies}
    />
  );
}
export default SliderTech;
