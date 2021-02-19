import TeamComponent from '../components/Team';
import { team } from '#constants/AboutUs';

const TeamSection = () => (
  <TeamComponent
    backgroundImage={team.backgroundImage}
    heightImage={team.heightImage}
    title={team.title}
    teamPlayer={team.teamPlayer}
  />
);

export default TeamSection;
