import { Box, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './style';

const useStyles = makeStyles(styles);
const Image = ({ image, label }) => {
  const classes = useStyles();
  return (
    <Box className={classes.containerImage}>
      <img className={classes.image} src={image} alt={label} />
      <p>{label}</p>
    </Box>
  );
};
Image.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Image;
