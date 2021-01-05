import React from 'react';
import {
  Grid,
  Typography,
  Box,
  makeStyles,
  Container,
} from '@material-ui/core';
// import { LOGO_FOOTER_INITGRAMMERS } from '../../constants/services/imageFooter';
import LinkWithIcon from './components/LinkWithIcon';
import {
  PhoneIcon,
  MailIcon,
  FacebookIcon,
  LinkedInIcon,
  InstagramIcon,
} from '../../assets/icons';
import LinkIcon from './components/LinkIcon';
import CustomLink from '#Components/CustomLink';
import styles from './styles';
import ContactUs from './ContactUs';
import { contactsLinks } from '#app/constants/contacts';
import routes from '#app/routes/';

const useStyles = makeStyles(styles);
const CustomFooter = () => {
  const classes = useStyles();

  const services = [
    {
      label: 'Desarrollo de aplicaciones web',
      href: routes.services.webDevelopment,
    },
    {
      label: 'Desarrollo de aplicaciones móviles',
      href: routes.services.mobileDevelopment,
    },
    {
      label: 'Diseño UI / UX ',
      href: routes.services.uxUiDesign,
    },
    {
      label: 'Comercio Electrónico',
      href: routes.services.shopOnline,
    },
    {
      label: 'Capacitaciones',
      href: routes.services.trainings,
    },
    {
      label: 'Marketing Digital',
      href: routes.services.marketingDigital,
    },
    {
      label: 'SEO',
      href: routes.services.seo,
    },
  ];

  const portfolio = [
    { label: 'Portafolio', href: routes.portfolio },
    // { label: '¿Quiénes somos?', href: routes.aboutUs },
    // { label: 'Blog', href: routes.blog },
    // { label: 'Contacto', href: routes.contact },
  ];

  return (
    <>
      <ContactUs />
      <footer className={classes.root}>
        <Container fixed>
          <Box className={classes.image}>
            <figure>
              <img src="/assets/svg/initgrammers.svg" alt="logo initgrammers" />
            </figure>
          </Box>
          <Grid container spacing={3} className={classes.gridContainer}>
            <Grid item md={6} sm={12}>
              <Typography className={classes.description}>
                InitGrammers es una empresa dedicada a crear soluciones y
                capacitaciones tecnológicas en software, marketing y diseño
                digital
              </Typography>
              <Box my={4}>
                <LinkWithIcon
                  href={contactsLinks.callUs}
                  icon={<PhoneIcon />}
                  label="(+593) 963277297"
                />
                <LinkWithIcon
                  href={contactsLinks.writeUs}
                  icon={<MailIcon />}
                  label="info@initgrammers.com"
                />
              </Box>
              <Box display="flex" mt={2}>
                <LinkIcon
                  icon={<FacebookIcon className={classes.icon} />}
                  href="https://www.facebook.com/InitGrammers/"
                />
                <LinkIcon
                  icon={<LinkedInIcon className={classes.icon} />}
                  href="https://www.linkedin.com/company/initgrammersec"
                />
                <LinkIcon
                  icon={<InstagramIcon className={classes.icon} />}
                  href="https://www.instagram.com/initgrammers/"
                />
              </Box>
            </Grid>
            <Grid item md={3} sm={12}>
              <Typography className={classes.section}>Servicios</Typography>
              {services.map((item, key) => (
                <CustomLink key={key} href={item.href}>
                  <Typography className={classes.text}>{item.label}</Typography>
                </CustomLink>
              ))}
            </Grid>
            <Grid item md={3} sm={12}>
              {portfolio.map((item, key) => (
                <CustomLink key={key} href={item.href}>
                  <Typography className={classes.section}>
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
