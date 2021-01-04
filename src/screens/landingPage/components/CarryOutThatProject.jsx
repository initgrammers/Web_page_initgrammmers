import { makeStyles, Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '../styles/CarryOutThatProject';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import Subtitle from '#Components/Subtitle';
import ContactUsButton from '#Components/ContacUsButton';
import { contactsLinks, textContactUsButton } from '#app/constants/contacts';

const useStyles = makeStyles(styles);

const CarryOutThatProject = ({
  titlePart1,
  titlePart2,
  description,
  image,
}) => {
  const classes = useStyles();
  return (
    <Box
      component="section"
      position="relative"
      className={classes.backgroundSection}
    >
      <BackgroundImage />
      <CustomContainer>
        <Box className={classes.content}>
          <Box component="article" className={classes.contentInformation}>
            <Subtitle
              black
              variant="h1"
              component="h2"
              head={titlePart1}
              emphasis={titlePart2}
              mb={0}
              align="center"
            />
            <Typography
              variant="body1"
              component="p"
              className={classes.description}
            >
              {description}
            </Typography>
            <ContactUsButton
              label={textContactUsButton.whatsapp}
              href={contactsLinks.landing}
            />
          </Box>
          <Box className={classes.containerImage}>
            <Box component="figure" className={classes.image}>
              <Image
                quality={100}
                priority
                src={image}
                layout="fill"
                alt={`${titlePart1} ${titlePart2}`}
              />
            </Box>
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

CarryOutThatProject.propTypes = {
  titlePart1: PropTypes.string.isRequired,
  titlePart2: PropTypes.string,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
};

CarryOutThatProject.defaultProps = {
  titlePart2: '',
  image: '',
};

export default CarryOutThatProject;
