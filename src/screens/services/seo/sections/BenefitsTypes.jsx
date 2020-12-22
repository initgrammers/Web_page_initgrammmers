import React from 'react';
import SectionApplicationTypes from '#Components/SectionApplicationTypes';
import { seoBenefitsTypes } from '#app/constants/services/seo';

const SEOBenefitsTypes = () => (
  <SectionApplicationTypes
    sectionTitle={seoBenefitsTypes.title}
    typesApplication={seoBenefitsTypes.typesApplication}
    image={seoBenefitsTypes.image}
    imageSizes={seoBenefitsTypes.imageSizes}
    backgroundPrimayLight={seoBenefitsTypes.backgroundPrimayLight}
    backgroundGray={seoBenefitsTypes.backgroundGray}
  />
);

export default SEOBenefitsTypes;
