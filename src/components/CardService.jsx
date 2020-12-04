import { Box, Typography, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '../assets/styles/CardService';

const useStyles = makeStyles(styles);

const CardService = ({ image, service }) => {
  const classes = useStyles();
  return (
    <Box className={classes.card}>
      <Box component="figure">
        <img
          loading="lazy"
          width={188}
          height={169}
          src={image}
          alt={service}
        />
      </Box>
      <Typography variant="h4" component="p" className={classes.titleService}>
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
