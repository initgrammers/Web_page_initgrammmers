import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PropTypes from 'prop-types';
import Image from 'next/image';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import styles from './styles';
import ContactUsButton from '#Components/ContacUsButton';
import { contactsLinks, textContactUsButton } from '#app/constants/contacts';

const useStyles = makeStyles(styles);
const Banner = ({
  backgroundImage,
  heightImage,
  titlePart1,
  titlePart2,
  titlePart3,
  description,
  image,
  backgroundColor,
  buttonColor,
  hrefContactUs,
}) => {
  const classes = useStyles();
  return (
    <Box component="section" position="relative" bgcolor={backgroundColor}>
      <BackgroundImage image={backgroundImage} height={heightImage} />
      <CustomContainer>
        <Box className={classes.container}>
          <Box component="article" className={classes.detailsContent}>
            <Typography variant="h1" className={classes.title}>
              {titlePart1}
              <span>{titlePart2}</span>
              {titlePart3}
            </Typography>
            <Typography
              variant="h3"
              component="p"
              className={classes.description}
            >
              {description}
            </Typography>
            <ContactUsButton
              color={buttonColor}
              label={textContactUsButton.whatsapp}
              href={hrefContactUs}
            />
          </Box>
          <Box className={classes.containerImage}>
            <Box component="figure" className={classes.image}>
              <Image
                quality={100}
                priority
                src={image}
                layout="fill"
                className={classes.mainImage}
                alt={`${titlePart1}${titlePart2}${titlePart3}`}
              />
            </Box>
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

Banner.propTypes = {
  backgroundImage: PropTypes.string,
  heightImage: PropTypes.number,
  titlePart1: PropTypes.string,
  titlePart2: PropTypes.string,
  titlePart3: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  backgroundColor: PropTypes.string,
  buttonColor: PropTypes.string,
  hrefContactUs: PropTypes.string,
};

Banner.defaultProps = {
  backgroundImage: '',
  heightImage: 0,
  titlePart1: '',
  titlePart2: '',
  titlePart3: '',
  description: '',
  image: '',
  backgroundColor: '',
  buttonColor: 'secondary',
  hrefContactUs: `${contactsLinks.general}`,
};

export default Banner;
