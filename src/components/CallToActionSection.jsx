import { makeStyles, Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '../assets/styles/CallToActionType';
import Subtitle from '#Components/Subtitle';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import ContactUsButton from './ContacUsButton';

const CallToActionSection = ({
  titlePart1,
  titlePart2,
  titlePart3,
  description,
  image,
  backgroundImage,
  heightImage,
  imageSizes,
}) => {
  // const { xs, sm, md, lg } = imageSizes;

  const classes = styles({ ...imageSizes });

  return (
    <Box component="section" position="relative">
      <BackgroundImage image={backgroundImage} height={heightImage} />
      <CustomContainer>
        <Box component="article" className={classes.content}>
          <Subtitle
            black
            head={titlePart1}
            emphasis={titlePart2}
            tail={titlePart3}
            align="center"
            mb={0}
          />
          <Typography variant="body1" className={classes.description}>
            {description}
          </Typography>
          <ContactUsButton />

          <Box className={classes.imageStyle}>
            <Image src={image} layout="fill" />
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

CallToActionSection.propTypes = {
  titlePart1: PropTypes.string.isRequired,
  titlePart2: PropTypes.string,
  titlePart3: PropTypes.string,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
  heightImage: PropTypes.number,
  imageSizes: PropTypes.objectOf,
};

CallToActionSection.defaultProps = {
  titlePart2: '',
  titlePart3: '',
  backgroundImage: '',
  heightImage: 0,
  imageSizes: {},
};
export default CallToActionSection;
