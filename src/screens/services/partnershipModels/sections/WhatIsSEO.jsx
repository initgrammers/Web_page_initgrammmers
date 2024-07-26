import InformationWithImageSection from '#Components/InformationWithImageSection';
import { whatIsSEO } from '#constants/services/partnershipModels';

const InnovativeDesign = () => (
  <InformationWithImageSection
    backgroundImage={whatIsSEO.backgroundImage}
    heightImage={whatIsSEO.heightImage}
    title={whatIsSEO.title}
    description={whatIsSEO.description}
    image={whatIsSEO.image}
    titlePrimaryMain={whatIsSEO.titlePrimaryMain}
    descriptionBlack={whatIsSEO.descriptionBlack}
    imageSizes={whatIsSEO.imageSizes}
    isImageRight={whatIsSEO.isImageRight}
  />
);

export default InnovativeDesign;
