'use client';

import InformationWithImageSection from '#Components/InformationWithImageSection';
import useSoftwareIa from '#constants/services/SoftwareIa';

const SoftwareIaDevelopment = () => {
  const { softwareIaDevelopment } = useSoftwareIa();

  return (
    <InformationWithImageSection
      title={softwareIaDevelopment.title}
      description={softwareIaDevelopment.description}
      backgroundImage={softwareIaDevelopment.backgroundImage}
      heightImage={softwareIaDevelopment.heightImage}
      image={softwareIaDevelopment.image}
      imageSizes={softwareIaDevelopment.imageSizes}
      titlePrimaryMain
      descriptionBlack
    />
  );
};

export default SoftwareIaDevelopment;
