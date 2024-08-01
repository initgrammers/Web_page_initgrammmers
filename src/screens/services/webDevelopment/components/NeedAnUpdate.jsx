import PropTypes from 'prop-types';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import CustomContainer from '#Components/CustomContainer';
import styles from '../styles/NeedAnUpdate';

const NeedAnUpdate = ({
  title,
  description,
  image,
  backgroundImage,
  ornamentImage,
}) => {
  const { breakpoints } = useTheme();

  const xs = useMediaQuery(breakpoints.down('sm'));
  const lg = useMediaQuery(breakpoints.up('lg'));

  return (
    <Box component="section" position="relative">
      <img
        loading="lazy"
        style={{
          ...styles.background,
          display: `${lg ? '' : 'none'}`,
        }}
        src={backgroundImage}
        alt="Diseño y desarrollo de aplicaciones web y móviles - Initgrammers"
      />
      <Box sx={styles.dino}>
        <img loading="lazy" src={ornamentImage} alt="background-dino" />
      </Box>

      <img
        loading="lazy"
        style={{
          ...styles.computer,
          objectFit: `${xs ? 'cover' : 'fill'}`,
        }}
        src={image}
        alt={title}
      />
      <CustomContainer>
        <Box sx={styles.container}>
          <Typography variant="h2" sx={styles.title}>
            {title}
          </Typography>
          <Typography variant="body1" sx={styles.description}>
            {description}
          </Typography>
        </Box>
      </CustomContainer>
    </Box>
  );
};

NeedAnUpdate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  ornamentImage: PropTypes.string.isRequired,
};

export default NeedAnUpdate;
