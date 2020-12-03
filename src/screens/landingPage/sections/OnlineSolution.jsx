import InformationWithImageSection from '#Components/InformationWithImageSection';
import { onlineSolution } from '#constants/LandingPage';

const OnlineSolution = () => (
  <InformationWithImageSection
    backgroundImage={onlineSolution.backgroundImage}
    heightImage={onlineSolution.heightImage}
    title={onlineSolution.title}
    description={onlineSolution.description}
    image={onlineSolution.image}
    titlePrimaryMain={onlineSolution.titlePrimaryMain}
    descriptionBlack={onlineSolution.descriptionBlack}
    imageSizes={onlineSolution.imageSizes}
    isImageRight={onlineSolution.isImageRight}
  />
);

export default OnlineSolution;
