import PropTypes from 'prop-types';
import Image from 'next/image';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import styles from '../styles/VisibilityCompany';
import { Box, Typography } from '@mui/material';

const VisibilityCompany = ({
  backgroundImage = '',
  heightImage = 0,
  title,
  description,
  image,
}) => {
  return (
    <Box component="section" position="relative" bgcolor="secondary.light">
      <BackgroundImage image={backgroundImage} height={heightImage} />
      <CustomContainer>
        <Box styles={styles.container}>
          <Box component="article" styles={styles.detailsContent}>
            <Typography variant="h2" styles={styles.title}>
              {title}
            </Typography>
            <Typography variant="body1" styles={styles.description}>
              {description}
            </Typography>
          </Box>
          <Box styles={styles.containerImage}>
            <Box component="figure" styles={styles.image}>
              <Image
                quality={100}
                priority
                src={image}
                fill
                alt={title}
              />
            </Box>
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

VisibilityCompany.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
  heightImage: PropTypes.number,
};

export default VisibilityCompany;
