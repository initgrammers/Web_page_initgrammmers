import { makeStyles, Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from '../styles/Team';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import CardTeam from './CardTeam';
import { team } from '#constants/AboutUs';

const useStyles = makeStyles(styles);

const TeamAboutUs = ({ title }) => {
  const classes = useStyles();

  return (
    <Box component="section" position="relative" className={classes.section}>
      <BackgroundImage />
      <CustomContainer>
        <Box>
          <Typography variant="h2" align="center" className={classes.title}>
            Equipo de Trabajo
          </Typography>

          <Box className={classes.team}>
            {team.teamPlayer.map((cardUser) => (
              <CardTeam
                image={cardUser.image}
                title={cardUser.title}
                name={cardUser.name}
              />
            ))}
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

TeamAboutUs.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
  heightImage: PropTypes.number,
  partnershipModels: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};

TeamAboutUs.defaultProps = {
  backgroundImage: '',
  heightImage: 0,
};
export default TeamAboutUs;
