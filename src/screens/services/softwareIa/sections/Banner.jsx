'use client';

import Image from 'next/image';
import { Box, Container, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import ContactUsButton from '#Components/ContacUsButton';
import useContacts from '#app/constants/contacts';
import useSoftwareIa from '#constants/services/SoftwareIa';
import styles from '../styles/Banner';

const Banner = () => {
  const { bannerSoftwareIa } = useSoftwareIa();
  const { contactsLinks } = useContacts();
  const t = useTranslations('Index');

  return (
    <Box component="section" sx={styles.mainSection}>
      <Box sx={styles.containerBackgroundImage}>
        <Image
          quality={100}
          src={bannerSoftwareIa.backgroundImage}
          fill
          alt="Software IA"
        />
      </Box>
      <Container fixed sx={styles.container}>
        <Box component="article" sx={styles.detailsContent}>
          <Typography variant="h1" sx={styles.title}>
            {bannerSoftwareIa.title}
          </Typography>
          <Typography variant="h3" component="p" sx={styles.description}>
            {bannerSoftwareIa.description}
          </Typography>
          <ContactUsButton
            color="secondary"
            label={t('homeLearnButton')}
            href={contactsLinks.partnershipModelsPage}
          />
        </Box>
        <Box sx={styles.containerImage}>
          <Box component="figure" sx={styles.image}>
            <Image
              quality={100}
              priority
              src={bannerSoftwareIa.image}
              fill
              alt={bannerSoftwareIa.titlePart1}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
