import {
  makeStyles,
  Box,
  Container,
  Typography,
  Button,
} from '@material-ui/core';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  mainSection: {
    background: theme.palette.primary.light,
    marginBottom: theme.spacing(8),
  },
  detailsContent: {
    paddingTop: theme.spacing(8),
  },
  title: {
    color: theme.palette.primary.contrastText,
    '& span': {
      color: theme.palette.secondary.light,
    },
  },
  description: {
    padding: `${theme.spacing(4)}px 0`,
    color: theme.palette.primary.contrastText,
  },
  actionButton: {
    color: theme.palette.primary.contrastText,
    background: theme.palette.secondary.main,
  },
  containerImage: {
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: 288,
    height: 381,
    position: 'relative',
    bottom: `-${theme.spacing(8)}px`,
  },

  [theme.breakpoints.up('sm')]: {
    detailsContent: {
      paddingTop: theme.spacing(12),
    },
    image: {
      width: 414,
      height: 557,
    },
  },
  [theme.breakpoints.up('md')]: {
    container: {
      padding: `0 ${theme.spacing(23)}px`,
    },
  },
  [theme.breakpoints.up('lg')]: {
    container: {
      display: 'flex',
      padding: `0 ${theme.spacing(13)}px`,
    },
    detailsContent: {
      flex: 5,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingTop: 0,
    },
    containerImage: {
      flex: 5,
    },
    image: {
      width: 504,
      height: 679,
    },
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.mainSection}>
      <Container fixed className={classes.container}>
        <Box component="article" className={classes.detailsContent}>
          <Typography variant="h1" className={classes.title}>
            Desarrollo y diseño de aplicaciones
            <span> móviles </span>
            iOS y Android
          </Typography>
          <Typography
            variant="h2"
            component="p"
            className={classes.description}
          >
            Tus productos en el bolsillo de tus clientes
          </Typography>
          <Box>
            <Button variant="contained" className={classes.actionButton}>
              Contáctanos
            </Button>
          </Box>
        </Box>
        <Box className={classes.containerImage}>
          <Box component="figure" className={classes.image}>
            <Image
              quality={100}
              priority
              src="/assets/images/diseno-desarrollo-aplicaciones-moviles-ios-android-ecuador.png"
              layout="fill"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
