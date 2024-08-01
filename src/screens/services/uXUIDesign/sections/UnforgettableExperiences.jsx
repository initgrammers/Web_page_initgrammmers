import CallToActionSection from '#Components/CallToActionSection';
import useUxUiDesign from '#constants/services/UxUiDesign';

const UnforgettableExperiences = () => {
  const { unforgetableExperiences } = useUxUiDesign();
  return (
    <CallToActionSection
      titlePart1={unforgetableExperiences.titlePart1}
      titlePart2={unforgetableExperiences.titlePart2}
      description={unforgetableExperiences.description}
      image={unforgetableExperiences.image}
      backgroundImage={unforgetableExperiences.backgroundImage}
      heightImage={unforgetableExperiences.heightImage}
      imageSizes={unforgetableExperiences.imageSizes}
    />
  );
};

export default UnforgettableExperiences;
