import { makeStyles, Box, Grid, Typography } from '@material-ui/core';
import Image from 'next/image';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';

// TODO remove styles & dependencies
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  [theme.breakpoints.up('lg')]: {
    container: {
      paddingTop: theme.spacing(26),
      paddingBottom: theme.spacing(50),
    },
    title: {
      color: theme.palette.primary.main,
    },
    description: {
      width: 400,
      paddingTop: theme.spacing(4),
      textAlign: 'center',
    },
  },
}));

const NeedAnUpdate = () => {
  const classes = useStyles();

  return (
    <Box component="section" position="relative">
      <BackgroundImage
        image="/assets/images/necesitas-una-actualizacion.png"
        height={672}
      />
      <CustomContainer>
        <Box className={classes.container} pt={26} pb={50}>
          <Typography variant="h2" className={classes.title}>
            ¿Necesitas una actualización?
          </Typography>
          <Typography variant="body1" className={classes.description}>
            Un sitio web desactualizado tarda más en cargarse y no funciona
            correctamente. Te asesoramos en mejorar la imagen y rendimiento de
            tu web.
          </Typography>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default NeedAnUpdate;
