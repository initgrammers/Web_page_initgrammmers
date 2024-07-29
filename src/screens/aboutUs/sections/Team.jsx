import TeamComponent from '../components/Team';
import useAboutUs from '#constants/AboutUs';

const TeamSection = () => {
  const {team} = useAboutUs();
  return(
    <TeamComponent
      backgroundImage={team.backgroundImage}
      heightImage={team.heightImage}
      title={team.title}
      teamPlayer={team.teamPlayer}
    />
  );
}
export default TeamSection;
