import React from 'react';
import SectionApplicationTypes from '#Components/SectionApplicationTypes';
import useMobileDevelopment from '#constants/services/MobileDevelopment';

const MobileApplicationTypes = () => { 
  const { mobileApplicationTypes } = useMobileDevelopment();
  return (
    <SectionApplicationTypes
      sectionTitle={mobileApplicationTypes.title}
      typesApplication={mobileApplicationTypes.typesApplication}
      image={mobileApplicationTypes.image}
      imageSizes={mobileApplicationTypes.imageSizes}
    />
  );
};

export default MobileApplicationTypes;
