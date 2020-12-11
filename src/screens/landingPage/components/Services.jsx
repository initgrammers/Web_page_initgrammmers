import { Box, Typography, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import CardService from '#Components/CardService';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import CustomLink from '#Components/CustomLink';
import styles from '../styles/Services';

const useStyles = makeStyles(styles);

const Services = ({ backgroundImage, heightImage, title, services }) => {
  const classes = useStyles();
  return (
    <Box component="section" position="relative">
      <BackgroundImage image={backgroundImage} height={heightImage} />
      <CustomContainer>
        <Box className={classes.content}>
          <Typography variant="h2" className={classes.title}>
            {title}
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

Services.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
  heightImage: PropTypes.number,
  services: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string,
    path: PropTypes.string,
    service: PropTypes.string,
  })).isRequired,
};

Services.defaultProps = {
  backgroundImage: '',
  heightImage: 0,
};

export default Services;
