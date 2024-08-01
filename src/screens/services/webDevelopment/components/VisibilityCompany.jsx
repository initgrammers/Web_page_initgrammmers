import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import styles from '../styles/VisibilityCompany';

const VisibilityCompany = ({
  backgroundImage = '',
  heightImage = 0,
  title,
  description,
  image,
}) => (
  <Box component="section" position="relative" bgcolor="secondary.light">
    <BackgroundImage image={backgroundImage} height={heightImage} />
    <CustomContainer>
      <Box sx={styles.container}>
        <Box component="article" sx={styles.detailsContent}>
          <Typography variant="h2" sx={styles.title}>
            {title}
          </Typography>
          <Typography variant="body1" sx={styles.description}>
            {description}
          </Typography>
        </Box>
        <Box sx={styles.containerImage}>
          <Box component="figure" sx={styles.image}>
            <Image quality={100} priority src={image} fill alt={title} />
          </Box>
        </Box>
      </Box>
    </CustomContainer>
  </Box>
);

VisibilityCompany.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
  heightImage: PropTypes.number,
};

export default VisibilityCompany;
