import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Box, Typography } from '@mui/material';
import styles from '../styles/Banner';
import ContactUsButton from '#Components/ContacUsButton';
import CustomContainer from '#Components/CustomContainer';
import BackgroundImage from '#Components/BackgroundImage';

const Banner = ({
  backgroundImage = '',
  heightImage = 0,
  backgroundPrimaryLight = false,
  backgroundPrimaryFade = false,
  backgroundSecondary = false,
  backgroundSecondaryFade = false,
  titlePart1 = '',
  titlePart2 = '',
  description = '',
  image = '',
}) => {
  const t = useTranslations('Index');

  return (
    <Box
      component="section"
      position="relative"
      sx={{
        ...(backgroundPrimaryLight && styles.backgroundPrimaryLight),
        ...(backgroundPrimaryFade && styles.backgroundPrimaryFade),
        ...(backgroundSecondary && styles.backgroundSecondaryMain),
        ...(backgroundSecondaryFade && styles.backgroundSecondaryFade),
      }}
    >
      <BackgroundImage height={heightImage} image={backgroundImage} />
      <CustomContainer>
        <Box sx={styles.container}>
          <Box component="article" sx={styles.detailsContent}>
            <Typography variant="h1" sx={styles.title1}>
              {titlePart1}
            </Typography>
            <Typography variant="h1" sx={styles.title2}>
              {titlePart2}
            </Typography>
            <Typography
              variant="h3"
              component="p"
              sx={styles.description}
            >
              {description}
            </Typography>
            <Box sx={styles.buttons}>
              <ContactUsButton
                color="secondary"
                label={t('bannerProjectsButton1')}
                href="/"
                variant="outlined"
              />
              <ContactUsButton
                color="primary"
                label={t('bannerProjectsButton2')}
                href="/"
              />
              <ContactUsButton
                color="secondary"
                label={t('bannerProjectsButton3')}
                href="/"
                variant="outlined"
              />
            </Box>
          </Box>
          <Box sx={styles.containerImage}>
            <Box component="figure" sx={styles.image}>
              <Image
                quality={100}
                priority
                src={image}
                fill
                style={styles.mainImage}
                alt={`${titlePart1}${titlePart2}`}
              />
            </Box>
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default Banner;
