import useProjects from '#app/constants/Projects';
import InformationWithImageSection from '#Components/InformationWithImageSection';

const ServicesMoreDetails = () => {
  const { moreDetailsProjects } = useProjects();

  return (
    <InformationWithImageSection
      backgroundImage={moreDetailsProjects.backgroundImage}
      heightImage={moreDetailsProjects.heightImage}
      title={moreDetailsProjects.title}
      description={moreDetailsProjects.description}
      image={moreDetailsProjects.image}
      imageSizes={moreDetailsProjects.imageSizes}
      isImageRight={moreDetailsProjects.isImageRight}
      backgroundPrimaryFade={moreDetailsProjects.backgroundPrimaryFade}
      titlePrimaryMain={moreDetailsProjects.titlePrimaryMain}
      descriptionBlack={moreDetailsProjects.descriptionBlack}
      showOptions
      options={moreDetailsProjects.moreDetailsProjectsOptions}
    />
  );
};

export default ServicesMoreDetails;
