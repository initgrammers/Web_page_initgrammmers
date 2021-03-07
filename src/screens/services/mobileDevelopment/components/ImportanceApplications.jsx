import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Image from 'next/image';
import styles from '../styles/ImportanceApplications';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import { importanceApplications } from '#constants/services/MobileDevelopment';

const useStyles = makeStyles(styles);

const ImportanceAplications = () => {
  const classes = useStyles();
  return (
    <Box component="section" position="relative" className={classes.background}>
      <BackgroundImage
        image={importanceApplications.backgroundImage}
        height={importanceApplications.heightImage}
      />
      <CustomContainer>
        <Grid container className={classes.root}>
          <Grid item xs={12} lg={6} className={classes.gridImage}>
            <Box component="figure" className={classes.image}>
              <Image
                quality={100}
                src={importanceApplications.mainImage}
                layout="fill"
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6} className={classes.gridContent}>
            <Box component="article">
              <Typography variant="h2" className={classes.title}>
                {importanceApplications.title}
              </Typography>
              <Typography variant="body1">
                {importanceApplications.description1}
              </Typography>
              <Box className={classes.images}>
                <Box component="figure" className={classes.figureLeft}>
                  <Image
                    quality={100}
                    src={importanceApplications.logo1}
                    width={88}
                    height={88}
                  />
                </Box>
                <Box component="figure" className={classes.figureLeft}>
                  <Image
                    quality={100}
                    src={importanceApplications.logo2}
                    width={88}
                    height={88}
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
