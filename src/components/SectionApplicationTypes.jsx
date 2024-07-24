import PropTypes from 'prop-types';
import clsx from 'clsx';
import Image from 'next/image';
import ApplicationType from './ApplicationType';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import styles from '../assets/styles/SectionApplicationTypes';
import { Box } from '@mui/material';

const SectionApplicationTypes = ({
  sectionTitle,
  typesApplication,
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
      sx={clsx(styles.mainSection, {
        [styles.backgroundPrimaryLight]: backgroundPrimaryLight,
        [styles.backgroundGray]: backgroundGray,
      })}
    >
      <BackgroundImage image={backgroundImage} height={heightImage} />
      <CustomContainer>
        <Box sx={styles.container}>
          <Box sx={styles.detailsContent}>
            <ApplicationType
              sectionTitle={sectionTitle}
              typesApplication={typesApplication}
              backgroundGray={backgroundGray}
            />
          </Box>
          <Box sx={styles.containerImage}>
            <Box component="figure" sx={styles.image}>
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
  ).isRequired,
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
