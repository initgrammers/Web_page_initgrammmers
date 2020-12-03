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
  backgroundPrimayLight,
}) => {
  const classes = styles({ ...imageSizes });
  return (
    <Box
      component="section"
      className={clsx(classes.mainSection, {
        [classes.backgroundPrimaryLight]: backgroundPrimayLight,
      })}
    >
      <Container fixed className={classes.container}>
        <Box className={classes.detailsContent}>
          <ApplicationType
            sectionTitle={sectionTitle}
            typesApplication={typesApplication}
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
  typesApplication: PropTypes.arrayOf.isRequired,
  image: PropTypes.string.isRequired,
  imageSizes: PropTypes.objectOf.isRequired,
  backgroundPrimayLight: PropTypes.bool,
};

SectionApplicationTypes.defaultProps = {
  backgroundPrimayLight: false,
};

export default SectionApplicationTypes;
