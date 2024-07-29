import React from 'react';
import SectionApplicationTypes from '#Components/SectionApplicationTypes';
import { partnershipModelsBenefitsTypes } from '#app/constants/services/partnershipModels';

const PartnershipModelsBenefitsTypes = () => (
  <SectionApplicationTypes
    backgroundImage={partnershipModelsBenefitsTypes.backgroundImage}
    heightImage={partnershipModelsBenefitsTypes.heightImage}
    sectionTitle={partnershipModelsBenefitsTypes.title}
    typesApplication={partnershipModelsBenefitsTypes.typesApplication}
    image={partnershipModelsBenefitsTypes.image}
    imageSizes={partnershipModelsBenefitsTypes.imageSizes}
    backgroundGray={partnershipModelsBenefitsTypes.backgroundGray}
  />
);

export default PartnershipModelsBenefitsTypes;
