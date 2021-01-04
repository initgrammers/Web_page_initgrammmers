import PartnershipModel from '../components/PartnershipModel';
import { partnershipModel } from '#constants/LandingPage';

const PartnershipModelSection = () => (
  <PartnershipModel
    title={partnershipModel.title}
    description={partnershipModel.description}
    image={partnershipModel.image}
    backgroundImage={partnershipModel.backgroundImage}
    heightImage={partnershipModel.heightImage}
    partnershipModels={partnershipModel.partnershipModels}
  />
);

export default PartnershipModelSection;
