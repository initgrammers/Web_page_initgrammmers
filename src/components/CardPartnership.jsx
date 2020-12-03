import { Box, Typography, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '../assets/styles/CardPartnership';

const useStyles = makeStyles(styles);

const CardService = ({ image, title, description }) => {
  const classes = useStyles();
  return (
    <Box className={classes.card}>
      <Box component="figure">
        <Image quality={100} width={100} height={100} src={image} alt={title} />
      </Box>
      <Typography variant="h4" className={classes.titlePartnership}>
        {title}
      </Typography>
      <Typography variant="body2" className={classes.description}>
        {description}
      </Typography>
    </Box>
  );
};

CardService.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardService;
