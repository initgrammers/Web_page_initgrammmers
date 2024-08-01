import PropTypes from 'prop-types';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, IconButton, Typography } from '@mui/material';
import styles from './CardTeam';

const CardTeam = ({ name, title, image, href = '#' }) => (
  <Box component="article" sx={styles.cardPurpose}>
    <img
      style={styles.memberTeam}
      src={image}
      width="100%"
      height="241px"
      alt={title}
    />
    <Box sx={styles.divider} />
    <Typography variant="h3" sx={styles.title}>
      {name}
    </Typography>
    <Typography sx={styles.description} variant="body2">
      {title}
    </Typography>
    <IconButton target="_blank" sx={styles.linkedin} href={href}>
      <LinkedInIcon />
    </IconButton>
  </Box>
);

CardTeam.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  href: PropTypes.string,
};

export default CardTeam;
