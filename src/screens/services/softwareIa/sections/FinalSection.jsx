import CallToActionSection from '#Components/CallToActionSection';
import useSoftwareIa from '#constants/services/SoftwareIa';

const FinalSection = () => {
  const { softwareIaFinal } = useSoftwareIa();

  return (
    <CallToActionSection
      image={softwareIaFinal.image}
      imageSizes={softwareIaFinal.imageSizes}
      titlePart1={softwareIaFinal.title1}
      titlePart2={softwareIaFinal.title2}
      description={softwareIaFinal.description}
      backgroundImage={softwareIaFinal.backgroundImage}
      heightImage={softwareIaFinal.heightImage}
      imageFirst
    />
  );
};

export default FinalSection;
