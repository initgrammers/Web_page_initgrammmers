import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import styles from '../assets/styles/CardService';

const CardService = ({ image, service }) => (
  <Box sx={styles.card}>
    <Box component="figure">
      <img loading="lazy" width={188} height={169} src={image} alt={service} />
    </Box>
    <Typography variant="h4" component="p" sx={styles.titleService}>
      {service}
    </Typography>
  </Box>
);

CardService.propTypes = {
  image: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
};

export default CardService;
