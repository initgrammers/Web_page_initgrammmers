import CarryOutThatProjectSection from '../components/CarryOutThatProject';
import useLandingPage from '#constants/LandingPage';

const CarryOutThatProject = () => {
  const {carryOutProject} = useLandingPage();
  return(
    <CarryOutThatProjectSection
      titlePart1={carryOutProject.titlePart1}
      titlePart2={carryOutProject.titlePart2}
      description={carryOutProject.description}
      image={carryOutProject.image}
    />
  );
}
export default CarryOutThatProject;
