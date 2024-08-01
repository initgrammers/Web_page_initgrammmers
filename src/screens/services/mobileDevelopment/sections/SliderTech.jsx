import SliderTechnologies from '#Components/SliderTechnologies';
import useMobileDevelopment from '#app/constants/services/MobileDevelopment';

const SliderTech = () => {
  const { technologiesMobileApplication } = useMobileDevelopment();
  return (
    <SliderTechnologies
      title={technologiesMobileApplication.title}
      technologies={technologiesMobileApplication.technologies}
      backgroundImage={technologiesMobileApplication.backgroundImage}
      heightImage={technologiesMobileApplication.heightImage}
    />
  );
};

export default SliderTech;
