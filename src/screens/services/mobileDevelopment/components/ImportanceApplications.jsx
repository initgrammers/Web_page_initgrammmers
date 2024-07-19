import Image from 'next/image';
import styles from '../styles/ImportanceApplications';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import { importanceApplications } from '#constants/services/MobileDevelopment';
import { Box, Grid, Typography } from '@mui/material';

const ImportanceAplications = () => {
  return (
    <Box component="section" position="relative" sx={styles.background}>
      <BackgroundImage
        image={importanceApplications.backgroundImage}
        height={importanceApplications.heightImage}
      />
      <CustomContainer>
        <Grid container sx={styles.root}>
          <Grid item xs={12} lg={6} sx={styles.gridImage}>
            <Box component="figure" sx={styles.image}>
              <Image
                quality={100}
                src={importanceApplications.mainImage}
                fill
                alt={importanceApplications.title}
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6} sx={styles.gridContent}>
            <Box component="article">
              <Typography variant="h2" sx={styles.title}>
                {importanceApplications.title}
              </Typography>
              <Typography variant="body1">
                {importanceApplications.description1}
              </Typography>
              <Box sx={styles.images}>
                <Box component="figure" sx={styles.figureLeft}>
                  <Image
                    quality={100}
                    src={importanceApplications.logo1}
                    width={88}
                    height={88}
                    layout="fixed"
                    alt="Google Play"
                  />
                </Box>
                <Box component="figure" sx={styles.figureLeft}>
                  <Image
                    quality={100}
                    src={importanceApplications.logo2}
                    width={88}
                    height={88}
                    layout="fixed"
                    alt="Apple Store"
                  />
                </Box>
              </Box>
              <Typography variant="body1">
                {importanceApplications.description2}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CustomContainer>
    </Box>
  );
};

export default ImportanceAplications;
