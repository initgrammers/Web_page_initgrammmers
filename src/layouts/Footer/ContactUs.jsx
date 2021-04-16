import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ContactUsButton from '#Components/ContacUsButton';
import LinkContactUs from './components/LinkContactUs';
import styles from './styles';
import { contactsLinks } from '#app/constants/contacts';
import CustomContainer from '#Components/CustomContainer';
import Calculator from '#Components/Calculator';

const useStyles = makeStyles(styles);

const ContactUs = () => {
  const classes = useStyles();

  return (
    <Box component="section" position="relative">
      <CustomContainer>
        <Grid container className={classes.contactUs}>
          <Grid item md={7} sm={12}>
            <Box className={classes.gridContact}>
              <Typography variant="h3" component="h2">
                Sé parte de la revolución digital
              </Typography>
              <Typography
                variant="h6"
                component="p"
                className={classes.descriptionContact}
              >
                Que tu empresa alcance la transformación digital que necesita,
                Contáctanos, estamos para ayudarte
              </Typography>
              <ContactUsButton
                label="Escríbenos"
                href={contactsLinks.writeUs}
              />
              <Typography
                variant="h6"
                component="p"
                className={classes.descriptionContact}
              >
                Puedes cotizar tu sitio web o aplicación móvil con nuestra
                calculadora.
              </Typography>
              <Calculator typeButton="contained" />
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
      </CustomContainer>
    </Box>
  );
};

export default ContactUs;
