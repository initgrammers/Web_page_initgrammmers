import PropTypes from 'prop-types';
import styles from './style';
import { Box } from '@mui/material';

const Image = ({ image, label, showTitleImage, imageIsLarge }) => {
  return (
    <>
      <Box sx={styles.containerImage}>
        <img sx={styles.image} src={image} alt={label} loading="lazy" />
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
