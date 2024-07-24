import ContactUsButton from '#Components/ContacUsButton';
import LinkContactUs from './components/LinkContactUs';
import styles from './styles';
import { contactsLinks } from '#app/constants/contacts';
import CustomContainer from '#Components/CustomContainer';
import Calculator from '#Components/Calculator';
import { Box, Grid, Typography } from '@mui/material';

const ContactUs = () => {
  return (
    <Box component="section" position="relative">
      <CustomContainer>
        <Grid container sx={styles.contactUs}>
          <Grid item md={7} sm={12}>
            <Box
              sx={styles.gridContact}
            >
              <Typography variant="h3" component="h2">
                Sé parte de la revolución digital
              </Typography>
              <Typography
                variant="h6"
                component="p"
                sx={styles.descriptionContact}
              >
                Que tu empresa alcance la transformación digital que necesita,
                Contáctanos, estamos para ayudarte
              </Typography>
              <ContactUsButton
                label="Escríbenos"
                href={contactsLinks.writeUs}
              />
              {/* <Typography
                variant="h6"
                component="p"
                sx={styles.descriptionContact}
              >
                Puedes cotizar tu sitio web o aplicación móvil con nuestra
                calculadora.
              </Typography>
              <Calculator typeButton="contained" /> */}
            </Box>
          </Grid>
          <Grid item md={5} sm={12}>
            <Box sx={styles.borderContactUs}>
              <div sx={styles.contact}>
                <LinkContactUs
                  question="¿Necesitas ayuda para arrancar un proyecto?"
                  callToAction="Agendar una asesoría"
                  href={contactsLinks.startProject}
                />
              </div>
              <div sx={styles.contact}>
                <LinkContactUs
                  question="¿Quieres abrir una tienda virtual?"
                  callToAction="Contactar con nuestro equipo"
                  href={contactsLinks.teamMessage}
                />
              </div>
              <div sx={styles.contact}>
                <LinkContactUs
                  question="Interesado en contratar bajo partnership?"
                  callToAction="Escríbenos"
                  href={contactsLinks.writeUs}
                />
              </div>
            </Box>
          </Grid>
        </Grid>
      </CustomContainer>
    </Box>
  );
};

export default ContactUs;
