import PropTypes from 'prop-types';
import styles from '../assets/styles/CardService';
import { Box, Typography } from '@mui/material';

const CardService = ({ image, service }) => {
  return (
    <Box sx={styles.card}>
      <Box component="figure">
        <img
          loading="lazy"
          width={188}
          height={169}
          src={image}
          alt={service}
        />
      </Box>
      <Typography variant="h4" component="p" sx={styles.titleService}>
        {service}
      </Typography>
    </Box>
  );
};

CardService.propTypes = {
  image: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
};

export default CardService;
