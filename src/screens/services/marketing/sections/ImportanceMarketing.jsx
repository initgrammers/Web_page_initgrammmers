import InformationWithImageSection from '#Components/InformationWithImageSection';
import { importanceMarketing } from '#constants/services/marketing';

const InnovativeDesign = () => (
  <InformationWithImageSection
    backgroundImage={importanceMarketing.backgroundImage}
    heightImage={importanceMarketing.heightImage}
    title={importanceMarketing.title}
    description={importanceMarketing.description}
    image={importanceMarketing.image}
    titlePrimaryMain={importanceMarketing.titlePrimaryMain}
    descriptionBlack={importanceMarketing.descriptionBlack}
    imageSizes={importanceMarketing.imageSizes}
    isImageRight={importanceMarketing.isImageRight}
    backgroundSecondaryFade
  />
);

export default InnovativeDesign;
