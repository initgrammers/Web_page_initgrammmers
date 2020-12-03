import InformationWithImageSection from '#Components/InformationWithImageSection';
import { uniqueDesignAdaptedToYourBrand } from '#constants/services/UxUiDesign';

const DesignAdaptedToYourBrand = () => (
  <InformationWithImageSection
    title={uniqueDesignAdaptedToYourBrand.title}
    description={uniqueDesignAdaptedToYourBrand.description}
    image={uniqueDesignAdaptedToYourBrand.image}
    imageSizes={uniqueDesignAdaptedToYourBrand.imageSizes}
    isImageRight={uniqueDesignAdaptedToYourBrand.isImageRight}
    backgroundSecondary={uniqueDesignAdaptedToYourBrand.backgroundSecondary}
    descriptionBlack={uniqueDesignAdaptedToYourBrand.descriptionBlack}
  />
);

export default DesignAdaptedToYourBrand;
