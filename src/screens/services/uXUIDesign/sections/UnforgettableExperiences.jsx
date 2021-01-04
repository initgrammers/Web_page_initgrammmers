import CallToActionSection from '#Components/CallToActionSection';
import { unforgetableExperiences } from '#constants/services/UxUiDesign';

const UnforgettableExperiences = () => (
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

export default UnforgettableExperiences;
