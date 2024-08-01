import PropTypes from 'prop-types';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import ContactUsButton from '#Components/ContacUsButton';
import { contactsLinks } from '#app/constants/contacts';
import styles from '../styles/Banner';

const Banner = ({
  backgroundImage = '',
  heightImage = 0,
  title = '',
  description = '',
  image = '',
}) => {
  const { t } = useTranslation();
  return (
    <Box component="section" position="relative" bgcolor="primary.light">
      <BackgroundImage image={backgroundImage} height={heightImage} />
      <CustomContainer>
        <Box sx={styles.container}>
          <Box component="article" sx={styles.detailsContent}>
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
              label={t('homeLearnButton')}
              href={contactsLinks.landing}
            />
          </Box>
          <Box sx={styles.containerImage}>
            <Box component="figure" sx={styles.image}>
              <Image
                quality={100}
                priority
                src={image}
                fill
                style={styles.mainImage}
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

export default Banner;
