import {
  makeStyles,
  Box,
  Container,
  Typography,
  Hidden,
} from '@material-ui/core';
import Image from 'next/image';
import ContactUsButton from '#Components/ContacUsButton';
import styles from '../styles/Banner';
import { contactsLinks, textContactUsButton } from '#app/constants/contacts';
import { bannerMobileDevelopment } from '#constants/services/MobileDevelopment';

const useStyles = makeStyles(styles);

const Banner = () => {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.mainSection}>
      <Hidden mdDown>
        <Box className={classes.containerBackgroundImage}>
          <Image
            quality={100}
            src={bannerMobileDevelopment.backgroundImage}
            layout="fill"
            alt="Initgrammer"
          />
        </Box>
      </Hidden>
      <Container fixed className={classes.container}>
        <Box component="article" className={classes.detailsContent}>
          <Typography variant="h1" className={classes.title}>
            {bannerMobileDevelopment.titlePar1}
            {bannerMobileDevelopment.titlePart2}
            {bannerMobileDevelopment.titlePart3}
          </Typography>
          <Typography
            variant="h2"
            component="p"
            className={classes.description}
          >
            {bannerMobileDevelopment.description}
          </Typography>
          <ContactUsButton
            color="secondary"
            label={textContactUsButton.whatsapp}
            href={contactsLinks.mobileApps}
          />
        </Box>
        <Box className={classes.containerImage}>
          <Box component="figure" className={classes.image}>
            <Image
              quality={100}
              priority
              src={bannerMobileDevelopment.image}
              layout="fill"
              alt={`${bannerMobileDevelopment.titlePar1} ${bannerMobileDevelopment.titlePart2}${bannerMobileDevelopment.titlePart3}`}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
