import InformationWithImageSection from '#Components/InformationWithImageSection';
import { becomeYourTeam } from '#constants/services/partnershipModels';

const BecomeYourTeam = () => (
  <InformationWithImageSection
    backgroundImage={becomeYourTeam.backgroundImage}
    heightImage={becomeYourTeam.heightImage}
    title={becomeYourTeam.title}
    description={becomeYourTeam.description}
    image={becomeYourTeam.image}
    titlePrimaryMain={becomeYourTeam.titlePrimaryMain}
    descriptionBlack={becomeYourTeam.descriptionBlack}
    imageSizes={becomeYourTeam.imageSizes}
    isImageRight={becomeYourTeam.isImageRight}
  />
);

export default BecomeYourTeam;
