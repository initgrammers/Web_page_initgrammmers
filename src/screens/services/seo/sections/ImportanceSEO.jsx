import InformationWithImageSection from '#Components/InformationWithImageSection';
import { importanceSEO } from '#constants/services/seo';

const InnovativeDesign = () => (
  <InformationWithImageSection
    backgroundImage={importanceSEO.backgroundImage}
    heightImage={importanceSEO.heightImage}
    title={importanceSEO.title}
    description={importanceSEO.description}
    image={importanceSEO.image}
    titlePrimaryMain={importanceSEO.titlePrimaryMain}
    descriptionBlack={importanceSEO.descriptionBlack}
    imageSizes={importanceSEO.imageSizes}
    isImageRight={importanceSEO.isImageRight}
  />
);

export default InnovativeDesign;
