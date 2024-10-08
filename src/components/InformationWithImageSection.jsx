import PropTypes from 'prop-types';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import styles from '../assets/styles/InformationWithImageSection';

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
  showOptions = false,
  options,
}) => (
  <Box
    component="section"
    position="relative"
    sx={{
      ...(backgroundPrimaryLight && styles.backgroundPrimaryLight),
      ...(backgroundPrimaryFade && styles.backgroundPrimaryFade),
      ...(backgroundSecondary && styles.backgroundSecondaryMain),
      ...(backgroundSecondaryFade && styles.backgroundSecondaryFade),
    }}
  >
    <BackgroundImage image={backgroundImage} height={heightImage} />
    <CustomContainer>
      <Box sx={styles.container(isImageRight)}>
        <Box component="article" sx={styles.detailsContent(isImageRight)}>
          <Typography
            textAlign="center"
            variant="h2"
            sx={{
              ...styles.title,
              ...(titlePrimaryMain && styles.textPrimaryMain),
              ...(titleBlack && styles.textBlack),
              ...(showOptions && styles.paddingTitle),
            }}
          >
            {title}
          </Typography>
          {!showOptions ? (
            <Typography
              variant="body1"
              sx={{
                ...styles.description,
                ...(descriptionPrimaryLight && styles.textPrimaryMain),
                ...(descriptionBlack && styles.textBlack),
              }}
            >
              {description}
            </Typography>
          ) : (
            options.map((opt) => (
              <Box sx={styles.options}>
                <CheckCircleOutlinedIcon color="secondary" />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Typography variant="body1">
                    {opt.title}
                  </Typography>
                  <Typography variant="body2">
                    {opt.description}
                  </Typography>
                </Box>
              </Box>
            ))
          )
          }
        </Box>
        <Box sx={styles.containerImage(isImageRight)}>
          <Box component="figure" sx={styles.image(imageSizes)}>
            <Image quality={100} priority src={image} fill alt={title} />
          </Box>
        </Box>
      </Box>
    </CustomContainer>
  </Box>
);
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
  showOptions: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

export default InformationWithImageSection;
