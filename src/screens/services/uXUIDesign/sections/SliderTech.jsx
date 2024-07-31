import SliderTechnologies from '#Components/SliderTechnologies';
import useUxUiDesign from '#constants/services/UxUiDesign';

const SliderTech = () => {
  const { sliderUxUiTechnologies } = useUxUiDesign();
  return (
    <SliderTechnologies
      backgroundImage={sliderUxUiTechnologies.backgroundImage}
      heightImage={sliderUxUiTechnologies.heightImage}
      title={sliderUxUiTechnologies.title}
      technologies={sliderUxUiTechnologies.technologies}
    />
  );
}

export default SliderTech;
