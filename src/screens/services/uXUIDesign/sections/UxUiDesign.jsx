import InformationWithImageSection from '#Components/InformationWithImageSection';
import useUxUiDesign from '#constants/services/UxUiDesign';

const UxUiDesign = () => {
  const { whatIsUxUiDesign } = useUxUiDesign();
  return (
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
};

export default UxUiDesign;
