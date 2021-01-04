import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Image from 'next/image';
import ApplicationType from './ApplicationType';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import styles from '../assets/styles/SectionApplicationTypes';

const SectionApplicationTypes = ({
  sectionTitle,
  typesApplication,
  image,
  imageSizes,
  backgroundPrimaryLight,
  backgroundGray,
  backgroundImage,
  heightImage,
}) => {
  const classes = styles({ ...imageSizes });
  return (
    <Box
      component="section"
      position="relative"
      className={clsx(classes.mainSection, {
        [classes.backgroundPrimaryLight]: backgroundPrimaryLight,
        [classes.backgroundGray]: backgroundGray,
      })}
    >
      <BackgroundImage image={backgroundImage} height={heightImage} />
      <CustomContainer>
        <Box className={classes.container}>
          <Box className={classes.detailsContent}>
            <ApplicationType
              sectionTitle={sectionTitle}
              typesApplication={typesApplication}
              backgroundGray={backgroundGray}
            />
          </Box>
          <Box className={classes.containerImage}>
            <Box component="figure" className={classes.image}>
              <Image
                quality={100}
                priority
                src={image}
                layout="fill"
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

SectionApplicationTypes.defaultProps = {
  backgroundPrimaryLight: false,
  backgroundGray: false,
  backgroundImage: '',
  heightImage: 0,
};

export default SectionApplicationTypes;
