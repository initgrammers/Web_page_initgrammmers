import { Box, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ContactUsButton from '#Components/ContacUsButton';
import LinkContactUs from './components/LinkContactUs';
import { contactsLinks } from '#app/constants/contacts';
import CustomContainer from '#Components/CustomContainer';
import styles from './styles';

const ContactUs = () => {
  const { t } = useTranslation();
  return (
    <Box component="section" position="relative">
      <CustomContainer>
        <Grid container sx={styles.contactUs}>
          <Grid item md={7} sm={12}>
            <Box
              sx={styles.gridContact}
            >
              <Typography variant="h3" component="h2">
                {t('digitalRevolutionTitle')}
              </Typography>
              <Typography
                variant="h6"
                component="p"
                sx={styles.descriptionContact}
              >
                {t('digitalRevolutionDescription')}
              </Typography>
              <ContactUsButton
                label={t('digitalRevolutionButton')}
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
                  question={t('contactUsQuestion1')}
                  callToAction={t('contactUsAction1')}
                  href={contactsLinks.startProject}
                />
              </div>
              <div sx={styles.contact}>
                <LinkContactUs
                  question={t('contactUsQuestion2')}
                  callToAction={t('contactUsAction2')}
                  href={contactsLinks.teamMessage}
                />
              </div>
              <div sx={styles.contact}>
                <LinkContactUs
                  question={t('contactUsQuestion3')}
                  callToAction={t('contactUsAction3')}
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
