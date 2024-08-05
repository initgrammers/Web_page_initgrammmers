import { Box, Container, Grid, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import {
  PhoneIcon,
  MailIcon,
} from '../../assets/icons';
import LinkWithIcon from './components/LinkWithIcon';
import LinkIcon from './components/LinkIcon';
import CustomLink from '#Components/CustomLink';
import ContactUs from './ContactUs';
import useContacts from '#app/constants/contacts';
import routes from '#app/routes/';
import styles from './styles';

const CustomFooter = () => {

  const { contactsLinks } = useContacts();
  const t = useTranslations('Index');

  const services = [
    {
      label: t('webDevelopment'),
      href: routes.services.webDevelopment,
    },
    {
      label: t('mobileDevelopment'),
      href: routes.services.mobileDevelopment,
    },
    {
      label: t('ux/uiDesign'),
      href: routes.services.uxUiDesign,
    },
    // {
    //   label: 'Comercio Electrónico',
    //   href: routes.services.shopOnline,
    // },
    {
      label: t('training'),
      href: routes.services.trainings,
    },
    // {
    //   label: 'Marketing Digital',
    //   href: routes.services.marketingDigital,
    // },
    {
      label: 'Modelos de Partnership',
      href: routes.services.partnershipModels,
    },
  ];

  const portfolio = [
    { label: t('portfolio'), href: routes.portfolio },
    // { label: '¿Quiénes somos?', href: routes.aboutUs },
    // { label: 'Blog', href: routes.blog },
    // { label: 'Contacto', href: routes.contact },
  ];

  return (
    <>
      <ContactUs />
      <footer style={styles.root}>
        <Container fixed>
          <Box sx={styles.image}>
            <figure>
              <img src="/assets/svg/initgrammers.svg" alt="logo initgrammers" />
            </figure>
          </Box>
          <Grid container spacing={3} sx={styles.gridContainer}>
            <Grid item md={6} sm={12}>
              <Typography sx={styles.description}>
                {t('footerDetails')}
              </Typography>
              <Box my={4}>
                <LinkWithIcon
                  href={contactsLinks.callUs}
                  icon={<PhoneIcon />}
                  label="(+593) 978847449"
                />
                <LinkWithIcon
                  href={contactsLinks.writeUs}
                  icon={<MailIcon />}
                  label="info@initgrammers.com"
                />
              </Box>
              <Box display="flex" mt={2}>
                <LinkIcon
                  icon={<FacebookIcon color="primary" fontSize="small" />}
                  href="https://www.facebook.com/InitGrammers/"
                />
                <LinkIcon
                  icon={<LinkedInIcon color="primary" fontSize="small" />}
                  href="https://www.linkedin.com/company/initgrammersec"
                />
                <LinkIcon
                  icon={<InstagramIcon color="primary" fontSize="small" />}
                  href="https://www.instagram.com/initgrammers/"
                />
              </Box>
            </Grid>
            <Grid item md={3} sm={12} display="flex" flexDirection="column" gap={2}>
              <Typography variant="inherit" sx={styles.section}>{t('services')}</Typography>
              {services.map((item, key) => (
                <CustomLink key={key} href={item.href}>
                  <Typography sx={styles.text}>{item.label}</Typography>
                </CustomLink>
              ))}
            </Grid>
            <Grid item md={3} sm={12}>
              {portfolio.map((item, key) => (
                <CustomLink key={key} href={item.href}>
                  <Typography variant="inherit" sx={styles.section}>
                    {item.label}
                  </Typography>
                </CustomLink>
              ))}
            </Grid>
          </Grid>
        </Container>
      </footer>
    </>
  );
};
export default CustomFooter;
