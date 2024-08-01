import PropTypes from 'prop-types';
import Image from 'next/image';
import { Box } from '@mui/material';
import styles from '../assets/styles/BackgroundImage';

const BackgroundImage = ({
  height = 0,
  image = '',
  alt = 'Diseño y desarrollo de aplicaciones web y móviles - Initgrammers',
}) => (
  <>
    {height > 0 && (
      <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
        <Box sx={styles(height).containerBackgroundImage}>
          <Image quality={100} src={image} fill alt={alt} />
        </Box>
      </Box>
    )}
  </>
);

BackgroundImage.propTypes = {
  height: PropTypes.number,
  image: PropTypes.string,
  alt: PropTypes.string,
};

export default BackgroundImage;
