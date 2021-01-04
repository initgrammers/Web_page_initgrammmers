import CarryOutThatProjectSection from '../components/CarryOutThatProject';
import { carryOutProject } from '#constants/LandingPage';

const CarryOutThatProject = () => (
  <CarryOutThatProjectSection
    titlePart1={carryOutProject.titlePart1}
    titlePart2={carryOutProject.titlePart2}
    description={carryOutProject.description}
    image={carryOutProject.image}
  />
);

export default CarryOutThatProject;
