import PropTypes from 'prop-types';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import CardTeam from '#Components/CardTeam';
import styles from '../styles/Team';
import { Box, Typography } from '@mui/material';

const TeamAboutUs = ({ 
  title, 
  teamPlayer, 
  backgroundImage = '',
  heightImage = 0 
}) => {

  return (
    <Box component="section" position="relative" sx={styles.section}>
      <BackgroundImage image={backgroundImage} height={heightImage} />
      <CustomContainer>
        <Box>
          <Typography variant="h2" align="center" sx={styles.title}>
            {title}
          </Typography>

          <Box sx={styles.team}>
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

export default TeamAboutUs;
