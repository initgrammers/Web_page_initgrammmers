import PropTypes from 'prop-types';
import styles from './CardValue';
import { Box, Typography } from '@mui/material';

const CardValue = ({ description, image, isBorderSecondary = false }) => {
  return (
    <Box
      component="article"
      sx={{
        ...styles.cardValue,
        ...(isBorderSecondary && styles.cardSecondary),
      }}

    >
      <img src={image} width="100px" height="100px" alt={description} />
      <Typography sx={styles.description} variant="body2">
        {description}
      </Typography>
    </Box>
  );
};

CardValue.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isBorderSecondary: PropTypes.bool,
};

export default CardValue;
