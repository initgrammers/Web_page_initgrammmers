import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '../assets/styles/BackgroundImage';
import { Box } from '@mui/material';

const BackgroundImage = ({ height, image, alt }) => {

  return (
    <>
      {height > 0 && (
        <Box sx={{display:{xs: 'none', md: 'flex'}}}>
          <Box sx={styles(height).containerBackgroundImage}>
            <Image quality={100} src={image} layout="fill" alt={alt} />
          </Box>
        </Box>
      )}
    </>
  );
};

BackgroundImage.propTypes = {
  height: PropTypes.number,
  image: PropTypes.string,
  alt: PropTypes.string,
};

BackgroundImage.defaultProps = {
  height: 0,
  image: '',
  alt: 'Diseño y desarrollo de aplicaciones web y móviles - Initgrammers',
};
export default BackgroundImage;
