import PartnershipModel from '../components/PartnershipModel';
import useLandingPage from '#constants/LandingPage';

const PartnershipModelSection = () => {
  const { partnershipModel } = useLandingPage();
  return (
    <PartnershipModel
      title={partnershipModel.title}
      description={partnershipModel.description}
      image={partnershipModel.image}
      backgroundImage={partnershipModel.backgroundImage}
      heightImage={partnershipModel.heightImage}
      partnershipModels={partnershipModel.partnershipModels}
    />
  );
};

export default PartnershipModelSection;
