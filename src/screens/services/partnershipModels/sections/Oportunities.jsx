import React from 'react';
import { useTheme } from '@mui/material';
import CallToActionSection from '#Components/CallToActionSection';
import usePartnershipModels from '#constants/services/partnershipModels';

const IncreaseClics = () => {
  const { palette } = useTheme();
  const { oportunitiePartnershipModels } = usePartnershipModels();
  return (
    <CallToActionSection
      titlePart1={oportunitiePartnershipModels.titlePart1}
      titlePart2={oportunitiePartnershipModels.titlePart2}
      description={oportunitiePartnershipModels.description}
      image={oportunitiePartnershipModels.image}
      backgroundImage={oportunitiePartnershipModels.backgroundImage}
      heightImage={oportunitiePartnershipModels.heightImage}
      imageSizes={oportunitiePartnershipModels.imageSizes}
      backgroundColor={palette.secondary.fade}
    />
  );
};

export default IncreaseClics;
