import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Purpose';
import { Box, Typography } from '@mui/material';

const Purpose = ({
  title,
  description,
  image,
  backgroundColor,
  colorTitleIsSecondary,
}) => {
  return (
    <Box sx={styles.cardPurpose} bgcolor={backgroundColor}>
      <img src={image} width="100px" height="100px" alt={title} />
      <Typography
        variant="h2"
        sx={clsx(styles.title, {
          [styles.titleSecondary]: colorTitleIsSecondary,
        })}
      >
        {title}
      </Typography>
      <Typography sx={styles.description} variant="body1">
        {description}
      </Typography>
    </Box>
  );
};

Purpose.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  colorTitleIsSecondary: PropTypes.bool,
};

Purpose.defaultProps = {
  colorTitleIsSecondary: false,
};

export default Purpose;
