import PropTypes from 'prop-types';
import CardService from '#Components/CardService';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import CustomLink from '#Components/CustomLink';
import styles from '../styles/Services';
import { Box, Typography } from '@mui/material';


const Services = ({ 
  backgroundImage = '',
  heightImage = 0,
  title, 
  services 
}) => {
  return (
    <Box component="section" position="relative">
      <BackgroundImage image={backgroundImage} height={heightImage} />
      <CustomContainer>
        <Box sx={styles.content}>
          <Typography variant="h2" sx={styles.title}>
            {title}
          </Typography>
          <Box sx={styles.services}>
            {services.map((service) => (
              <Box
                component="article"
                sx={styles.itemService}
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
  services: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      path: PropTypes.string,
      service: PropTypes.string,
    })
  ).isRequired,
};

export default Services;
