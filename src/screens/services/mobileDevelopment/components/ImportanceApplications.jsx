import {
  makeStyles,
  Box,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    alignItems: 'center',
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
    <Box component="section" py={8}>
      <Container fixed>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Box component="figure">
              <Image
                src="/assets/images/importancia-aplicaciones-moviles.png"
                width={504}
                height={694}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.content}>
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
        </Grid>
      </Container>
    </Box>
  );
};

export default ImportanceAplications;
