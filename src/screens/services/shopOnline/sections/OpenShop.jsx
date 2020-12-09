import InformationWithImageSection from '#Components/InformationWithImageSection';
import { shopOnline24Hours } from '#constants/services/ShopOnline';

const InnovativeDesign = () => (
  <InformationWithImageSection
    backgroundImage={shopOnline24Hours.backgroundImage}
    heightImage={shopOnline24Hours.heightImage}
    title={shopOnline24Hours.title}
    description={shopOnline24Hours.description}
    image={shopOnline24Hours.image}
    titlePrimaryMain={shopOnline24Hours.titlePrimaryMain}
    descriptionBlack={shopOnline24Hours.descriptionBlack}
    imageSizes={shopOnline24Hours.imageSizes}
    isImageRight={shopOnline24Hours.isImageRight}
  />
);

export default InnovativeDesign;
