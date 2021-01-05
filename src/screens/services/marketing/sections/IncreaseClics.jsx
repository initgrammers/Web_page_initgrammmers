import React from 'react';
import CallToActionSection from '#Components/CallToActionSection';
import { increaseSalesMarketingDigital } from '#app/constants/services/marketing';

const IncreaseClics = () => (
  <CallToActionSection
    titlePart1={increaseSalesMarketingDigital.titlePart1}
    titlePart2={increaseSalesMarketingDigital.titlePart2}
    description={increaseSalesMarketingDigital.description}
    image={increaseSalesMarketingDigital.image}
    backgroundImage={increaseSalesMarketingDigital.backgroundImage}
    heightImage={increaseSalesMarketingDigital.heightImage}
    imageSizes={increaseSalesMarketingDigital.imageSizes}
  />
);

export default IncreaseClics;
