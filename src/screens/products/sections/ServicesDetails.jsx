import { useMediaQuery, useTheme } from '@mui/material';
import useProjects from '#app/constants/Projects';
import InformationWithImageSection from '#Components/InformationWithImageSection';

const ServicesDetails = () => {
  const { detailsProjects } = useProjects();
  const { breakpoints } = useTheme();
  const lg = useMediaQuery(breakpoints.down('lg'));
  return (
    <InformationWithImageSection
      backgroundImage={detailsProjects.backgroundImage}
      heightImage={detailsProjects.heightImage}
      title={detailsProjects.title}
      description={detailsProjects.description}
      image={detailsProjects.image}
      imageSizes={detailsProjects.imageSizes}
      isImageRight={!lg ? detailsProjects.isImageRight : true}
      backgroundPrimaryFade={detailsProjects.backgroundPrimaryFade}
      titlePrimaryMain={detailsProjects.titlePrimaryMain}
      descriptionBlack={detailsProjects.descriptionBlack}
      showOptions
      options={detailsProjects.detailsProjectsOptions}
    />
  );
};

export default ServicesDetails;
