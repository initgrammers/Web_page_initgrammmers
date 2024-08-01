import PropTypes from 'prop-types';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import Subtitle from '#Components/Subtitle';
import CustomContainer from '#Components/CustomContainer';
import ContactUsButton from '#Components/ContacUsButton';
import BackgroundImage from '#Components/BackgroundImage';
import { contactsLinks, textContactUsButton } from '#app/constants/contacts';
import CardPartnership from '#Components/CardPartnership';
import styles from '../styles/Strategies';

const Strategies = ({
  titlePart1,
  description,
  image,
  optionsShoppingOnline,
  backgroundImage = '',
  heightImage = 0,
  titlePart2 = '',
  titlePart3 = '',
}) => (
  <Box component="section" position="relative">
    <BackgroundImage image={backgroundImage} height={heightImage} />
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
        <ContactUsButton
          color="secondary"
          label={textContactUsButton.whatsapp}
          href={contactsLinks.marketingDigitalPage}
        />
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

Strategies.propTypes = {
  backgroundImage: PropTypes.string,
  heightImage: PropTypes.number,
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
