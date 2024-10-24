import Image from 'next/image';
import { Box, Container, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import ContactUsButton from '#Components/ContacUsButton';
import useContacts from '#app/constants/contacts';
import useMobileDevelopment from '#constants/services/MobileDevelopment';
import styles from '../styles/Banner';

const Banner = () => {
  const { bannerMobileDevelopment } = useMobileDevelopment();
  const { contactsLinks } = useContacts();
  const t = useTranslations('Index');
  return (
    <Box component="section" sx={styles.mainSection}>
      <Box sx={styles.containerBackgroundImage}>
        <Image
          quality={100}
          src={bannerMobileDevelopment.backgroundImage}
          fill
          alt="Initgrammer"
        />
      </Box>
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
            label={t('homeLearnButton')}
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
