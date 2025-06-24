'use client';

import Image from 'next/image';
import { Box, Container, Typography } from '@mui/material';
import useSoftwareIa from '#constants/services/SoftwareIa';
import styles from '../styles/SoftwareIaDevelopment';

const SoftwareIaDevelopment = () => {
  const { softwareIaDevelopment } = useSoftwareIa();

  return (
    <Box
      component="section"
      sx={[styles.mainSection, styles.background]}
      position="relative"
    >
      <Box sx={styles.containerBackgroundImage}>
        <Image
          quality={100}
          src={softwareIaDevelopment.backgroundImage}
          fill
          alt="Desarrollo de Software Potenciado con IA"
        />
      </Box>

      <Container fixed sx={styles.container}>
        <Box component="article" sx={styles.detailsContent}>
          <Typography variant="h2" sx={styles.title}>
            {softwareIaDevelopment.title}
          </Typography>
          <Typography variant="h4" component="p" sx={styles.description}>
            {softwareIaDevelopment.description}
          </Typography>
        </Box>

        <Box sx={styles.containerImage}>
          <Box component="figure" sx={styles.image}>
            <Image
              quality={100}
              src={softwareIaDevelopment.image}
              fill
              alt="Resultados Inteligentes"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SoftwareIaDevelopment;
