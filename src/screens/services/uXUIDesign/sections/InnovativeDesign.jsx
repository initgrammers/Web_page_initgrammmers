import InformationWithImageSection from '#Components/InformationWithImageSection';
import { innovateDesign } from '#constants/services/UxUiDesign';

const InnovativeDesign = () => (
  <InformationWithImageSection
    backgroundImage={innovateDesign.backgroundImage}
    heightImage={innovateDesign.heightImage}
    title={innovateDesign.title}
    description={innovateDesign.description}
    image={innovateDesign.image}
    imageSizes={innovateDesign.imageSizes}
    isImageRight={innovateDesign.isImageRight}
    backgroundPrimaryLight={innovateDesign.backgroundPrimaryLight}
  />
);

export default InnovativeDesign;
