import { Box, Typography, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Image from 'next/image';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import styles from '../styles/Banner';
import ContactUsButton from '#Components/ContacUsButton';
import { contactsLinks, textContactUsButton } from '#app/constants/contacts';

const useStyles = makeStyles(styles);
const Banner = ({
  backgroundImage,
  heightImage,
  title,
  description,
  image,
}) => {
  const classes = useStyles();
  return (
    <Box component="section" position="relative" bgcolor="primary.light">
      <BackgroundImage image={backgroundImage} height={heightImage} />
      <CustomContainer>
        <Box className={classes.container}>
          <Box component="article" className={classes.detailsContent}>
            <Typography variant="h1" className={classes.title}>
              {title}
            </Typography>
            <Typography
              variant="h3"
              component="p"
              className={classes.description}
            >
              {description}
            </Typography>
            <ContactUsButton
              color="secondary"
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
                className={classes.mainImage}
                alt={title}
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
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

Banner.defaultProps = {
  backgroundImage: '',
  heightImage: 0,
  title: '',
  description: '',
  image: '',
};

export default Banner;
