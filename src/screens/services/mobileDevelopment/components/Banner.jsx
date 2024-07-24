import Image from 'next/image';
import ContactUsButton from '#Components/ContacUsButton';
import styles from '../styles/Banner';
import { contactsLinks, textContactUsButton } from '#app/constants/contacts';
import { bannerMobileDevelopment } from '#constants/services/MobileDevelopment';
import { Box, Container, Hidden, Typography } from '@mui/material';

const Banner = () => {
  return (
    <Box component="section" sx={styles.mainSection}>
      <Hidden mdDown>
        <Box sx={styles.containerBackgroundImage}>
          <Image
            quality={100}
            src={bannerMobileDevelopment.backgroundImage}
            fill
            alt="Initgrammer"
          />
        </Box>
      </Hidden>
      <Container fixed sx={styles.container}>
        <Box component="article" sx={styles.detailsContent}>
          <Typography variant="h1" sx={styles.title}>
            {bannerMobileDevelopment.titlePar1}
            {bannerMobileDevelopment.titlePart2}
            {bannerMobileDevelopment.titlePart3}
          </Typography>
          <Typography
            variant="h3"
            component="p"
            sx={styles.description}
          >
            {bannerMobileDevelopment.description}
          </Typography>
          <ContactUsButton
            color="secondary"
            label={textContactUsButton.whatsapp}
            href={contactsLinks.mobileApps}
          />
        </Box>
        <Box sx={styles.containerImage}>
          <Box component="figure" sx={styles.image}>
            <Image
              quality={100}
              priority
              src={bannerMobileDevelopment.image}
              fill
              alt={`${bannerMobileDevelopment.titlePar1} ${bannerMobileDevelopment.titlePart2}${bannerMobileDevelopment.titlePart3}`}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
