import { Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '../assets/styles/CallToActionType';
import Subtitle from '#Components/Subtitle';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import ContactUsButton from './ContacUsButton';
import { contactsLinks, textContactUsButton } from '#app/constants/contacts';

const CallToActionSection = ({
  titlePart1,
  titlePart2,
  titlePart3,
  description,
  image,
  backgroundImage,
  heightImage,
  imageSizes,
  backgroundColor,
}) => {
  const classes = styles({ ...imageSizes });

  return (
    <Box component="section" position="relative" bgcolor={backgroundColor}>
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
          <ContactUsButton
            label={textContactUsButton.whatsapp}
            href={contactsLinks.general}
          />

          <Box className={classes.imageStyle}>
            <Image
              quality={100}
              src={image}
              layout="fill"
              alt={`${titlePart1} ${titlePart2} ${titlePart3}`}
            />
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
  backgroundColor: PropTypes.string,
};

CallToActionSection.defaultProps = {
  titlePart2: '',
  titlePart3: '',
  backgroundImage: '',
  heightImage: 0,
  backgroundColor: '',
};
export default CallToActionSection;
