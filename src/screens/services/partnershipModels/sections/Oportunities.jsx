import React from 'react';
import CallToActionSection from '#Components/CallToActionSection';
import { oportunitieSEO } from '#constants/services/partnershipModels';
import { useTheme } from '@mui/material';

const IncreaseClics = () => {
  const { palette } = useTheme();
  return (
    <CallToActionSection
      titlePart1={oportunitieSEO.titlePart1}
      titlePart2={oportunitieSEO.titlePart2}
      description={oportunitieSEO.description}
      image={oportunitieSEO.image}
      backgroundImage={oportunitieSEO.backgroundImage}
      heightImage={oportunitieSEO.heightImage}
      imageSizes={oportunitieSEO.imageSizes}
      backgroundColor={palette.secondary.fade}
    />
  );
};

export default IncreaseClics;
