import React from 'react';
import SectionApplicationTypes from '#Components/SectionApplicationTypes';
import { seoBenefitsTypes } from '#app/constants/services/seo';

const SEOBenefitsTypes = () => (
  <SectionApplicationTypes
    backgroundImage={seoBenefitsTypes.backgroundImage}
    heightImage={seoBenefitsTypes.heightImage}
    sectionTitle={seoBenefitsTypes.title}
    typesApplication={seoBenefitsTypes.typesApplication}
    image={seoBenefitsTypes.image}
    imageSizes={seoBenefitsTypes.imageSizes}
    backgroundGray={seoBenefitsTypes.backgroundGray}
  />
);

export default SEOBenefitsTypes;
