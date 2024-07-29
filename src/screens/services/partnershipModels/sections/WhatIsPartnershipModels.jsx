import InformationWithImageSection from '#Components/InformationWithImageSection';
import { whatIsPartnershipModels } from '#constants/services/partnershipModels';

const InnovativeDesign = () => (
  <InformationWithImageSection
    backgroundImage={whatIsPartnershipModels.backgroundImage}
    heightImage={whatIsPartnershipModels.heightImage}
    title={whatIsPartnershipModels.title}
    description={whatIsPartnershipModels.description}
    image={whatIsPartnershipModels.image}
    titlePrimaryMain={whatIsPartnershipModels.titlePrimaryMain}
    descriptionBlack={whatIsPartnershipModels.descriptionBlack}
    imageSizes={whatIsPartnershipModels.imageSizes}
    isImageRight={whatIsPartnershipModels.isImageRight}
  />
);

export default InnovativeDesign;
