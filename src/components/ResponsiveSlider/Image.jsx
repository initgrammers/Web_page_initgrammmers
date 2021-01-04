import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './style';

const Image = ({ image, label, showTitleImage, imageIsLarge }) => {
  const classes = styles({ imageIsLarge });

  return (
    <>
      <Box className={classes.containerImage}>
        <img className={classes.image} src={image} alt={label} />
        {showTitleImage && <p>{label}</p>}
      </Box>
    </>
  );
};
Image.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  showTitleImage: PropTypes.bool,
  imageIsLarge: PropTypes.bool,
};

Image.defaultProps = {
  showTitleImage: true,
  imageIsLarge: false,
};

export default Image;
