import PropTypes from 'prop-types';
import Image from 'next/image';
import clsx from 'clsx';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import styles from '../assets/styles/InformationWithImageSection';
import { Box, Typography } from '@mui/material';

const InformationWithImageSection = ({
  title,
  description,
  backgroundImage = '',
  heightImage = 0,
  image,
  imageSizes,
  backgroundPrimaryLight = false,
  backgroundPrimaryFade = false,
  backgroundSecondary = false,
  backgroundSecondaryFade = false,
  isImageRight = false,
  titlePrimaryMain = false,
  titleBlack = false,
  descriptionPrimaryLight = false,
  descriptionBlack = false,
}) => {
  const componentStyles = styles(
    { imageSizes, isImageRight }, // Pass imageSizes and isImageRight
    { backgroundPrimaryLight, backgroundPrimaryFade, backgroundSecondary, backgroundSecondaryFade, titlePrimaryMain, titleBlack, descriptionPrimaryLight, descriptionBlack } // Pass other props to styles function
  );
  return (
    <Box
      component="section"
      position="relative"
      sx={componentStyles.container}
    >
      <BackgroundImage image={backgroundImage} height={heightImage} />
      <CustomContainer>
        <Box sx={componentStyles.container}>
          <Box component="article" sx={componentStyles.detailsContent}>
            <Typography
              variant="h2"
              sx={componentStyles.textPrimaryMain}
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              sx={componentStyles.description}
            >
              {description}
            </Typography>
          </Box>
          <Box sx={componentStyles.containerImage}>
            <Box component="figure" sx={componentStyles.image}>
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

InformationWithImageSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
  heightImage: PropTypes.number,
  image: PropTypes.string.isRequired,
  imageSizes: PropTypes.shape({
    xs: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    }),
    sm: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    }),
    md: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    }),
    lg: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    }),
  }).isRequired,
  backgroundPrimaryLight: PropTypes.bool,
  backgroundPrimaryFade: PropTypes.bool,
  backgroundSecondary: PropTypes.bool,
  backgroundSecondaryFade: PropTypes.bool,
  isImageRight: PropTypes.bool,
  titlePrimaryMain: PropTypes.bool,
  titleBlack: PropTypes.bool,
  descriptionPrimaryLight: PropTypes.bool,
  descriptionBlack: PropTypes.bool,
};

export default InformationWithImageSection;
