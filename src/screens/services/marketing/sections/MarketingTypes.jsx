import React from 'react';
import SectionApplicationTypes from '#Components/SectionApplicationTypes';
import { marketingTypes } from '#constants/services/Marketing';

const MobileApplicationTypes = () => (
  <SectionApplicationTypes
    sectionTitle={marketingTypes.title}
    typesApplication={marketingTypes.typesApplication}
    image={marketingTypes.image}
    imageSizes={marketingTypes.imageSizes}
    backgroundPrimayLight={marketingTypes.backgroundPrimayLight}
  />
);

export default MobileApplicationTypes;
