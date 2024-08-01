import InformationWithImageSection from '#Components/InformationWithImageSection';
import usePartnershipModels from '#constants/services/partnershipModels';

const BecomeYourTeam = () => {
  const { becomeYourTeam } = usePartnershipModels();
  return (
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
      backgroundPrimaryFade={becomeYourTeam.backgroundPrimaryFade}
    />
  );
};

export default BecomeYourTeam;
