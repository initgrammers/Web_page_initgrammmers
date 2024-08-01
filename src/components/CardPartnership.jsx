import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import styles from '../assets/styles/CardPartnership';

const CardService = ({ image, title, description }) => (
  <Box sx={styles.card} gap={1}>
    <Box component="figure">
      <img loading="lazy" width={100} height={100} src={image} alt={title} />
    </Box>
    <Typography variant="h4" component="h3" sx={styles.titlePartnership}>
      {title}
    </Typography>
    <Typography variant="body2" sx={styles.description}>
      {description}
    </Typography>
  </Box>
);

CardService.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardService;
