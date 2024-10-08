import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import styles from './Purpose';

const Purpose = ({
  title,
  description,
  image,
  backgroundColor,
  colorTitleIsSecondary = false,
}) => (
  <Box sx={styles.cardPurpose} bgcolor={backgroundColor}>
    <img src={image} width="100px" height="100px" alt={title} />
    <Typography
      variant="h2"
      sx={{
        ...styles.title,
        ...(colorTitleIsSecondary && styles.titleSecondary),
      }}
    >
      {title}
    </Typography>
    <Typography sx={styles.description} variant="body1">
      {description}
    </Typography>
  </Box>
);

Purpose.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  colorTitleIsSecondary: PropTypes.bool,
};

export default Purpose;
