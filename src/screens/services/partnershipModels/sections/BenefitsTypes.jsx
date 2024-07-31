import React from 'react';
import SectionApplicationTypes from '#Components/SectionApplicationTypes';
import usePartnershipModels from '#app/constants/services/partnershipModels';

const PartnershipModelsBenefitsTypes = () => {
  const { partnershipModelsBenefitsTypes } = usePartnershipModels();
  return (
    <SectionApplicationTypes
      backgroundImage={partnershipModelsBenefitsTypes.backgroundImage}
      heightImage={partnershipModelsBenefitsTypes.heightImage}
      sectionTitle={partnershipModelsBenefitsTypes.title}
      sectionSubTitle={partnershipModelsBenefitsTypes.subTitle}
      sectionDescription={partnershipModelsBenefitsTypes.description}
      image={partnershipModelsBenefitsTypes.image}
      imageSizes={partnershipModelsBenefitsTypes.imageSizes}
      backgroundGray={partnershipModelsBenefitsTypes.backgroundGray}
    />
  );
};

export default PartnershipModelsBenefitsTypes;
