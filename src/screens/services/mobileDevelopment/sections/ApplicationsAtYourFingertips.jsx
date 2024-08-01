import React from 'react';
import CallToActionSection from '#Components/CallToActionSection';
import useMobileDevelopment from '#constants/services/MobileDevelopment';

const ApplicationAtYourFingertips = () => {
  const { applicationsInYourFingertips } = useMobileDevelopment();
  return (
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
};

export default ApplicationAtYourFingertips;
