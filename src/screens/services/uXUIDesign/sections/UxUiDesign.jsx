import InformationWithImageSection from '#Components/InformationWithImageSection';
import { whatIsUxUiDesign } from '#constants/services/UxUiDesign';

const UxUiDesign = () => (
  <InformationWithImageSection
    backgroundImage={whatIsUxUiDesign.backgroundImage}
    heightImage={whatIsUxUiDesign.heightImage}
    title={whatIsUxUiDesign.title}
    description={whatIsUxUiDesign.description}
    image={whatIsUxUiDesign.image}
    imageSizes={whatIsUxUiDesign.imageSizes}
    isImageRight={whatIsUxUiDesign.isImageRight}
    titlePrimaryMain={whatIsUxUiDesign.titlePrimaryMain}
    descriptionBlack={whatIsUxUiDesign.descriptionBlack}
  />
);

export default UxUiDesign;
