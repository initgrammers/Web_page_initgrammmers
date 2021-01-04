import React from 'react';
import SectionApplicationTypes from '#Components/SectionApplicationTypes';
import { mobileApplicationTypes } from '#constants/services/MobileDevelopment';

const MobileApplicationTypes = () => (
  <SectionApplicationTypes
    sectionTitle={mobileApplicationTypes.title}
    typesApplication={mobileApplicationTypes.typesApplication}
    image={mobileApplicationTypes.image}
    imageSizes={mobileApplicationTypes.imageSizes}
  />
);

export default MobileApplicationTypes;
