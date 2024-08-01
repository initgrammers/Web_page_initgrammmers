import InformationWithImageSection from '#Components/InformationWithImageSection';
import usePartnershipModels from '#constants/services/partnershipModels';

const InnovativeDesign = () => {
  const { importancePartnershipModels } = usePartnershipModels();
  return (
    <InformationWithImageSection
      backgroundImage={importancePartnershipModels.backgroundImage}
      heightImage={importancePartnershipModels.heightImage}
      title={importancePartnershipModels.title}
      description={importancePartnershipModels.description}
      image={importancePartnershipModels.image}
      titlePrimaryMain={importancePartnershipModels.titlePrimaryMain}
      descriptionBlack={importancePartnershipModels.descriptionBlack}
      imageSizes={importancePartnershipModels.imageSizes}
      isImageRight={importancePartnershipModels.isImageRight}
    />
  );
};

export default InnovativeDesign;
