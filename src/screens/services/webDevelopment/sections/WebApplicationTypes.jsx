import React from 'react';
import SectionApplicationTypes from '#Components/SectionApplicationTypes';
import useWebDevelopment from '#constants/services/webDevelopment';

const MobileApplicationTypes = () => {
  const { webApplicationTypes } = useWebDevelopment();

  return (
    <SectionApplicationTypes
      sectionTitle={webApplicationTypes.title}
      typesApplication={webApplicationTypes.typesApplication}
      image={webApplicationTypes.image}
      imageSizes={webApplicationTypes.imageSizes}
      backgroundPrimaryLight={webApplicationTypes.backgroundPrimaryLight}
    />
  );
};
export default MobileApplicationTypes;
