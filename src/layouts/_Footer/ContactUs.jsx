import {
  Grid,
  Typography,
  Button,
  Box,
  makeStyles,
  Container,
} from '@material-ui/core';
import LinkContactUs from './components/LinkContactUs';
import styles from './styles';

const useStyles = makeStyles(styles);

const ContactUs = () => {
  const classes = useStyles();

  return (
    <Container fixed>
      <Grid container className={classes.contactUs}>
        <Grid item md={7} sm={12}>
          <Box className={classes.gridContact}>
            <Typography variant="h3">
              Sé parte de la revolución digital
            </Typography>
            <Typography variant="h6" className={classes.descriptionContact}>
              Que tu empresa alcance la transformación digital que necesita,
              Contáctanos, estamos para ayudarte
            </Typography>
            <Button variant="contained" color="primary">
              Escríbenos
            </Button>
          </Box>
        </Grid>
        <Grid item md={5} sm={12}>
          <Box className={classes.borderContactUs}>
            <LinkContactUs
              question="Necesitas ayuda para arrancar un proyecto?"
              callToAction="Agendar una asesoría"
              href="#"
            />
            <div className={classes.contact}>
              <LinkContactUs
                question="Quieres abrir una tienda virtual?"
                callToAction="Contactar con nuestro equipo"
                href="#"
              />
            </div>

            <LinkContactUs
              question="Interesado en contratar bajo partnership?"
              callToAction="Escríbenos"
              href="#"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
