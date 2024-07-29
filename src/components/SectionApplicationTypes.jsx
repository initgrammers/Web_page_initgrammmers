import PropTypes from 'prop-types';
import clsx from 'clsx';
import Image from 'next/image';
import ApplicationType from './ApplicationType';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import styles from '../assets/styles/SectionApplicationTypes';
import { Box, Typography } from '@mui/material';

const SectionApplicationTypes = ({
  sectionTitle,
  typesApplication,
  sectionSubTitle,
  sectionDescription,
  image,
  imageSizes,
  backgroundPrimaryLight = false,
  backgroundGray = false,
  backgroundImage = '',
  heightImage = 0,
}) => {
  return (
    <Box
      component="section"
      position="relative"
      sx={{
        ...styles.mainSection,
        ...(backgroundPrimaryLight && styles.backgroundPrimaryLight),
        ...(backgroundGray && styles.backgroundGray),
      }}      
    >
      <BackgroundImage image={backgroundImage} height={heightImage} />
      <CustomContainer>
        <Box sx={styles.container}>
          { typesApplication ?
            <Box sx={styles.detailsContent}>
              <ApplicationType
                sectionTitle={sectionTitle}
                typesApplication={typesApplication}
                backgroundGray={backgroundGray}
              />
            </Box>
            :
            <Box sx={styles.detailsSingleContent}>
              <Typography
                variant="h2"
                sx={{
                  ...styles.title,
                  ...(backgroundGray && styles.titleGray),
                }}
              >
                {sectionTitle}
              </Typography>
                <Box component="article">
                  <Typography
                    variant="h3"
                    sx={{
                      ...styles.applicationType,
                      ...(backgroundGray && styles.backgroundGray),
                    }}                
                  >
                    {sectionSubTitle}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      ...(backgroundGray && styles.bodyGray),
                    }}                
                  >
                    {sectionDescription}
                  </Typography>
                </Box>
            </Box>
          }

          <Box sx={styles.containerImage}>
            <Box component="figure" sx={styles.image(imageSizes)}>
              <Image
                quality={100}
                priority
                src={image}
                fill
                alt={sectionTitle}
              />
            </Box>
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

SectionApplicationTypes.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  typesApplication: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  sectionSubTitle: PropTypes.string,
  sectionDescription: PropTypes.string,
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
  backgroundGray: PropTypes.bool,
  backgroundImage: PropTypes.string,
  heightImage: PropTypes.number,
};

export default SectionApplicationTypes;
