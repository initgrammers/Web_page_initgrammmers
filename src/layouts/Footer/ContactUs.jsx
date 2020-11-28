import {
  Grid,
  Typography,
  Box,
  makeStyles,
  Container,
} from '@material-ui/core';
import ContactUsButton from '#Components/ContacUsButton';
import LinkContactUs from './components/LinkContactUs';
import styles from './styles';
import { contactsLinks } from '#app/constants/contacts';

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
            <ContactUsButton label="Escríbenos" href={contactsLinks.writeUs} />
          </Box>
        </Grid>
        <Grid item md={5} sm={12}>
          <Box className={classes.borderContactUs}>
            <LinkContactUs
              question="¿Necesitas ayuda para arrancar un proyecto?"
              callToAction="Agendar una asesoría"
              href={contactsLinks.startProject}
            />
            <div className={classes.contact}>
              <LinkContactUs
                question="¿Quieres abrir una tienda virtual?"
                callToAction="Contactar con nuestro equipo"
                href={contactsLinks.teamMessage}
              />
            </div>

            <LinkContactUs
              question="Interesado en contratar bajo partnership?"
              callToAction="Escríbenos"
              href={contactsLinks.writeUs}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
