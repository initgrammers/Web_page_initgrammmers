import { makeStyles, Box, Typography } from '@material-ui/core';
import CustomContainer from '#Components/CustomContainer';
import styles from '../styles/NeedAnUpdate';

const useStyles = makeStyles(styles);

const NeedAnUpdate = () => {
  const classes = useStyles();

  return (
    <Box component="section" position="relative">
      <img
        loading="lazy"
        className={classes.background}
        src="/assets/images/figures/webDevelopment/bloque3.png"
        alt="background-dino"
      />
      <img
        loading="lazy"
        className={classes.computer}
        src="/assets/images/necesitas-una-actualizacion.png"
        alt="background-computer"
      />
      <CustomContainer>
        <Box className={classes.container}>
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
