import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PropTypes from 'prop-types';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import CardTeam from '#Components/CardTeam';
import styles from '../styles/Team';

const useStyles = makeStyles(styles);

const TeamAboutUs = ({ title, teamPlayer, backgroundImage, heightImage }) => {
  const classes = useStyles();

  return (
    <Box component="section" position="relative" className={classes.section}>
      <BackgroundImage image={backgroundImage} height={heightImage} />
      <CustomContainer>
        <Box>
          <Typography variant="h2" align="center" className={classes.title}>
            {title}
          </Typography>

          <Box className={classes.team}>
            {teamPlayer.map((cardUser, key) => (
              <CardTeam
                key={key}
                image={cardUser.image}
                title={cardUser.title}
                name={cardUser.name}
                href={cardUser.href}
              />
            ))}
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

TeamAboutUs.propTypes = {
  backgroundImage: PropTypes.string,
  heightImage: PropTypes.number,
  title: PropTypes.string.isRequired,
  teamPlayer: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.string,
      name: PropTypes.string,
      href: PropTypes.string,
    })
  ).isRequired,
};

TeamAboutUs.defaultProps = {
  backgroundImage: '',
  heightImage: 0,
};
export default TeamAboutUs;
