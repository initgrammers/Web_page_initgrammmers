import PropTypes from 'prop-types';
import Image from 'next/image';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import styles from '../styles/Banner';
import ContactUsButton from '#Components/ContacUsButton';
import { contactsLinks, textContactUsButton } from '#app/constants/contacts';
import { Box, Typography } from '@mui/material';
import { primary } from '#app/shared/config/theme/colors';

const Banner = ({
  backgroundImage,
  heightImage,
  title,
  description,
  image,
}) => {
  return (
    <Box component="section" position="relative" sx={{background: primary.light}}>
      <BackgroundImage image={backgroundImage} height={heightImage} />
      <CustomContainer>
        <Box >
          <Box component="artie" sx={styles.detailsContent}>
            <Typography variant="h1" sx={styles.title}>
              {title}
            </Typography>
            <Typography
              variant="h3"
              component="p"
              sx={styles.description}
            >
              {description}
            </Typography>
            <ContactUsButton
              color="secondary"
              label={textContactUsButton.whatsapp}
              href={contactsLinks.landing}
            />
          </Box>
          <Box sx={styles.containerImage}>
            <Box component="figure" sx={styles.image}>
              <Image
                quality={100}
                priority
                src={image}
                layout="fill"
                sx={styles.mainImage}
                alt={title}
              />
            </Box>
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

Banner.propTypes = {
  backgroundImage: PropTypes.string,
  heightImage: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

Banner.defaultProps = {
  backgroundImage: '',
  heightImage: 0,
  title: '',
  description: '',
  image: '',
};

export default Banner;
