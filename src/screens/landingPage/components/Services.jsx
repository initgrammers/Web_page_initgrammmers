import { Box, Typography, makeStyles } from '@material-ui/core';
import CardService from '#Components/CardService';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import { services } from '#constants/LandingPage';
import CustomLink from '#Components/CustomLink';
import styles from '../styles/Services';

const useStyles = makeStyles(styles);

const Services = () => {
  const classes = useStyles();
  return (
    <Box component="section" position="relative">
      <BackgroundImage
        image="/assets/images/figures/landingPage/bloque3.png"
        height={665}
      />
      <CustomContainer>
        <Box className={classes.content}>
          <Typography variant="h2" className={classes.title}>
            Integramos diseño y desarrollo para entregar el mejor proyecto
          </Typography>
          <Box className={classes.services}>
            {services.map((service) => (
              <Box
                component="article"
                className={classes.itemService}
                key={service.service}
              >
                <CustomLink href={service.href}>
                  <CardService image={service.path} service={service.service} />
                </CustomLink>
              </Box>
            ))}
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default Services;
