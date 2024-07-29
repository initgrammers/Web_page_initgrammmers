import PropTypes from 'prop-types';
import styles from './style';
import { Box } from '@mui/material';

const Image = ({ image, label, showTitleImage = true, imageIsLarge = false }) => {
  return (
    <>
      <Box sx={styles.containerImage(imageIsLarge)}>
        <img style={styles.image} src={image} alt={label} loading="lazy" />
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

export default Image;
