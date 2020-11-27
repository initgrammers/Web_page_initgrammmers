import { makeStyles, Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import Image from 'next/image';
import ApplicationType from '#Components/ApplicationType';
import CustomContainer from '#Components/CustomContainer';
import styles from '../styles/SectionApplicationTypes';

const useStyles = makeStyles(styles);

const SectionApplicationTypes = ({ sectionTitle, typesApplication, image }) => {
  const classes = useStyles();
  return (
    <Box
      component="section"
      position="relative"
      className={classes.mainSection}
    >
      <CustomContainer>
        <Box className={classes.container}>
          <Box className={classes.detailsContent}>
            <ApplicationType
              sectionTitle={sectionTitle}
              typesApplication={typesApplication}
            />
          </Box>
          <Box className={classes.containerImage}>
            <Box component="figure" className={classes.image}>
              <Image quality={100} priority src={image} layout="fill" />
            </Box>
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

SectionApplicationTypes.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  typesApplication: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  image: PropTypes.string.isRequired,
};

export default SectionApplicationTypes;
