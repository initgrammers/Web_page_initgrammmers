import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import styles from './style';

const Image = ({
  image,
  label,
  showTitleImage = true,
  imageIsLarge = false,
}) => (
  <>
    <Box sx={styles.containerImage(imageIsLarge)}>
      <img style={styles.image} src={image} alt={label} loading="lazy" />
      {showTitleImage && <p>{label}</p>}
    </Box>
  </>
);

Image.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  showTitleImage: PropTypes.bool,
  imageIsLarge: PropTypes.bool,
};

export default Image;
