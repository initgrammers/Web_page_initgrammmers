import React from 'react';
import CallToActionSection from '#Components/CallToActionSection';
import { applicationsInYourFingertips } from '#constants/services/MobileDevelopment';

const ApplicationAtYourFingertips = () => (
  <CallToActionSection
    titlePart1={applicationsInYourFingertips.titlePart1}
    titlePart2={applicationsInYourFingertips.titlePart2}
    titlePart3={applicationsInYourFingertips.titlePart3}
    description={applicationsInYourFingertips.description}
    image={applicationsInYourFingertips.image}
    backgroundImage={applicationsInYourFingertips.backgroundImage}
    heightImage={applicationsInYourFingertips.heightImage}
    imageSizes={applicationsInYourFingertips.imageSizes}
  />
);

export default ApplicationAtYourFingertips;
