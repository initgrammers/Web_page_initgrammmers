import InformationWithImageSection from '#Components/InformationWithImageSection';
import useUxUiDesign from '#constants/services/UxUiDesign';

const InnovativeDesign = () => {
  const { innovateDesign } = useUxUiDesign();
  return (
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
};

export default InnovativeDesign;
