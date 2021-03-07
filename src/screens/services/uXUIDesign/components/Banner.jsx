import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '../styles/Banner';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import Subtitle from '#Components/Subtitle';
import ContactUsButton from '#Components/ContacUsButton';
import { contactsLinks, textContactUsButton } from '#app/constants/contacts';

const useStyles = makeStyles(styles);

const Banner = ({
  heightImage,
  backgroundImage,
  title,
  description,
  image,
}) => {
  const classes = useStyles();
  return (
    <Box component="section" position="relative">
      <BackgroundImage height={heightImage} image={backgroundImage} />
      <CustomContainer>
        <Box className={classes.content}>
          <Box component="article" className={classes.contentInformation}>
            <Subtitle
              black
              variant="h1"
              component="h1"
              emphasis={title}
              mb={0}
            />
            <Typography
              variant="h3"
              component="p"
              className={classes.description}
            >
              {description}
            </Typography>
            <ContactUsButton
              label={textContactUsButton.whatsapp}
              href={contactsLinks.uiuxPages}
            />
          </Box>
          <Box className={classes.containerImage}>
            <Box component="figure" className={classes.image}>
              <Image
                quality={100}
                priority
                src={image}
                layout="fill"
                alt={title}
              />
            </Box>
          </Box>
        </Box>
      </CustomContainer>
      <Box className={classes.bottomSection} />
    </Box>
  );
};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
  heightImage: PropTypes.number,
};

Banner.defaultProps = {
  backgroundImage: '',
  heightImage: 0,
};

export default Banner;
