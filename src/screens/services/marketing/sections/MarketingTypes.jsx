import React from 'react';
import SectionApplicationTypes from '#Components/SectionApplicationTypes';
import { marketingTypes } from '#app/constants/services/marketing';

const MobileApplicationTypes = () => (
  <SectionApplicationTypes
    sectionTitle={marketingTypes.title}
    typesApplication={marketingTypes.typesApplication}
    image={marketingTypes.image}
    imageSizes={marketingTypes.imageSizes}
    backgroundPrimaryLight={marketingTypes.backgroundPrimaryLight}
    backgroundGray={marketingTypes.backgroundGray}
  />
);

export default MobileApplicationTypes;
