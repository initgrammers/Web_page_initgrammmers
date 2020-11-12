import {
  makeStyles,
  Box,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 644,
    [theme.breakpoints.down('xs')]: {
      height: 973,
    },
  },
  contentGrid: {
    height: 580,
    background: theme.palette.secondary.main,
    [theme.breakpoints.down('xs')]: {
      height: 909,
    },
  },
  content: {
    display: 'flex',
    alignItems: 'center',
  },

  aplicationType: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(2),
  },
  grid: {
    height: '100%',
  },
  gridImage: {
    position: 'relative',
    paddingTop: theme.spacing(4),
  },
  image: {
    position: 'absolute',
  },
}));

const MobileAplicationTypes = () => {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.root}>
      <Box className={classes.contentGrid}>
        <Container className={classes.contentGrid}>
          <Grid container className={classes.contentGrid}>
            <Grid item xs={12} md={6} className={classes.content}>
              <Box component="article">
                <Typography variant="h2">
                  Tipos de aplicaciones móviles
                </Typography>
                <Typography variant="h3" className={classes.aplicationType}>
                  App Nativas
                </Typography>

                <Typography variant="body1">
                  Dirigido específicamente para un sistema operativo (iOS,
                  Android), programada bajo un lenguage específico,aprovechan
                  todas las funcionalidades del dispositivo.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} className={classes.gridImage}>
              <Box component="figure" className={classes.image}>
                <Image
                  src="/assets/images/tipos-aplicaciones-moviles.png"
                  width={504}
                  height={607}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default MobileAplicationTypes;
