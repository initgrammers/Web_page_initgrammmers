import { Box, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './style';

const useStyles = makeStyles(styles);
const Image = ({ image, label, showTitleImage }) => {
  const classes = useStyles();
  return (
    <Box className={classes.containerImage}>
      <img className={classes.image} src={image} alt={label} />
      <p
        className={clsx({
          [classes.showLabel]: !showTitleImage,
        })}
      >
        {label}
      </p>
    </Box>
  );
};
Image.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  showTitleImage: PropTypes.bool,
};

Image.defaultProps = {
  showTitleImage: true,
};

export default Image;
