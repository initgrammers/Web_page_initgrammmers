import InformationWithImageSection from '#Components/InformationWithImageSection';
import useUxUiDesign from '#constants/services/UxUiDesign';

const DesignAdaptedToYourBrand = () => {
  const { uniqueDesignAdaptedToYourBrand } = useUxUiDesign();
  return (
    <InformationWithImageSection
      title={uniqueDesignAdaptedToYourBrand.title}
      description={uniqueDesignAdaptedToYourBrand.description}
      image={uniqueDesignAdaptedToYourBrand.image}
      imageSizes={uniqueDesignAdaptedToYourBrand.imageSizes}
      isImageRight={uniqueDesignAdaptedToYourBrand.isImageRight}
      backgroundPrimaryFade={uniqueDesignAdaptedToYourBrand.backgroundPrimaryFade}
      titlePrimaryMain={uniqueDesignAdaptedToYourBrand.titlePrimaryMain}
      descriptionBlack={uniqueDesignAdaptedToYourBrand.descriptionBlack}
    />
  );
};

export default DesignAdaptedToYourBrand;
