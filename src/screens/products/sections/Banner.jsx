import ProjectsBanner from '../components/Banner';
import useProjects from '#constants/Projects';

const Banner = () => {
  const { bannerProjects } = useProjects();
  return (
    <ProjectsBanner
      backgroundImage={bannerProjects.backgroundImage}
      heightImage={bannerProjects.heightImage}
      backgroundPrimaryFade={bannerProjects.backgroundPrimaryFade}
      titlePart1={bannerProjects.titlePart1}
      titlePart2={bannerProjects.titlePart2}
      description={bannerProjects.description}
      image={bannerProjects.image}
    />
  );
};

export default Banner;
