import { Box, Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Image from 'next/image';
import ApplicationType from './ApplicationType';
import styles from '../assets/styles/SectionApplicationTypes';

const SectionApplicationTypes = ({
  sectionTitle,
  typesApplication,
  image,
  imageSizes,
  backgroundPrimaryLight,
  backgroundGray,
}) => {
  const classes = styles({ ...imageSizes });
  return (
    <Box
      component="section"
      className={clsx(classes.mainSection, {
        [classes.backgroundPrimaryLight]: backgroundPrimaryLight,
        [classes.backgroundGray]: backgroundGray,
      })}
    >
      <Container fixed className={classes.container}>
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
      </Container>
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
};

SectionApplicationTypes.defaultProps = {
  backgroundPrimaryLight: false,
  backgroundGray: false,
};

export default SectionApplicationTypes;
