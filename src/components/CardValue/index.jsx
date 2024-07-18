import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './CardValue';
import { Box, Typography } from '@mui/material';

const CardValue = ({ description, image, isBorderSecondary }) => {
  return (
    <Box
      component="article"
      sx={clsx(styles.cardValue, {
        [styles.cardSecondary]: isBorderSecondary,
      })}
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

CardValue.defaultProps = {
  isBorderSecondary: false,
};
export default CardValue;
