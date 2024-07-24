import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '../styles/Strategies';
import Subtitle from '#Components/Subtitle';
import CustomContainer from '#Components/CustomContainer';
import ContactUsButton from '#Components/ContacUsButton';
import { contactsLinks } from '#app/constants/contacts';
import CardPartnership from '#Components/CardPartnership';
import { Box, Typography } from '@mui/material';

const Strategies = ({
  titlePart1,
  titlePart2 = '',
  titlePart3 = '',
  description,
  image,
  imageSizes,
  optionsShoppingOnline,
}) => {
  return (
    <Box component="section" position="relative">
      <CustomContainer>
        <Box component="article" sx={styles.content}>
          <Subtitle
            head={titlePart1}
            emphasis={titlePart2}
            tail={titlePart3}
            align="center"
            mb={4}
            component="h2"
            variant="h2"
          />
          <Box sx={styles.imageStyle}>
            <Image
              quality={100}
              src={image}
              fill
              alt={`${titlePart1} ${titlePart2} ${titlePart3}`}
            />
          </Box>
          <Typography variant="body1" sx={styles.description}>
            {description}
          </Typography>
          <ContactUsButton color="secondary" href={contactsLinks.general} />
          <Box sx={styles.shop}>
            {optionsShoppingOnline.map((service) => (
              <Box key={service.title} sx={styles.optionsShop}>
                <CardPartnership
                  image={service.path}
                  title={service.title}
                  description={service.description}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

Strategies.propTypes = {
  titlePart1: PropTypes.string.isRequired,
  titlePart2: PropTypes.string,
  titlePart3: PropTypes.string,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageSizes: PropTypes.shape({
    xs: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    }),
    sm: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    }),
    md: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    }),
    lg: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    }),
  }).isRequired,
  optionsShoppingOnline: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default Strategies;
