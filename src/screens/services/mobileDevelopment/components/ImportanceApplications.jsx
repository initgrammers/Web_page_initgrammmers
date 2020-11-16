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
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
  },
  gridContent: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      order: '-1',
    },
  },
  gridImage: {
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(6),
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(4),
    },
  },
  title: {
    paddingBottom: theme.spacing(4),
    color: theme.palette.primary.light,
  },
  images: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
  },
  figureLeft: {
    margin: 0,
  },
  figureRight: {
    margin: '0 0 0 15px',
  },
}));

const ImportanceAplications = () => {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.root}>
      <Container fixed>
        <Grid container>
          <Grid item xs={false} md={1} />
          <Grid item xs={12} md={5} className={classes.gridImage}>
            <Box component="figure">
              <Image
                src="/assets/images/importancia-aplicaciones-moviles.png"
                width={504}
                height={694}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={5} className={classes.gridContent}>
            <Box component="article">
              <Typography variant="h2" className={classes.title}>
                Importancia de las aplicaciones móviles
              </Typography>
              <Typography variant="body1">
                Crear una aplicación móvil para tu empresa te conecta con tus
                clientes y mejora la experiencia en la compra de productos y
                servicios.
              </Typography>
              <Box className={classes.images}>
                <Box component="figure" className={classes.figureLeft}>
                  <Image
                    src="/assets/images/google-play.png"
                    width={88}
                    height={88}
                  />
                </Box>
                <Box component="figure" className={classes.figureLeft}>
                  <Image
                    src="/assets/images/apple-store.png"
                    width={88}
                    height={88}
                  />
                </Box>
              </Box>
              <Typography variant="body1">
                Tus productos en las tiendas de aplicaciones móviles a nivel
                mundial
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={false} md={1} />
        </Grid>
      </Container>
    </Box>
  );
};

export default ImportanceAplications;
